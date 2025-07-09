
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Repeat, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Non-Custodial",
      description: "Your keys, your crypto. Full control over your investments."
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-400" />,
      title: "Automated via Chainlink",
      description: "Smart contracts execute your SIP automatically."
    },
    {
      icon: <Repeat className="w-8 h-8 text-blue-400" />,
      title: "Uses PancakeSwap",
      description: "Best liquidity and pricing through DEX aggregation."
    },
    {
      icon: <X className="w-8 h-8 text-red-400" />,
      title: "Cancel Anytime",
      description: "No lock-in periods. Stop or modify your SIP anytime."
    }
  ];

  const supportedTokens = [
    { symbol: 'BTC', name: 'Wrapped Bitcoin', color: 'bg-orange-500' },
    { symbol: 'ETH', name: 'Wrapped Ethereum', color: 'bg-blue-500' },
    { symbol: 'BNB', name: 'BNB Token', color: 'bg-yellow-500' },
    { symbol: 'SOL', name: 'Wrapped Solana', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Invest in Crypto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Automatically, On-Chain
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
              Create a decentralized SIP using stablecoins on BNB Chain. 
              Dollar-cost average into your favorite crypto assets with complete control.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/create-sip">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white px-8 py-4 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Choose Our Platform?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Built for the future of decentralized finance
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-800/70 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Tokens Section */}
      <section className="py-16 sm:py-24 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Supported Assets
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Invest in top crypto assets through wrapped tokens
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {supportedTokens.map((token, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 p-6 text-center hover:bg-slate-900/70 transition-colors">
                <div className={`w-16 h-16 rounded-full ${token.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{token.symbol}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {token.symbol}
                </h3>
                <p className="text-slate-400 text-sm">
                  {token.name}
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Wrapped
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
