"use client";
import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";

const reviews = [
    {
        category: "Product Quality",
        score: 4.9,
        text: "The fusion of Italian texture with Egyptian flavors is unmatched. The Qashtota is a market leader.",
        reviewer: "Food Critic Assoc.",
        icon: Star
    },
    {
        category: "Innovation",
        score: 5.0,
        text: "Soft Cream isn't just a dessert shop; it's an R&D lab. The warm/cold concept is brilliant.",
        reviewer: "Retail Trends Weekly",
        icon: Award
    },
    {
        category: "Scalability",
        score: 4.8,
        text: "Operational model is lean and highly replicable. Perfect for franchise expansion in GCC.",
        reviewer: "Venture Capital Insight",
        icon: TrendingUp
    }
];

export default function MarketValidation() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/40 rounded-[40px] p-12 shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Market Validation</h2>
                            <p className="text-gray-500">What the industry experts are saying.</p>
                        </div>

                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                                <Users size={16} className="text-green-600" />
                                <span className="font-bold text-green-800">98% Customer Retention</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                                <Star size={16} className="text-blue-600" />
                                <span className="font-bold text-blue-800">4.9/5 Avg Rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setActive(idx)}
                                className={`p-8 rounded-3xl transition-all duration-500 cursor-default border ${active === idx ? 'bg-white shadow-xl border-primary/20 scale-105' : 'bg-white/40 border-transparent hover:bg-white/60'}`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${active === idx ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    <review.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{review.category}</h3>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < Math.floor(review.score) ? "#FFD700" : "none"} className={i < Math.floor(review.score) ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                    <span className="text-sm font-bold ml-2">{review.score}</span>
                                </div>
                                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{review.reviewer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
