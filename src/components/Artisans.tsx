"use client";
import { motion } from "framer-motion";
import { Users, TrendingUp, GraduationCap, Award } from "lucide-react";

export default function Artisans() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full inline-flex">
                            <Users size={18} />
                            <span className="uppercase tracking-[0.2em] text-sm">Human Capital</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professionals Behind the Swirl</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team isn't just staff—they are <span className="text-gray-900 font-bold">trained artisans</span>, mentored by international experts to ensure every customer interaction reflects our premium brand promise.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                                <GraduationCap size={28} className="text-primary mb-3" />
                                <h4 className="font-bold text-gray-900">Expert Training</h4>
                                <p className="text-sm text-gray-500">International hospitality protocols</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                                <Award size={28} className="text-primary mb-3" />
                                <h4 className="font-bold text-gray-900">Brand Ambassadors</h4>
                                <p className="text-sm text-gray-500">Passionate representation</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-10 rounded-[48px] border border-primary/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                                    <TrendingUp size={28} className="text-white" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Impact</span>
                                    <h4 className="text-xl font-bold text-gray-900">Training → Sales Growth</h4>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Customer Retention", value: "+42%", desc: "Post-training improvement" },
                                    { label: "Upsell Rate", value: "+35%", desc: "Added product suggestions" },
                                    { label: "Consistency Score", value: "98%", desc: "Quality replication" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                        <div>
                                            <span className="text-sm font-semibold text-gray-900">{stat.label}</span>
                                            <p className="text-[10px] text-gray-400">{stat.desc}</p>
                                        </div>
                                        <span className="text-2xl font-black text-primary">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
