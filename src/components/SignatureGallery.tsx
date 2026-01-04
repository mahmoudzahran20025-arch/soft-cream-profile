"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const galleryItems = [
    { name: "The Silk Flow", type: "Premium Milkshake", desc: "Velvety smooth, churned fresh to order", color: "from-pink-200 to-rose-300" },
    { name: "The Golden Roast", type: "Italian Espresso", desc: "Bold aroma, crafted for fusion", color: "from-amber-700 to-stone-800" },
    { name: "The Sovereign Swirl", type: "Classic Soft Serve", desc: "Where it all begins. Pure perfection.", color: "from-amber-50 to-amber-100" },
    { name: "The Thermal Kiss", type: "Nutella Tajin", desc: "Warmth meets cold in a delightful embrace", color: "from-amber-800 to-rose-900" },
    { name: "The Creamy Crown", type: "Qashtota Fusion", desc: "The anchor carrier of indulgence", color: "from-yellow-100 to-amber-200" },
];

export default function SignatureGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={containerRef} className="py-24 bg-gray-900 text-white overflow-hidden relative">
            {/* Grainy Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-primary font-bold mb-4"
                >
                    <Sparkles size={20} />
                    <span className="uppercase tracking-[0.2em] text-sm">Sensory Journey</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">The Signature Gallery</h2>
            </div>

            {/* Horizontal Parallax Scroll */}
            <motion.div style={{ x }} className="flex gap-8 pl-6">
                {galleryItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex-shrink-0 w-[350px] h-[450px] rounded-[40px] bg-gradient-to-b ${item.color} p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-2xl`}
                    >
                        {/* Placeholder Visual */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-2 block">{item.type}</span>
                            <h3 className="text-3xl font-black text-white mb-2 italic">{item.name}</h3>
                            <p className="text-sm text-white/80">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
