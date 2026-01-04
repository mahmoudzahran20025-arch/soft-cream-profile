"use client";
import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp } from "lucide-react";

export default function Staff() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Operational Excellence</h2>
                    <p className="text-gray-600 text-lg">Our people are our greatest asset. We invest in rigorous training to ensure every customer interaction reinforces our premium brand identity.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Expert Training", desc: "Staff trained by industry experts to master the art of soft serve and customer hospitality.", icon: GraduationCap },
                        { title: "Sales Drivers", desc: "Incentivized performance structures to maximize upselling and revenue per ticket.", icon: TrendingUp },
                        { title: "Brand Ambassadors", desc: "Uniformed, professional, and passionate about the Soft Cream vision.", icon: Users },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-primary"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
