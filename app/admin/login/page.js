import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import styles from "./login.module.css";

export default async function AdminLoginPage({ searchParams }) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  const resolvedSearchParams = await searchParams;
  const hasError = resolvedSearchParams?.error === "1";

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>Sign in to access submitted form data</p>

        {hasError ? (
          <p className={styles.error}>Invalid username or password.</p>
        ) : null}

        <form className={styles.form} action="/api/admin/login" method="post">
          <label className={styles.label}>
            Username
            <input className={styles.input} type="text" name="username" required />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              required
            />
          </label>

          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>

        <Link className={styles.back} href="/">
          Back to website
        </Link>
      </section>
    </main>
  );
}
