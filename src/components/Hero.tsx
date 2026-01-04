"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, MapPin, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const badges = [
    { icon: Factory, label: "Standardized Mixes", desc: "Zero-Dependency Supply Chain" },
    { icon: MapPin, label: "Strategic Footprint", desc: "Maadi • Downtown • Zamalek • Sahel" },
    { icon: TrendingUp, label: "Scalability Engine", desc: "5 Branches / Year" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <Image
                        src={getAssetPath("/maadi_front 1.jpg")}
                        alt="Soft Cream Maadi Flagship"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">

                {/* Sovereign Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 px-5 py-2 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-md"
                >
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-primary">Infrastructure Dominance</span>
                </motion.div>

                {/* Headlines */}
                <div className="max-w-5xl mx-auto space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-5xl md:text-[4.5rem] font-black tracking-tight leading-[1.1] text-white"
                    >
                        The Sovereign of<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-300 italic">Soft Serve Infrastructure</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Re-engineering the Egyptian Dairy Experience through <span className="text-white font-semibold">Italian Precision</span> & <span className="text-white font-semibold">Local Soul</span>.
                    </motion.p>
                </div>

                {/* Performance Badges */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    {badges.map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8 + (i * 0.15), duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[32px] text-center group hover:bg-white/10 transition-colors"
                        >
                            <badge.icon size={28} className="mx-auto mb-3 text-primary" />
                            <div className="text-sm font-bold text-white mb-1">{badge.label}</div>
                            <div className="text-[11px] text-gray-400">{badge.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Explore Infrastructure</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
