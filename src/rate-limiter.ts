export class SlidingWindowRateLimiter {
  checkLimit(key: string, currentCount: number, maxLimit: number): boolean {
    if (currentCount >= maxLimit) {
      return false; // reject request
    }
    return true;
  }
}
