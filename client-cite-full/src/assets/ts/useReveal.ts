import { useEffect } from "react";

export default function useReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll(".reveal");

        const revealSection = () => {
            const windowHeight = window.innerHeight;
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealSection);
        revealSection();

        return () => window.removeEventListener("scroll", revealSection);
    }, []);
}