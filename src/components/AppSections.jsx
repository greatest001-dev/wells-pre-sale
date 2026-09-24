import dogHero from '../assets/golden_retriever.jpg';
import { siteData } from '../data/siteData';
import CopyButton from './CopyButton';
import ProgressBar from './ProgressBar';
import SectionHeading from './SectionHeading';

export function HeroSection() {
  const percentage = siteData.presale.displayPercentage ?? ((siteData.presale.raised / siteData.presale.target) * 100);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            $WELLS PRESALE IS LIVE
          </p>

          <h1>Bridging Viral Hype with Real-World Impact.</h1>
          <p className="hero-subtitle">
            Fund clean water wells in Africa &amp; stray cat rescues worldwide.
          </p>

          <div className="countdown-block" aria-label="Presale countdown timer">
            <div className="countdown-label">PRESALE ENDS IN</div>
            <div className="countdown" role="timer">
              <div className="time-box">
                <span>05</span>
                <small>Days</small>
              </div>
              <div className="separator">:</div>
              <div className="time-box">
                <span>00</span>
                <small>Hours</small>
              </div>
              <div className="separator">:</div>
              <div className="time-box">
                <span>00</span>
                <small>Minutes</small>
              </div>
              <div className="separator">:</div>
              <div className="time-box">
                <span>00</span>
                <small>Seconds</small>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#presale" className="button primary-button">Buy $WELLS Now</a>
            <a
              href={siteData.socialLinks.telegram}
              className="button hero-telegram-button"
              target="_blank"
              rel="noreferrer"
            >
              Join Telegram
            </a>
            <a href="#whitepaper" className="text-link">View Whitepaper</a>
          </div>

          <div className="funded-panel">
            <div className="funded-header">
              <span>Total raised</span>
              <strong>
                ${siteData.presale.raised.toLocaleString()} / ${siteData.presale.target.toLocaleString()}
              </strong>
            </div>
            <ProgressBar value={siteData.presale.raised} max={siteData.presale.target} />
            <div className="funded-meta">
              <span>{Number(percentage).toFixed(1)}% filled</span>
              <span>{siteData.presale.participants.toLocaleString()} live participants</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Wells mascot and charity illustration">
          <div className="visual-badge">Powered by Solana</div>
          <div className="visual-card">
            <div className="visual-glow" />
            <img
              src={dogHero}
              alt="Dog mascot beside a well in a community setting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="info-strip">
      <div className="container strip-inner">
        {siteData.trustBadges.map((badge, index) => (
          <>
            <span key={badge}>{badge}</span>
            {index < siteData.trustBadges.length - 1 && <span key={`${badge}-dot`}>•</span>}
          </>
        ))}
      </div>
    </section>
  );
}

export function PresaleSection() {
  return (
    <section className="presale section-shell" id="presale">
      <div className="container presale-grid">
        <div className="presale-copy">
          <p className="section-tag">Deposit command center</p>
          <h2>Join the $WELLS Presale</h2>
          <p>
            Transforming Memes into Clean Water &amp; Rescue Missions — Barsik on Solana expansion.
          </p>
        </div>

        <div className="presale-card">
          <div className="card-header">
            <span className="status-pill">Official deposit address</span>
            <CopyButton value={siteData.presale.address} label="Copy" />
          </div>

          <div className="deposit-address">{siteData.presale.address}</div>

          <div className="address-note">
            Send SOL only to the official address below.
            <br />
            Never send funds to any other address.
          </div>

          <ol className="deposit-steps">
            <li>Copy the address above exactly</li>
            <li>Open your Phantom/Solflare wallet</li>
            <li>Send SOL to this address (Min: 3 SOL | Max: 50 SOL per wallet)</li>
            <li>Save your transaction hash (TX ID)</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function TokenomicsSection() {
  return (
    <section className="distribution section-shell" id="tokenomics">
      <div className="container">
        <SectionHeading eyebrow="Tokenomics" title="Fixed Supply. Fair Launch." align="center" />

        <div className="supply-box">
          <span className="supply-label">Supply</span>
          <h3>1,000,000,000 $WELLS</h3>
          <p>Fixed Supply | Mint Renounced Post-Launch</p>
        </div>

        <div className="distribution-grid">
          {siteData.tokenomics.map((item) => (
            <div key={item.label} className="distribution-card">
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </div>

        <div className="tax-box">
          <span className="tax-label">Transaction Tax</span>
          <h3>3% Total</h3>
          <div className="tax-breakdown">
            <span>Auto-Liquidity 1%</span>
            <span>Charity Wallet 1%</span>
            <span>Deflationary Burn 1%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="impact section-shell" id="impact">
      <div className="container impact-grid">
        <div className="impact-copy">
          <p className="section-tag">Charity impact</p>
          <h2>Every trade builds a well.</h2>
          <p>1% of every transaction flows directly into the audited charity wallet.</p>
        </div>

        <div className="impact-cards">
          <article className="impact-card">
            <div className="impact-icon">💧</div>
            <h3>Africa Water Initiative</h3>
            <p>Partnering with verified NGOs to dig clean water wells in sub-Saharan Africa.</p>
            <span>Wells Funded: 0 → Target: 100</span>
          </article>
          <article className="impact-card">
            <div className="impact-icon">🐾</div>
            <h3>Stray Cat &amp; Orphan Rescue</h3>
            <p>Supporting abandoned cat rescues and orphan care initiatives globally.</p>
            <span>Transparent donations via on-chain verification</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function GoalsSection() {
  return (
    <section className="stats section-shell">
      <div className="container">
        <SectionHeading eyebrow="Impact goals" title="Your funds, measured in lives changed." align="center" />
        <div className="stats-grid">
          {siteData.charityGoals.map((goal) => (
            <article className="stat-card" key={goal.title}>
              <span className="stat-label">{goal.title}</span>
              <strong>{goal.metric}</strong>
              <small>{goal.percentage}% of target</small>
              <ProgressBar value={goal.percentage} max={100} height={8} color="success" />
              <p>{goal.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoadmapSection() {
  return (
    <section className="roadmap section-shell" id="roadmap">
      <div className="container">
        <SectionHeading eyebrow="Roadmap" title="The rising tide." />
        <div className="roadmap-grid">
          {siteData.roadmap.map((item) => (
            <article className={`roadmap-card ${item.status === 'LIVE' ? 'active' : ''}`} key={item.phase}>
              <span>
                {item.phase} · {item.name}
              </span>
              <h3>{item.status}</h3>
              <p>{item.milestone}</p>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
              <div className="roadmap-action">{item.action}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AirdropSection() {
  return (
    <section className="airdrop section-shell" id="airdrop">
      <div className="container airdrop-grid">
        <div className="airdrop-copy">
          <p className="section-tag">Airdrop</p>
          <h2>Rewarding the $BARSIK community.</h2>
        </div>

        <div className="airdrop-items">
          <div className="airdrop-item special">
            <span>Snapshot</span>
            <strong>January 5, 2026 · 12:00 PM UTC</strong>
          </div>
          <div className="airdrop-item">
            <span>Eligibility</span>
            <strong>&gt;10,000 $BARSIK tokens</strong>
          </div>
          <div className="airdrop-item">
            <span>Bonus</span>
            <strong>5–20% extra based on holding tier</strong>
          </div>
          <div className="airdrop-item">
            <span>Reveal</span>
            <strong>January 6, 2026</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="community section-shell">
      <div className="container community-grid">
        <div className="community-card">
          <div className="community-badge">Community server</div>
          <h3>Join the $WELLS Community Server</h3>
          <p>
            Get real-time presale updates, deposit support, and verification directly from the dev team.
          </p>
          <a
            href={siteData.socialLinks.telegram}
            className="button primary-button community-button"
            target="_blank"
            rel="noreferrer"
          >
            Join the community
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="faq section-shell" id="faq">
      <div className="container">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <div className="faq-list">
          {siteData.faq.map((item, i) => (
            <details key={item.question} open={i === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">W</span>
          <span>{siteData.brand}</span>
        </div>

        <div className="footer-links">
          {siteData.navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>

      </div>

      <div className="container footer-bottom">
        <p>
          <strong>Contract / Deposit Address</strong>
        </p>
        <div className="footer-address-row">
          <span>{siteData.presale.address}</span>
          <CopyButton value={siteData.presale.address} label="Copy" />
        </div>
        <div className="footer-badges">
          <span>Liquidity Locked 2 Years</span>
          <span>Audit Pending</span>
          <span>Team Vested</span>
        </div>
        <p className="footer-disclaimer">
          $WELLS is a community-driven solana token.
        </p>
      </div>
    </footer>
  );
}
