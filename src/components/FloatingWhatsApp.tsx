"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    const whatsappLink = "https://wa.me/201007543497?text=Interested%20in%20Soft%20Cream%20Investment%20Profile";

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
        >
            <MessageCircle size={28} className="text-white" />

            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

            {/* Tooltip */}
            <span className="absolute right-20 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Contact Investor Relations
            </span>
        </motion.a>
    );
}
