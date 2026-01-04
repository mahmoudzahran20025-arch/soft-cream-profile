"use client";
import { motion } from "framer-motion";
import { Coffee, Milk, Flame, Zap } from "lucide-react";

export default function LiquidGoldLab() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full"
                    >
                        <Zap size={18} />
                        <span className="uppercase tracking-[0.2em] text-sm">The Liquid Gold</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Premium Fusion Lab</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Milkshake Revolution */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-pink-50 to-rose-100 p-10 rounded-[48px] relative overflow-hidden group"
                    >
                        {/* Creamy Texture Background */}
                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[48px] pointer-events-none"
                        />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <Milk size={32} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-2 block">The Texture King</span>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Milkshake Revolution</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Taking the classic milkshake to a <span className="text-gray-900 font-bold">whole new level</span>. Every shake is blended fresh to order, delivering a <span className="text-primary font-bold">velvety, creamy texture</span> that's impossible to replicate at home.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] font-black bg-white px-3 py-1 rounded-full uppercase">Fresh Blended</span>
                                <span className="text-[10px] font-black bg-white px-3 py-1 rounded-full uppercase">Thick & Creamy</span>
                                <span className="text-[10px] font-black bg-white px-3 py-1 rounded-full uppercase">High Margin</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Espresso Fusion */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-stone-800 to-stone-900 text-white p-10 rounded-[48px] relative overflow-hidden group"
                    >
                        {/* Steam Animation */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.4, 0.2], y: [-5, -15, -5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-20 h-40 bg-gradient-to-t from-transparent via-white/5 to-white/10 blur-xl pointer-events-none"
                        />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <Coffee size={32} className="text-white" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2 block">The Caffeine Bridge</span>
                            <h3 className="text-3xl font-bold mb-4">Espresso × Soft Serve</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Where <span className="text-white font-bold">Italian bitterness</span> meets <span className="text-amber-400 font-bold">creamy sweetness</span>. Our Affogato fusion ensures consistent high-margin revenue and year-round customer traffic.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase">High-Margin</span>
                                <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase">Year-Round</span>
                                <span className="text-[10px] font-black bg-amber-600 text-white px-3 py-1 rounded-full uppercase">Premium</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
