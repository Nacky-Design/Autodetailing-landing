"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CARKVIZ_URL } from "@/lib/constants";
import styles from "./Configurator.module.css";

const revealedSections = new Set<string>();

export function Configurator() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
    const sceneKey = "configurator";
    if (revealedSections.has(sceneKey)) {
      section.dataset.revealed = "true";
      section.dataset.motion = "complete";
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        revealedSections.add(sceneKey);
        section.dataset.revealed = "true";
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -35% 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="configurator"
      ref={sectionRef}
      data-revealed="false"
      className={styles.section}
      aria-labelledby="configurator-title"
    >
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>ОНЛАЙН-КОНФИГУРАТОР</p>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>

          <h2 id="configurator-title" className={styles.title}>
            <span className={styles.mobileTitleLine}>Примерьте новый</span>
            <span className={styles.mobileTitleLine}>цвет на своём</span>
            <span className={`${styles.accent} ${styles.mobileTitleLine}`}>автомобиле</span>
          </h2>

          <p className={styles.description}>
            Выберите цвет и варианты оклейки и посмотрите, как будет выглядеть ваш автомобиль.
          </p>

          <Button
            className={styles.cta}
            data-cta-system
            href={CARKVIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            ПРИМЕРИТЬ НА СВОЙ АВТО
          </Button>
        </div>

        <div className={styles.playerWrap}>
          <a
            className={styles.player}
            href={CARKVIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть демонстрацию конфигуратора"
          >
            <iframe
              className={styles.preview}
              src={CARKVIZ_URL}
              title="Демонстрация Car Quiz"
              loading="lazy"
              scrolling="no"
              tabIndex={-1}
            />
            <span className={styles.scrim} aria-hidden="true" />
            <span className={styles.playBackdrop} aria-hidden="true">
              <span className={styles.playControl}>
                <span className={styles.playTriangle} />
              </span>
            </span>
          </a>

          <div className={styles.controls} aria-hidden="true">
            <span className={styles.miniPlay}>▶</span>
            <span className={styles.time}>00:12 / 01:04</span>
            <span className={styles.track}>
              <i />
            </span>
            <span className={styles.controlIcon}>◐</span>
            <span className={styles.controlIcon}>⛶</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
