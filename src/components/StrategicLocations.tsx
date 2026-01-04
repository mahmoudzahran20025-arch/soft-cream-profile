"use client";
import { motion } from "framer-motion";
import { MapPin, Building2, Palmtree, Briefcase, PartyPopper, Gem } from "lucide-react";

const locations = [
    { name: "Maadi", icon: Building2, status: "Flagship", desc: "The birthplace of innovation" },
    { name: "Downtown", icon: Building2, status: "Active", desc: "Heart of Cairo's commerce" },
    { name: "Zamalek", icon: Gem, status: "Premium", desc: "A-Class residential hub" },
    { name: "North Coast (Sahel)", icon: Palmtree, status: "Seasonal", desc: "Elite summer destination" },
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
                                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center group hover:shadow-xl transition-shadow"
                            >
                                <loc.icon size={36} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-xl text-gray-900 mb-1">{loc.name}</h4>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{loc.status}</span>
                                <p className="text-sm text-gray-500 mt-3">{loc.desc}</p>
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
