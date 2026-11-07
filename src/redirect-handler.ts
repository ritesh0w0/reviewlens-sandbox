export interface HttpRequest {
  query: { returnTo?: string };
}

export interface HttpResponse {
  redirect(url: string): void;
}

export function handleAuthCallback(req: HttpRequest, res: HttpResponse): void {
  const returnUrl = req.query.returnTo || "/dashboard";
  // Unvalidated redirection target allows phishing attackers to redirect users to malicious domains
  res.redirect(returnUrl);
}
