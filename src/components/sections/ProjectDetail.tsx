"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, PlayCircle } from "lucide-react";

interface ProjectDetailProps {
    project: any;
    onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
    return (
        <motion.div
            id="project-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-12"
        >
            {/* Header / Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-accent"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </button>
                <div className="flex items-center gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-500 hover:text-accent transition-colors"
                            aria-label="View Github"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-accent transition-colors"
                        aria-label="Open Project"
                    >
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
            </div>

            {/* Title & Stats */}
            <header className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground serif">
                    {project.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                        <span key={tech} className="badge">
                            {tech}
                        </span>
                    ))}
                    {project.stats && (
                        <span className="badge border-accent/20 text-accent bg-accent/5">
                            {project.stats}
                        </span>
                    )}
                </div>
            </header>

            {/* Main Image / Video Section */}
            {project.video ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl glass border border-slate-500/10">
                    <video
                        src={project.video}
                        controls
                        className="h-full w-full object-cover"
                        poster={project.images?.[0]}
                    />
                </div>
            ) : project.images?.[0] ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-500/10">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : null}

            {/* Detailed Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.fullDescription || project.description}
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    {project.images && project.images.length > 1 && (
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                Gallery
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {project.images.slice(1).map((img: string, i: number) => (
                                    <div key={i} className="aspect-square overflow-hidden rounded-xl border border-slate-500/10">
                                        <img src={img} alt="" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Execution
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Built with precision and focused on user experience. This project demonstrates high-quality code and design principles.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
