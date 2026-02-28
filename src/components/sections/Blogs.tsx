"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

interface Blog {
    year: string;
    title: string;
}

interface BlogsProps {
    onSelect?: (blog: Blog) => void;
}

const Blogs = ({ onSelect }: BlogsProps) => {
    const blogs = resumeData.blogs as Blog[];
    return (
        <section id="blogs" className="scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-36">
            <div className="glass-header sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-4 lg:bg-transparent lg:backdrop-blur-none">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748B]">Blogs</h2>
            </div>
            <div className="flex flex-col gap-6">
                {blogs.map((blog, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => onSelect?.(blog)}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative grid grid-cols-8 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
                    >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-500/5 lg:group-hover:shadow-[0_1px_rgba(0,0,0,0.03)]"></div>
                        <header className="z-10 text-xs font-bold uppercase tracking-widest text-slate-500 mt-1.5 px-1 font-mono">
                            {blog.year}
                        </header>
                        <div className="z-10 col-span-7">
                            <h3 className="font-normal leading-snug text-foreground text-xl transition-colors hover:text-slate-700 dark:hover:text-white">
                                <span className="inline-flex items-baseline leading-tight text-foreground group/link">
                                    <span className="serif">{blog.title} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                </span>
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
