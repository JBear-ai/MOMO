package com.momo.backend.service;

import java.util.List;
import java.util.function.Predicate;

/** Application genre policy. New catalog tokens can be accepted without an API lookup. */
public final class MovieGenrePolicy {
    public static final List<String> SUPPORTED_GENRES = List.of(
            "드라마", "코미디", "액션", "멜로/로맨스", "스릴러", "미스터리", "공포(호러)",
            "어드벤처", "범죄", "다큐멘터리", "애니메이션", "가족", "판타지", "SF", "전쟁",
            "서부극(웨스턴)", "사극", "성인물(에로)", "기타");

    private MovieGenrePolicy() { }

    public static String requireSupported(String genre, Predicate<String> storedGenreExists) {
        if (genre == null || genre.isBlank()) {
            throw new IllegalArgumentException("장르를 입력해주세요.");
        }
        String normalized = switch (genre.trim()) {
            case "로맨스" -> "멜로/로맨스";
            case "공포" -> "공포(호러)";
            default -> genre.trim();
        };
        for (String supported : SUPPORTED_GENRES) {
            if (supported.equalsIgnoreCase(normalized)) return supported;
        }
        // One bounded token only: reject wildcards, comma-separated lists and control characters.
        if (normalized.length() <= 50
                && normalized.matches("[\\p{L}\\p{N}][\\p{L}\\p{N} /()·-]*")
                && storedGenreExists.test(normalized)) {
            return normalized;
        }
        throw new IllegalArgumentException("지원하지 않는 장르입니다.");
    }
}
