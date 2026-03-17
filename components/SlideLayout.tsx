import React from 'react';
import { SlideContent, SlideType } from '../types';
import { BrainCircuit, Activity, Network, Scale, ScrollText, Zap, Gavel } from 'lucide-react';

interface SlideLayoutProps {
    data: SlideContent;
    isActive: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ data, isActive }) => {
    if (!isActive) return null;

    const renderIcon = () => {
        if (data.id.startsWith('law')) return <Gavel className="w-12 h-12 text-indigo-400" />;
        
        switch (data.id) {
            case 'intro': return <BrainCircuit className="w-16 h-16 text-cyan-400 mb-6" />;
            case 'pipeline': return <Activity className="w-12 h-12 text-blue-400" />;
            case 'economics': return <Scale className="w-12 h-12 text-emerald-400" />;
            case 'network': return <Network className="w-12 h-12 text-purple-400" />;
            case 'teleology': return <Zap className="w-12 h-12 text-yellow-400" />;
            default: return <ScrollText className="w-12 h-12 text-slate-400" />;
        }
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-8 md:p-16 animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-6xl w-full h-full flex flex-col">
                {/* Header */}
                <div className="flex flex-col items-start border-b border-slate-700 pb-6 mb-8 w-full">
                    <div className="flex items-center gap-4 mb-2">
                         {(data.type === SlideType.TITLE || data.id.startsWith('law')) && renderIcon()}
                        <h1 className={`${data.type === SlideType.TITLE ? 'text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500' : 'text-3xl md:text-4xl font-semibold text-slate-100'}`}>
                            {data.title}
                        </h1>
                    </div>
                    {data.subtitle && (
                        <h2 className="text-xl md:text-2xl text-slate-400 font-light mt-2">
                            {data.subtitle}
                        </h2>
                    )}
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto">
                    {data.type === SlideType.LIST && data.bullets && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                    <span className="text-lg text-slate-300 leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    {data.content && (
                        <div className="w-full h-full">
                            {data.content}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {data.footer && (
                    <div className="mt-8 pt-4 border-t border-slate-800 w-full text-center md:text-right text-slate-500 text-sm font-mono">
                        {data.footer}
                    </div>
                )}
            </div>
        </div>
    );
};