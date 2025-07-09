
import React from 'react';
import { Wallet, TrendingUp, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const activeSIPs = [
    {
      id: 1,
      allocations: [
        { token: 'ETH', percentage: 40, color: 'bg-blue-500' },
        { token: 'BTC', percentage: 30, color: 'bg-orange-500' },
        { token: 'BNB', percentage: 20, color: 'bg-yellow-500' },
        { token: 'SOL', percentage: 10, color: 'bg-purple-500' }
      ],
      frequency: 'Weekly',
      nextExecution: '2 days',
      totalInvested: 1250.00,
      status: 'Active'
    },
    {
      id: 2,
      allocations: [
        { token: 'BTC', percentage: 50, color: 'bg-orange-500' },
        { token: 'ETH', percentage: 50, color: 'bg-blue-500' }
      ],
      frequency: 'Monthly',
      nextExecution: '12 days',
      totalInvested: 2100.00,
      status: 'Active'
    }
  ];

  const transactions = [
    { date: '2024-01-15', type: 'Swap', token: 'ETH', amount: '+0.125', value: '$250.00' },
    { date: '2024-01-15', type: 'Deposit', token: 'USDT', amount: '-500.00', value: '$500.00' },
    { date: '2024-01-08', type: 'Swap', token: 'BTC', amount: '+0.0056', value: '$200.00' },
    { date: '2024-01-01', type: 'Swap', token: 'BNB', amount: '+0.85', value: '$180.00' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Wallet Connection Section */}
        <div className="mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Wallet Connected</h2>
                    <p className="text-slate-400 text-sm">0x742d...4c2f</p>
                  </div>
                </div>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Explorer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-300 text-sm font-medium">Total Invested</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$3,350.00</div>
              <p className="text-emerald-400 text-sm mt-1">+12.5% this month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-300 text-sm font-medium">Current Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$3,847.50</div>
              <p className="text-emerald-400 text-sm mt-1">+$497.50 gain</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-300 text-sm font-medium">Active SIPs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{activeSIPs.length}</div>
              <p className="text-slate-400 text-sm mt-1">Running strategies</p>
            </CardContent>
          </Card>
        </div>

        {/* Active SIPs Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Active SIPs</h2>
            <Button className="bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white mt-4 sm:mt-0">
              Create New SIP
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeSIPs.map((sip) => (
              <Card key={sip.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">SIP #{sip.id}</CardTitle>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      {sip.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Token Allocations */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Token Allocation</h4>
                    <div className="flex flex-wrap gap-2">
                      {sip.allocations.map((allocation, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${allocation.color}`}></div>
                          <span className="text-sm text-slate-300">
                            {allocation.token} {allocation.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Frequency</p>
                      <p className="text-white font-medium">{sip.frequency}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Next Execution</p>
                      <p className="text-white font-medium">{sip.nextExecution}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-slate-400">Total Invested</p>
                      <p className="text-white font-medium">${sip.totalInvested.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Manage
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Pause
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      {tx.type === 'Swap' ? (
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <DollarSign className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-medium">{tx.type} {tx.token}</p>
                      <p className="text-slate-400 text-sm">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{tx.amount}</p>
                    <p className="text-slate-400 text-sm">{tx.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
