
import React from 'react';
import { Copy, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const walletAddress = '0x742d35C6D32312D9A9A7be987982fC71CD12C4c2f';
  
  const positions = [
    {
      token: 'ETH',
      symbol: 'WETH',
      amount: '2.45',
      value: '$5,147.50',
      change: '+12.5%',
      changeType: 'positive',
      color: 'bg-blue-500'
    },
    {
      token: 'BTC',
      symbol: 'WBTC',
      amount: '0.089',
      value: '$3,842.10',
      change: '+8.7%',
      changeType: 'positive',
      color: 'bg-orange-500'
    },
    {
      token: 'BNB',
      symbol: 'BNB',
      amount: '12.8',
      value: '$3,456.00',
      change: '-2.1%',
      changeType: 'negative',
      color: 'bg-yellow-500'
    },
    {
      token: 'SOL',
      symbol: 'WSOL',
      amount: '45.2',
      value: '$1,983.60',
      change: '+15.3%',
      changeType: 'positive',
      color: 'bg-purple-500'
    }
  ];

  const transactions = [
    {
      date: '2024-01-15',
      time: '14:32',
      type: 'Swap',
      token: 'ETH',
      amount: '+0.125 WETH',
      value: '$250.00',
      status: 'Completed',
      txHash: '0xabc123...'
    },
    {
      date: '2024-01-15',
      time: '14:31',
      type: 'Deposit',
      token: 'USDT',
      amount: '-500.00 USDT',
      value: '$500.00',
      status: 'Completed',
      txHash: '0xdef456...'
    },
    {
      date: '2024-01-08',
      time: '10:15',
      type: 'Swap',
      token: 'BTC',
      amount: '+0.0056 WBTC',
      value: '$200.00',
      status: 'Completed',
      txHash: '0xghi789...'
    },
    {
      date: '2024-01-01',
      time: '16:45',
      type: 'Swap',
      token: 'BNB',
      amount: '+0.85 BNB',
      value: '$180.00',
      status: 'Completed',
      txHash: '0xjkl012...'
    },
    {
      date: '2023-12-28',
      time: '09:22',
      type: 'Withdraw',
      token: 'SOL',
      amount: '-5.2 WSOL',
      value: '$420.00',
      status: 'Completed',
      txHash: '0xmno345...'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const totalValue = positions.reduce((sum, position) => {
    return sum + parseFloat(position.value.replace('$', '').replace(',', ''));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">Wallet Profile</h1>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-400 font-mono text-sm">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-6)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white p-1"
                      onClick={() => copyToClipboard(walletAddress)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-white">${totalValue.toLocaleString()}</p>
                  <p className="text-emerald-400 text-sm">+11.2% overall</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Positions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Current Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${position.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{position.token}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{position.token}</h3>
                      <p className="text-slate-400 text-xs">{position.symbol}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Amount:</span>
                      <span className="text-white font-medium">{position.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Value:</span>
                      <span className="text-white font-medium">{position.value}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">24h Change:</span>
                      <div className="flex items-center">
                        {position.changeType === 'positive' ? (
                          <TrendingUp className="w-3 h-3 text-emerald-400 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-400 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${
                          position.changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {position.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Date & Time</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Type</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Token</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Amount</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Value</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">Status</th>
                      <th className="text-left text-slate-400 text-sm font-medium py-3">TX</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="py-4">
                          <div className="text-white text-sm">{tx.date}</div>
                          <div className="text-slate-400 text-xs">{tx.time}</div>
                        </td>
                        <td className="py-4">
                          <Badge 
                            variant="outline"
                            className={`${
                              tx.type === 'Swap' ? 'border-blue-500/30 text-blue-400' :
                              tx.type === 'Deposit' ? 'border-emerald-500/30 text-emerald-400' :
                              'border-orange-500/30 text-orange-400'
                            }`}
                          >
                            {tx.type}
                          </Badge>
                        </td>
                        <td className="py-4 text-white text-sm">{tx.token}</td>
                        <td className="py-4 text-white text-sm font-medium">{tx.amount}</td>
                        <td className="py-4 text-white text-sm">{tx.value}</td>
                        <td className="py-4">
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            {tx.status}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white p-1"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {transactions.map((tx, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline"
                          className={`${
                            tx.type === 'Swap' ? 'border-blue-500/30 text-blue-400' :
                            tx.type === 'Deposit' ? 'border-emerald-500/30 text-emerald-400' :
                            'border-orange-500/30 text-orange-400'
                          }`}
                        >
                          {tx.type}
                        </Badge>
                        <span className="text-white font-medium">{tx.token}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Amount:</span>
                        <span className="text-white font-medium">{tx.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Value:</span>
                        <span className="text-white">{tx.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Date:</span>
                        <span className="text-white">{tx.date} {tx.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
