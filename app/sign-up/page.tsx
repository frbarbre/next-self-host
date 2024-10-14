import { createUser } from "../db/actions";

export default function Page() {
  return (
    <form action={createUser}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" />

      <button type="submit">Sign Up</button>
    </form>
  );
}
