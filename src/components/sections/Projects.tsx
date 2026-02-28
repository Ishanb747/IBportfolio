"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

const projects = resumeData.projects;

interface ProjectsProps {
    onSelect?: (project: any) => void;
}

const Projects = ({ onSelect }: ProjectsProps) => {
    return (
        <section id="projects" className="scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-36">
            <div className="glass-header sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-4 lg:bg-transparent lg:backdrop-blur-none">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748B]">Projects</h2>
            </div>
            <div className="flex flex-col gap-10">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        onClick={() => onSelect?.(project)}
                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
                    >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/5 lg:group-hover:shadow-[0_1px_rgba(0,0,0,0.03)]"></div>
                        <div className="z-10 sm:col-span-2 mt-1">
                            <div className="rounded-xl border border-slate-200 bg-slate-100/50 transition sm:order-1 sm:translate-y-1 overflow-hidden aspect-video relative dark:border-slate-800 dark:bg-slate-900/50">
                                {project.images?.[0] ? (
                                    <img src={project.images[0]} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest text-slate-400">Preview</div>
                                )}
                            </div>
                        </div>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-normal leading-snug text-foreground text-xl">
                                <div className="flex items-center justify-between">
                                    <span className="serif group-hover:text-accent transition-colors">
                                        {project.title}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-muted hover:text-accent transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            </a>
                                        )}
                                        <div className="text-xs uppercase font-bold tracking-widest text-slate-500/0 group-hover:text-accent/80 transition-all">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-muted dark:text-slate-400">
                                {project.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                                {project.tech.map(tech => (
                                    <li key={tech} className="mr-2 mt-2">
                                        <div className="badge text-xs">
                                            {tech}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
