"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogDetailProps {
    blog: {
        year: string;
        title: string;
        content: string;
    };
    onBack: () => void;
}

const BlogDetail = ({ blog, onBack }: BlogDetailProps) => {
    return (
        <motion.div
            id="blog-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-8"
        >
            <button
                onClick={onBack}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-foreground transition-colors w-fit"
            >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to overview
            </button>

            <header className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                    <Calendar size={14} />
                    {blog.year}
                </div>
                <h2 className="text-4xl sm:text-5xl font-normal serif leading-tight text-foreground">
                    {blog.title}
                </h2>
            </header>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                    {blog.content}
                </p>
            </div>
        </motion.div>
    );
};

export default BlogDetail;
