/**
 * User Service — ReviewLens Demonstration Fixture (CASE-01)
 *
 * NOTE: This fixture contains an intentional correctness defect for
 * automated review demonstration purposes.
 */

export interface UserRecord {
  id: string;
  email: string;
  profile?: {
    details?: {
      displayName: string;
    };
  };
}

export function getUserDisplayName(user: UserRecord): string {
  // Intentional defect: direct property access on optional user.profile.details
  // will throw a runtime TypeError if profile or details is undefined.
  return user.profile.details.displayName.trim();
}
// trigger synchronize event
