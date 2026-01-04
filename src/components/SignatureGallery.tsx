"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const galleryItems = [
    { name: "The Silk Flow", type: "Premium Milkshake", desc: "Velvety smooth, churned fresh to order", gradient: "from-pink-300 via-rose-400 to-pink-500", emoji: "🥤" },
    { name: "The Golden Roast", type: "Italian Espresso", desc: "Bold aroma, crafted for fusion", gradient: "from-amber-700 via-stone-700 to-amber-900", emoji: "☕" },
    { name: "The Sovereign Swirl", type: "Classic Soft Serve", desc: "Where it all begins. Pure perfection.", gradient: "from-amber-50 via-amber-100 to-yellow-200", emoji: "🍦" },
    { name: "The Thermal Kiss", type: "Nutella Tajin", desc: "Warmth meets cold in a delightful embrace", gradient: "from-amber-800 via-rose-800 to-stone-900", emoji: "🍫" },
    { name: "The Creamy Crown", type: "Qashtota Fusion", desc: "The anchor carrier of indulgence", gradient: "from-yellow-100 via-amber-200 to-orange-100", emoji: "👑" },
];

export default function SignatureGallery() {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            {/* Grainy Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-primary/10 px-4 py-2 rounded-full">
                        <Sparkles size={18} />
                        <span className="uppercase tracking-[0.2em] text-sm">Sensory Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4">The Signature <span className="text-primary italic">Gallery</span></h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">Swipe to explore our premium creations.</p>
                </motion.div>

                {/* Swiper Carousel */}
                <div className="max-w-md mx-auto">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        modules={[EffectCards, Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="!overflow-visible"
                    >
                        {galleryItems.map((item, i) => (
                            <SwiperSlide key={i} className="!w-[300px] !h-[420px]">
                                <div className={`w-full h-full bg-gradient-to-b ${item.gradient} rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl`}>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                                    {/* Top Content */}
                                    <div className="relative z-10">
                                        <span className="text-6xl drop-shadow-xl block mb-4">{item.emoji}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70 block">{item.type}</span>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black text-white mb-2 italic">{item.name}</h3>
                                        <p className="text-sm text-white/80">{item.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Pagination Dots styled via CSS */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        background: #D81B60 !important;
                        opacity: 0.5;
                    }
                    .swiper-pagination-bullet-active {
                        opacity: 1;
                    }
                `}</style>
            </div>
        </section>
    );
}
