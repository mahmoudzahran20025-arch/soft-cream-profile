"use client";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, Zap, BarChart3, Binary, Layers } from "lucide-react";

export default function ManufacturingExcellence() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #C71585 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6"
                    >
                        <Binary size={16} className="text-primary" />
                        <span className="text-sm font-bold uppercase tracking-widest">Scalability DNA</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Manufacturing <span className="text-primary">Excellence</span></h2>
                    <p className="text-gray-400 text-lg">Our advantage isn't just taste; it's our proprietary <span className="text-white font-bold">Standardized Formulation System</span>.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { title: "Proprietary Mixes", desc: "In-house manufacturing of liquid mixes ensures zero dependency on external supply chains and maximum margin control.", icon: Layers },
                        { title: "Standardized Formula", desc: "Digitalized mixing protocols guarantee that branch #50 tastes exactly like branch #1.", icon: Binary },
                        { title: "Italian Hardware", desc: "Exclusive use of high-performance Italian machinery for the world's smoothest 'Overrun' (creamy texture).", icon: Settings },
                        { title: "Quality Benchmarking", desc: "Real-time consistency checks using specialized testing equipment at the production hub.", icon: ShieldCheck },
                        { title: "Lean Logistics", desc: "Centralized production with cold-chain distribution minimizes waste and overhead costs.", icon: Zap },
                        { title: "Margin Expansion", desc: "Control of the raw material 'Mix' allows for a 35% higher net profit compared to traditional competitors.", icon: BarChart3 }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="flex items-start gap-6 p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                                {/* Number background */}
                                <span className="absolute top-4 right-8 text-8xl font-black text-white/5 pointer-events-none italic">{idx + 1}</span>

                                <div className="shrink-0 p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scale Visual CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 p-12 rounded-[56px] bg-gradient-to-r from-primary/10 to-accent/5 border border-white/10 text-center flex flex-col items-center"
                >
                    <h4 className="text-2xl font-bold mb-4">Infrastructure Ready for Regional Domination</h4>
                    <div className="flex flex-wrap justify-center gap-12 mt-8">
                        <div className="text-center">
                            <div className="text-4xl font-black text-white">5</div>
                            <div className="text-[10px] text-primary uppercase font-bold tracking-widest mt-1">Branches / Year</div>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-white">100%</div>
                            <div className="text-[10px] text-primary uppercase font-bold tracking-widest mt-1">Quality Replication</div>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-white">35%+</div>
                            <div className="text-[10px] text-primary uppercase font-bold tracking-widest mt-1">Margin Advantage</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
