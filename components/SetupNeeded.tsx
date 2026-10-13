export function SetupNeeded() {
  return (
    <div className="auth-wrap">
      <div className="card auth-card">
        <h1>Connect a database</h1>
        <p>VoteSphere needs a PostgreSQL database before anyone can sign in.</p>
        <ol>
          <li>In your Vercel project, open <strong>Storage</strong> and add a <strong>Neon</strong> Postgres database.</li>
          <li>Connect it to this project. Vercel sets <code>DATABASE_URL</code> for you.</li>
          <li>Redeploy. The tables are created automatically on first use.</li>
        </ol>
      </div>
    </div>
  );
}
