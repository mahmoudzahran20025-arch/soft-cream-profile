"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MapPin, Store } from "lucide-react";

const milestones = [
    {
        year: "2023",
        title: "Foundation",
        location: "Maadi",
        desc: "First branch opened. Introducing fusion desserts to the local market.",
        icon: Store
    },
    {
        year: "2024",
        title: "Expansion",
        location: "Downtown",
        desc: "Strategic expansion into the heart of Cairo. Brand recognition surges.",
        icon: MapPin
    },
    {
        year: "Future Vision",
        title: "Regional Leader",
        location: "GCC Expansion",
        desc: "Targeting 60M EGP Revenue & 5 New Branches Annually.",
        icon: TrendingUp
    }
];

export default function GrowthTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-background overflow-hidden relative" id="timeline">
            <div className="container mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">The Growth Timeline</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">From a single concept store to a scalable investment opportunity.</p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full" />

                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-start md:items-center mb-16 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon Dot */}
                            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center z-10 border-4 border-primary shadow-xl ring-4 ring-white">
                                <item.icon size={20} />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-primary/20 transition-all duration-300"
                                >
                                    <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mb-3">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-primary font-medium text-sm mb-3 flex items-center gap-1 md:justify-end justify-start">
                                        <MapPin size={14} className={index % 2 === 0 ? 'md:order-last' : undefined} />
                                        {item.location}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
