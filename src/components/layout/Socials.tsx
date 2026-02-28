"use client";

import React from "react";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

import resumeData from "@/data/resume.json";

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    mail: Mail
};

const socials = resumeData.socials.map(social => ({
    ...social,
    icon: iconMap[social.platform as keyof typeof iconMap] || Mail
}));

interface SocialsProps {
    isCollapsed?: boolean;
}

const Socials = ({ isCollapsed }: SocialsProps) => {
    return (
        <ul className={`flex ${isCollapsed ? "flex-col gap-4" : "flex-row gap-5"} items-center`} aria-label="Social media">
            {socials.map((social) => (
                <li key={social.name}>
                    <a
                        className="block text-muted hover:text-foreground p-1 transition-colors"
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${social.name} (opens in a new tab)`}
                    >
                        <span className="sr-only">{social.name}</span>
                        <social.icon size={20} className="shrink-0" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
