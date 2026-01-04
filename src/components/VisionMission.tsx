"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function VisionMission() {
    return (
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Target size={28} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest">Mission</h3>
                        <p className="text-xl text-gray-700 leading-relaxed italic">
                            "To engineer an <span className="text-primary font-bold">unforgettable sensory journey</span> where every swirl is a testament to quality and every visit is a <span className="text-gray-900 font-bold">celebration of innovation</span>."
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-900 text-white p-12 rounded-[48px] shadow-xl"
                    >
                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                            <Eye size={28} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Vision</h3>
                        <p className="text-xl text-gray-300 leading-relaxed italic">
                            "To become the <span className="text-primary font-bold">regional benchmark for fusion dairy</span>, where <span className="text-white font-bold">Egyptian tradition</span> meets <span className="text-white font-bold">global innovation</span>."
                        </p>
                    </motion.div>

                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">
                        <span className="text-primary italic">Tradition</span> meets <span className="text-primary italic">Innovation</span> in every delightful bite.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
