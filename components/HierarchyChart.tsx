import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartDataPoint } from '../types';

const data: ChartDataPoint[] = [
    { name: 'Efficiency (Teleology)', value: 20 },
    { name: 'Realism', value: 30 },
    { name: 'Plot Consistency', value: 45 },
    { name: 'Char Consistency', value: 60 },
    { name: 'Theme', value: 75 },
    { name: 'Narrative Tension', value: 90 },
    { name: 'Character Likeability', value: 100 },
];

const colors = ['#334155', '#475569', '#64748b', '#94a3b8', '#38bdf8', '#818cf8', '#c084fc'];

export const HierarchyChart: React.FC = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
             <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            width={150} 
                            tick={{ fill: '#e2e8f0', fontSize: 12 }} 
                        />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                            itemStyle={{ color: '#38bdf8' }}
                            cursor={{fill: 'transparent'}}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-6 text-slate-300 text-center max-w-2xl">
                <p>The <strong>Weighted Objective Function</strong>. FableCore prioritizes Likeability and Tension above all else. If maximizing Realism hurts Likeability, the Trade-off Engine discards Realism.</p>
            </div>
        </div>
    );
};