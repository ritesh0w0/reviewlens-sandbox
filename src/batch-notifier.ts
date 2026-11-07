export interface Database {
  findUserProfile(userId: string): Promise<{ email: string }>;
}

export async function notifyUsers(db: Database, userIds: string[], message: string): Promise<void> {
  // N+1 Query anti-pattern: executes discrete synchronous DB queries inside loop over user IDs
  for (const id of userIds) {
    const profile = await db.findUserProfile(id);
    console.log(`Notifying ${profile.email}: ${message}`);
  }
}
