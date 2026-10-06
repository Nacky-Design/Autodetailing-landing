"use client";

import Image from "next/image";
import { Children, type ReactNode, useEffect, useRef } from "react";
import styles from "./ScrollScene.module.css";

type ScrollSceneProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Semantic wrapper for scroll-storytelling scenes.
 * Scene A currently stacks Hero → Services in normal document flow.
 * Does not force viewport height or hijack native scroll.
 * Sticky / overlap / progress can be added per scene without
 * turning this primitive into an animation framework.
 */
export function ScrollScene({
  id,
  label,
  children,
  className = "",
}: ScrollSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sceneRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("section"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.setAttribute("data-scene-visible", "true");
      }
    }, { threshold: 0.18 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sceneRef}
      id={id}
      className={`${styles.scene} ${className}`.trim()}
      data-scroll-scene={id}
      aria-label={label}
    >
      <div className={styles.studioBackdrop} aria-hidden="true">
        <Image
          className={styles.studioImage}
          src="/images/services/studio-bg.png"
          alt=""
          fill
          sizes="100vw"
          quality={85}
        />
        <span className={styles.studioTone} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
