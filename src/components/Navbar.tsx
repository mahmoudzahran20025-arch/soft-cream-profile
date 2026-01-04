"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const whatsappLink = "https://wa.me/201007543497?text=Interested%20in%20Soft%20Cream%20Investment%20Profile";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: "Flavors", href: "#flavors" },
        { label: "Manufacturing", href: "#manufacturing" },
        { label: "Financials", href: "#financials" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
                        ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-black/5'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Image src="/logo.png" alt="Soft Cream" width={44} height={44} className="rounded-full shadow-lg group-hover:shadow-primary/30 transition-shadow" />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className={`font-black text-lg ${scrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>Soft Cream</span>
                            <span className={`block text-[9px] font-bold uppercase tracking-widest ${scrolled ? 'text-primary' : 'text-primary/80'}`}>Investor Profile</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${scrolled
                                        ? 'text-gray-600 hover:text-primary hover:bg-primary/5'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                        >
                            <MessageCircle size={16} />
                            <span className="hidden lg:inline">Contact Investor Relations</span>
                            <span className="lg:hidden">Contact</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-full ${scrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white p-2"
                        >
                            <X size={32} />
                        </button>

                        <div className="space-y-6 text-center">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="block text-3xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg mt-8"
                            >
                                <MessageCircle size={20} />
                                WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
