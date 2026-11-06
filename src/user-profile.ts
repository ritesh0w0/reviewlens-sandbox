export interface UserProfile {
  name: string;
  email?: string;
}

export interface UserAccount {
  id: string;
  profile?: UserProfile;
}

export function getUserEmailDomain(user: UserAccount): string {
  // Bug: user.profile.email is accessed directly without checking if profile or email is defined
  return user.profile.email.split("@")[1];
}

// triggered live synchronize webhook
