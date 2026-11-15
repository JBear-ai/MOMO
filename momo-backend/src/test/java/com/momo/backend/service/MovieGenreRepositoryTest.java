package com.momo.backend.service;

import com.momo.backend.entity.Movie;
import com.momo.backend.repository.MovieRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.data.domain.PageRequest;
import static org.junit.jupiter.api.Assertions.*;

/** Dedicated H2 memory database only; no application services or external clients are loaded. */
@DataJpaTest(showSql = false, properties = {
    "spring.datasource.url=jdbc:h2:mem:h2-genre-policy;DB_CLOSE_DELAY=-1;MODE=MySQL",
    "spring.datasource.driver-class-name=org.h2.Driver", "spring.datasource.username=sa",
    "spring.datasource.password=", "spring.jpa.hibernate.ddl-auto=create-drop"
})
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MovieGenreRepositoryTest {
    @Autowired MovieRepository movies;

    @Test void newGenreMustMatchAnEntireStoredCommaDelimitedToken() {
        save("20260001", "20200101", "드라마, 새장르");
        assertTrue(movies.existsByGenreToken("새장르"));
        assertFalse(movies.existsByGenreToken("새장"));
        save("20260002", "20200101", "SF, 새 장르");
        assertTrue(movies.existsByGenreToken("새 장르"));
        assertFalse(movies.existsByGenreToken("새장르오타"));
        assertEquals("새 장르", MovieGenrePolicy.requireSupported("새 장르", movies::existsByGenreToken));
        assertEquals("새장르", MovieGenrePolicy.requireSupported("새장르", movies::existsByGenreToken));
        assertThrows(IllegalArgumentException.class, () -> MovieGenrePolicy.requireSupported("다른장르", movies::existsByGenreToken));
    }

    @Test void pagingKeepsReleaseDateDescendingAndMovieCodeAscendingTieBreak() {
        save("20260003", "20210101", "드라마");
        save("20260002", "20210101", "드라마");
        save("20260001", "20200101", "드라마");
        var first = movies.findByGenreContainingIgnoreCaseOrderByReleaseDateDescMovieCodeAsc("드라마", PageRequest.of(0, 2));
        var second = movies.findByGenreContainingIgnoreCaseOrderByReleaseDateDescMovieCodeAsc("드라마", PageRequest.of(1, 2));
        assertEquals(java.util.List.of("20260002", "20260003"), first.map(Movie::getMovieCode).getContent());
        assertEquals("20260001", second.getContent().getFirst().getMovieCode());
    }

    @Test void missingGenresAreExcludedAndEmptyPagesRemainEmpty() {
        save("20260001", "20200101", "");
        save("20260002", "20200101", null);
        assertFalse(movies.existsByGenreToken("새장르"));
        assertTrue(movies.findByGenreContainingIgnoreCaseOrderByReleaseDateDescMovieCodeAsc("드라마", PageRequest.of(0, 10)).isEmpty());
    }

    private void save(String code, String date, String genre) {
        movies.saveAndFlush(new Movie(code, "movie", "", date, "", genre, "", "", ""));
    }
}
