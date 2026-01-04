"use client";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappLink = "https://wa.me/201007543497?text=Interested%20in%20Soft%20Cream%20Investment%20Profile";

    const navItems = [
        { label: "Flavors", href: "#flavors" },
        { label: "Manufacturing", href: "#manufacturing" },
        { label: "Financials", href: "#financials" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Soft Cream" width={40} height={40} className="rounded-full" />
                    <span className="font-black text-xl text-gray-900">Soft Cream</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        <MessageCircle size={16} />
                        Contact Investor Relations
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-900"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-semibold text-gray-900 hover:text-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold text-sm mt-4"
                    >
                        <MessageCircle size={16} />
                        WhatsApp Investor Relations
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}
