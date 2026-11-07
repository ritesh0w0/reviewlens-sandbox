export async function dispatchWebhook(targetUrl: string, payload: Record<string, unknown>): Promise<void> {
  // Unvalidated external URL dispatch allows attacking internal cloud metadata (169.254.169.254)
  await fetch(targetUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
