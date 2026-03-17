import React from 'react';
import { ArrowRight, Binary, ScanSearch, FileCheck } from 'lucide-react';

export const PipelineDiagram: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-8">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-4">
                {/* Step 1 */}
                <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center hover:bg-slate-800 transition-all group">
                    <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Binary className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-200 mb-2">1. Hybrid Semantic Encoder</h3>
                    <p className="text-sm text-slate-400">Ingests prose/outlines and "compiles" them into a Symbolic State Machine.</p>
                </div>

                <ArrowRight className="w-8 h-8 text-slate-600 rotate-90 md:rotate-0" />

                {/* Step 2 */}
                <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-purple-500/30 flex flex-col items-center text-center hover:bg-slate-800 transition-all group">
                    <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FileCheck className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-200 mb-2">2. Symbolic Critic</h3>
                    <p className="text-sm text-slate-400">Deterministic verifier. Audits symbolic state against the 16 Laws of Fiction.</p>
                </div>

                <ArrowRight className="w-8 h-8 text-slate-600 rotate-90 md:rotate-0" />

                {/* Step 3 */}
                <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-emerald-500/30 flex flex-col items-center text-center hover:bg-slate-800 transition-all group">
                    <div className="w-16 h-16 rounded-full bg-emerald-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ScanSearch className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-200 mb-2">3. Neural Optimizer</h3>
                    <p className="text-sm text-slate-400">"The Actor". Performs State-Space Search to resolve logic errors found by the Critic.</p>
                </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-900 border border-slate-700 rounded-lg max-w-3xl text-center">
                 <p className="text-slate-300 italic">"Treats a story not as a string of text, but as a Constrained Optimization Problem on a high-dimensional manifold."</p>
            </div>
        </div>
    );
};