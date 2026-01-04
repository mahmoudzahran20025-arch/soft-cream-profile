"use client";
import { motion } from "framer-motion";
import { TrendingUp, Sun, Snowflake, Lock, ArrowRight } from "lucide-react";

const growthMetrics = [
    { label: "Year-over-Year Revenue Growth", value: "+45%", color: "text-green-500" },
    { label: "Branch Expansion Rate", value: "5/Year", color: "text-primary" },
    { label: "Gross Margin Target", value: "38%", color: "text-blue-500" },
];

export default function InvestmentUpside() {
    return (
        <section className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full">
                            <TrendingUp size={18} />
                            <span>The Profit Roadmap</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Seasonality Mitigation</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Most dessert shops suffer in winter. Not us. By integrating a <span className="text-gray-900 font-bold">Premium Barista & Warm Bakery</span> line, we ensure consistent high-margin revenue year-round.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex-1 bg-amber-50 p-6 rounded-[32px] border border-amber-100">
                                <Sun className="text-amber-500 mb-3" size={32} />
                                <h3 className="font-bold text-gray-900">Summer Driver</h3>
                                <p className="text-sm text-gray-600">Soft Serve & Cold Drinks</p>
                            </div>
                            <div className="flex-1 bg-blue-50 p-6 rounded-[32px] border border-blue-100">
                                <Snowflake className="text-blue-500 mb-3" size={32} />
                                <h3 className="font-bold text-gray-900">Winter Driver</h3>
                                <p className="text-sm text-gray-600">Warm Bakery & Coffee</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Strategic Growth Forecast - Replaces detailed chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-white rounded-[40px] shadow-xl p-10 border border-gray-100 relative overflow-hidden"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-8">Strategic Growth Forecast</h3>

                        <div className="space-y-6">
                            {growthMetrics.map((metric, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <span className="text-gray-600 font-medium">{metric.label}</span>
                                    <span className={`text-2xl font-black ${metric.color}`}>{metric.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Investor Disclaimer */}
                        <div className="mt-10 p-6 bg-gray-900 rounded-2xl text-white flex items-start gap-4">
                            <Lock size={24} className="text-primary shrink-0 mt-1" />
                            <div>
                                <p className="text-sm leading-relaxed">
                                    <span className="font-bold text-primary">Detailed Financial Audit & Margin Analysis</span> available upon request for qualified investors.
                                </p>
                                <a
                                    href="https://wa.me/201007543497?text=Request%20Full%20Financial%20Disclosure%20for%20Soft%20Cream"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold mt-3 text-primary hover:underline"
                                >
                                    Request Access <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
