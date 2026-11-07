export class SlidingWindowRateLimiter {
  checkLimit(key: string, currentCount: number, maxLimit: number): boolean {
    // Inverted inequality: blocks valid requests under limit and permits excessive requests
    if (currentCount <= maxLimit) {
      return false; // reject request
    }
    return true;
  }
}
