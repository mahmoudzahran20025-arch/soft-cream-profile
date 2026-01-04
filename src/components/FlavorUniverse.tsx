"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Leaf, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const flavors = [
    { name: "Mango", colorHex: "#FF9800", bgGradient: "from-orange-300 to-amber-500", ingredient: "100% Alphonso Pulp", note: "No artificial colors" },
    { name: "Vanilla", colorHex: "#F5E6D3", bgGradient: "from-amber-50 to-amber-200", ingredient: "Madagascar Bean", note: "Black-speck texture" },
    { name: "Chocolate", colorHex: "#4A2C2A", bgGradient: "from-amber-800 to-stone-900", ingredient: "70% Dark Cacao", note: "Ethically sourced" },
    { name: "Berry", colorHex: "#7C3AED", bgGradient: "from-purple-400 to-rose-600", ingredient: "Forest Harvest", note: "Flash-frozen" },
    { name: "Yogurt", colorHex: "#E3F2FD", bgGradient: "from-blue-50 to-sky-200", ingredient: "Live Probiotic", note: "Zero refined sugar" },
    { name: "Lemon Mint", colorHex: "#7CB342", bgGradient: "from-lime-300 to-emerald-500", ingredient: "Fresh Citrus + Mint", note: "Garden-fresh" },
    { name: "Slushy", colorHex: "#00BCD4", bgGradient: "from-cyan-300 to-sky-500", ingredient: "Tropical Blend", note: "Hydration booster" },
    { name: "Strawberry", colorHex: "#E91E63", bgGradient: "from-rose-400 to-pink-600", ingredient: "Egyptian Farm-to-Cone", note: "Peak ripeness" },
];

export default function FlavorUniverse() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const activeFlavor = activeIndex !== null ? flavors[activeIndex] : null;

    return (
        <section className="py-24 bg-gradient-to-b from-[#FFFAFA] to-white overflow-hidden relative">
            {/* Dynamic Background Glow */}
            <AnimatePresence>
                {activeFlavor && (
                    <motion.div
                        key={activeFlavor.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.2, scale: 1.5 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
                        style={{ backgroundColor: activeFlavor.colorHex }}
                    />
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full">
                        <Leaf size={18} />
                        <span className="uppercase tracking-[0.2em] text-sm">Standardized Inventory</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">The Flavor <span className="text-primary italic">Portfolio</span></h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">8 premium flavors. Each backed by proprietary formulation and in-house manufacturing.</p>
                </motion.div>

                {/* Flavor Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {flavors.map((flavor, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative group p-6 rounded-[32px] transition-all duration-300 text-left ${activeIndex === i
                                    ? 'bg-white shadow-2xl ring-2 ring-primary'
                                    : 'bg-white/70 hover:bg-white hover:shadow-xl'
                                }`}
                        >
                            {/* Color Orb */}
                            <div
                                className="w-14 h-14 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform"
                                style={{
                                    backgroundColor: flavor.colorHex,
                                    boxShadow: `0 8px 24px ${flavor.colorHex}40`
                                }}
                            />

                            <h5 className="font-bold text-gray-900 text-lg mb-1">{flavor.name}</h5>
                            <p className="text-xs text-gray-500">{flavor.ingredient}</p>

                            {/* In-House Badge */}
                            <span className="absolute top-4 right-4 bg-primary text-white text-[8px] font-black px-2 py-1 rounded-full uppercase shadow-sm">
                                In-House
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* Active Flavor Detail Card */}
                <AnimatePresence mode="wait">
                    {activeFlavor && (
                        <motion.div
                            key={activeFlavor.name}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`max-w-2xl mx-auto bg-gradient-to-br ${activeFlavor.bgGradient} p-12 rounded-[48px] text-center relative overflow-hidden shadow-2xl`}
                        >
                            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                            <div className="relative z-10">
                                {/* Large Color Orb */}
                                <div
                                    className="w-24 h-24 mx-auto rounded-full mb-6 shadow-xl"
                                    style={{
                                        backgroundColor: activeFlavor.colorHex,
                                        boxShadow: `0 16px 48px ${activeFlavor.colorHex}60`
                                    }}
                                />
                                <h3 className="text-3xl font-black text-white mb-2">{activeFlavor.name}</h3>
                                <p className="text-lg font-bold text-white/90 mb-1">{activeFlavor.ingredient}</p>
                                <p className="text-sm text-white/70">{activeFlavor.note}</p>

                                <div className="mt-6 flex justify-center gap-2">
                                    <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase backdrop-blur-sm">Premium Quality</span>
                                    <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase backdrop-blur-sm">In-House Mix</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Manufacturing Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 max-w-xl mx-auto bg-gray-900 text-white p-8 rounded-[40px] flex items-center gap-6"
                >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <Factory size={28} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">All Mixes: In-House Manufactured</h4>
                        <p className="text-sm text-gray-400">Zero external dependencies. 100% quality control.</p>
                    </div>
                    <ChevronRight size={24} className="text-gray-600 shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
