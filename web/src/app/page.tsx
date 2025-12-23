import Image from "next/image";
import { Download, Share2, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent mix-blend-difference">
        <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400">STARLINK DECOY</div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Architecture</a>
          <a href="#" className="hover:text-white transition-colors">Research</a>
          <a href="#" className="hover:text-white transition-colors">Team</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[12vw] leading-none font-thin tracking-[0.3em] text-white mt-10 select-none">
          STARLINK
        </h1>
        <p className="mt-8 text-sm text-gray-500 tracking-wide max-w-md">
          Decoy communication systems designed to improve infrastructure resilience
        </p>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer group">
           <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Learn more</span>
           <span className="text-gray-500 group-hover:text-white transition-colors">↓</span>
        </div>
      </section>

      {/* Slider Section (Resilient Communication Infrastructure) */}
      <section className="min-h-screen bg-[#050505] px-6 md:px-12 py-12 flex flex-col relative">
         {/* Tabs */}
         <div className="flex flex-wrap gap-8 mb-20 text-[11px] font-medium tracking-wide text-gray-500 uppercase border-b border-white/5 pb-4">
            <button className="bg-white text-black px-4 py-2 -my-2">Defense Reform</button>
            <button className="hover:text-white transition-colors py-2">Intelligence</button>
            <button className="hover:text-white transition-colors py-2">Systems</button>
            <button className="hover:text-white transition-colors py-2">Research</button>
            <button className="hover:text-white transition-colors py-2">Infrastructure</button>
         </div>

         <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-start mb-8">
               <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">FEATURED ANALYSIS</span>
               <div className="flex gap-2">
                  <button className="p-3 border border-white/10 hover:bg-white/5 transition-colors">
                     <Download size={14} className="text-gray-400" />
                  </button>
                  <button className="p-3 border border-white/10 hover:bg-white/5 transition-colors">
                     <Share2 size={14} className="text-gray-400" />
                  </button>
               </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-medium leading-tight mb-24 tracking-tight">
               Resilient<br />
               Communication<br />
               Infrastructure
            </h2>

            <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-8 max-w-2xl">
               <div>
                  <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">WRITTEN BY</p>
                  <p className="text-sm text-gray-300">Research Team</p>
               </div>
               <div>
                  <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">PUBLISHED</p>
                  <p className="text-sm text-gray-300">Oct 2024</p>
               </div>
               <div>
                  <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">LENGTH</p>
                  <p className="text-sm text-gray-300">12 min</p>
               </div>
            </div>
         </div>

         {/* Slider Navigation */}
         <div className="absolute bottom-12 left-12 flex items-center gap-4 text-[10px] font-mono text-gray-500">
            <ChevronLeft size={14} className="cursor-pointer hover:text-white transition-colors" />
            <span>01 / 05</span>
            <ChevronRight size={14} className="cursor-pointer hover:text-white transition-colors" />
         </div>
      </section>

      {/* Mission Section */}
      <section className="py-40 px-6 md:px-12 flex justify-center bg-black">
        <div className="relative max-w-3xl text-center py-16 px-8">
          {/* Brackets decoration */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gray-600"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gray-600"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gray-600"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gray-600"></div>
          
          <p className="text-2xl md:text-4xl font-light text-gray-200 leading-relaxed tracking-wide">
            Our mission is to secure infrastructure by deploying high-fidelity decoy satellite networks.
          </p>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-6 md:px-12 bg-[#050505]">
        <div className="text-center mb-32">
          <h3 className="text-xl font-medium tracking-[0.1em] text-gray-500 uppercase">SPECIFICATIONS</h3>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full">
          {/* Left Specs */}
          <div className="space-y-24 text-left w-full md:w-1/4">
             <div className="flex justify-between items-start group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Throughput</h4>
                  <p className="text-xs text-gray-500">Up to 250 Mbps</p>
               </div>
               <span className="text-gray-700 text-xs">📶</span>
             </div>
             <div className="flex justify-between items-start group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Signal latency</h4>
                  <p className="text-xs text-gray-500">Low, optimized for real-time</p>
               </div>
               <span className="text-gray-700 text-xs">⚡</span>
             </div>
             <div className="flex justify-between items-start group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Connection stability</h4>
                  <p className="text-xs text-gray-500">Adaptive orbital routing</p>
               </div>
               <span className="text-gray-700 text-xs">📈</span>
             </div>
             <div className="flex justify-between items-start group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Purpose</h4>
                  <p className="text-xs text-gray-500">Infrastructure analysis and modeling</p>
               </div>
               <span className="text-gray-700 text-xs">🎯</span>
             </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3] my-12 md:my-0">
             <Image 
               src="https://placehold.co/800x600/111/FFF?text=Satellite+Dish" 
               alt="Satellite" 
               fill
               className="object-contain drop-shadow-2xl"
             />
          </div>

          {/* Right Specs (Mirrored layout as per screenshot) */}
          <div className="space-y-24 text-right w-full md:w-1/4">
             <div className="flex justify-between items-start flex-row-reverse group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Throughput</h4>
                  <p className="text-xs text-gray-500">Up to 250 Mbps</p>
               </div>
               <span className="text-gray-700 text-xs">📶</span>
             </div>
             <div className="flex justify-between items-start flex-row-reverse group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Signal latency</h4>
                  <p className="text-xs text-gray-500">Low, optimized for real-time</p>
               </div>
               <span className="text-gray-700 text-xs">⚡</span>
             </div>
             <div className="flex justify-between items-start flex-row-reverse group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Connection stability</h4>
                  <p className="text-xs text-gray-500">Adaptive orbital routing</p>
               </div>
               <span className="text-gray-700 text-xs">📈</span>
             </div>
             <div className="flex justify-between items-start flex-row-reverse group">
               <div>
                  <h4 className="text-sm text-gray-300 mb-2">Purpose</h4>
                  <p className="text-xs text-gray-500">Infrastructure analysis and modeling</p>
               </div>
               <span className="text-gray-700 text-xs">🎯</span>
             </div>
          </div>
        </div>
      </section>

      {/* Analytical Infrastructure */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="grid md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div>
            <h3 className="text-4xl md:text-5xl font-light mb-12 leading-tight text-gray-200">
              Analytical infrastructure<br />
              for the modeling<br />
              environment
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Our platform provides a comprehensive modeling environment designed for analyzing resilient communication infrastructure. The system enables simulation of complex network topologies and decoy behavior under various threat scenarios.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-20 max-w-md">
              Advanced simulation logic processes network states in real-time, providing insights into signal routing, connection stability, and infrastructure resilience.
            </p>

            <div className="flex gap-24 pt-8">
              <div>
                <p className="text-5xl font-light text-white">120+</p>
                <p className="text-[10px] text-gray-600 mt-4 tracking-[0.2em] uppercase font-bold">SCENARIOS</p>
              </div>
              <div>
                <p className="text-5xl font-light text-white">5,000+</p>
                <p className="text-[10px] text-gray-600 mt-4 tracking-[0.2em] uppercase font-bold">NODES</p>
              </div>
              <div>
                <p className="text-5xl font-light text-white">10K+</p>
                <p className="text-[10px] text-gray-600 mt-4 tracking-[0.2em] uppercase font-bold">SIMULATIONS</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full flex items-center justify-center">
             {/* Tree Graph Visualization */}
             <div className="relative w-full h-full opacity-40">
                <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-gray-500 rounded-full -translate-x-1/2"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 mt-4">Primary</div>
                
                {/* Lines */}
                <div className="absolute top-1/4 left-1/2 w-[200px] h-[1px] bg-gray-800 origin-left rotate-[135deg]"></div>
                <div className="absolute top-1/4 left-1/2 w-[200px] h-[1px] bg-gray-800 origin-left rotate-[45deg]"></div>
                
                {/* Level 2 Nodes */}
                <div className="absolute top-[45%] left-[30%] w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute top-[45%] left-[30%] text-[10px] text-gray-500 mt-4">Node A</div>
                
                <div className="absolute top-[45%] right-[30%] w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute top-[45%] right-[30%] text-[10px] text-gray-500 mt-4">Node B</div>

                {/* Level 3 Lines */}
                <div className="absolute top-[45%] left-[30%] w-[150px] h-[1px] bg-gray-800 origin-left rotate-[110deg]"></div>
                <div className="absolute top-[45%] left-[30%] w-[150px] h-[1px] bg-gray-800 origin-left rotate-[70deg]"></div>
                
                <div className="absolute top-[45%] right-[30%] w-[150px] h-[1px] bg-gray-800 origin-left rotate-[110deg]"></div>
                <div className="absolute top-[45%] right-[30%] w-[150px] h-[1px] bg-gray-800 origin-left rotate-[70deg]"></div>

                {/* Level 3 Nodes */}
                <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-[20%] left-[20%] text-[10px] text-gray-500 mt-4">Terminal</div>
             </div>
          </div>
        </div>
      </section>

      {/* Analytical Tools Grid */}
      <section className="py-32 px-6 md:px-12 bg-[#080808]">
        <div className="text-center mb-32">
          <h3 className="text-xl font-medium tracking-[0.1em] text-gray-500 uppercase">ANALYTICAL TOOLS FOR RESILIENCE MODELING</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 max-w-7xl mx-auto">
           {[
             { title: "Network Topology Modeling", desc: "Simulate complex satellite network configurations and orbital patterns" },
             { title: "Decoy Behavior Simulation", desc: "Model adversarial detection and response scenarios" },
             { title: "Signal Flow Visualization", desc: "Real-time signal routing and propagation analysis" },
             { title: "Resilience Metrics", desc: "Infrastructure stability assessment under threat conditions" },
             { title: "Threat Scenario Builder", desc: "Construct and test adversarial engagement patterns" },
             { title: "Performance Analytics", desc: "Detailed throughput and latency profiling" }
           ].map((item, i) => (
             <div key={i} className="bg-[#080808] p-12 hover:bg-zinc-900/30 transition-colors group min-h-[280px] flex flex-col justify-center">
               <h4 className="text-lg font-light text-gray-200 mb-4 group-hover:text-white transition-colors">{item.title}</h4>
               <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-40 px-6 md:px-12 bg-black">
         <div className="text-center mb-24">
          <h3 className="text-2xl font-medium tracking-[0.1em] text-gray-500 uppercase">TEAM</h3>
        </div>
        
        <div className="flex justify-center gap-24 flex-wrap max-w-5xl mx-auto">
           {[
             { name: "Dr. Elena Volkov", role: "Research Director" },
             { name: "James Mitchell", role: "Infrastructure Engineer" },
             { name: "Dr. Amir Hassan", role: "Security Analyst" }
           ].map((member, i) => (
             <div key={i} className="text-center group">
               <div className="w-48 h-48 rounded-full bg-[#0a0a0a] mb-8 mx-auto overflow-hidden relative border border-zinc-900 group-hover:border-zinc-700 transition-colors">
                  {/* Placeholder for team member photo */}
               </div>
               <p className="text-base font-light text-gray-300">{member.name}</p>
               <p className="text-xs text-gray-600 mt-3 tracking-wide">{member.role}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="grid md:grid-cols-2 gap-32 max-w-7xl mx-auto">
           <div>
             <h3 className="text-5xl font-light mb-12 text-white">Contact</h3>
             <p className="text-gray-500 text-sm mb-16 leading-relaxed max-w-md">
               For institutional inquiries, partnership opportunities, or technical discussions regarding our decoy satellite infrastructure platform.
             </p>
             
             <div className="space-y-8">
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">INSTITUTIONAL EMAIL</p>
                   <p className="text-gray-300">contact@starlink-decoy.org</p>
                </div>
                
                <button className="px-8 py-4 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all mt-8">
                   Send message
                </button>
             </div>
           </div>
           
           <div className="pt-4">
              <form className="space-y-12">
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-4">EMAIL ADDRESS</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-zinc-900 p-4 text-sm focus:outline-none focus:border-zinc-700 transition-colors text-gray-300" />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-4">MESSAGE (OPTIONAL)</label>
                    <textarea className="w-full bg-[#0a0a0a] border border-zinc-900 p-4 text-sm focus:outline-none focus:border-zinc-700 transition-colors h-48 resize-none text-gray-300"></textarea>
                 </div>
              </form>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 bg-black text-[10px] text-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; 2024 Starlink Decoy Research Platform. Institutional use only.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-gray-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Documentation</a>
        </div>
      </footer>
    </div>
  );
}
