
import React from 'react';
import { Button } from '@/components/ui/button';

interface TokenSelectorProps {
  selectedTokens: {
    BTC: boolean;
    ETH: boolean;
    BNB: boolean;
    SOL: boolean;
  };
  onTokenToggle: (token: string) => void;
}

const TokenSelector = ({ selectedTokens, onTokenToggle }: TokenSelectorProps) => {
  const tokens = [
    { symbol: 'BTC', name: 'Bitcoin', color: 'bg-orange-500' },
    { symbol: 'ETH', name: 'Ethereum', color: 'bg-blue-500' },
    { symbol: 'BNB', name: 'BNB', color: 'bg-yellow-500' },
    { symbol: 'SOL', name: 'Solana', color: 'bg-purple-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tokens.map((token) => (
        <Button
          key={token.symbol}
          variant={selectedTokens[token.symbol] ? "default" : "outline"}
          className={`h-16 flex flex-col items-center justify-center space-y-2 ${
            selectedTokens[token.symbol]
              ? 'bg-gradient-to-r from-indigo-500 to-emerald-500 text-white'
              : 'border-slate-600 text-slate-300 hover:bg-slate-700'
          }`}
          onClick={() => onTokenToggle(token.symbol)}
        >
          <div className={`w-6 h-6 rounded-full ${token.color} flex items-center justify-center`}>
            <span className="text-white font-bold text-xs">{token.symbol.charAt(0)}</span>
          </div>
          <span className="text-sm font-medium">{token.symbol}</span>
        </Button>
      ))}
    </div>
  );
};

export default TokenSelector;
