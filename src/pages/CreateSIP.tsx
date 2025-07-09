
import React, { useState } from 'react';
import { ChevronDown, Calendar, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TokenSelector from '@/components/TokenSelector';
import AllocationButtons from '@/components/AllocationButtons';
import FrequencyPicker from '@/components/FrequencyPicker';

const CreateSIP = () => {
  const [selectedTokens, setSelectedTokens] = useState({
    BTC: false,
    ETH: false,
    BNB: false,
    SOL: false
  });
  const [depositAmount, setDepositAmount] = useState('');
  const [stablecoin, setStablecoin] = useState('USDT');
  const [allocations, setAllocations] = useState({
    BTC: 0,
    ETH: 0,
    BNB: 0,
    SOL: 0
  });
  const [frequency, setFrequency] = useState('weekly');

  const handleTokenToggle = (token: string) => {
    setSelectedTokens(prev => ({
      ...prev,
      [token]: !prev[token]
    }));
  };

  const handleAllocationChange = (percentage: number) => {
    const selectedTokensList = Object.keys(selectedTokens).filter(token => selectedTokens[token]);
    if (selectedTokensList.length === 0) return;
    
    const allocationPerToken = percentage / selectedTokensList.length;
    const newAllocations = { ...allocations };
    
    selectedTokensList.forEach(token => {
      newAllocations[token] = allocationPerToken;
    });
    
    setAllocations(newAllocations);
  };

  const totalAllocation = Object.values(allocations).reduce((sum, value) => sum + value, 0);
  const isValidAllocation = totalAllocation === 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Create Your SIP</h1>
          <p className="mt-4 text-lg text-slate-400">
            Set up a systematic investment plan with your preferred allocations
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Configure Your Investment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Token Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Select Tokens to Invest In
              </label>
              <TokenSelector 
                selectedTokens={selectedTokens}
                onTokenToggle={handleTokenToggle}
              />
            </div>

            {/* Deposit Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Deposit Amount
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Stablecoin
                </label>
                <Select value={stablecoin} onValueChange={setStablecoin}>
                  <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="USDT">USDT</SelectItem>
                    <SelectItem value="BUSD">BUSD</SelectItem>
                    <SelectItem value="USDC">USDC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Allocation Buttons */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Quick Allocation (for selected tokens)
              </label>
              <AllocationButtons onAllocationSelect={handleAllocationChange} />
            </div>

            {/* Custom Allocations */}
            {Object.keys(selectedTokens).some(token => selectedTokens[token]) && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-4">
                  Custom Allocations
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(selectedTokens).map(token => (
                    selectedTokens[token] && (
                      <div key={token}>
                        <label className="block text-xs text-slate-400 mb-1">{token} %</label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={allocations[token]}
                          onChange={(e) => setAllocations(prev => ({
                            ...prev,
                            [token]: Number(e.target.value)
                          }))}
                          className="bg-slate-900/50 border-slate-600 text-white"
                        />
                      </div>
                    )
                  ))}
                </div>
                <div className="mt-2 text-sm">
                  <span className={`${isValidAllocation ? 'text-emerald-400' : 'text-red-400'}`}>
                    Total: {totalAllocation.toFixed(1)}%
                  </span>
                  {!isValidAllocation && (
                    <span className="text-red-400 ml-2">
                      (Must equal 100%)
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Frequency Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Investment Frequency
              </label>
              <FrequencyPicker frequency={frequency} onFrequencyChange={setFrequency} />
            </div>

            {/* Wallet Source */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Funding Source
              </label>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Wallet className="w-4 h-4 mr-2" />
                Wallet Native
              </Button>
            </div>

            {/* Summary */}
            {depositAmount && Object.keys(selectedTokens).some(token => selectedTokens[token]) && (
              <Card className="bg-slate-900/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Investment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Investment Amount:</span>
                      <span className="text-white">{depositAmount} {stablecoin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Frequency:</span>
                      <span className="text-white capitalize">{frequency}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <span className="text-slate-400 text-xs">Token Allocations:</span>
                      {Object.keys(selectedTokens).map(token => (
                        selectedTokens[token] && allocations[token] > 0 && (
                          <div key={token} className="flex justify-between mt-1">
                            <span className="text-slate-300">{token}:</span>
                            <span className="text-white">
                              {allocations[token]}% (${(Number(depositAmount) * allocations[token] / 100).toFixed(2)})
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Create SIP Button */}
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white py-4"
              disabled={!depositAmount || !isValidAllocation || !Object.keys(selectedTokens).some(token => selectedTokens[token])}
            >
              Create SIP
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateSIP;
