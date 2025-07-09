
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-white font-bold text-xl">CryptoSIP</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              The first decentralized, non-custodial SIP platform on BNB Chain. 
              Invest in crypto automatically with complete control over your funds.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white text-sm transition-colors flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white text-sm transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  BNB Testnet Explorer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm text-center">
            © 2024 CryptoSIP. Built on BNB Chain. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
