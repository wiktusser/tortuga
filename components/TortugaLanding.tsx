'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Shield, Building, TrendingUp, Users, Check, Menu, X, Globe, Coins, Lock, FileText, BarChart3, Wallet } from 'lucide-react';

const TortugaLanding = () => {
  const phases = {
    phase1: {
      title: 'Phase 1: Tokenized Bonds',
      timeline: 'Live at Launch',
      features: [
        'Swiss-issued, ISIN-certified bonds',
        '5-12% APY yields',
        'Fully collateralized by real estate',
        'ERC-compliant tokens'
      ],
      highlight: 'Ready Today'
    },
    phase2: {
      title: 'Phase 2: DeFi Integration',
      timeline: 'Months 4-6',
      features: [
        'P2P trading platform',
        'Lending against bond tokens',
        'Borrow crypto to buy bonds',
        'Secondary market liquidity'
      ],
      highlight: 'Coming Soon'
    },
    phase3: {
      title: 'Phase 3: Evergreen Basket',
      timeline: 'Months 6-12',
      features: [
        'Diversified RWA basket token',
        'ERC-4626 compatible vault',
        'Auto-reinvesting yields',
        'Single-token exposure'
      ],
      highlight: 'Future'
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof phases>('phase1');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '$16T+', label: 'RWA Market by 2033' },
    { value: '$228T', label: 'Global Real Estate' },
    { value: '5-12%', label: 'APY on Bonds' },
    { value: '0', label: 'Investor Losses' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Tortuga
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="hover:text-teal-400 transition-colors">Problem</a>
              <a href="#solution" className="hover:text-teal-400 transition-colors">Solution</a>
              <a href="#products" className="hover:text-teal-400 transition-colors">Products</a>
              <a href="#team" className="hover:text-teal-400 transition-colors">Team</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#problem" className="block py-2 hover:text-teal-400">Problem</a>
              <a href="#solution" className="block py-2 hover:text-teal-400">Solution</a>
              <a href="#products" className="block py-2 hover:text-teal-400">Products</a>
              <a href="#team" className="block py-2 hover:text-teal-400">Team</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-teal-400">Powered by Estating's Proven Engine</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent">
              Institutional-Grade RWA
              <br />
              <span className="text-4xl md:text-6xl">On-Chain</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Bridge the $16T+ real estate opportunity to Web3. Fully compliant, yield-bearing bonds live from Day 1.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                Start Investing
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Read Documentation
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Today's Landscape Is Broken</h2>
            <p className="text-xl text-gray-400">The RWA space is plagued with problems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <X className="w-8 h-8 text-red-400" />,
                title: "Vaporware Projects",
                description: "Many RWA projects overpromise and underdeliver, lacking true compliance"
              },
              {
                icon: <Globe className="w-8 h-8 text-orange-400" />,
                title: "Capital Without Anchor",
                description: "Billions exit crypto every bull run - almost all off-chain"
              },
              {
                icon: <Lock className="w-8 h-8 text-yellow-400" />,
                title: "Limited Legitimate RWA",
                description: "Few compliant on-chain solutions for portfolio rebalancing"
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Barriers to Access",
                description: "High minimums and geographic restrictions limit participation"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Tortuga Solution</h2>
            <p className="text-xl text-gray-400">Institutional-grade RWA, powered by proven infrastructure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 rounded-xl p-8 border border-teal-500/30">
              <Building className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Proven Assets</h3>
              <p className="text-gray-300 mb-4">Not promises - real bonds with ISINs, audited and bankable</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span className="text-sm text-gray-300">5+ years track record</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span className="text-sm text-gray-300">0 investor losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                  <span className="text-sm text-gray-300">94% success rate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/30">
              <Coins className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Real Yield</h3>
              <p className="text-gray-300 mb-4">Stable returns from income-generating real estate</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-sm text-gray-300">5-12% APY bonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Quarterly payouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Capital appreciation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/30">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Full Compliance</h3>
              <p className="text-gray-300 mb-4">Swiss/Lux law securities, fully regulated</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-sm text-gray-300">ERC-3643 compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-sm text-gray-300">KYC/AML integrated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-sm text-gray-300">Custodian ready</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Roadmap</h2>
            <p className="text-xl text-gray-400">From tokenized bonds to full DeFi integration</p>
          </div>

          {/* Phase Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/50 rounded-lg p-1">
              {(Object.keys(phases) as Array<keyof typeof phases>).map((phase) => (
                <button
                  key={phase}
                  onClick={() => setActiveTab(phase)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === phase
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {phase.replace('phase', 'Phase ')}
                </button>
              ))}
            </div>
          </div>

          {/* Phase Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{phases[activeTab].title}</h3>
                  <p className="text-gray-400">{phases[activeTab].timeline}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  phases[activeTab].highlight === 'Ready Today'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : phases[activeTab].highlight === 'Coming Soon'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {phases[activeTab].highlight}
                </span>
              </div>

              <div className="space-y-3">
                {phases[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {activeTab === 'phase1' && (
                <div className="mt-8 p-6 bg-teal-500/10 rounded-lg border border-teal-500/30">
                  <h4 className="font-semibold mb-3 text-teal-400">Example Live Deals:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-teal-400">12%</div>
                      <div className="text-sm text-gray-400">Annual Coupon</div>
                      <div className="text-xs text-gray-500 mt-1">DR Landbank, 3Y maturity</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">7%</div>
                      <div className="text-sm text-gray-400">Annual Coupon</div>
                      <div className="text-xs text-gray-500 mt-1">US Warehouse, 5Y maturity</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Combined Strength Team</h2>
            <p className="text-xl text-gray-400">TradFi expertise meets DeFi innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Estating Team (TradFi/Asset Side)</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="font-bold text-lg mb-2">Martin Halblaub</h4>
                  <p className="text-sm text-cyan-400 mb-2">Co-Founder & Executive Chairman</p>
                  <p className="text-sm text-gray-400">20+ years in real estate investment banking. Built SIX Digital Exchange as inaugural CEO.</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="font-bold text-lg mb-2">Daniel Vega</h4>
                  <p className="text-sm text-cyan-400 mb-2">Co-Founder & CCO</p>
                  <p className="text-sm text-gray-400">20+ years in Wealth Management. Built IAM networks for Lloyds, Credit Suisse, Julius Bär.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Tortuga Team (Crypto/Tech Side)</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="font-bold text-lg mb-2">Matt Radominski</h4>
                  <p className="text-sm text-teal-400 mb-2">BD Lead</p>
                  <p className="text-sm text-gray-400">Deep DeFi experience with closed deals across L1s, L2s, and major protocols.</p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="font-bold text-lg mb-2">Levani Ilashvili</h4>
                  <p className="text-sm text-teal-400 mb-2">Tech Lead</p>
                  <p className="text-sm text-gray-400">Building in crypto since 2017. Co-founder of Georgia's largest crypto exchange.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Be Part of the $16T+ RWA Revolution
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Get early access to institutional-grade real estate on-chain
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-lg bg-white/20 backdrop-blur border border-white/30 placeholder-white/60 text-white focus:outline-none focus:border-white/60"
                />
                <button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300">
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm mt-4 text-white/70">
                Join 500+ investors already on the waitlist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold">Tortuga</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2025 Tortuga. Institutional-Grade RWA Platform. Powered by Estating.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TortugaLanding;