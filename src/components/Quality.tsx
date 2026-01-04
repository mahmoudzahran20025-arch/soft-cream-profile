"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, PenTool } from "lucide-react";

export default function Quality() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        {/* Visual Placeholder for Machines */}
                        <div className="relative h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <span className="text-gray-400 font-bold text-xl">Italian Machinery Visual</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold mb-8 text-gray-900"
                        >
                            Quality Assurance
                        </motion.h2>

                        <div className="space-y-8">
                            {[
                                { title: "Italian Authenticity", desc: "Authentic Carpigiani machines ensuring perfect texture every time.", icon: ShieldCheck },
                                { title: "Premium Ingredients", desc: "Sourcing only the finest local dairy and imported chocolates.", icon: Leaf },
                                { title: "Hygiene Standards", desc: "Strict ISO-compliant operational protocols.", icon: PenTool }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
