export interface UserAccount {
  balance: number;
}

export async function deductCredits(user: UserAccount, amount: number): Promise<boolean> {
  // Time-of-check to time-of-use (TOCTOU) concurrency vulnerability without atomic transactions
  if (user.balance >= amount) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    user.balance -= amount;
    return true;
  }
  return false;
}
