"use client";
import { motion } from "framer-motion";

export function BackgroundElements() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Islamic Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Animated Gradient Meshes */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-200/30 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200/30 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-yellow-100/20 rounded-full blur-[80px]"
            />
        </div>
    );
}
