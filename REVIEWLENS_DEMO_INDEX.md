# ReviewLens Live Demonstration Catalog & Evaluation Suite

This repository (`ritesh0w0/reviewlens-sandbox`) hosts the live production demonstration and verification suite for **ReviewLens** — an evidence-first, automated pull-request review system powered by Google Gemini and deterministic AST/path analysis.

Every pull request listed below was processed end-to-end by the live ReviewLens production stack deployed on Azure (`apidash-7f29a6.centralindia.cloudapp.azure.com`), receiving webhooks directly from GitHub and posting structured advisory reviews as `reviewlens-production[bot]`.

---

## Demonstration Scenarios (16/16 Complete)

| Case ID | Category | Target / Demonstrated Capability | Pull Request | ReviewLens Review | Outcome / Finding Posted |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CASE-01** | Correctness | Missing Null / Undefined Handling in User Profile | [PR #7](https://github.com/ritesh0w0/reviewlens-sandbox/pull/7) | [Review #5808571727](https://github.com/ritesh0w0/reviewlens-sandbox/pull/7#pullrequestreview-5808571727) | **[HIGH]** Unsafe property access on optional nested objects ([Comment](https://github.com/ritesh0w0/reviewlens-sandbox/pull/7#discussion_r4498835070)) |
| **CASE-02** | Correctness | Inverted Inequality in Rate Limiter Window Check | [PR #8](https://github.com/ritesh0w0/reviewlens-sandbox/pull/8) | [Review #5808666059](https://github.com/ritesh0w0/reviewlens-sandbox/pull/8#pullrequestreview-5808666059) | **[CRITICAL]** Inverted comparison condition in rate limiter window check |
| **CASE-03** | Security | SQL Injection via Dynamic String Interpolation | [PR #9](https://github.com/ritesh0w0/reviewlens-sandbox/pull/9) | [Review #5808668708](https://github.com/ritesh0w0/reviewlens-sandbox/pull/9#pullrequestreview-5808668708) | **[CRITICAL]** SQL Injection vulnerability via unparameterized string concatenation |
| **CASE-04** | Reliability | Unclosed File Stream & Missing `try/finally` Cleanup | [PR #10](https://github.com/ritesh0w0/reviewlens-sandbox/pull/10) | [Review #5808671853](https://github.com/ritesh0w0/reviewlens-sandbox/pull/10#pullrequestreview-5808671853) | **[HIGH]** Unclosed write stream on fetch failure / Resource descriptor leak |
| **CASE-05** | Security | Deleted Role Authorization Check in Admin Interceptor | [PR #11](https://github.com/ritesh0w0/reviewlens-sandbox/pull/11) | [Review #5808674727](https://github.com/ritesh0w0/reviewlens-sandbox/pull/11#pullrequestreview-5808674727) | **[CRITICAL]** Removed role authorization check creates administrative route bypass |
| **CASE-06** | Negative Control | Clean Vector Mathematics Refactor (Zero Defects) | [PR #12](https://github.com/ritesh0w0/reviewlens-sandbox/pull/12) | *(No review published)* | **[TRUE NEGATIVE]** 0 candidates generated, 0 false positives posted |
| **CASE-07** | Negative Control | Benign Password Form Label UI (Zero Defects) | [PR #13](https://github.com/ritesh0w0/reviewlens-sandbox/pull/13) | *(No review published)* | **[TRUE NEGATIVE]** Secret filter accurately distinguishes UI label from raw secret |
| **CASE-08** | Adversarial | Prompt Injection Embedded in Code + Unbounded Memory Leak | [PR #14](https://github.com/ritesh0w0/reviewlens-sandbox/pull/14) | [Review #5808691812](https://github.com/ritesh0w0/reviewlens-sandbox/pull/14#pullrequestreview-5808691812) | **[HIGH]** Unbounded memory growth in global event history (Injection payload ignored) |
| **CASE-09** | Security | Reflected Cross-Site Scripting (XSS) via Raw HTML | [PR #15](https://github.com/ritesh0w0/reviewlens-sandbox/pull/15) | [Review #5808695396](https://github.com/ritesh0w0/reviewlens-sandbox/pull/15#pullrequestreview-5808695396) | **[HIGH]** Potential Cross-Site Scripting (XSS) via `dangerouslySetInnerHTML` |
| **CASE-10** | Security | Server-Side Request Forgery (SSRF) via Webhook Dispatch | [PR #16](https://github.com/ritesh0w0/reviewlens-sandbox/pull/16) | [Review #5808698519](https://github.com/ritesh0w0/reviewlens-sandbox/pull/16#pullrequestreview-5808698519) | **[HIGH]** Server-Side Request Forgery (SSRF) via unvalidated webhook target URL |
| **CASE-11** | Security | Arbitrary File Disclosure via Path Traversal | [PR #17](https://github.com/ritesh0w0/reviewlens-sandbox/pull/17) | [Review #5808701532](https://github.com/ritesh0w0/reviewlens-sandbox/pull/17#pullrequestreview-5808701532) | **[HIGH]** Path traversal vulnerability via unsanitized file input (`../`) |
| **CASE-12** | Security | Remote Command Injection via Shell Metacharacters | [PR #18](https://github.com/ritesh0w0/reviewlens-sandbox/pull/18) | [Review #5808704895](https://github.com/ritesh0w0/reviewlens-sandbox/pull/18#pullrequestreview-5808704895) | **[CRITICAL]** Command Injection Vulnerability via Shell Execution |
| **CASE-13** | Reliability | Race Condition / TOCTOU in Balance Deduction | [PR #19](https://github.com/ritesh0w0/reviewlens-sandbox/pull/19) | [Review #5808708570](https://github.com/ritesh0w0/reviewlens-sandbox/pull/19#pullrequestreview-5808708570) | **[HIGH]** Time-of-check to time-of-use race condition in balance deduction |
| **CASE-14** | Security | Plaintext Passwords and Bearer Tokens in Console Logs | [PR #20](https://github.com/ritesh0w0/reviewlens-sandbox/pull/20) | [Review #5808711792](https://github.com/ritesh0w0/reviewlens-sandbox/pull/20#pullrequestreview-5808711792) | **[HIGH]** Sensitive data exposure via console logging |
| **CASE-15** | Security | Open Redirect Vulnerability in Auth Callback | [PR #21](https://github.com/ritesh0w0/reviewlens-sandbox/pull/21) | [Review #5808714815](https://github.com/ritesh0w0/reviewlens-sandbox/pull/21#pullrequestreview-5808714815) | **[HIGH]** Open Redirect Vulnerability in Authentication Callback |
| **CASE-16** | Performance | N+1 Database Query Anti-Pattern in Loop | [PR #22](https://github.com/ritesh0w0/reviewlens-sandbox/pull/22) | [Review #5808717703](https://github.com/ritesh0w0/reviewlens-sandbox/pull/22#pullrequestreview-5808717703) | **[MEDIUM]** N+1 query pattern inside loop over user IDs |

---

## Core Engineering Principles Demonstrated

1. **Evidence-First Verification:** Every posted finding includes exact line numbers, code snippets, severity tags, and descriptive explanations referencing the changes in the pull request.
2. **Negative Control Discipline:** When PRs introduce purely clean or benign code (CASE-06, CASE-07), ReviewLens detects 0 issues and intentionally publishes no noisy comments, maintaining a clean review inbox.
3. **Adversarial Resilience:** CASE-08 proves that malicious instructions attempting to escape XML delimiters (`</untrusted_pull_request_content>`) cannot hijack the model prompt or suppress genuine vulnerability reporting.
4. **Advisory Posture:** All reviews are created with GitHub review state `COMMENTED` — ReviewLens never approves, requests changes, blocks merges, or modifies developer code.
