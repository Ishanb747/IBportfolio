"use client";

import React, { useState } from "react";
import LeftColumn from "@/components/layout/LeftColumn";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Blogs from "@/components/sections/Blogs";
import BlogDetail from "@/components/sections/BlogDetail";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleBlogSelect = (blog: any) => {
    setSelectedBlog(blog);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl pl-2 md:pl-4 lg:pl-6 pr-6 md:pr-12 lg:pr-24 font-sans flex flex-col lg:flex-row">
      <LayoutGroup>
        {/* Left fixed section - Dynamic width */}
        <motion.header
          layout
          initial={false}
          animate={{
            width: isCollapsed ? "80px" : "35%",
            minWidth: isCollapsed ? "80px" : "320px"
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-8 z-30"
        >
          <LeftColumn isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
        </motion.header>

        {/* Right scrollable section - Dynamic width */}
        <motion.main
          layout
          initial={false}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="pt-12 lg:py-12 flex flex-col gap-12 group/list flex-1"
        >
          <AnimatePresence mode="wait">
            {selectedBlog ? (
              <BlogDetail
                key="blog-detail"
                blog={selectedBlog}
                onBack={() => setSelectedBlog(null)}
              />
            ) : selectedProject ? (
              <ProjectDetail
                key="project-detail"
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />
            ) : (
              <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-12"
              >
                <About />
                <Experience />
                <Projects onSelect={handleProjectSelect} />
                <Blogs onSelect={handleBlogSelect} />
              </motion.div>
            )}
          </AnimatePresence>

          <footer className="max-w-md pb-16 text-sm text-muted/60 sm:pb-0">
            <p>
              Built with <span className="text-foreground font-medium">Next.js</span> and{" "}
              <span className="text-foreground font-medium">Tailwind CSS</span>.
              Designed for transparency and clarity.
            </p>
          </footer>
        </motion.main>
      </LayoutGroup>
    </div>
  );
}
