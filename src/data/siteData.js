export const siteData = {
  brand: '$WELLS',
  title: '$WELLS — Clean Water & Rescue Missions',
  description:
    '$WELLS is a charity-focused Solana token presale creating clean water wells and rescue missions worldwide.',
  navItems: [
    { label: 'Presale', href: '#presale' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Impact', href: '#impact' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Airdrop', href: '#airdrop' },
    { label: 'FAQ', href: '#faq' },
  ],
  presale: {
    raised: 742350,
    target: 2000000,
    participants: 3184,
    rate: 275000,
    endDate: '2026-12-31T00:00:00Z',
    address: 'AbHVW4oJ2YUJGCtAsxRryFit49qe9EiXuAmJRraYCgji',
  },
  trustBadges: [
    'SPL Token Standard',
    'Liquidity locked 2 years',
    'Mint Authority Renounced',
  ],
  bonusTiers: [
    { range: '0.5 – 1 SOL', label: 'Starter', bonus: 5 },
    { range: '1 – 3 SOL', label: 'Builder', bonus: 10 },
    { range: '3 – 5 SOL', label: 'Patron', bonus: 15 },
    { range: '5+ SOL', label: 'Guardian', bonus: 20, special: 'Priority allocation' },
  ],
  tokenomics: [
    { label: 'Community Airdrop ($BARSIK holders)', value: 50 },
    { label: 'Liquidity Pool (Locked 2 Years)', value: 20 },
    { label: 'Charity Wallet (Audited)', value: 15 },
    { label: 'Team (12-Month Vesting)', value: 10 },
    { label: 'Marketing', value: 5 },
  ],
  charityGoals: [
    {
      title: 'Clean Water Wells',
      metric: '98',
      target: '100',
      percentage: 98,
      detail: 'Each well costs ~$7,500 and serves ~250 people for life.',
    },
    {
      title: 'People With Clean Water',
      metric: '24,745',
      target: '25,000',
      percentage: 99,
      detail: 'Sub-Saharan families gaining safe drinking water access.',
    },
    {
      title: 'Stray Cats Rescued',
      metric: '1,484',
      target: '4,000',
      percentage: 37,
      detail: 'Shelter, medical care & rehoming for abandoned cats.',
    },
    {
      title: 'Orphan Care Meals',
      metric: '742,350',
      target: '2,000,000',
      percentage: 37,
      detail: 'Nutritious meals for orphaned children in partner programs.',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      name: 'Presale',
      status: 'LIVE',
      milestone: '$0 → $2,000,000 Raised',
      items: [
        '$WELLS token launch',
        'Community airdrop to $BARSIK holders',
        'Initial liquidity lock',
      ],
      action: 'Reserve first 5 wells & establish 2 cat rescue partner shelters.',
    },
    {
      phase: 'Phase 2',
      name: 'Launch',
      status: 'Q1 2026',
      milestone: '$2M → $5,000,000 Raised',
      items: [
        'DEX listing (Raydium/Orca)',
        'CMC & CoinGecko fast-track',
        'DAO governance activation',
      ],
      action: 'Break ground on first 10 wells in sub-Saharan Africa; fund 500 cat rescues.',
    },
    {
      phase: 'Phase 3',
      name: 'Expansion',
      status: 'Q2 2026',
      milestone: '$5M → $10,000,000 Raised',
      items: [
        'First charity well completion',
        'NFT “Well Builder” badges drop',
        'Tier-2 CEX listings',
      ],
      action: 'Complete 25 wells (6,250 people served); launch orphan care meal program.',
    },
    {
      phase: 'Phase 4',
      name: 'Global Impact',
      status: 'Q3 2026',
      milestone: '$10M+ Raised',
      items: [
        'Binance listing target',
        '100 wells funded milestone',
        'Cross-chain bridge exploration',
      ],
      action: '100 wells funded (25,000 people); 4,000 cats rescued; 2M meals delivered.',
    },
  ],
  faq: [
    {
      question: 'How do I participate in the $WELLS presale?',
      answer:
        'Copy the official deposit address exactly, open your Phantom or Solflare wallet, and send between 0.5 and 50 SOL. Save your transaction hash, then submit your deposit proof to the dev team via Twitter/X or Telegram. Tokens are distributed manually within 24 hours of verification.',
    },
    {
      question: 'What is the minimum and maximum deposit?',
      answer:
        'The minimum deposit is 0.5 SOL and the maximum is 50 SOL per wallet. Deposits outside this range may not qualify for the corresponding tier bonus.',
    },
    {
      question: 'How do the bonus tiers work?',
      answer:
        'Your $WELLS bonus is calculated automatically from your SOL amount: 0.5–1 SOL gives 5%, 1–3 SOL gives 10%, 3–5 SOL gives 15%, and 5+ SOL gives 20% plus priority allocation.',
    },
    {
      question: 'When will I receive my $WELLS tokens?',
      answer:
        'Distribution is handled manually by the dev team. Once your deposit proof is verified, your $WELLS tokens are sent within 24 hours.',
    },
    {
      question: 'How do I submit my deposit proof?',
      answer:
        'Send three things to the dev team via any official channel: a screenshot of the transaction from your wallet, the transaction hash (TX ID), and your receiving wallet address for the $WELLS tokens.',
    },
    {
      question: 'Is the deposit address safe to send to?',
      answer:
        'Yes — only send SOL to the official address shown on this site. We will never DM you first. Always double-check the address character by character before sending.',
    },
    {
      question: 'Am I eligible for the $BARSIK airdrop?',
      answer:
        'Eligibility is based on the snapshot and holding requirements announced by the project. Check the official community channels for the current airdrop rules and snapshot date.',
    },
  ],
  socialLinks: {
    x: 'https://x.com/herrenx1?s=21',
    telegram: 'https://t.co/GIUZG46kIl',
    whitepaper: '#',
  },
};
