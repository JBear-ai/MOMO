/* eslint-disable testing-library/prefer-screen-queries -- Playwright page queries are not Testing Library render queries. */
const { test, expect } = require("@playwright/test");

test("회원가입, 로그인, 로그아웃이 브라우저에서 이어진다", async ({ page }) => {
  page.on("dialog", (dialog) => dialog.accept());

  const suffix = Date.now().toString(36).slice(-7);
  const loginId = `e2e${suffix}`;
  const nickname = `M${suffix}`;
  const email = `${loginId}@example.com`;
  const password = "MomoE2e1!";

  await page.goto("/signup");

  await page.locator("#signupId").fill(loginId);
  await expect(page.getByText("사용 가능한 아이디입니다.")).toBeVisible();

  await page.locator("#signupEmail").fill(email);
  await page.locator("#signupPassword").fill(password);
  await page.locator("#signupPasswordCheck").fill(password);
  await page.locator("#signupNickname").fill(nickname);

  const signupButton = page.getByRole("button", {
    name: "무료 회원가입하고 영화 메모하러 가기",
  });
  await expect(signupButton).toBeEnabled();
  await signupButton.click();
  await expect(page).toHaveURL(/\/login$/);

  await page.locator("#loginId").fill(loginId);
  await page.locator("#loginPassword").fill(password);

  const initialFavoritesSync = page.waitForResponse((response) =>
    response.url().endsWith("/api/favorites") &&
    response.request().method() === "GET" &&
    response.ok(),
  );
  await page.getByRole("button", { name: "로그인" }).click();

  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  await expect.poll(() => page.evaluate(() => localStorage.getItem("accessToken")))
    .not.toBeNull();
  await expect(page.getByRole("button", { name: "로그아웃" })).toBeVisible();
  await initialFavoritesSync;

  // 마이페이지의 세 활동 카드가 실제 카드 구조와 개수 배지를 유지하는지 확인한다.
  await page.goto("/profile");
  const profileActivityCards = page.locator(".profile-activity-item");
  await expect(profileActivityCards).toHaveCount(3);
  await expect(profileActivityCards.nth(0).locator(".profile-activity-count-row")).toBeVisible();
  await expect(profileActivityCards.nth(1).locator(".profile-activity-footer")).toBeVisible();
  await expect(profileActivityCards.nth(2).getByRole("heading", { name: "관심 영화" })).toBeVisible();

  const activityGridColumns = await page.locator(".profile-activity-grid").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(activityGridColumns).toBe(3);

  const activityHeadingColor = await profileActivityCards.first().locator("h3").evaluate(
    (element) => getComputedStyle(element).color,
  );
  expect(activityHeadingColor).toBe("rgb(48, 54, 51)");

  // 활동 카드는 과한 장식 대신 은은한 유리 재질과 낮은 채도 색을 사용한다.
  const activityGlass = await profileActivityCards.first().evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      blur: style.backdropFilter,
      background: style.backgroundImage,
      radius: style.borderRadius,
      leftBorder: style.borderLeftColor,
    };
  });
  expect(activityGlass.blur).toContain("blur(22px)");
  expect(activityGlass.background).not.toContain("radial-gradient");
  expect(activityGlass.radius).toBe("15px");
  expect(activityGlass.leftBorder).toBe("rgb(136, 118, 83)");
  await expect(profileActivityCards.locator(".profile-activity-icon svg")).toHaveCount(3);

  const headerNavRadius = await page.locator("header nav a").first().evaluate(
    (element) => getComputedStyle(element).borderRadius,
  );
  const headerActionRadius = await page.getByRole("button", { name: "로그아웃" }).evaluate(
    (element) => getComputedStyle(element).borderRadius,
  );
  expect(headerNavRadius).toBe("11px");
  expect(headerActionRadius).toBe("11px");

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileActivityColumns = await page.locator(".profile-activity-grid").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(mobileActivityColumns).toBe(1);
  await expect(
    profileActivityCards.first().locator(".profile-activity-footer p"),
  ).toBeVisible();
  await page.setViewportSize({ width: 1280, height: 800 });

  // 프로필 수정 페이지의 브랜드 컬러가 실제 브라우저 스타일에 반영되는지 확인한다.
  await page.goto("/profile/edit");
  await expect(page.locator(".profile-edit-page")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: "프로필 수정" })).toBeVisible();

  const profileEditCanvas = await page.locator(".profile-edit-page").evaluate((element) => {
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, image: style.backgroundImage };
  });
  expect(profileEditCanvas.background).toBe("rgb(245, 242, 235)");
  expect(profileEditCanvas.image).toContain("linear-gradient");

  const brandTokens = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    const body = getComputedStyle(document.body);
    return {
      background: root.getPropertyValue("--momo-bg").trim(),
      note: root.getPropertyValue("--momo-note").trim(),
      accent: root.getPropertyValue("--momo-accent").trim(),
      border: root.getPropertyValue("--momo-border").trim(),
      bodyBackground: body.backgroundColor,
    };
  });
  expect(brandTokens.background).toBe("#F5F2EB");
  expect(brandTokens.note).toBe("#FFFAEC");
  expect(brandTokens.accent).toBe("#FFD43B");
  expect(brandTokens.border).toBe("#E9DFC5");
  expect(brandTokens.bodyBackground).toBe("rgb(245, 242, 235)");

  await expect(page.locator(".momo-app-header")).toBeVisible();
  const profileEditHero = await page.locator(".profile-edit-heading").evaluate((element) => {
    const paper = getComputedStyle(element, "::before");
    const fold = getComputedStyle(element, "::after");
    const title = getComputedStyle(element.querySelector("h1"));
    return {
      paperColor: paper.backgroundColor,
      paperBackground: paper.backgroundImage,
      paperShape: paper.clipPath,
      paperDisplay: paper.display,
      paperZIndex: paper.zIndex,
      foldContent: fold.content,
      foldDisplay: fold.display,
      foldZIndex: fold.zIndex,
      foldedCorner: fold.backgroundImage,
      title: title.color,
      highlight: title.backgroundImage,
      outerRadius: getComputedStyle(element).borderRadius,
    };
  });
  expect(profileEditHero.paperColor).toBe("rgb(255, 250, 236)");
  expect(profileEditHero.paperBackground).toContain("linear-gradient");
  expect(profileEditHero.paperShape).toContain("polygon");
  expect(profileEditHero.paperDisplay).not.toBe("none");
  expect(profileEditHero.paperZIndex).toBe("0");
  expect(profileEditHero.foldContent).not.toBe("none");
  expect(profileEditHero.foldDisplay).not.toBe("none");
  expect(profileEditHero.foldZIndex).toBe("0");
  expect(profileEditHero.foldedCorner).toContain("linear-gradient");
  expect(profileEditHero.title).toBe("rgb(41, 40, 32)");
  expect(profileEditHero.highlight).toContain("linear-gradient");
  expect(profileEditHero.outerRadius).toBe("0px");

  const profilePortraitStage = await page.locator(".profile-image-edit").evaluate((element) => {
    const style = getComputedStyle(element);
    return { background: style.backgroundImage, border: style.borderColor };
  });
  expect(profilePortraitStage.background).toContain("linear-gradient");
  expect(profilePortraitStage.border).toBe("rgb(227, 206, 131)");

  const saveButton = await page.locator(".profile-edit-submit").evaluate((element) => {
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, color: style.color, radius: style.borderRadius };
  });
  expect(saveButton.background).toBe("rgb(255, 212, 59)");
  expect(saveButton.color).toBe("rgb(41, 40, 32)");
  expect(saveButton.radius).toBe("10px");

  // 성공한 화면도 CI artifact로 보관해 실제 헤더 색과 형태를 확인할 수 있게 한다.
  await page.screenshot({
    path: "test-results/profile-edit-design-desktop.png",
    fullPage: true,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileEditColumns = await page.locator(".profile-form-buttons").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(mobileEditColumns).toBe(2);
  await expect(page.locator(".profile-edit-cancel")).toBeVisible();
  await page.screenshot({
    path: "test-results/profile-edit-design-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1280, height: 800 });

  await page.goto("/");

  // 첫 로그인 동기화 후 서버에 관심 영화를 추가해 계정별 저장을 확인한다.
  const favoriteStatus = await page.evaluate(async (movie) => {
    const response = await fetch("http://127.0.0.1:8111/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(movie),
    });
    return response.status;
  }, {
    movieCode: "20261234",
    title: "관심 영화 E2E 테스트",
    releaseDate: "20261112",
    posterUrl: "",
  });
  expect(favoriteStatus).toBe(201);

  // 새로고침 후 서버의 관심 영화 목록이 화면에 복원되는지 확인한다.
  const refreshedFavoritesSync = page.waitForResponse((response) =>
    response.url().endsWith("/api/favorites") &&
    response.request().method() === "GET" &&
    response.ok(),
  );
  await page.reload();
  await refreshedFavoritesSync;
  await page.goto("/profile/favorites");
  await expect(page.getByText("관심 영화 E2E 테스트")).toBeVisible();

  // 관심 영화 페이지는 낮은 채도의 필름 아카이브 톤과 반투명 표면을 사용한다.
  const favoriteHeroGlass = await page.locator(".favorite-page-heading").evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      blur: style.backdropFilter,
      background: style.backgroundImage,
      radius: style.borderRadius,
    };
  });
  expect(favoriteHeroGlass.blur).toContain("blur(26px)");
  expect(favoriteHeroGlass.background).not.toContain("radial-gradient");
  expect(favoriteHeroGlass.radius).toBe("21px");
  const favoritePageBackground = await page.locator(".favorite-page").evaluate((element) => {
    const style = getComputedStyle(element);
    return { image: style.backgroundImage, color: style.backgroundColor };
  });
  expect(favoritePageBackground.image).toContain("linear-gradient");
  const favoriteGlassCard = await page.locator(".favorite-page-card").evaluate((element) => {
    const style = getComputedStyle(element);
    return { blur: style.backdropFilter, background: style.backgroundImage };
  });
  expect(favoriteGlassCard.blur).toContain("blur(18px)");
  expect(favoriteGlassCard.background).toBe("none");

  // 관심 영화 화면의 버튼으로 서버 목록에서 삭제하고 빈 상태까지 반영되는지 확인한다.
  const favoriteDelete = page.waitForResponse((response) =>
    response.url().endsWith("/api/favorites/20261234") &&
    response.request().method() === "DELETE" &&
    response.ok(),
  );
  await expect(page.getByRole("button", { name: "관심 영화 해제" }).locator(".favorite-film-ticket-icon")).toBeVisible();
  await page.getByRole("button", { name: "관심 영화 해제" }).click();
  await favoriteDelete;
  await expect(page.getByText("아직 등록한 관심 영화가 없습니다.")).toBeVisible();

  await page.getByRole("button", { name: "로그아웃" }).click();
  await expect(page.getByRole("link", { name: "로그인" })).toBeVisible();
  await expect.poll(() => page.evaluate(() => localStorage.getItem("accessToken")))
    .toBeNull();
  await expect(page.getByRole("button", { name: "로그아웃" })).toHaveCount(0);
});

test("인물 ID와 필모그래피 영화 ID가 통합 영화 상세로 정확히 연결된다", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.route("**/api/persons/by-id/director/321", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        personInfo: {
          tmdbId: 321,
          name: "인물 연결 E2E",
          profileUrl: "",
          birthday: null,
          deathday: null,
          placeOfBirth: null,
          biography: "이 인물은 영화 제작과 연출 분야에서 오랜 기간 활동해 왔으며 다양한 장르의 작품을 통해 관객과 만났습니다. 작품의 서사와 인물의 감정을 세밀하게 다루는 연출을 선보이며 동료 창작자들과 협업했습니다. 이 소개 문장은 모바일과 데스크톱에서 세 줄 이후 접히는지 확인하기 위한 브라우저 테스트 문구입니다. 소개 더보기 버튼으로 전체 내용을 확인하고 다시 접을 수 있어야 합니다.",
          knownForDepartment: "Directing",
        },
        filmography: [
          {
            tmdbId: 888,
            title: "필모그래피 이동 E2E",
            releaseDate: "2026-11-12",
            posterUrl: "",
            role: "Director",
          },
          ...Array.from({ length: 7 }, (_, index) => ({
            tmdbId: 889 + index,
            title: `필모그래피 테스트 ${index + 2}`,
            releaseDate: "2026-11-12",
            posterUrl: "",
            role: "Director",
          })),
        ],
      }),
    }),
  );

  await page.route("**/api/persons/filmography/888", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ movieCode: "20261234" }),
    }),
  );

  await page.route("**/api/movies/resolve/20261234", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        tmdbId: 888,
        movieCode: "20261234",
        title: "필모그래피 이동 E2E",
        titleEn: "Filmography Navigation E2E",
        releaseDate: "20261112",
        runningTime: "100",
        genre: "드라마",
        director: "인물 연결 E2E",
        actors: [],
        watchGrade: "전체 관람가",
        overview: "영화 상세 이동 확인",
        posterUrl: "",
        people: [
          {
            personId: 321,
            name: "인물 연결 E2E",
            originalName: "Person Navigation E2E",
            profileUrl: "",
            department: "director",
          },
          ...Array.from({ length: 7 }, (_, index) => ({
            personId: 322 + index,
            name: `감독 미리보기 ${index + 2}`,
            originalName: "",
            profileUrl: "",
            department: "director",
          })),
          ...Array.from({ length: 8 }, (_, index) => ({
            personId: 400 + index,
            name: `배우 미리보기 ${index + 1}`,
            originalName: "",
            profileUrl: "",
            department: "actor",
            role: `배역 ${index + 1}`,
          })),
        ],
      }),
    }),
  );

  await page.route("**/api/movies/20261234/poster", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ movieCode: "20261234", posterUrl: "" }),
    }),
  );

  await page.route("**/api/reviews/movie/20261234**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ content: [], totalElements: 0, totalPages: 0 }),
    }),
  );

  await page.route("**/api/movies/20261234/rating", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        likeCount: 0,
        dislikeCount: 0,
        totalCount: 0,
        positiveRate: null,
        myRating: null,
      }),
    }),
  );

  await page.goto("/person/director/321");
  await expect(
    page.getByRole("heading", { level: 1, name: "인물 연결 E2E" }),
  ).toBeVisible();

  // 긴 인물 소개는 세 줄 미리보기에서 펼치고 다시 접을 수 있어야 한다.
  const biography = page.locator(".person-biography");
  await expect(biography).not.toHaveClass(/is-expanded/);
  await page.getByRole("button", { name: "소개 더보기" }).click();
  await expect(biography).toHaveClass(/is-expanded/);
  await page.getByRole("button", { name: "접기" }).click();
  await expect(biography).not.toHaveClass(/is-expanded/);

  // 필모그래피는 두 열 기준 세 줄(6편)만 먼저 보여주고 더보기/접기가 가능해야 한다.
  const filmographyItems = page.locator(".filmography-list [role='button']");
  await expect(filmographyItems).toHaveCount(6);
  const filmographyColumns = await page.locator(".filmography-list").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(filmographyColumns).toBe(2);
  await page.getByRole("button", { name: "필모그래피 더보기 (6 / 8)" }).click();
  await expect(filmographyItems).toHaveCount(8);
  await page.getByRole("button", { name: "접기" }).click();
  await expect(filmographyItems).toHaveCount(6);

  await page.getByRole("button", {
    name: "필모그래피 이동 E2E 영화 상세정보 보기",
  }).click();

  await expect(page).toHaveURL(/\/movie\/20261234$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "필모그래피 이동 E2E" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "관객 평점" })).toBeVisible();
  await expect(page.locator(".rating-distribution-track")).toBeVisible();
  await expect(page.locator(".detail-reaction-counts .rating-vote-button")).toHaveCount(2);

  // 영화 상세 헤더는 원형 광원 없이 절제된 반투명 글래스로 표현한다.
  const movieHeroGlass = await page.locator(".movie-detail-header").evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      blur: style.backdropFilter,
      background: style.backgroundImage,
      radius: style.borderRadius,
      columns: style.gridTemplateColumns,
    };
  });
  expect(movieHeroGlass.blur).toContain("blur(28px)");
  expect(movieHeroGlass.background).not.toContain("radial-gradient");
  expect(movieHeroGlass.radius).toBe("19px");
  expect(movieHeroGlass.columns.split(" ").length).toBe(1);

  const audienceGlass = await page.locator(".movie-rating-panel").evaluate((element) => {
    const style = getComputedStyle(element);
    return { blur: style.backdropFilter, background: style.backgroundImage };
  });
  expect(audienceGlass.blur).toContain("blur(22px)");
  expect(audienceGlass.background).toBe("none");

  // 영화 상세의 감독·배우도 세 줄 미리보기와 펼치기/접기 동작을 제공한다.
  const directorSection = page.locator(".people-section").nth(0);
  const actorSection = page.locator(".people-section").nth(1);
  const directorItems = directorSection.locator(".people-list-compact .person-chip");
  const actorItems = actorSection.locator(".people-list-compact .person-chip");

  await expect(directorItems).toHaveCount(6);
  const peopleColumns = await directorSection.locator(".people-list-compact").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );
  expect(peopleColumns).toBe(2);
  await directorSection.getByRole("button", { name: "감독 더보기 (6 / 8)" }).click();
  await expect(directorItems).toHaveCount(8);
  await directorSection.getByRole("button", { name: "감독 접기" }).click();
  await expect(directorItems).toHaveCount(6);

  await expect(actorItems).toHaveCount(6);
  await actorSection.getByRole("button", { name: "배우 더보기 (6 / 8)" }).click();
  await expect(actorItems).toHaveCount(8);
  await actorSection.getByRole("button", { name: "배우 접기" }).click();
  await expect(actorItems).toHaveCount(6);

  // 영화 상세의 TMDb 인물 ID가 이름 검색이 아닌 고유 ID 경로로 연결되는지 확인한다.
  await directorSection.getByRole("button", { name: /인물 연결 E2E/ }).click();
  await expect(page).toHaveURL(/\/person\/director\/321$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "인물 연결 E2E" }),
  ).toBeVisible();
});


test("KOBIS 영화 코드가 없는 영화에도 관객 평점 영역이 안내 상태로 표시된다", async ({ page }) => {
  await page.route("**/api/movies/resolve/555", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        tmdbId: 555,
        movieCode: null,
        title: "평점 안내 상태 E2E",
        titleEn: "Rating Availability E2E",
        releaseDate: "2026-11-12",
        runningTime: "105",
        genre: "드라마",
        director: "테스트 감독",
        actors: ["테스트 배우"],
        watchGrade: "전체 관람가",
        overview: "관객 평가 데이터 연결이 아직 없는 영화입니다.",
        posterUrl: "",
      }),
    }),
  );

  await page.goto("/movie/555");

  await expect(
    page.getByRole("heading", { level: 1, name: "평점 안내 상태 E2E" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "관객 평점" })).toBeVisible();
  await expect(page.locator(".movie-score-value strong")).toHaveText("—");
  await expect(page.locator(".rating-unavailable")).toContainText(
    "관객 평가 기능과 아직 연결되지 않았습니다.",
  );
  await expect(page.locator(".detail-reaction-counts")).toHaveCount(0);
});
