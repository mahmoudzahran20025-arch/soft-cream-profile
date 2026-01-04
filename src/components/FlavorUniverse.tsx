"use client";
import { motion } from "framer-motion";
import { Factory, Leaf, Sparkles } from "lucide-react";

const flavors = [
    { name: "Mango", color: "bg-orange-400", ingredient: "100% Natural Alphonso Pulp", note: "No artificial colors", icon: "🥭" },
    { name: "Vanilla", color: "bg-amber-100", ingredient: "Pure Madagascar Bean Extract", note: "Rich black-speck texture", icon: "🍦" },
    { name: "Chocolate", color: "bg-amber-900", ingredient: "70% Dark Cacao Blend", note: "Ethically sourced", icon: "🍫" },
    { name: "Berry", color: "bg-rose-600", ingredient: "Fresh Forest Harvest", note: "Flash-frozen for nutrient retention", icon: "🫐" },
    { name: "Yogurt", color: "bg-blue-100", ingredient: "Live Probiotic Culture", note: "High-protein, Zero refined sugar", icon: "🥛" },
    { name: "Lemon Mint", color: "bg-green-400", ingredient: "Fresh Citrus + Organic Mint", note: "Garden-fresh extraction", icon: "🍋" },
    { name: "Slushy", color: "bg-cyan-400", ingredient: "Tropical Fruit Blend", note: "Natural hydration booster", icon: "❄️" },
    { name: "Strawberry", color: "bg-red-500", ingredient: "Egyptian Farm-to-Cone", note: "Peak ripeness selection", icon: "🍓" },
];

export default function FlavorUniverse() {
    return (
        <section className="py-24 bg-[#F8F9FA] overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/3 lg:sticky lg:top-32"
                    >
                        <div className="flex items-center gap-2 text-primary font-bold mb-4">
                            <Leaf size={20} />
                            <span className="uppercase tracking-[0.2em] text-sm">Premium Ingredients</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Anatomy of Flavor</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Every flavor is a <span className="text-gray-900 font-bold">composition of premium, natural ingredients</span>. We believe transparency builds trust. Here's what goes into every swirl.
                        </p>

                        <div className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 text-primary font-bold">
                                <Factory size={20} />
                                <span>All Mixes: In-House Manufactured</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Zero external dependencies. 100% quality control.</p>
                        </div>
                    </motion.div>

                    {/* Right: Bento Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {flavors.map((flavor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-5 rounded-[32px] shadow-sm border border-gray-100 group cursor-default relative overflow-hidden"
                            >
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-primary/10 text-primary text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                                    In-House
                                </div>

                                <div className="text-4xl mb-4">{flavor.icon}</div>
                                <div className={`w-10 h-10 rounded-full ${flavor.color} mb-4 shadow-inner`} />
                                <h5 className="font-bold text-gray-900 text-lg mb-1">{flavor.name}</h5>
                                <p className="text-xs text-primary font-semibold mb-2">{flavor.ingredient}</p>
                                <p className="text-[10px] text-gray-400 leading-relaxed">{flavor.note}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
