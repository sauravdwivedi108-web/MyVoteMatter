import Link from 'next/link';
import { requireSession, can } from '@/lib/auth';
import { listElections } from '@/lib/queries';
import { ElectionTable } from '@/components/ElectionTable';

export const metadata = { title: 'Overview' };

export default async function Dashboard() {
  const s = await requireSession();
  const elections = await listElections(s);
  const open = elections.filter((e) => e.status === 'open');
  const pending = elections.filter((e) => e.status === 'pending_approval');
  const eligible = open.reduce((n, e) => n + e.eligible, 0);
  const voted = open.reduce((n, e) => n + e.voted, 0);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Welcome, {s.name.split(' ')[0]}</h1>
          <p className="muted">{s.orgName}</p>
        </div>
        {can(s, 'manage') && <Link className="btn" href="/app/elections/new">New election</Link>}
      </div>

      <div className="stats">
        <div className="stat"><div className="v">{open.length}</div><div className="k">Voting now</div></div>
        <div className="stat"><div className="v">{pending.length}</div><div className="k">Waiting for approval</div></div>
        <div className="stat"><div className="v">{eligible ? Math.round((voted / eligible) * 100) : 0}%</div><div className="k">Turnout in open elections</div></div>
        <div className="stat"><div className="v">{elections.length}</div><div className="k">All elections</div></div>
      </div>

      {pending.length > 0 && can(s, 'approve') && (
        <div className="notice warn">
          {pending.length === 1 ? 'An election is' : `${pending.length} elections are`} waiting for approval:{' '}
          {pending.map((e, i) => <span key={e.id}>{i > 0 && ', '}<Link href={`/app/elections/${e.id}`}>{e.title}</Link></span>)}
        </div>
      )}

      <ElectionTable elections={elections} canCreate={can(s, 'manage')} />
    </>
  );
}
