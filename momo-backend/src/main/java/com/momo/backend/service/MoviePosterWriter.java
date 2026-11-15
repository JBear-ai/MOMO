package com.momo.backend.service;

import com.momo.backend.entity.Movie;
import com.momo.backend.entity.PosterStatus;
import com.momo.backend.repository.MovieRepository;
import com.momo.backend.repository.MoviePosterCacheRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;
import java.time.LocalDateTime;
import java.util.Objects;

/** Short DB-only boundary. All poster transactions lock Movie before the cache row. */
@Service
@RequiredArgsConstructor
public class MoviePosterWriter {
    private final MovieRepository movies;
    private final MoviePosterCacheRepository caches;

    public static class Rejected extends RuntimeException {}

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void complete(String code, String claim, String path) {
        Movie movie = movies.findForPosterWrite(code).orElseThrow(Rejected::new);
        movie.updatePosterUrl(path);
        movies.flush();
        if (caches.completeClaim(code, claim, path, LocalDateTime.now()) != 1) throw new Rejected();
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void restore(String code, String expectedMoviePath, String cachePath) {
        Movie movie = movies.findForPosterWrite(code).orElseThrow(Rejected::new);
        if (!Objects.equals(movie.getPosterUrl(), expectedMoviePath)) throw new Rejected();
        var cache = caches.findForPosterWrite(code).orElseThrow(Rejected::new);
        if (cache.getStatus() != PosterStatus.SUCCESS || !Objects.equals(cache.getPosterUrl(), cachePath))
            throw new Rejected();
        movie.updatePosterUrl(cachePath);
        movies.flush();
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void markMigration(String code, String expected, LocalDateTime now) {
        Movie movie = movies.findForPosterWrite(code).orElseThrow(Rejected::new);
        if (!Objects.equals(expected, movie.getPosterUrl())) throw new Rejected();
        movie.markPosterMigrationAttempted(now);
        movies.flush();
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void migrate(String code, String expected, String localPath) {
        Movie movie = movies.findForPosterWrite(code).orElseThrow(Rejected::new);
        if (!Objects.equals(expected, movie.getPosterUrl())) throw new Rejected();
        movie.updatePosterUrl(localPath);
        movies.flush();
        caches.findForPosterWrite(code).ifPresent(cache -> {
            // A current claim belongs to another worker; do not steal it during migration.
            if (cache.getStatus() == PosterStatus.PROCESSING) throw new Rejected();
            cache.updatePosterUrl(localPath);
        });
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW, readOnly = true)
    public boolean isReferenced(String path) {
        return movies.existsByPosterUrl(path) || caches.existsByPosterUrl(path);
    }
}
