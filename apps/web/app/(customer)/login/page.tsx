import styles from './page.module.css';

export default function CustomerLoginPage({ searchParams }: { searchParams?: { error?: string } }) {
  const hasError = searchParams?.error === 'invalid-demo-credentials';

  return (
    <main className={styles.shell}>
      <section className={styles.card}>
        <a className={styles.logo} href="/"><span>≡</span>CoRyd</a>
        <p className={styles.eyebrow}>Temporary demo access</p>
        <h1>Log in to Customer Portal</h1>
        <p className={styles.copy}>Use the demo credentials below to enter the Customer dashboard while production OTP login is being built.</p>

        <form action="/api/auth/demo-login" method="post" className={styles.form}>
          <label>
            Username
            <input name="username" type="text" defaultValue="customer" autoComplete="username" />
          </label>
          <label>
            Password
            <input name="password" type="password" defaultValue="customer" autoComplete="current-password" />
          </label>
          {hasError && <p className={styles.error}>Use username <strong>customer</strong> and password <strong>customer</strong>.</p>}
          <button type="submit">Log in as Customer</button>
        </form>

        <p className={styles.hint}>Demo credentials: <strong>customer</strong> / <strong>customer</strong></p>
      </section>
    </main>
  );
}
