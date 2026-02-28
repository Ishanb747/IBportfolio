"use client";

import React from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

import resumeData from "@/data/resume.json";

interface LeftColumnProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const LeftColumn = ({ isCollapsed, onToggle }: LeftColumnProps) => {
    const { name, role, tagline } = resumeData.personal;
    const [firstName, lastName] = name.split(" ");

    return (
        <motion.div
            animate={{
                alignItems: isCollapsed ? "center" : "flex-start",
                paddingLeft: isCollapsed ? "0px" : "0px" // Normalized
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col h-full relative"
        >
            {/* Custom Toggle Handle - Integrated and Minimalist */}
            <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.1, backgroundColor: "var(--slate-100)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 hidden lg:flex h-10 w-6 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted hover:text-foreground shadow-sm transition-colors"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </motion.button>

            <motion.div
                animate={{
                    gap: isCollapsed ? "32px" : "32px", // gap-8 = 32px
                    paddingTop: isCollapsed ? "24px" : "0px", // py-6 = 24px
                    paddingBottom: isCollapsed ? "24px" : "0px"
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col w-full"
            >
                {/* Header / Logo Section */}
                <div className="flex flex-col gap-4">
                    <AnimatePresence initial={false}>
                        {!isCollapsed ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="-ml-2 mt-1 shrink-0">
                                            <ThemeToggle />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground font-normal serif leading-[0.85] tracking-tight">
                                                {firstName} <br /> {lastName}
                                            </h1>
                                            <h2 className="mt-4 text-xl font-medium tracking-tight text-foreground/90 uppercase text-[10px] tracking-[0.3em]">
                                                {role}
                                            </h2>
                                            <p className="mt-4 max-w-xs leading-relaxed text-muted text-sm">
                                                {tagline}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="collapsed"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="flex justify-center"
                            >
                                <ThemeToggle />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Section */}
                <motion.div
                    animate={{
                        marginTop: isCollapsed ? "32px" : "0px",
                        paddingTop: isCollapsed ? "40px" : "0px", // py-10 = 40px
                        paddingBottom: isCollapsed ? "40px" : "0px",
                        borderRadius: isCollapsed ? "32px" : "0px"
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className={`w-full ${isCollapsed ? "flex justify-center px-2 bg-white/20 dark:bg-slate-900/30 border border-border/50 backdrop-blur-sm shadow-sm" : ""}`}
                >
                    <Nav isCollapsed={isCollapsed} />
                </motion.div>
            </motion.div>

            {/* Bottom Section: Socials */}
            <motion.div
                animate={{
                    opacity: isCollapsed ? 0 : 1,
                    y: isCollapsed ? 10 : 0,
                    display: isCollapsed ? "none" : "block"
                }}
                transition={{ duration: 0.3 }}
                className="mt-auto w-full pt-4"
            >
                <Socials isCollapsed={isCollapsed} />
            </motion.div>
        </motion.div>
    );
};

export default LeftColumn;
