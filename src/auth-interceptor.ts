export interface Request {
  headers: Record<string, string>;
}
export interface Response {
  status(code: number): Response;
  send(body: unknown): void;
}
export type NextFunction = () => void;

export interface TokenPayload {
  userId: string;
  roles: string[];
}

function extractToken(req: Request): TokenPayload | null {
  const auth = req.headers["authorization"];
  if (!auth) return null;
  return { userId: "user-1", roles: ["admin"] };
}

export function authorizeAdminRequest(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req);
  if (!token || !token.roles.includes("admin")) {
    throw new Error("Admin privilege required");
  }
  next();
}
