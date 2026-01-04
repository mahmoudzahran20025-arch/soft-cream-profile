"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function TheDisruption() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-primary font-bold mb-6 bg-primary/5 px-4 py-2 rounded-full"
                    >
                        <Zap size={18} />
                        <span className="uppercase tracking-[0.2em] text-sm">The Evolution</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
                    >
                        The <span className="text-primary italic">Disruption</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        In <span className="text-gray-900 font-bold">2023</span>, Soft Cream emerged not just as a dessert shop, but as a <span className="text-primary font-bold">technical laboratory for dairy innovation</span>. We bridged the gap between <span className="text-gray-900 font-semibold">Italian mechanical excellence (Carpigiani Tech)</span> and the rich heritage of <span className="text-gray-900 font-semibold">Egyptian flavors</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 leading-relaxed mt-6"
                    >
                        Our journey from Maadi to the shores of <span className="text-gray-900 font-bold">Sahel</span> is a testament to a <span className="text-primary font-bold">replicable, high-margin business model</span>.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
