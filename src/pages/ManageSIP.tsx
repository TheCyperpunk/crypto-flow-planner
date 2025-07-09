
import React from 'react';
import { Play, Pause, Trash2, Download, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ManageSIP = () => {
  const userSIPs = [
    {
      id: 1,
      name: 'Balanced Portfolio',
      status: 'Active',
      allocations: [
        { token: 'ETH', percentage: 40, color: 'bg-blue-500', amount: '$500' },
        { token: 'BTC', percentage: 30, color: 'bg-orange-500', amount: '$375' },
        { token: 'BNB', percentage: 20, color: 'bg-yellow-500', amount: '$250' },
        { token: 'SOL', percentage: 10, color: 'bg-purple-500', amount: '$125' }
      ],
      frequency: 'Weekly',
      totalInvested: 1250.00,
      nextExecution: '2 days, 14 hours',
      created: '2024-01-01'
    },
    {
      id: 2,
      name: 'BTC-ETH Split',
      status: 'Paused',
      allocations: [
        { token: 'BTC', percentage: 50, color: 'bg-orange-500', amount: '$1050' },
        { token: 'ETH', percentage: 50, color: 'bg-blue-500', amount: '$1050' }
      ],
      frequency: 'Monthly',
      totalInvested: 2100.00,
      nextExecution: 'Paused',
      created: '2023-12-15'
    },
    {
      id: 3,
      name: 'Altcoin Focus',
      status: 'Active',
      allocations: [
        { token: 'SOL', percentage: 60, color: 'bg-purple-500', amount: '$360' },
        { token: 'BNB', percentage: 40, color: 'bg-yellow-500', amount: '$240' }
      ],
      frequency: 'Bi-weekly',
      totalInvested: 600.00,
      nextExecution: '5 days, 8 hours',
      created: '2024-01-10'
    }
  ];

  const handlePauseResume = (sipId: number, currentStatus: string) => {
    console.log(`${currentStatus === 'Active' ? 'Pausing' : 'Resuming'} SIP ${sipId}`);
  };

  const handleCancel = (sipId: number) => {
    console.log(`Cancelling SIP ${sipId}`);
  };

  const handleWithdraw = (sipId: number) => {
    console.log(`Withdrawing funds from SIP ${sipId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Manage Your SIPs</h1>
          <p className="mt-4 text-lg text-slate-400">
            Control your systematic investment plans
          </p>
        </div>

        <div className="space-y-6">
          {userSIPs.map((sip) => (
            <Card key={sip.id} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-white text-xl">{sip.name}</CardTitle>
                    <p className="text-slate-400 text-sm mt-1">
                      Created on {sip.created} • {sip.frequency}
                    </p>
                  </div>
                  <Badge 
                    className={`${
                      sip.status === 'Active' 
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}
                  >
                    {sip.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Token Allocations */}
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-medium text-slate-300 mb-4">Token Breakdown</h4>
                    <div className="space-y-3">
                      {sip.allocations.map((allocation, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${allocation.color}`}></div>
                            <span className="text-white font-medium">{allocation.token}</span>
                            <span className="text-slate-400 text-sm">{allocation.percentage}%</span>
                          </div>
                          <span className="text-white font-medium">{allocation.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SIP Details */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-4">Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Invested:</span>
                        <span className="text-white font-medium">${sip.totalInvested.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Frequency:</span>
                        <span className="text-white font-medium">{sip.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Next Execution:</span>
                        <span className="text-white font-medium">{sip.nextExecution}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => handlePauseResume(sip.id, sip.status)}
                  >
                    {sip.status === 'Active' ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Resume
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Modify
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-600 text-emerald-400 hover:bg-emerald-500/10"
                    onClick={() => handleWithdraw(sip.id)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-600 text-red-400 hover:bg-red-500/10"
                    onClick={() => handleCancel(sip.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (if no SIPs) */}
        {userSIPs.length === 0 && (
          <Card className="bg-slate-800/50 border-slate-700 text-center py-12">
            <CardContent>
              <div className="text-slate-400 mb-4">
                <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium text-white mb-2">No Active SIPs</h3>
                <p>Create your first systematic investment plan to get started.</p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white">
                Create Your First SIP
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ManageSIP;
