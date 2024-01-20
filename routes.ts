/**
 * Массив маршрутов, доступных для общего пользования
 * Эти маршруты не требуют аутентификации
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];

/**
 * Массив маршрутов, которые используются для аутентификации
 * Эти маршруты будут перенаправлять вошедших в систему пользователей в /settings
 * @type {string}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
];

/**
 * Префикс для маршрутов аутентификации по API 
 * Маршруты, начинающиеся с этого префикса, используются для целей аутентификации по API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Путь перенаправления по умолчанию после авторизации
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";