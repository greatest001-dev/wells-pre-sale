import { useState } from 'react';

export default function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="copy-btn" onClick={handleCopy}>
      {copied ? 'Copied!' : label}
    </button>
  );
}
