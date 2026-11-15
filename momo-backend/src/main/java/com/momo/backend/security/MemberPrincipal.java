package com.momo.backend.security;

import com.momo.backend.exception.CustomException;
import java.security.Principal;
import org.springframework.security.core.Authentication;

/** Stable internal account identity, independent of the reusable login ID. */
public record MemberPrincipal(Long userId) implements Principal {
    public MemberPrincipal {
        if (userId == null || userId <= 0) {
            throw new IllegalArgumentException("Invalid member ID");
        }
    }

    @Override
    public String getName() {
        return userId.toString();
    }

    public static Long optionalUserId(Authentication authentication) {
        return authentication != null && authentication.isAuthenticated()
                && authentication.getPrincipal() instanceof MemberPrincipal member
                ? member.userId() : null;
    }

    public static Long requireUserId(Authentication authentication) {
        Long userId = optionalUserId(authentication);
        if (userId == null) {
            throw new CustomException("UNAUTHORIZED", "로그인이 필요합니다.");
        }
        return userId;
    }
}
