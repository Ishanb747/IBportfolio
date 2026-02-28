"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, FolderRoot, PenTool } from "lucide-react";
import resumeData from "@/data/resume.json";

const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderRoot },
    { name: "Blogs", href: "#blogs", icon: PenTool },
];

interface NavProps {
    isCollapsed?: boolean;
}

const Nav = ({ isCollapsed }: NavProps) => {
    const [activeSection, setActiveSection] = useState("about");
    const nameParts = resumeData.personal.name.split(" ");
    const initials = nameParts.map(p => p[0]).join("").toUpperCase();

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.href.substring(1),
                element: document.getElementById(item.href.substring(1))
            }));

            // Check if we're near the bottom of the page
            // Use a more generous threshold for bottom detection
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 200;

            if (isAtBottom && !document.getElementById('blog-detail') && !document.getElementById('project-detail')) {
                setActiveSection("blogs");
                return;
            }

            // Standard Spy Logic: find the section that is currently in view
            // We use a threshold from the top of the viewport
            const scrollPosition = scrollTop + 200;
            let currentActive = activeSection;

            // Find the last section that has passed the threshold
            for (const section of sections) {
                if (section.element && scrollPosition >= section.element.offsetTop) {
                    currentActive = section.id;
                }
            }

            if (currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`flex flex-col ${isCollapsed ? "items-center gap-8" : "mt-8"}`}
            >
                {navItems.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                        <a
                            className="group flex items-center py-1.5 outline-none"
                            href={item.href}
                        >
                            {!isCollapsed ? (
                                <>
                                    <span className={`nav-indicator mr-4 h-px transition-colors duration-300 group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-accent ${activeSection === item.href.substring(1) ? "w-16 bg-accent h-[2px]" : "w-8 bg-muted"}`}></span>
                                    <span className={`nav-text text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent ${activeSection === item.href.substring(1) ? "text-accent" : "text-slate-500"}`}>
                                        {item.name}
                                    </span>
                                </>
                            ) : (
                                <motion.div
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2.5 rounded-xl flex items-center justify-center ${activeSection === item.href.substring(1) ? "bg-white dark:bg-slate-800 text-accent shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-border/50" : "text-slate-400 hover:text-foreground"}`}
                                >
                                    {item.name === "About" ? (
                                        <span className="text-[10px] font-bold serif leading-none">{initials}</span>
                                    ) : (
                                        <item.icon size={20} strokeWidth={1.5} className="shrink-0" />
                                    )}
                                </motion.div>
                            )}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    );
};

export default Nav;
