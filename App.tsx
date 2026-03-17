import React, { useState, useEffect, useCallback } from 'react';
import { SlideLayout } from './components/SlideLayout';
import { PipelineDiagram } from './components/PipelineDiagram';
import { HierarchyChart } from './components/HierarchyChart';
import { LawsGrid } from './components/LawsGrid';
import * as Viz from './components/LawVisualizations';
import { SlideContent, SlideType } from './types';
import { ChevronLeft, ChevronRight, Menu, Brain, Binary, Network } from 'lucide-react';

const slides: SlideContent[] = [
    {
        id: 'intro',
        type: SlideType.CONTENT,
        title: 'FableCore',
        subtitle: 'The Neurosymbolic Architecture',
        content: (
            <div className="flex flex-col gap-6 mt-4">
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-2">What is Neurosymbolic AI?</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        A <strong>Neurosymbolic Architecture</strong> is a hybrid AI system that fuses the two dominant paradigms of artificial intelligence: 
                        <span className="text-purple-400 font-semibold"> Neural Networks</span> (Connectionism) and 
                        <span className="text-emerald-400 font-semibold"> Symbolic Logic</span> (Classic AI).
                        By combining them, we aim to achieve the "best of both worlds": the fluency of a creative writer with the logical consistency of a compiler.
                    </p>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-2">What is FableCore?</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        FableCore is a fine-tuned LLM system. We are building it by fine-tuning open-source LLMs, starting with a <strong>7B open-source model</strong> for the first version. 
                        This 7B model is small enough for the fine-tuning to be done for free on <strong>Google Colab</strong> for the pre-alpha version of the FableCore app, which will be a web-only app. 
                        In fact, 7B is one of the largest model sizes that can be fine-tuned for free on Google Colab with the aid of <strong>bit quantization</strong> and <strong>LoRA (Low-Rank Adaptation)</strong>.
                        The roadmap ends with integrating <strong>Kimi K2.5</strong> or <strong>K3.0</strong> for the final version of FableCore.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-900/10 p-5 rounded-lg border border-purple-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-purple-500/20 rounded-lg">
                                <Brain className="w-6 h-6 text-purple-400" />
                            </div>
                            <h4 className="text-lg font-bold text-purple-200">Neural Architecture</h4>
                        </div>
                        <p className="text-sm text-purple-100/80 mb-3">
                            <strong>Definition:</strong> Systems modeled after biological brains that learn probabilistic patterns from vast datasets. They are "fuzzy", intuitive, and handle ambiguity well.
                        </p>
                        <div className="text-xs bg-slate-950/50 p-2 rounded text-purple-300 font-mono">
                            Example: Large Language Models (GPT-4, Gemini)
                        </div>
                    </div>

                    <div className="bg-emerald-900/10 p-5 rounded-lg border border-emerald-500/30">
                        <div className="flex items-center gap-3 mb-3">
                             <div className="p-2 bg-emerald-500/20 rounded-lg">
                                <Binary className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h4 className="text-lg font-bold text-emerald-200">Symbolic Architecture</h4>
                        </div>
                        <p className="text-sm text-emerald-100/80 mb-3">
                            <strong>Definition:</strong> Systems based on the explicit manipulation of symbols (logic, math, rules). They are rigid, transparent, and 100% verifiable.
                        </p>
                        <div className="text-xs bg-slate-950/50 p-2 rounded text-emerald-300 font-mono">
                            Example: Compilers, SQL Databases, Knowledge Graphs
                        </div>
                    </div>
                </div>

                 <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700 text-center">
                    <p className="text-slate-400 text-sm italic">
                        "Neural networks hallucinate because they predict words. Symbolic systems don't hallucinate because they verify facts. We combine them to cure the illness."
                    </p>
                </div>
            </div>
        ),
        footer: 'Based on FableCore Technical Blueprints'
    },
    {
        id: 'neuro_symbolic_gap',
        type: SlideType.LIST,
        title: 'The Great Divide',
        subtitle: 'Why Neural and Symbolic are rarely combined',
        bullets: [
            "Incompatibility of Math: Neural networks require differentiable functions (calculus/gradients) to learn. Symbolic logic relies on discrete steps (algebra/boolean) which have zero gradients.",
            "The 'Backpropagation' Problem: You cannot easily 'train' a neural network through a rigid logic gate. The signal gets blocked, preventing learning.",
            "The Silo Effect: Neural AI is statistical and 'black box'. Symbolic AI is rule-based and 'white box'. They speak different mathematical languages.",
            "FableCore's Innovation: We do not merge them at the training level; we merge them at the inference level using a specialized Compiler Pipeline (The Critic)."
        ]
    },
    {
        id: 'neuro_symbolic_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing the Difference',
        subtitle: 'Fuzzy Intuition vs. Hard Logic',
        content: <Viz.VizNeuroSymbolicDiff />
    },
    {
        id: 'vision',
        type: SlideType.LIST,
        title: 'Vision: Beyond Stochastic Mimicry',
        subtitle: 'Moving from probabilistic generation to formal narrative verification.',
        bullets: [
            "Current LLMs: Predict the 'next most likely token' (Probabilistic).",
            "FableCore: Ensures every beat adheres to a deterministic set of Laws (Neurosymbolic).",
            "Core Concept: Fiction as a Constrained Optimization Problem.",
            "Goal: Pareto-Efficient Fiction—uniquely creative yet mathematically optimized."
        ]
    },
    {
        id: 'pipeline',
        type: SlideType.DIAGRAM,
        title: 'The Story Compiler',
        subtitle: 'The Core Three-Stage Pipeline',
        content: <PipelineDiagram />
    },
    /* Law 1 */
    {
        id: 'law_1',
        type: SlideType.LIST,
        title: 'Law 1: Character Consistency',
        subtitle: 'Identity as Immutable State',
        bullets: [
            "Definition: Characters must act according to their established traits unless a transformative event occurs.",
            "Discipline: Modal Logic & Set Theory.",
            "Symbolic Tool: Identity Vector Space. A character is a vector C = <Trait1, Trait2...>. Actions are vector transformations.",
            "Enforcement: The 'Consistency Error' is calculated as the Euclidean distance between the Action Vector and the Character Vector. If Error > Threshold, the Critic rejects the scene."
        ]
    },
    {
        id: 'law_1_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 1',
        subtitle: 'Vector Space Consistency',
        content: <Viz.VizLaw1 />
    },
    /* Law 2 */
    {
        id: 'law_2',
        type: SlideType.LIST,
        title: 'Law 2: Character Likeability',
        subtitle: 'The Mathematics of Empathy',
        bullets: [
            "Definition: Readers must fundamentally value the protagonist's success.",
            "Discipline: Multi-Attribute Utility Theory (MAUT) & Behavioral Economics.",
            "Symbolic Tool: Likeability Utility Function U(L) = w1(Empathy) + w2(Competence) + w3(Proactivity).",
            "Enforcement: 'Save the Cat' moments are injected as high-yield utility events. Negative traits must be offset by high Competence (The 'House M.D.' Coefficient)."
        ]
    },
    {
        id: 'law_2_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 2',
        subtitle: 'The Utility Function U(L)',
        content: <Viz.VizLaw2 />
    },
    /* Law 3 */
    {
        id: 'law_3',
        type: SlideType.LIST,
        title: 'Law 3: Proactive Development',
        subtitle: 'Agency as a Physical Vector',
        bullets: [
            "Definition: The protagonist must force change in the environment, not just react to it.",
            "Discipline: Classical Mechanics (Kinematics).",
            "Symbolic Tool: Agency Velocity (Va). Scenes where Va ≈ 0 (pure reaction) are flagged as 'Drag'.",
            "Enforcement: The 'Protagonist Drive' metric requires that at least 60% of plot turning points originate from the protagonist's output vector."
        ]
    },
    {
        id: 'law_3_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 3',
        subtitle: 'Agency Velocity (Va) > 0',
        content: <Viz.VizLaw3 />
    },
    /* Law 4 */
    {
        id: 'law_4',
        type: SlideType.LIST,
        title: 'Law 4: Narrative Teleology',
        subtitle: 'Optimization Towards Meaning',
        bullets: [
            "Definition: Every scene must advance the story toward a thematic conclusion.",
            "Discipline: Control Theory & Gradient Ascent.",
            "Symbolic Tool: Thematic Attractor Point. The story is modeled as a trajectory in state space seeking a specific coordinate (The Ending).",
            "Enforcement: Gradient checking. If a scene's vector has a 0 or negative dot product with the Target Vector, it is classified as 'Filler' and pruned."
        ]
    },
    {
        id: 'law_4_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 4',
        subtitle: 'Trajectory Optimization (Gradient Ascent)',
        content: <Viz.VizLaw4 />
    },
    /* Law 5 */
    {
        id: 'law_5',
        type: SlideType.LIST,
        title: 'Law 5: Plot Consistency',
        subtitle: 'Causal Integrity',
        bullets: [
            "Definition: Events must follow a strictly causal chain without contradiction.",
            "Discipline: Formal Verification & Graph Theory.",
            "Symbolic Tool: Directed Acyclic Graph (DAG) of causality. Event A -> Event B.",
            "Enforcement: The 'Symbolic Critic' runs a topological sort. If a node requires a parent that hasn't executed (e.g., using an item not yet found), a 'Runtime Exception' is thrown."
        ]
    },
    {
        id: 'law_5_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 5',
        subtitle: 'Directed Acyclic Graph (DAG) Verification',
        content: <Viz.VizLaw5 />
    },
    /* Law 6 */
    {
        id: 'law_6',
        type: SlideType.LIST,
        title: 'Law 6: Narrative Tension',
        subtitle: 'The Negative Uncertainty Principle',
        bullets: [
            "Definition: Tension is the anticipation of a negative outcome.",
            "Discipline: Information Theory & Prospect Theory.",
            "Symbolic Tool: Expected Loss Calculation. Tension (T) = Probability(Failure) × Magnitude(Consequence).",
            "Enforcement: Loss Aversion (λ). The system maintains high T by threatening 'Assets' the reader values (character relationships, resources) using a dynamic risk probability curve."
        ]
    },
    {
        id: 'law_6_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 6',
        subtitle: 'Expected Loss & Tension Curve',
        content: <Viz.VizLaw6 />
    },
    /* Law 7 */
    {
        id: 'law_7',
        type: SlideType.LIST,
        title: 'Law 7: Realism',
        subtitle: 'The Logical Grounding Score',
        bullets: [
            "Definition: The world must adhere to its own internal axioms (Verisimilitude).",
            "Discipline: Ontological Engineering & Modal Logic.",
            "Symbolic Tool: World Axiom Sets. Standard Physics is the default set. Magic is an appended axiom set.",
            "Enforcement: The 'Anthropic Principle of Fiction'. If a dragon flies, the atmospheric density or biological lift equations must be symbolically balanced in the world bible."
        ]
    },
    {
        id: 'law_7_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 7',
        subtitle: 'Axiomatic Intersection (Ontology)',
        content: <Viz.VizLaw7 />
    },
    /* Law 8 */
    {
        id: 'law_8',
        type: SlideType.LIST,
        title: 'Law 8: Conservation of Detail',
        subtitle: 'Chekhov’s Algorithmic Gun',
        bullets: [
            "Definition: No element should be introduced if it is not used.",
            "Discipline: Algorithmic Information Theory (Kolmogorov Complexity).",
            "Symbolic Tool: Reference Counting & Garbage Collection.",
            "Enforcement: Any entity (object, character, trait) introduced in Act 1 initializes a 'Resolved' boolean as False. If the story ends with Unresolved entities, the compile fails."
        ]
    },
    {
        id: 'law_8_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 8',
        subtitle: 'Reference Counting & Garbage Collection',
        content: <Viz.VizLaw8 />
    },
    /* Law 9 */
    {
        id: 'law_9',
        type: SlideType.LIST,
        title: 'Law 9: Comprehension of Detail',
        subtitle: 'Managing Cognitive Load',
        bullets: [
            "Definition: Information must be presented at a rate the audience can absorb.",
            "Discipline: Cognitive Psychology & Channel Capacity.",
            "Symbolic Tool: Shannon Entropy Limit. Humans process ~5-9 'chunks' of new information at once (Miller's Law).",
            "Enforcement: 'Exposition Dumping' triggers a buffer overflow alert. The system fragments high-density data across multiple temporal nodes."
        ]
    },
    {
        id: 'law_9_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 9',
        subtitle: 'Channel Capacity (Miller\'s Limit)',
        content: <Viz.VizLaw9 />
    },
    /* Law 10 */
    {
        id: 'law_10',
        type: SlideType.LIST,
        title: 'Law 10: Wish-Fulfillment',
        subtitle: 'The Utility of Fantasy',
        bullets: [
            "Definition: Fiction must provide a vicarious emotional reward (Catharsis, Power, Romance).",
            "Discipline: Game Design & Reward Schedules.",
            "Symbolic Tool: Dopaminergic Mapping. Scenes are tagged by reward type (Competence Porn, Justice, Validation).",
            "Enforcement: 'Catharsis Debt'. If the protagonist suffers (accumulating debt), the payout (climax) must be proportional to the suffering, modeled like a financial option striking."
        ]
    },
    {
        id: 'law_10_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 10',
        subtitle: 'Catharsis Debt & Payout',
        content: <Viz.VizLaw10 />
    },
    /* Law 11 */
    {
        id: 'law_11',
        type: SlideType.LIST,
        title: 'Law 11: Character Incompatibility',
        subtitle: 'The Ideological Lattice',
        bullets: [
            "Definition: All named characters must possess mutually exclusive belief systems or ideologies.",
            "Discipline: Graph Theory (Vertex Coloring) & Linear Algebra.",
            "Symbolic Tool: Cosine Similarity on Ideological Vectors. The angle between any two character vectors (C_a, C_b) must be > 0.",
            "Enforcement: 'Node Merge'. If Character A and Character B have a Cosine Similarity ≈ 1 (Identical beliefs), the system treats them as redundant and merges them into a single entity to force conflict."
        ]
    },
    {
        id: 'law_11_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 11',
        subtitle: 'Vector Cosine Similarity',
        content: <Viz.VizLaw11 />
    },
    /* Law 12 */
    {
        id: 'law_12',
        type: SlideType.LIST,
        title: 'Law 12: Singularity of Conflict',
        subtitle: 'The Uniqueness Theorem',
        bullets: [
            "Definition: The story must be engineered such that there is only one possible plot and thematic solution to the core problem. If multiple optimal solutions exist (multiple equilibria), the story is structurally loose.",
            "Discipline: Game Theory (Nash Equilibrium) & Convex Optimization.",
            "Symbolic Tool: Global Optimum Verification. Ensuring the narrative loss function L(x) has a single global minimum, not multiple local minima.",
            "Enforcement: 'Loophole Closure'. The Critic simulates alternative strategies. If the protagonist can solve the conflict without the thematic sacrifice (a 'cheap' solution), that path is axiomatically blocked."
        ]
    },
    {
        id: 'law_12_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 12',
        subtitle: 'Global vs Local Optima (Convex Optimization)',
        content: <Viz.VizLaw12 />
    },
    /* Law 13 */
    {
        id: 'law_13',
        type: SlideType.LIST,
        title: 'Law 13: Escalation of Conflict',
        subtitle: 'Positive Feedback Loops',
        bullets: [
            "Definition: The stakes must rise continuously.",
            "Discipline: Control Systems & Exponential Growth Models.",
            "Symbolic Tool: Intensity Function I(t). We require dI/dt > 0.",
            "Enforcement: 'Stagnation Check'. If the threat level in Act 2 < Act 1, the Neural Optimizer introduces a 'Complication Variable' (e.g., ticking clock, resource loss)."
        ]
    },
    {
        id: 'law_13_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 13',
        subtitle: 'Intensity Function I(t)',
        content: <Viz.VizLaw13 />
    },
    /* Law 14 */
    {
        id: 'law_14',
        type: SlideType.LIST,
        title: 'Law 14: Narrative Uniqueness',
        subtitle: 'Avoiding the Mode',
        bullets: [
            "Definition: The story must be novel enough to surprise and intrigue, but familiar enough to resonate.",
            "Discipline: High-Dimensional Statistics & Clustering.",
            "Symbolic Tool: Tropospheric Distance. Calculating the Cosine Similarity between the plot's semantic embedding and the 'Genre Centroid' (Cliché).",
            "Enforcement: Novelty Search. The system perturbs plot points until the similarity score drops below a 'Hackneyed Threshold'."
        ]
    },
    {
        id: 'law_14_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 14',
        subtitle: 'High-Dimensional Clustering & Novelty Search',
        content: <Viz.VizLaw14 />
    },
    /* Law 15 */
    {
        id: 'law_15',
        type: SlideType.LIST,
        title: 'Law 15: Emotional Balance',
        subtitle: 'The Conservation of Struggle',
        bullets: [
            "Definition: The delivery of high-magnitude Wish-Fulfillment (Law 10) must be balanced by a proportional expenditure of 'character work' (sacrifice, struggle, or pain) to maintain logical coherence and audience surrogacy.",
            "Discipline: Behavioral Economics (Equity Theory).",
            "Symbolic Tool: The Emotional Ledger. Tracks the ratio of 'Suffering' (Debits) to 'Triumph' (Credits).",
            "Enforcement: 'Unearned Victory' Exception. If a character achieves high-value goals without corresponding effort/risk, the scene is flagged as 'Contrived' and rejected."
        ]
    },
    {
        id: 'law_15_viz',
        type: SlideType.CONTENT,
        title: 'Visualizing Law 15',
        subtitle: 'The Emotional Ledger (Equity Theory)',
        content: <Viz.VizLaw15 />
    },
    /* Law 16 */
    {
        id: 'law_16',
        type: SlideType.LIST,
        title: 'Law 16: Hierarchy of Importance',
        subtitle: 'The Prime Directive',
        bullets: [
            "Definition: Not all laws are equal. Likeability > Realism.",
            "Discipline: Multi-Objective Optimization (Lexicographic Ordering).",
            "Symbolic Tool: Weighted Objective Function f(x) = w1*L1 + w2*L2...",
            "Enforcement: The 'Rule of Cool'. If Law 7 (Realism) conflicts with Law 2 (Likeability) or Law 6 (Tension), Law 7 is suppressed. The Chart (next slide) defines these weights."
        ]
    },
    {
        id: 'hierarchy_viz',
        type: SlideType.CHART,
        title: 'Visualizing Law 16',
        subtitle: 'The Weighted Objective Function',
        content: <HierarchyChart />
    },
    {
        id: 'all_laws',
        type: SlideType.CONTENT,
        title: 'The Constraint Manifold',
        subtitle: 'Summary of the 16 Laws',
        content: <LawsGrid />
    },
    {
        id: 'conclusion',
        type: SlideType.LIST,
        title: 'Narrative Operating System',
        subtitle: 'Solving the "Hallucination" and "Cliché Slop" Problems',
        bullets: [
            "Symbolic Grounding (Anti-Hallucination): The Symbolic Critic acts as a compiler constraint, rejecting any narrative beat that violates logic or causality (Laws 1, 5, 7), ensuring hallucination-free consistency.",
            "Cliché Elimination (Anti-Slop): The Neural Optimizer does not output the statistical average; it optimizes for the 'Pareto Frontier' of Novelty (Law 14) and Structure, forcing unique solutions.",
            "Deterministic Verification: Unlike standard RLHF which relies on vague preference, FableCore optimizes against a formal objective function defined by the 16 Laws.",
            "The Neurosymbolic Loop: The infinite loop of Generation (Neural) -> Verification (Symbolic) -> Correction (Neural) guarantees the final story is both surprising and logically sound."
        ],
        footer: 'End of Presentation'
    }
];

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="w-screen h-screen bg-slate-950 flex flex-col text-slate-100 relative">
            {/* Background elements for aesthetic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-50" />
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-3xl" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-3xl" />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 relative overflow-hidden">
                <SlideLayout 
                    data={slides[currentIndex]} 
                    isActive={true} 
                    key={currentIndex} // Forces re-render for animation
                />
            </main>

            {/* Navigation Bar */}
            <footer className="h-20 border-t border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-4 text-slate-400 text-sm font-mono">
                    <span className="hidden md:inline">FableCore Architecture</span>
                    <span className="text-slate-600">|</span>
                    <span>{currentIndex + 1} / {slides.length}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-cyan-400"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    
                    {/* Progress Dots - simplified for large number of slides */}
                    <div className="hidden md:flex gap-1 mx-4 max-w-[300px] flex-wrap justify-center">
                        {slides.map((_, idx) => (
                            <div 
                                key={idx}
                                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                    idx === currentIndex 
                                        ? 'bg-cyan-400 w-3' 
                                        : 'bg-slate-700'
                                }`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextSlide}
                        disabled={currentIndex === slides.length - 1}
                        className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-cyan-400"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                <div className="w-[150px] flex justify-end">
                     <div className="text-xs text-slate-500 font-mono text-right hidden md:block">
                        Proprietary<br/>Blueprint
                     </div>
                </div>
            </footer>
        </div>
    );
}