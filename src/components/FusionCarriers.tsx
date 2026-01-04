"use client";
import { motion } from "framer-motion";
import { Layout, Flame, Droplets, Sparkles } from "lucide-react";
import Image from "next/image";

const carriers = [
    {
        name: "Premium Qashtota",
        subtitle: "The Sovereign Soak",
        desc: "Our viral milk cake acts as a moist, porous foundation. Watch as the soft serve slowly soaks into every layer, creating richness in every bite.",
        tags: ["Anchor Carrier", "Viral"],
        badge: "Structural Base",
        icon: Droplets,
        visual: "bg-gradient-to-br from-amber-100 to-yellow-200"
    },
    {
        name: "Nutella Tajin",
        subtitle: "Thermal Contrast Master",
        desc: "Heat meets cold. Warm baked clay pot brownies designed to melt the soft serve into a rich, flowing sauce of indulgence.",
        tags: ["Warm Fusion", "Premium"],
        badge: "Thermal Medium",
        icon: Flame,
        visual: "bg-gradient-to-br from-amber-800 to-rose-900"
    },
    {
        name: "Fluffy Pancake",
        subtitle: "The Air-Cell Canvas",
        desc: "Perfectly fluffy structure holds layered soft serve distributions. A masterpiece of texture engineering.",
        tags: ["Breakfast Fusion", "Light"],
        badge: "Structural Base",
        icon: Sparkles,
        visual: "bg-gradient-to-br from-amber-50 to-orange-100"
    }
];

export default function FusionCarriers() {
    return (
        <section className="py-24 relative overflow-hidden z-10 bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 text-primary font-bold mb-2">
                            <Layout size={20} />
                            <span className="uppercase tracking-widest text-sm">Strategic Placement</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Perfect Carriers</h2>
                        <p className="text-gray-500 text-lg">We don't just sell desserts; we sell <span className="text-gray-900 font-bold">Fusion Mediums</span>. Each carrier is engineered to amplify the Soft Serve experience.</p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {carriers.map((carrier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-[40px] ${carrier.visual} overflow-hidden group min-h-[350px] flex flex-col justify-end`}
                        >
                            {/* Steam/Flow Animation for Thermal */}
                            {carrier.name === "Nutella Tajin" && (
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1], y: [-10, -30, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none"
                                />
                            )}

                            {/* Badge */}
                            <div className="absolute top-6 right-6 bg-white/90 text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                {carrier.badge}
                            </div>

                            {/* Icon */}
                            <carrier.icon size={40} className={`mb-4 ${carrier.name === "Nutella Tajin" ? "text-white" : "text-primary"}`} />

                            <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${carrier.name === "Nutella Tajin" ? "text-amber-300" : "text-primary/70"}`}>{carrier.subtitle}</span>
                            <h3 className={`text-2xl font-bold mb-3 ${carrier.name === "Nutella Tajin" ? "text-white" : "text-gray-900"}`}>{carrier.name}</h3>
                            <p className={`text-sm mb-6 leading-relaxed ${carrier.name === "Nutella Tajin" ? "text-white/80" : "text-gray-600"}`}>{carrier.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {carrier.tags.map(tag => (
                                    <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${carrier.name === "Nutella Tajin" ? "bg-white/20 text-white" : "bg-white/80 text-gray-800"}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hero Fusion Visuals */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative h-[400px] rounded-[48px] overflow-hidden group shadow-2xl"
                    >
                        <Image src="/brownie.png" alt="Warm & Cold Fusion" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-10">
                            <div className="bg-primary/90 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-[.3em]">Hero Interaction</div>
                            <h3 className="text-3xl font-bold text-white mb-2">Warm & Cold Fusion</h3>
                            <p className="text-gray-300 text-sm">Thermal contrast creates unforgettable sensory experiences.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative h-[400px] rounded-[48px] overflow-hidden group shadow-2xl"
                    >
                        <Image src="/affogato.png" alt="Specialty Bar" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex flex-col justify-end p-10">
                            <div className="bg-stone-500/90 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-[.3em]">Margin Booster</div>
                            <h3 className="text-3xl font-bold text-white mb-2">The Espresso Bridge</h3>
                            <p className="text-gray-300 text-sm">Italian bitterness meets creamy sweetness. High-margin, year-round.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
