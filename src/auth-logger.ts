export interface LoginAttempt {
  username: string;
  passwordPlaintext: string;
  jwtBearerToken: string;
}

export function logAuthenticationAttempt(attempt: LoginAttempt): void {
  // Sensitive data exposure: logging plaintext passwords and authentication tokens to console
  console.log(`[AUTH-AUDIT] Attempt by ${attempt.username} with password=${attempt.passwordPlaintext} token=${attempt.jwtBearerToken}`);
}
