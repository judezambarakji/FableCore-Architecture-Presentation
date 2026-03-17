import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, Cell, ReferenceLine
} from 'recharts';
import { ArrowRight, AlertTriangle, CheckCircle, Scale, Target, Zap, Shield, Brain, MousePointer2, Network, Binary, Info } from 'lucide-react';

/* --- Intro Viz: Neural vs Symbolic --- */
export const VizNeuroSymbolicDiff = () => (
    <div className="flex items-center justify-center w-full h-full gap-8">
        {/* Neural Side */}
        <div className="flex-1 h-full max-h-80 bg-slate-900/50 rounded-xl border border-purple-500/30 p-6 flex flex-col items-center justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50" />
            <h3 className="text-purple-300 font-bold text-lg z-10">Neural Architecture</h3>
            <div className="flex-1 w-full flex items-center justify-center z-10">
                <Network className="w-24 h-24 text-purple-400 animate-pulse" />
            </div>
            <div className="z-10 text-center">
                <p className="text-slate-300 text-sm font-semibold">Continuous & Probabilistic</p>
                <p className="text-slate-500 text-xs mt-2">"Fuzzy Pattern Matching"</p>
            </div>
            {/* Background nodes */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-50" />
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full opacity-50" />
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <path d="M 50 50 Q 150 150 250 50 T 400 150" fill="none" stroke="#a855f7" strokeWidth="2" />
            </svg>
        </div>

        {/* The Gap */}
        <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
             <div className="h-20 w-[2px] bg-slate-700"></div>
             <AlertTriangle className="text-yellow-500 w-8 h-8" />
             <span className="text-xs font-mono uppercase tracking-widest text-center w-24">The Differentiability Gap</span>
             <div className="h-20 w-[2px] bg-slate-700"></div>
        </div>

        {/* Symbolic Side */}
        <div className="flex-1 h-full max-h-80 bg-slate-900/50 rounded-xl border border-emerald-500/30 p-6 flex flex-col items-center justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-50" />
            <h3 className="text-emerald-300 font-bold text-lg z-10">Symbolic Architecture</h3>
            <div className="flex-1 w-full flex items-center justify-center z-10">
                <Binary className="w-24 h-24 text-emerald-400" />
            </div>
            <div className="z-10 text-center">
                <p className="text-slate-300 text-sm font-semibold">Discrete & Deterministic</p>
                <p className="text-slate-500 text-xs mt-2">"Strict Rules & Logic"</p>
            </div>
             {/* Background grid */}
             <div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-10">
                {[...Array(16)].map((_,i) => <div key={i} className="border border-emerald-500" />)}
             </div>
        </div>
    </div>
);

/* --- Law 1: Character Consistency --- */
export const VizLaw1 = () => (
  <div className="flex flex-col items-center justify-center h-full w-full gap-8">
    <div className="relative w-96 h-96 bg-slate-900 border border-slate-700 rounded-lg p-4">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0 opacity-20 pointer-events-none">
        {[...Array(36)].map((_, i) => <div key={i} className="border border-slate-600" />)}
      </div>
      {/* Character Vector */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-300 text-xs font-mono whitespace-nowrap">Identity Vector (State)</span>
      </div>
      
      {/* Allowed Action */}
      <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-80">
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-green-400 text-xs font-mono whitespace-nowrap">Allowed Action</span>
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      {/* Rejected Action */}
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-80">
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-red-400 text-xs font-mono whitespace-nowrap">Rejected (Err &gt; Threshold)</span>
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
    <p className="text-slate-400 text-sm max-w-lg text-center">
      The "Consistency Error" is the Euclidean distance in semantic vector space. Actions too far from the identity centroid are pruned.
    </p>
  </div>
);

/* --- Law 2: Likeability --- */
export const VizLaw2 = () => {
  const data = [
    { subject: 'Empathy', A: 90, fullMark: 100 },
    { subject: 'Competence', A: 85, fullMark: 100 },
    { subject: 'Proactivity', A: 60, fullMark: 100 },
  ];
  return (
    <div className="w-full h-[400px] flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 14 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="Protagonist" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} itemStyle={{ color: '#38bdf8' }} />
        </RadarChart>
      </ResponsiveContainer>
      <p className="text-slate-400 text-sm mt-4">Utility Function U(L). The area of the triangle represents the Total Likeability Score.</p>
    </div>
  );
};

/* --- Law 3: Proactivity (LARGE) --- */
export const VizLaw3 = () => (
  <div className="flex flex-col items-center justify-center h-full w-full gap-16 md:gap-24">
     <div className="flex items-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-24 border-4 border-slate-600 rounded-xl flex items-center justify-center bg-slate-900 text-slate-400 font-mono text-lg font-bold">Environment</div>
            <span className="text-slate-500 text-base">Reaction (Passive)</span>
        </div>
        <ArrowRight className="text-slate-600 w-12 h-12" />
        <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-slate-500 font-bold text-xl">
            Hero
        </div>
        <ArrowRight className="text-emerald-500 animate-pulse w-16 h-16" strokeWidth={4} />
         <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-24 border-4 border-emerald-500/50 rounded-xl flex items-center justify-center bg-emerald-900/20 text-emerald-300 font-mono text-lg font-bold shadow-[0_0_25px_rgba(16,185,129,0.3)]">New State</div>
            <span className="text-emerald-400 text-base font-bold">Velocity &gt; 0</span>
        </div>
     </div>
     <div className="w-full max-w-4xl bg-slate-900 p-8 rounded-xl border border-slate-800 font-mono text-lg text-slate-300 shadow-2xl">
         <span className="text-blue-400">const</span> <span className="text-yellow-200">agencyVelocity</span> = <span className="text-purple-300">calculateVector</span>(heroAction);<br/>
         <span className="text-blue-400">if</span> (agencyVelocity.magnitude &lt; <span className="text-orange-300">THRESHOLD</span>) &#123;<br/>
         &nbsp;&nbsp;<span className="text-red-400">throw</span> <span className="text-blue-400">new</span> <span className="text-yellow-200">PassiveProtagonistError</span>();<br/>
         &#125;
     </div>
  </div>
);

/* --- Law 4: Teleology --- */
export const VizLaw4 = () => (
  <div className="relative w-full h-[300px] bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden">
     {/* Grid */}
     <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
         {[...Array(12)].map((_, i) => <div key={i} className="border-r border-slate-500 h-full"></div>)}
     </div>
     
     {/* Target */}
     <div className="absolute top-10 right-10">
         <Target className="w-12 h-12 text-red-500 animate-pulse" />
         <span className="absolute top-14 left-1/2 -translate-x-1/2 text-red-400 text-xs font-bold mt-2">Ending</span>
     </div>

     {/* Path */}
     <svg className="absolute inset-0 w-full h-full">
         <path d="M 50 250 Q 150 150 250 200 T 450 100 T 700 80" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5 5" className="animate-[dash_3s_linear_infinite]" />
         <circle cx="50" cy="250" r="6" fill="#38bdf8" />
         <circle cx="250" cy="200" r="4" fill="#64748b" />
         <circle cx="450" cy="100" r="4" fill="#64748b" />
     </svg>
     
     {/* Bad Path */}
     <svg className="absolute inset-0 w-full h-full opacity-30">
        <path d="M 250 200 L 300 280 L 200 290" fill="none" stroke="#ef4444" strokeWidth="2" />
        <text x="260" y="290" fill="#ef4444" fontSize="12">Pruned (No Convergence)</text>
     </svg>

     <div className="absolute bottom-4 left-4 text-xs text-slate-500 font-mono">
         Gradient Ascent: Optimizing for Thematic Conclusion
     </div>
  </div>
);

/* --- Law 5: Plot Consistency (LARGE) --- */
export const VizLaw5 = () => (
  <div className="flex flex-col items-center justify-center gap-16 w-full h-full">
     <div className="flex items-center gap-8">
        {/* Node A */}
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-blue-900 border-4 border-blue-500 flex items-center justify-center text-blue-100 font-bold text-3xl shadow-[0_0_20px_rgba(59,130,246,0.4)]">A</div>
            <span className="text-lg text-slate-300 mt-4 font-mono bg-slate-900 px-3 py-1 rounded">Find Key</span>
        </div>
        
        <ArrowRight className="text-slate-600 w-16 h-16" strokeWidth={1} />
        
        {/* Node B */}
         <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-blue-900 border-4 border-blue-500 flex items-center justify-center text-blue-100 font-bold text-3xl shadow-[0_0_20px_rgba(59,130,246,0.4)]">B</div>
            <span className="text-lg text-slate-300 mt-4 font-mono bg-slate-900 px-3 py-1 rounded">Unlock Door</span>
        </div>

        <ArrowRight className="text-slate-600 w-16 h-16" strokeWidth={1} />

        {/* Node C */}
         <div className="flex flex-col items-center relative group">
            <div className="w-24 h-24 rounded-2xl bg-slate-800 border-4 border-slate-600 flex items-center justify-center text-slate-500 font-bold text-3xl">C</div>
            <span className="text-lg text-slate-500 mt-4 font-mono bg-slate-900 px-3 py-1 rounded">Enter Room</span>
            
            {/* Error Logic Visual */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-red-900/90 text-red-100 text-lg p-4 rounded-xl border-2 border-red-500 w-64 text-center opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-xl pointer-events-none">
                <AlertTriangle className="inline mb-1 mr-2" size={20}/>
                Runtime Error: Dependency B not met
            </div>
        </div>
     </div>
     
     <div className="p-8 bg-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full shadow-lg">
         <div className="flex items-center gap-3 text-red-400 mb-3 font-mono text-lg font-bold">
             <AlertTriangle size={24} />
             <span>Causal Violation Detected</span>
         </div>
         <p className="text-slate-300 text-base leading-relaxed">
             The Symbolic Critic builds a DAG (Directed Acyclic Graph). You cannot traverse edge B-&gt;C without visiting node A first. This prevents logic holes.
         </p>
     </div>
  </div>
);

/* --- Law 6: Tension --- */
export const VizLaw6 = () => {
  const data = [
    { name: 'Setup', tension: 10 },
    { name: 'Inciting', tension: 30 },
    { name: 'Rising 1', tension: 45 },
    { name: 'Midpoint', tension: 80 },
    { name: 'Lull', tension: 60 },
    { name: 'Climax', tension: 100 },
    { name: 'Resolution', tension: 20 },
  ];

  return (
    <div className="w-full h-[400px] flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTension" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} itemStyle={{ color: '#f59e0b' }} />
          <Area type="monotone" dataKey="tension" stroke="#f59e0b" fillOpacity={1} fill="url(#colorTension)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex gap-4 text-sm text-slate-400">
         <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-yellow-500 rounded-full" />
             Expected Loss Calculation
         </div>
      </div>
    </div>
  );
};

/* --- Law 7: Realism --- */
export const VizLaw7 = () => (
  <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <div className="flex items-center justify-center gap-8 text-sm font-mono">
          <div className="p-4 border border-blue-500/50 bg-blue-900/20 rounded-lg text-blue-300 w-48 text-center">
              <h4 className="font-bold mb-2">Axiom Set A (Physics)</h4>
              <ul className="text-left space-y-1 opacity-70">
                  <li>- Gravity = 9.8m/s²</li>
                  <li>- Conservation of Mass</li>
                  <li>- Thermodynamics</li>
              </ul>
          </div>
          <div className="text-2xl text-slate-500">+</div>
          <div className="p-4 border border-purple-500/50 bg-purple-900/20 rounded-lg text-purple-300 w-48 text-center">
              <h4 className="font-bold mb-2">Axiom Set B (Magic)</h4>
              <ul className="text-left space-y-1 opacity-70">
                  <li>- Mana cost &gt; 0</li>
                  <li>- Elemental Rock Paper Scissors</li>
              </ul>
          </div>
      </div>
      <ArrowRight className="rotate-90 text-slate-600" />
      <div className="w-full max-w-lg p-4 border border-slate-600 rounded bg-slate-900 text-center">
          <h3 className="text-slate-200 font-bold mb-2">World Bible (Ontology)</h3>
          <p className="text-slate-400 text-xs">
              Intersection is verified. "If a fireball is thrown (Set B), the heat transfer (Set A) must still burn wood."
          </p>
      </div>
  </div>
);

/* --- Law 8: Conservation of Detail (LARGE) --- */
export const VizLaw8 = () => (
    <div className="w-full h-full flex items-center justify-center gap-16 md:gap-32">
        <div className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <span className="text-lg text-slate-400 font-medium">Unused Asset</span>
            <div className="w-32 h-32 bg-slate-800 border-2 border-slate-600 rounded-xl flex items-center justify-center text-slate-500 text-xl font-mono relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">Ref: 0</div>
                Item X
            </div>
            <span className="text-red-500 text-sm font-mono border border-red-500/50 px-2 py-1 rounded bg-red-950/20">Garbage Collected</span>
        </div>

        <div className="w-[2px] h-64 bg-slate-700/50" />

        <div className="flex flex-col items-center gap-4 group">
            <span className="text-lg text-cyan-400 font-medium">Chekhov's Gun</span>
            <div className="w-40 h-40 bg-slate-800 border-4 border-cyan-500 rounded-xl flex items-center justify-center text-cyan-300 text-2xl font-mono relative shadow-[0_0_30px_rgba(34,211,238,0.3)] group-hover:scale-105 transition-transform">
                 <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-900 text-sm px-3 py-1 rounded-full font-bold border-2 border-slate-900">Ref: 2</div>
                Gun
            </div>
            <span className="text-emerald-400 text-lg font-mono font-bold">Act 3: Fired</span>
        </div>
    </div>
);

/* --- Law 9: Comprehension --- */
export const VizLaw9 = () => {
    const data = [
        { time: 'T1', info: 40 },
        { time: 'T2', info: 95 }, // Overload
        { time: 'T3', info: 50 },
        { time: 'T4', info: 45 },
    ];
    return (
        <div className="w-full h-[400px] flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis dataKey="time" tick={{fill: '#94a3b8'}} />
                    <YAxis hide />
                     {/* Limit Line - Moved label to not obscure data */}
                    <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="3 3" 
                        label={{ position: 'insideTopLeft', value: 'Miller Limit (7±2 chunks)', fill: '#ef4444', fontSize: 14, dy: -10 }} 
                    />
                    <Bar dataKey="info" fill="#64748b">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.info > 80 ? '#ef4444' : '#38bdf8'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
             <p className="text-slate-400 text-sm mt-4">Buffer Overflow: Scene T2 dumps too much exposition. The Compiler fragments this node.</p>
        </div>
    );
};

/* --- Law 10: Wish Fulfillment (Adjusted) --- */
export const VizLaw10 = () => (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-0">
        {/* Graph Container */}
        <div className="relative w-full max-w-5xl h-[40vh] min-h-[300px] flex items-end justify-between px-4 md:px-16 border-b-2 border-slate-700">
             {/* Struggle */}
             <div className="flex flex-col items-center gap-2 md:gap-4 w-1/3">
                 <div className="w-full max-w-[120px] h-[50%] md:h-[60%] bg-red-900/30 border-2 border-red-500/50 rounded-t-xl flex items-center justify-center animate-[pulse_3s_infinite]">
                     <span className="text-red-400 text-sm md:text-lg font-bold">Suffering</span>
                 </div>
                 <span className="text-slate-400 text-sm md:text-lg font-mono mb-2 md:mb-4">Act 2</span>
             </div>

             <ArrowRight className="mb-[10%] text-slate-600 w-8 h-8 md:w-16 md:h-16 opacity-50" />

              {/* Reward */}
             <div className="flex flex-col items-center gap-2 md:gap-4 w-1/3 h-full justify-end">
                 <div className="w-full max-w-[120px] h-[80%] bg-yellow-500/20 border-2 border-yellow-400 rounded-t-xl flex items-center justify-center relative shadow-[0_0_50px_rgba(250,204,21,0.3)]">
                     <Zap className="text-yellow-400 w-8 h-8 md:w-16 md:h-16 animate-bounce" />
                 </div>
                 <span className="text-slate-100 text-sm md:text-lg font-mono font-bold mb-2 md:mb-4">Climax</span>
             </div>
        </div>
        <div className="mt-8 md:mt-12 text-center max-w-3xl px-4">
            <h3 className="text-lg md:text-2xl text-yellow-100 font-bold mb-2">Dopaminergic Mapping</h3>
            <p className="text-sm md:text-lg text-slate-400">High-risk investment (Suffering) yields high-dividend payout (Catharsis). This mechanism mimics variable reward schedules in game design.</p>
        </div>
    </div>
);

/* --- Law 11: Incompatibility (LARGE) --- */
export const VizLaw11 = () => (
    <div className="flex items-center justify-center h-full w-full gap-24 md:gap-32">
        <div className="flex flex-col items-center gap-8 group">
             <h3 className="text-slate-300 font-mono text-xl border-b border-slate-700 pb-2">Case A: Redundant</h3>
             <div className="relative w-64 h-64 bg-slate-900 rounded-full border-4 border-slate-700 transition-colors group-hover:border-red-900/50">
                 {/* Vectors close together */}
                 <div className="absolute bottom-1/2 left-1/2 w-[2px] h-1/2 bg-slate-500 origin-bottom transform -rotate-6 transition-transform group-hover:rotate-0"></div>
                 <div className="absolute bottom-1/2 left-1/2 w-[2px] h-1/2 bg-slate-500 origin-bottom transform rotate-6 transition-transform group-hover:rotate-0"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                     MERGE
                 </div>
                 <span className="absolute top-4 right-4 text-sm text-red-400 font-mono">Sim ≈ 1.0</span>
             </div>
             <span className="text-lg text-red-400 font-bold">Merge Required</span>
        </div>

        <div className="flex flex-col items-center gap-8">
             <h3 className="text-slate-300 font-mono text-xl border-b border-slate-700 pb-2">Case B: Conflict</h3>
             <div className="relative w-64 h-64 bg-slate-900 rounded-full border-4 border-slate-700">
                 {/* Vectors opposed */}
                 <div className="absolute bottom-1/2 left-1/2 w-[3px] h-1/2 bg-blue-500 origin-bottom transform -rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                 <div className="absolute bottom-1/2 left-1/2 w-[3px] h-1/2 bg-orange-500 origin-bottom transform rotate-45 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                 <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-mono">110°</div>
                 <span className="absolute top-8 right-0 text-sm text-emerald-400 font-mono">Sim &lt; 0.5</span>
             </div>
             <span className="text-lg text-emerald-400 font-bold">Valid Drama</span>
        </div>
    </div>
);

/* --- Law 12: Singularity --- */
export const VizLaw12 = () => (
    <div className="flex flex-col items-center justify-center w-full h-full">
         <div className="relative w-full max-w-2xl h-64 border-b border-l border-slate-600">
             {/* Loss Function Curve */}
             <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible">
                 <path d="M 0 20 Q 100 200 300 200 T 600 20" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                 {/* Global Minima */}
                 <path d="M 0 50 C 150 50, 200 250, 300 250 C 400 250, 450 50, 600 50" fill="none" stroke="#38bdf8" strokeWidth="3" />
             </svg>
             <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
             <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-blue-400 text-xs">Global Thematic Optimum</span>
             
             {/* Blocked Local Minima */}
             <div className="absolute bottom-[20%] left-[20%] text-slate-600 text-xs">
                 <AlertTriangle size={12} className="inline mr-1" />
                 Cheap Solution (Blocked)
             </div>
         </div>
         <p className="mt-8 text-slate-400 text-sm">
             The narrative structure must form a Convex Function with a single global minimum (The Ending).
         </p>
    </div>
);

/* --- Law 13: Escalation --- */
export const VizLaw13 = () => {
    const data = [
        { t: 0, stakes: 10 },
        { t: 1, stakes: 15 },
        { t: 2, stakes: 25 },
        { t: 3, stakes: 40 },
        { t: 4, stakes: 70 },
        { t: 5, stakes: 100 },
    ];
    return (
        <div className="w-full h-[400px] flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="t" hide />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                    <Line type="monotone" dataKey="stakes" stroke="#ef4444" strokeWidth={3} dot={{ r: 6, fill: '#ef4444' }} />
                </LineChart>
            </ResponsiveContainer>
            <div className="mt-2 text-red-400 font-mono text-sm">d(Intensity)/dt &gt; 0</div>
            <p className="text-slate-500 text-xs">Exponential Growth of Stakes</p>
        </div>
    );
};

/* --- Law 14: Uniqueness (INTERACTIVE) --- */
export const VizLaw14 = () => {
    const [hoveredRegion, setHoveredRegion] = useState<'genre' | 'novel' | null>(null);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
            <div className="relative w-[500px] h-[500px] bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                         {[...Array(36)].map((_, i) => <div key={i} className="border border-slate-500"></div>)}
                    </div>
                </div>

                {/* Genre Cluster Area (Interactive) */}
                <div 
                    className={`absolute w-64 h-64 rounded-full transition-all duration-500 flex items-center justify-center cursor-help
                        ${hoveredRegion === 'genre' ? 'bg-slate-700/30 scale-105 shadow-[0_0_50px_rgba(71,85,105,0.3)]' : 'bg-slate-800/30 blur-xl'}
                    `}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setHoveredRegion('genre')}
                    onMouseLeave={() => setHoveredRegion(null)}
                >
                     {/* Cliché Points */}
                     {[...Array(30)].map((_, i) => (
                        <div 
                            key={i} 
                            className="absolute w-2 h-2 bg-slate-500 rounded-full opacity-40"
                            style={{
                                top: `${50 + (Math.random() * 60 - 30)}%`, 
                                left: `${50 + (Math.random() * 60 - 30)}%`
                            }}
                        />
                    ))}
                    {hoveredRegion === 'genre' && (
                        <div className="absolute z-10 text-center pointer-events-none">
                            <span className="text-slate-300 font-bold block text-lg">Genre Centroid</span>
                            <span className="text-slate-400 text-xs">High Cliché Density</span>
                        </div>
                    )}
                </div>

                {/* Distance Line */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#475569" strokeWidth="2" strokeDasharray="6 6" />
                    <text x="65%" y="40%" fill="#64748b" fontSize="12" className="font-mono">Tropospheric Distance</text>
                </svg>

                {/* Novel Point Area (Interactive) */}
                <div 
                    className="absolute w-24 h-24 flex items-center justify-center cursor-help z-10"
                    style={{ top: '15%', right: '15%' }}
                    onMouseEnter={() => setHoveredRegion('novel')}
                    onMouseLeave={() => setHoveredRegion(null)}
                >
                    <div className={`w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 ${hoveredRegion === 'novel' ? 'scale-150 animate-none' : 'animate-pulse'}`} />
                     {hoveredRegion === 'novel' && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-cyan-900/90 text-cyan-100 p-3 rounded-lg border border-cyan-500 w-48 text-center backdrop-blur-md shadow-xl pointer-events-none">
                            <p className="font-bold text-sm mb-1">Novelty Threshold Met</p>
                            <p className="text-[10px] text-cyan-200/80">
                                This plot point exists in semantic space far enough from the genre centroid to be unique, but close enough to be recognizable.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Legend / Info Panel */}
            <div className="flex gap-8 text-sm bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <div className={`flex items-center gap-2 transition-opacity ${hoveredRegion && hoveredRegion !== 'genre' ? 'opacity-30' : 'opacity-100'}`}>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <span className="text-slate-400">Genre Clichés (The Mode)</span>
                </div>
                <div className={`flex items-center gap-2 transition-opacity ${hoveredRegion && hoveredRegion !== 'novel' ? 'opacity-30' : 'opacity-100'}`}>
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    <span className="text-cyan-300 font-bold">Unique Narrative Path</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <MousePointer2 size={14} />
                    <span className="italic">Hover chart for details</span>
                </div>
            </div>
        </div>
    );
};

/* --- Law 15: Emotional Balance (Adjusted) --- */
export const VizLaw15 = () => (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 md:gap-16">
        {/* Scale Container - Explicit height to contain the top elements */}
        <div className="relative w-full max-w-4xl h-64 md:h-80 flex items-end justify-center">
            
            {/* The Bar */}
            <div className="relative w-full h-6 md:h-8 bg-slate-700 rounded-full flex justify-between items-center px-8 md:px-16 shadow-2xl z-10">
                 {/* Left Weight: Struggle */}
                 {/* Positioned relative to the bar, moving up */}
                 <div className="relative -top-24 md:-top-32 flex flex-col items-center group cursor-pointer transition-transform hover:scale-105 origin-bottom">
                     <div className="w-28 h-28 md:w-40 md:h-40 bg-red-900/90 rounded-2xl border-4 border-red-500 flex items-center justify-center text-red-100 font-bold text-lg md:text-2xl shadow-[0_10px_30px_rgba(239,68,68,0.3)]">
                         Suffering
                     </div>
                     <span className="text-red-400 text-sm md:text-lg font-mono mt-4 font-bold bg-slate-950/50 px-3 py-1 rounded">DEBITS</span>
                 </div>

                 {/* Right Weight: Reward */}
                 <div className="relative -top-24 md:-top-32 flex flex-col items-center group cursor-pointer transition-transform hover:scale-105 origin-bottom">
                     <div className="w-28 h-28 md:w-40 md:h-40 bg-yellow-600/90 rounded-2xl border-4 border-yellow-400 flex items-center justify-center text-yellow-100 font-bold text-lg md:text-2xl shadow-[0_10px_30px_rgba(234,179,8,0.3)]">
                         Triumph
                     </div>
                     <span className="text-yellow-400 text-sm md:text-lg font-mono mt-4 font-bold bg-slate-950/50 px-3 py-1 rounded">CREDITS</span>
                 </div>
            </div>

            {/* Fulcrum Base */}
             <div className="absolute bottom-0 w-0 h-0 border-l-[30px] md:border-l-[40px] border-l-transparent border-r-[30px] md:border-r-[40px] border-r-transparent border-b-[50px] md:border-b-[60px] border-b-slate-600 mb-[-50px] md:mb-[-60px]"></div>
        </div>
        
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-slate-900 border border-slate-700 rounded-xl max-w-3xl text-center shadow-lg">
            <h4 className="text-slate-200 font-bold mb-2 text-lg md:text-xl">Behavioral Economics (Equity Theory)</h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Audience surrogacy breaks if the <span className="text-yellow-400">Reward</span> &gt; <span className="text-red-400">Effort</span>. 
                The Emotional Ledger must balance to zero to prevent the protagonist from becoming a "Mary Sue".
            </p>
        </div>
    </div>
);
