"use client";

import React, { useEffect, useState } from "react";

const TorchEffect = () => {
    useEffect(() => {
        const overlay = document.querySelector('.torch-overlay') as HTMLElement;
        const handleMouseMove = (e: MouseEvent) => {
            if (!overlay) return;
            window.requestAnimationFrame(() => {
                overlay.style.setProperty("--mouse-x", `${e.clientX}px`);
                overlay.style.setProperty("--mouse-y", `${e.clientY}px`);
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className="torch-overlay" aria-hidden="true" />;
};

export default TorchEffect;
