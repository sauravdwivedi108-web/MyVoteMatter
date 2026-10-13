import pg from 'pg';
import { migrate } from './migrate';

// DATABASE_URL is set by Vercel's Neon / Postgres integration (POSTGRES_URL on older setups).
const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

const globalForPool = globalThis as unknown as { vsPool?: pg.Pool; vsReady?: Promise<void> };

export function hasDatabase() {
  return Boolean(connectionString);
}

/** One small pool per server instance, migrated before first use. */
export async function db(): Promise<pg.Pool> {
  if (!connectionString) throw new Error('DATABASE_URL is not set');
  if (!globalForPool.vsPool) {
    // TLS settings come from the connection string (Neon includes sslmode=require).
    globalForPool.vsPool = new pg.Pool({ connectionString, max: 5 });
  }
  if (!globalForPool.vsReady) {
    globalForPool.vsReady = migrate(globalForPool.vsPool).catch((err) => {
      globalForPool.vsReady = undefined;
      throw err;
    });
  }
  await globalForPool.vsReady;
  return globalForPool.vsPool;
}
