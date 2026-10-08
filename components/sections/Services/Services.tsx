"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SERVICES } from "@/lib/data/services";
import styles from "./Services.module.css";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.dataset.revealed = "true";
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px 0px -35% 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      data-revealed="false"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <Container className={styles.inner}>
        <header className={styles.heading}>
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>{SERVICES.kicker}</p>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>
          <h2 id="services-title" className={styles.headline}>
            <span className={styles.headlineLead}>{SERVICES.headline}</span>
            <span className={styles.headlineAccent}>
              {SERVICES.headlineAccent}
            </span>
          </h2>
        </header>

        <ul className={styles.grid}>
          {SERVICES.cards.map((card) => (
            <li key={card.id}>
              <a
                className={styles.card}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.title}. ${card.cta}`}
              >
                <div className={styles.cardMedia} aria-hidden="true">
                  <Image
                    className={styles.cardPhoto}
                    src={card.image.src}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    quality={88}
                  />
                  <span className={styles.cardTone} />
                  <span className={styles.cardGradient} />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.numberRow}>
                    <span className={styles.number}>{card.number}</span>
                    <span className={styles.numberLine} aria-hidden="true" />
                  </div>

                  <p className={styles.cardTitle}>
                    {card.titleLines.map((line) => (
                      <span key={line} className={styles.cardTitleLine}>
                        {line}
                      </span>
                    ))}
                  </p>

                  <p className={styles.cardDescription}>
                    {card.description.split("\n").map((line) => (
                      <span key={line} className={styles.descLine}>
                        {line}
                      </span>
                    ))}
                  </p>

                  <div className={styles.ctaRow}>
                    <span className={styles.cta}>{card.cta}</span>
                    <span className={styles.roundBtn} aria-hidden="true">
                      <Image
                        src="/icons/circle-arrow.svg"
                        alt=""
                        width={72}
                        height={72}
                      />
                    </span>
                  </div>
                </div>

                <span className={styles.cardFrame} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
