import { safeRequestFailure } from "../../utils/safeRequestFailure";
import React, { useState, useEffect } from "react";
import {
  getCurrentFavoriteUserId,
  isFavoriteMovie,
  toggleFavoriteMovieOnServer,
} from "../../utils/favorites";

function FavoriteStar({ movie }) {
  const [userId, setUserId] = useState(() => getCurrentFavoriteUserId());
  const [favorite, setFavorite] = useState(() =>
    isFavoriteMovie(movie?.movieCode),
  );
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const updateFavorite = () => {
      const currentUserId = getCurrentFavoriteUserId();
      setUserId(currentUserId);
      setFavorite(
        currentUserId
          ? isFavoriteMovie(movie?.movieCode, currentUserId)
          : false,
      );
    };

    updateFavorite();
    window.addEventListener("momo-auth-changed", updateFavorite);
    window.addEventListener("momo-favorites-changed", updateFavorite);

    return () => {
      window.removeEventListener("momo-auth-changed", updateFavorite);
      window.removeEventListener("momo-favorites-changed", updateFavorite);
    };
  }, [movie?.movieCode]);

  if (!userId) return null;

  const handleFavoriteClick = async (event) => {
    event.stopPropagation();
    if (!movie?.movieCode || saving) return;

    setSaving(true);
    try {
      const updatedFavorites = await toggleFavoriteMovieOnServer(movie, userId);
      setFavorite(
        updatedFavorites.some(
          (item) => String(item.movieCode) === String(movie.movieCode),
        ),
      );
    } catch (error) {
      console.error("관심 영화 저장 실패:", safeRequestFailure(error));
      alert("관심 영화 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSaving(false);
    }
  };

  return React.createElement(
    "button",
    {
      type: "button",
      className: `favorite-star ${favorite ? "is-active" : ""}`,
      onClick: handleFavoriteClick,
      disabled: saving,
      "aria-label": favorite ? "관심 영화 해제" : "관심 영화 추가",
      "aria-pressed": favorite,
      "aria-busy": saving,
      title: favorite ? "관심 영화 해제" : "관심 영화 추가",
    },
    React.createElement(
      "svg",
      {
        className: "favorite-film-ticket-icon",
        viewBox: "0 0 28 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.65,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
      },
      React.createElement("path", {
        d: "M6.5 3.75h15A2.25 2.25 0 0 1 23.75 6v2.4a2.6 2.6 0 0 0 0 5.2V16A2.25 2.25 0 0 1 21.5 18.25h-15A2.25 2.25 0 0 1 4.25 16v-2.4a2.6 2.6 0 0 0 0-5.2V6A2.25 2.25 0 0 1 6.5 3.75Z",
      }),
      React.createElement("rect", { x: 9.25, y: 6.75, width: 9.5, height: 8.5, rx: 1.2 }),
      React.createElement("path", { d: "m13 9.1 3.1 1.9-3.1 1.9V9.1Z" }),
      React.createElement("path", { d: "M7 6.2v1.1M7 14.8v1.1M21 6.2v1.1M21 14.8v1.1" }),
    ),
  );
}

export default FavoriteStar;
