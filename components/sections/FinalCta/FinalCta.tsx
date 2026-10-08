"use client";
import { useEffect, useRef } from "react";
import styles from "./FinalCta.module.css";

const completedScenes = new Set<string>();

const benefits = [
  ["5 лет", "Гарантия на работы"],
  ["Премиум", "Материалы"],
  ["Опытные", "Мастера"],
  ["Точные", "Сроки"],
];

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
    if (completedScenes.has("final-cta")) { section.dataset.revealed = "true"; section.dataset.motion = "complete"; return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { completedScenes.add("final-cta"); section.dataset.revealed = "true"; observer.disconnect(); }
    }, { rootMargin: "0px 0px -35% 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.stage}>
      <section ref={sectionRef} data-revealed="false" className={styles.section} aria-labelledby="final-cta-title">
        <div className={styles.copy}>
          <div className={styles.kicker}><span>ATELIER 01</span><i /></div>
          <h2 id="final-cta-title" className={styles.title}>Готовы преобразить<br/><span>свой автомобиль?</span></h2>
          <p className={styles.lead}>Оставьте заявку — обсудим задачу, подберём материал и рассчитаем стоимость работ для вашего автомобиля.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#top">Записаться на консультацию <span>↗</span></a>
            <a className={styles.secondary} href="tel:+70000000000">Позвонить нам <span>→</span></a>
          </div>
        </div>
        <div className={styles.car} aria-hidden="true" />
        <div className={styles.benefits}>
          {benefits.map(([value,label]) => <div className={styles.benefit} key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>
    </div>
  );
}
