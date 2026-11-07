export function LoginForm() {
  return (
    <form className="auth-form">
      <label htmlFor="username">Username</label>
      <input id="username" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
}
