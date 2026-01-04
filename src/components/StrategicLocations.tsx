"use client";
import { motion } from "framer-motion";
import { MapPin, Building2, Palmtree, Briefcase, PartyPopper, Gem } from "lucide-react";

import { getAssetPath } from "@/lib/utils";
import Image from "next/image";

const locations = [
    { name: "Maadi", icon: Building2, status: "Flagship", desc: "The birthplace of innovation", image: "/maadi_front 1.jpg" },
    { name: "Downtown", icon: Building2, status: "Active", desc: "Heart of Cairo's commerce", image: "/downtownfront.jpg" },
    { name: "Zamalek", icon: Gem, status: "Premium", desc: "A-Class residential hub", image: "/zamalek branch.jpg" },
    { name: "North Coast (Sahel)", icon: Palmtree, status: "Seasonal", desc: "Elite summer destination", image: "/hero_dominance.png" },
];

export default function StrategicLocations() {
    return (
        <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Strategic Footprint */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/5 px-4 py-2 rounded-full">
                            <MapPin size={18} />
                            <span className="uppercase tracking-[0.2em] text-sm">Strategic Footprint</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Where We Dominate</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative h-[300px] rounded-[32px] overflow-hidden group shadow-lg hover:shadow-2xl transition-all"
                            >
                                <Image
                                    src={getAssetPath(loc.image)}
                                    alt={loc.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 p-6 flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-2">
                                        <loc.icon size={20} className="text-primary" />
                                        <h4 className="font-bold text-xl text-white">{loc.name}</h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">{loc.status}</span>
                                        <span className="text-[10px] text-gray-300 font-medium">{loc.desc}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Exclusive Catering */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-gray-900 text-white p-12 md:p-16 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-primary font-bold mb-4">
                            <PartyPopper size={20} />
                            <span className="uppercase tracking-[0.2em] text-sm">B2B Revenue Stream</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Catering</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Bringing the Soft Cream experience to <span className="text-white font-semibold">high-end corporate events</span>, <span className="text-white font-semibold">weddings</span>, and <span className="text-white font-semibold">private launches</span> with our mobile Italian units.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a
                            href="https://wa.me/201007543497?text=Inquiry%20about%20Soft%20Cream%20Catering%20Services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-xl shadow-primary/30"
                        >
                            <Briefcase size={20} />
                            Inquire for Catering
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
