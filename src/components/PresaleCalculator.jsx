import { useMemo, useState } from 'react';
import { siteData } from '../data/siteData';

const MIN_SOL = 3;
const MAX_SOL = 50;

export default function PresaleCalculator() {
  const [solValue, setSolValue] = useState(MIN_SOL);
  const [error, setError] = useState('');

  const tier = useMemo(() => {
    if (solValue >= 35) return siteData.bonusTiers[3];
    if (solValue >= 20) return siteData.bonusTiers[2];
    if (solValue >= 10) return siteData.bonusTiers[1];
    if (solValue >= MIN_SOL) return siteData.bonusTiers[0];
    return null;
  }, [solValue]);

  const handleChange = (event) => {
    const nextValue = Number(event.target.value);

    if (Number.isNaN(nextValue)) {
      setError('Enter a valid number');
      return;
    }

    if (nextValue < MIN_SOL) {
      setError(`Minimum contribution is ${MIN_SOL} SOL`);
      return;
    }

    if (nextValue > MAX_SOL) {
      setError('Maximum contribution is 50 SOL per wallet');
      return;
    }

    setError('');
    setSolValue(nextValue);
  };

  const received = Math.round(solValue * siteData.presale.rate);
  const bonus = tier ? tier.bonus : 0;

  return (
    <section className="calculator section-shell" id="whitepaper">
      <div className="container calculator-grid">
        <div className="calc-panel">
          <div className="calc-heading">You send (SOL)</div>
          <input
            className="calc-input"
            type="number"
            min={MIN_SOL}
            max={MAX_SOL}
            step="0.1"
            value={solValue}
            onChange={handleChange}
          />
          <div className="calc-ruler">
            <span>Min {MIN_SOL} SOL</span>
            <span>Max 50 SOL per wallet</span>
          </div>
          {error && <div className="validation-error">{error}</div>}
        </div>

        <div className="calc-info">
          <div className="token-amount">
            <span>You receive</span>
            <strong>{received.toLocaleString()} $WELLS</strong>
          </div>
          <div className="bonus-box">
            <span>Your tier bonus</span>
            <strong>{bonus}%</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
