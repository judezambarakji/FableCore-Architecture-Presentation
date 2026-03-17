import React from 'react';

const laws = [
    "1. Character Consistency",
    "2. Character Likeability",
    "3. Proactive Development",
    "4. Narrative Teleology",
    "5. Plot Consistency",
    "6. Narrative Tension",
    "7. Realism",
    "8. Conservation of Detail",
    "9. Comprehension of Detail",
    "10. Wish-Fulfillment",
    "11. Incompatibility",
    "12. Singularity of Conflict",
    "13. Escalation of Conflict",
    "14. Narrative Uniqueness",
    "15. Narrative Balance",
    "16. Hierarchy of Importance"
];

export const LawsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full content-start">
            {laws.map((law, index) => (
                <div 
                    key={index}
                    className={`p-4 rounded-lg border flex items-center
                        ${index < 10 
                            ? 'bg-slate-900/40 border-slate-700 text-slate-300' 
                            : 'bg-indigo-950/30 border-indigo-500/30 text-indigo-200'
                        }
                    `}
                >
                    <span className="font-mono text-xs mr-2 opacity-50">L.{index + 1}</span>
                    <span className="font-medium text-sm">{law.split('. ')[1]}</span>
                </div>
            ))}
            <div className="col-span-full mt-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700 text-center text-sm text-slate-400">
                <span className="text-slate-300">Laws 1-10:</span> Standard Quality Requirements (The Basics) <br/>
                <span className="text-indigo-300">Laws 11-16:</span> Structural Integrity & Market Value (The Moat)
            </div>
        </div>
    );
};