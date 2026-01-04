"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Globe, Wallet, Zap } from "lucide-react";

function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: string; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            const totalFrames = duration * 60;
            const increment = end / totalFrames;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function FinancialHighlights() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Glowing Background Orbs */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-3xl">
                        <Zap size={18} className="text-yellow-400" />
                        <span className="text-sm font-black tracking-[0.2em] uppercase">Impact Analysis</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                        Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-500">Powerhouse</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Big Revenue Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-12 rounded-[56px] backdrop-blur-3xl shadow-2xl flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-8">Target Revenue 2026</p>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-7xl md:text-[9rem] font-black text-white italic leading-none tracking-tighter">
                                    <AnimatedCounter value="60" suffix="M" />
                                </span>
                                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">EGP</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-sm uppercase font-bold tracking-widest text-gray-400">
                                <span>Execution Progress</span>
                                <span className="text-white">85% Realization</span>
                            </div>
                            <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden p-1 border border-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-primary via-accent to-blue-600 rounded-full shadow-[0_0_20px_rgba(199,21,133,0.5)]"
                                />
                            </div>
                            <p className="text-xs text-gray-500 italic">Projected net profit margin: 38% after infrastructure scale.</p>
                        </div>
                    </motion.div>

                    {/* Scalability Roadmap */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[48px] backdrop-blur-md flex-1"
                        >
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Globe className="text-blue-400" />
                                Regional Scaling
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'UAE (Dubai Hub)', phase: 'Phase 2 Expansion' },
                                    { name: 'KSA (Riyadh/Jeddah)', phase: 'Strategic Partnership' },
                                    { name: 'Kuwait (Avenues)', phase: 'Market Entry Q1 2027' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-l-[6px] border-primary group hover:bg-white/10 transition-colors">
                                        <span className="font-bold text-lg">{item.name}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.phase}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.a
                            href="https://wa.me/201007543497?text=I%20am%20interested%20in%20the%20Soft%20Cream%20Investment%20Opportunity"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary p-10 rounded-[48px] flex items-center justify-between group cursor-pointer hover:bg-primary/90 transition-colors"
                        >
                            <div>
                                <h4 className="text-2xl font-black uppercase text-black italic">Investment Prospect</h4>
                                <p className="text-black/80 font-medium">Contact us on WhatsApp for Full Details</p>
                            </div>
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <TrendingUp size={30} />
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
