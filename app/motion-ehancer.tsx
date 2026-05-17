"use client";

import { useEffect } from "react";

const revealSelector = [
    ".section-heading",
    ".project-card",
    ".metric-card",
    ".impact-timeline",
    ".impact-item",
    ".skill-card",
    ".experience-list",
    ".experience-item",
    ".philosophy-card",
    ".contact > div",
    ".contact-form"
].join(",");

export function MotionEnhancer() {
    useEffect(() => {
        const root = document.documentElement;
        const nav = document.querySelector<HTMLElement>(".nav");
        const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
        const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-to]"));

        revealItems.forEach((item, index) => {
            item.classList.add("motion-reveal");
            item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
        });

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
        );

        revealItems.forEach((item) => revealObserver.observe(item));

        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const element = entry.target as HTMLElement;
                    const target = Number(element.dataset.countTo ?? "0");
                    const duration = 900;
                    const start = performance.now();

                    const tick = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        element.textContent = String(Math.round(target * eased)).padStart(2, "0");

                        if (progress < 1) {
                            requestAnimationFrame(tick);
                        }
                    };

                    requestAnimationFrame(tick);
                    counterObserver.unobserve(element);
                });
            },
            { threshold: 0.45 }
        );

        counters.forEach((counter) => counterObserver.observe(counter));

        let frame = 0;
        const updatePointer = (event: PointerEvent) => {
            if (event.pointerType === "touch") return;
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                root.classList.add("has-pointer");
                root.style.setProperty("--pointer-x", `${event.clientX}px`);
                root.style.setProperty("--pointer-y", `${event.clientY}px`);
            });
        };

        const updateScroll = () => {
            nav?.classList.toggle("is-scrolled", window.scrollY > 24);
            root.style.setProperty("--scroll-ratio", String(Math.min(window.scrollY / 900, 1)));
        };

        updateScroll();
        window.addEventListener("pointermove", updatePointer, { passive: true });
        window.addEventListener("scroll", updateScroll, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", updatePointer);
            window.removeEventListener("scroll", updateScroll);
            revealObserver.disconnect();
            counterObserver.disconnect();
        };
    }, []);

    return <div className="cursor-light" aria-hidden="true" />;
}
