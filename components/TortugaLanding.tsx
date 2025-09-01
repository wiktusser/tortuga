'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Shield, Building, TrendingUp, Users, Check, Menu, X, Globe, Coins, Lock, FileText, BarChart3, Wallet, ArrowRight, Sparkles, Zap, Star, Layers, Target } from 'lucide-react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { value: '$16T+', label: 'RWA Market by 2033' },
    { value: '$228T', label: 'Global Real Estate' },
    { value: '5-12%', label: 'APY on Bonds' },
    { value: '0', label: 'Investor Losses' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Dark Background */}
      <div className="fixed inset-0 z-0 bg-black"></div>

      {/* Thin Professional Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-xl'}`}>
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-full px-8 py-3 shadow-xl">
          <div className="flex items-center gap-8">
            {/* Logo with Turtle SVG */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center p-1">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-full h-full text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Turtle Shell */}
                  <ellipse cx="12" cy="13" rx="8" ry="5" fill="currentColor" opacity="0.9"/>
                  {/* Shell Pattern */}
                  <path d="M8 11c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" fill="currentColor" opacity="0.7"/>
                  <path d="M12 11c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" fill="currentColor" opacity="0.7"/>
                  {/* Head */}
                  <ellipse cx="12" cy="7" rx="2" ry="2.5" fill="currentColor"/>
                  {/* Legs */}
                  <ellipse cx="6" cy="15" rx="1.5" ry="2" fill="currentColor"/>
                  <ellipse cx="18" cy="15" rx="1.5" ry="2" fill="currentColor"/>
                  <ellipse cx="8" cy="17" rx="1.2" ry="1.5" fill="currentColor"/>
                  <ellipse cx="16" cy="17" rx="1.2" ry="1.5" fill="currentColor"/>
                  {/* Eye */}
                  <circle cx="11.5" cy="6.5" r="0.5" fill="currentColor" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-base font-semibold text-white whitespace-nowrap">
                Tortuga
              </span>
            </div>

            {/* Spacious Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#problem" 
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Problem
              </a>
              <a 
                href="#solution" 
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solution
              </a>
              <a 
                href="#products" 
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Products
              </a>
              <a 
                href="https://docsend.com/view/6ubwequmbg4zkg2s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <FileText className="w-3 h-3" />
                <span>Download Deck</span>
              </a>
            </div>

            {/* Compact Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-1 rounded-md text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-4">
              <a 
                href="#problem" 
                className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Problem
              </a>
              <a 
                href="#solution" 
                className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Solution
              </a>
              <a 
                href="#products" 
                className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Products
              </a>
              <a href="https://docsend.com/view/6ubwequmbg4zkg2s" target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-3 bg-teal-600 text-white rounded-full font-semibold text-center hover:bg-teal-700 transition-colors">
                Download Deck
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Moving gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-teal-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Subtle floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-bounce"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Powered by Estating's Engine</span>
            </div>
          </div>

          {/* Serious Headline */}
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight text-white">
                <span className="block font-normal mb-3">Institutional-Grade</span>
                <span className="block text-teal-400 font-medium">
                  Real World Assets
                </span>
                <span className="block font-light text-4xl md:text-6xl mt-4 text-gray-200">
                  On Blockchain
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              Bridge the $16 trillion RWA opportunity to Web3 with Swiss-regulated, 
              yield-bearing bonds backed by real estate. Built on 5+ years of proven performance.
            </p>

            {/* Professional CTA */}
            <div className="flex justify-center mt-12">
              <a 
                href="https://docsend.com/view/6ubwequmbg4zkg2s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                <span>Download Investment Deck</span>
              </a>
            </div>
          </div>

          {/* Professional Metrics */}
          <div className="mt-32">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-light mb-3 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Credentials */}
          <div className="mt-24 flex flex-col items-center">
            <p className="text-sm text-gray-500 font-medium mb-8 uppercase tracking-wide">Regulatory Compliance & Certification</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>Swiss Securities Law</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-teal-400" />
                <span>ISIN Certified Bonds</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-teal-400" />
                <span>ERC-3643 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-400" />
                <span>Zero Investor Losses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Challenge Section */}
      <section id="problem" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full mb-8">
              <Target className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-300 font-medium">Market Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              The <span className="text-teal-400 font-medium">$16 Trillion</span> Challenge
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Despite massive opportunity, institutional capital faces significant barriers in the RWA space
            </p>
          </div>

          {/* Challenge Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: <X className="w-6 h-6 text-red-400" />,
                title: "Regulatory Uncertainty",
                subtitle: "Compliance Gap",
                description: "Most RWA projects lack proper regulatory framework, creating institutional risk aversion and limiting deployment of capital at scale.",
                impact: "Limited institutional adoption"
              },
              {
                icon: <Globe className="w-6 h-6 text-orange-400" />,
                title: "Capital Flight Risk",
                subtitle: "Market Volatility",
                description: "Institutional capital exits crypto during market downturns with limited on-chain alternatives for stable, yield-generating assets.",
                impact: "$100B+ exits per cycle"
              },
              {
                icon: <Lock className="w-6 h-6 text-yellow-400" />,
                title: "Access Barriers",
                subtitle: "Institutional Friction",
                description: "High minimum investments, geographic restrictions, and complex onboarding processes limit institutional participation in RWA opportunities.",
                impact: "Reduced market liquidity"
              },
              {
                icon: <Shield className="w-6 h-6 text-purple-400" />,
                title: "Trust Deficit",
                subtitle: "Track Record Gap",
                description: "New projects lack proven track records and institutional-grade due diligence, creating hesitation among sophisticated investors.",
                impact: "Conservative allocation strategies"
              }
            ].map((item, index) => (
              <div key={index} className="group relative h-full">
                <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center border border-white/10">
                      {item.icon}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-400 font-medium">
                          {item.subtitle}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed flex-1">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm mt-auto">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-red-300 font-medium">{item.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Market Opportunity Highlight */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-light mb-6 text-white/90">
                  The Opportunity
                </h3>
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  Real estate represents <span className="text-cyan-300 font-medium">$228 trillion</span> in global value, 
                  yet less than <span className="text-red-300 font-medium">0.1%</span> is tokenized. 
                  Institutional demand for compliant, yield-bearing RWA solutions has never been higher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Solution Section */}
      <section id="solution" className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Institutional Solution</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white/90">
              Proven <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent font-normal">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              Built on Estating's 5+ year track record with zero investor losses and 94% success rate. 
              Swiss-regulated, ISIN-certified bonds ready for institutional deployment.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-emerald-500/30 transition-all duration-500 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                      <Building className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Proven Assets</h3>
                      <p className="text-sm text-emerald-400 font-medium">Real Estate Backed</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    Swiss-issued bonds with ISIN certification. Every token represents real, income-generating real estate with full legal backing and institutional-grade documentation.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-sm text-gray-300">5+ years operational history</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-sm text-gray-300">Zero investor losses to date</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-sm text-gray-300">94% project success rate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-cyan-500/30 transition-all duration-500 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                      <Coins className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Stable Yield</h3>
                      <p className="text-sm text-cyan-400 font-medium">5-12% APY</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    Predictable returns from income-generating real estate. Quarterly distributions with transparent reporting and institutional-grade asset management.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300">Quarterly yield distributions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300">Capital appreciation potential</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300">Transparent performance reporting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-blue-500/30 transition-all duration-500 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                      <Shield className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">Full Compliance</h3>
                      <p className="text-sm text-blue-400 font-medium">Swiss Regulated</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    Complete regulatory compliance with Swiss and Luxembourg securities law. ERC-3643 compliant tokens with integrated KYC/AML and custodian readiness.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300">ERC-3643 security tokens</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300">Integrated KYC/AML framework</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300">Institutional custodian ready</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light mb-4 text-white/90">Institutional Advantage</h3>
              <p className="text-gray-400 font-light max-w-3xl mx-auto">
                Unlike nascent RWA projects, Tortuga leverages proven infrastructure with institutional-grade operations from day one.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <Star className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Track Record</h4>
                <p className="text-sm text-gray-400">5+ years, 0 losses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <Layers className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Scale Ready</h4>
                <p className="text-sm text-gray-400">Institutional infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Compliance</h4>
                <p className="text-sm text-gray-400">Swiss/Lux regulated</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Live Assets</h4>
                <p className="text-sm text-gray-400">Available today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products Section */}
      <section id="products" className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Investment Products</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white/90">
              Institutional <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent font-normal">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              Phased rollout designed for institutional adoption, from proven bonds to comprehensive DeFi infrastructure
            </p>
          </div>

          {/* Elegant Phase Selector */}
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-r from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-2">
              {(Object.keys(phases) as Array<keyof typeof phases>).map((phase) => (
                <button
                  key={phase}
                  onClick={() => setActiveTab(phase)}
                  className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-500 ${
                    activeTab === phase
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{phase.replace('phase', 'Phase ')}</span>
                  {activeTab === phase && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Phase Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
              {/* Phase Header */}
              <div className="p-10 border-b border-white/10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-white mb-3">{phases[activeTab].title}</h3>
                    <p className="text-gray-400 text-lg">{phases[activeTab].timeline}</p>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium ${
                    phases[activeTab].highlight === 'Ready Today'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : phases[activeTab].highlight === 'Coming Soon'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      phases[activeTab].highlight === 'Ready Today'
                        ? 'bg-emerald-400'
                        : phases[activeTab].highlight === 'Coming Soon'
                        ? 'bg-yellow-400'
                        : 'bg-purple-400'
                    } animate-pulse`}></div>
                    {phases[activeTab].highlight}
                  </div>
                </div>
              </div>

              {/* Phase Features */}
              <div className="p-10">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {phases[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors">
                          <Check className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Live Deals Showcase for Phase 1 */}
                  {activeTab === 'phase1' && (
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20">
                      <h4 className="text-xl font-semibold mb-6 text-emerald-400 flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Live Investment Opportunities
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-3xl font-light text-emerald-400 mb-1">12.0%</div>
                              <div className="text-sm text-gray-400 font-medium">Annual Coupon</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-400">Dominican Republic</div>
                              <div className="text-xs text-gray-500">Land Development • 3Y</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Available for Investment</span>
                          </div>
                        </div>
                        <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-3xl font-light text-cyan-400 mb-1">7.5%</div>
                              <div className="text-sm text-gray-400 font-medium">Annual Coupon</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-400">United States</div>
                              <div className="text-xs text-gray-500">Industrial Warehouse • 5Y</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-cyan-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Available for Investment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Future Phase Previews */}
                  {activeTab !== 'phase1' && (
                    <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-2xl p-8 border border-white/5">
                      <h4 className="text-xl font-semibold mb-6 text-gray-300 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Coming Soon
                      </h4>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {activeTab === 'phase2' 
                          ? 'Advanced DeFi features will enable institutional-grade trading, lending, and borrowing against tokenized real estate bonds.'
                          : 'Diversified basket tokens will provide single-click exposure to a portfolio of institutional real estate assets with automated yield optimization.'
                        }
                      </p>
                      <div className="flex items-center gap-2 text-sm text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>In Development</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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


      {/* Institutional Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-2xl font-semibold text-white">
                  Tortuga
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Institutional-grade real world assets on-chain. Built on Estating's proven 5+ year track record with zero investor losses.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Swiss Regulated</span>
                <span>ISIN Certified</span>
              </div>
            </div>

            {/* Investment Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Investment Information</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Current Yield Range</span>
                    <span className="text-cyan-400 font-semibold">5-12% APY</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Track Record</span>
                    <span className="text-emerald-400 font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Investor Losses</span>
                    <span className="text-green-400 font-semibold">Zero</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Institutional Inquiries</h4>
              <div className="space-y-4">
                <a 
                  href="https://docsend.com/view/6ubwequmbg4zkg2s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Investment Deck</div>
                    <div className="text-xs text-gray-400">Comprehensive Overview</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all ml-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 Tortuga. Institutional-Grade RWA Platform.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Powered by Estating AG • Swiss Securities Law • ISIN Certified Bonds
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Regulated
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Compliant
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-3 h-3" />
                  Proven
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent -z-10"></div>
      </footer>
    </div>
  );
};

export default TortugaLanding;