import type { ReactNode } from "react";
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
  return (
    <div
      id={id}
      className={`${styles.scene} ${className}`.trim()}
      data-scroll-scene={id}
      aria-label={label}
    >
      {children}
    </div>
  );
}
