import Link from 'next/link';
import { SiteNav, SiteFooter } from '@/components/SiteChrome';

const guarantees = [
  ['1', 'One vote per entitlement', 'Every folio or membership can vote once. Twelve simultaneous attempts still produce exactly one ballot, enforced by the database, not the browser.'],
  ['🔒', 'Secret ballot by design', 'The part of the system that knows who voted cannot read ballots, and the part that counts cannot see who voted. Administrators never see individual choices.'],
  ['✓', 'Maker-checker approval', 'Elections are approved by a second person. Once approved, the voter roll, ballot and dates are locked.'],
  ['Σ', 'Reconciled results', 'Counting stops unless ballots match recorded votes by number and by voting units. Every count is hashed so it can be reproduced.'],
  ['⏱', 'No early results', 'Ballots cannot be read until voting closes. Turnout is visible while voting is open; choices are not.'],
  ['⛓', 'Tamper-evident audit', 'Every administrative step is written to a hash-chained log. Altering history breaks the chain and is detected.'],
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <SiteNav />
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Corporate e-voting</p>
            <h1>AGM and shareholder voting your scrutinizer can trust.</h1>
            <p className="lead">
              VoteSphere runs resolutions, board elections and member votes with verified eligibility,
              weighted entitlements, secret ballots and results that reconcile before they are published.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <Link href="/signup" className="btn">Create your workspace</Link>
              <Link href="/security" className="btn secondary">How the secret ballot works</Link>
            </div>
          </div>
          <div className="hero-card" aria-label="Example result">
            <div className="small" style={{ color: '#c9cfe3' }}>AGM 2026 · Resolution 2 · Special resolution</div>
            <div className="res">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>Alteration of Articles</span><span style={{ color: 'var(--teal-strong)' }}>Passed ✓</span>
              </div>
              <div className="meter" style={{ margin: '10px 0 6px' }}><span style={{ width: '82%' }} /></div>
              <div className="small muted num">For 4,10,250 units · Against 90,100 · Abstain 12,000</div>
            </div>
            <div className="res small">
              <strong>Reconciled:</strong> 1,284 ballots = 1,284 entitlements used · 5,12,350 units
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="how">
        <h2>From notice to published result</h2>
        <p className="muted">Six steps, each recorded in the audit trail.</p>
        <ol className="steps">
          <li><strong>Create the election</strong><br /><span className="muted small">AGM resolutions, board election or internal poll, with voting window and record date.</span></li>
          <li><strong>Import the register</strong><br /><span className="muted small">Paste folio numbers and voting units. Bad rows are reported, never guessed.</span></li>
          <li><strong>Build the ballot</strong><br /><span className="muted small">Ordinary and special resolutions, or candidates.</span></li>
          <li><strong>Independent approval</strong><br /><span className="muted small">A second person approves and receives the tally key. Everything locks.</span></li>
          <li><strong>Voters vote</strong><br /><span className="muted small">Each gets a private link that works on any phone. They review, confirm and keep a receipt.</span></li>
          <li><strong>Count and publish</strong><br /><span className="muted small">After closing, the key holder counts. Results reconcile, then publish.</span></li>
        </ol>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Guarantees built into the core</h2>
        <div className="features">
          {guarantees.map(([icon, title, body]) => (
            <div className="feature" key={title}>
              <div className="icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p className="muted small" style={{ margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ marginBottom: 4 }}>Run a pilot election this week</h2>
            <p className="muted" style={{ margin: 0 }}>
              Start with an internal or non-binding vote. VoteSphere is not yet STQC-certified; legally significant
              shareholder votes need certification and counsel review first.
            </p>
          </div>
          <Link href="/signup" className="btn">Get started</Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
