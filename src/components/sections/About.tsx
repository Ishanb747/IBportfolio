import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

const About = () => {
    return (
        <section id="about" className="scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-36">
            <div className="glass-header sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-4 lg:bg-transparent lg:backdrop-blur-none">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748B]">About</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                {resumeData.personal.about.map((paragraph, idx) => (
                    <p
                        key={idx}
                        className={`${idx === 0 ? "text-xl sm:text-2xl font-normal serif" : "text-lg"} leading-relaxed text-muted dark:text-slate-300`}
                    >
                        {paragraph.split("**").map((part, i) =>
                            i % 2 === 1 ? <span key={i} className="text-foreground border-b border-accent/20">{part}</span> : part
                        )}
                    </p>
                ))}
            </motion.div>
        </section>
    );
};

export default About;
