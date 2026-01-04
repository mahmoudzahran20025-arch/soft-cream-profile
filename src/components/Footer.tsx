"use client";
import { QrCode, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary mb-6">Soft Cream</h3>
                        <p className="text-gray-400 mb-6">Redefining dessert culture with innovation and Italian craftsmanship.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Maadi, Cairo, Egypt</li>
                            <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +20 123 456 7890</li>
                            <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> investors@softcream.com</li>
                        </ul>
                    </div>

                    {/* QR Codes */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Digital Experience</h4>
                        <div className="flex gap-6">
                            <div className="bg-white p-2 rounded-lg text-center">
                                <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center text-gray-400">
                                    <QrCode size={40} />
                                </div>
                                <span className="text-xs text-black font-bold">Our Menu</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg text-center">
                                <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center text-gray-400">
                                    <QrCode size={40} />
                                </div>
                                <span className="text-xs text-black font-bold">Instagram</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} Soft Cream. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
