const SAFE_CODES = new Set([
  "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_NETWORK", "ERR_CANCELED", "ECONNABORTED", "ETIMEDOUT",
  "MOMO_AUTH_SESSION_CHANGED", "MOMO_REFRESH_TOKEN_MISSING", "MOMO_INVALID_REFRESH_RESPONSE",
]);

// Deliberately omit messages, config, headers, body, response data and unknown free-form codes.
export const safeRequestFailure = (error) => ({
  status: Number.isInteger(error?.response?.status) && error.response.status >= 100 && error.response.status <= 599
    ? error.response.status : null,
  code: SAFE_CODES.has(error?.code) ? error.code : null,
});
