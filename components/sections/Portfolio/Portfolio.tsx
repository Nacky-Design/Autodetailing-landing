"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./Portfolio.module.css";

const completedScenes = new Set<string>();

const works = [
  { title: "Porsche Cayenne", type: "Виниловая оклейка", filter: "Оклейка", image: "https://www.figma.com/api/mcp/asset/aa1d8aa9-8c13-40d6-bd4b-308a6a9ffdc9.png" },
  { title: "BMW X5", type: "Антихром", filter: "Антихром", image: "https://www.figma.com/api/mcp/asset/0bf6d7d8-739b-4ad4-bc56-30f1c730327b.png" },
  { title: "Mercedes-Benz E-класс", type: "Защитная плёнка", filter: "Защитная плёнка", image: "https://www.figma.com/api/mcp/asset/f12d8222-4138-4e0c-92ca-87eca88512a6.png" },
  { title: "Audi RS 6", type: "Полная оклейка", filter: "Оклейка", image: "https://www.figma.com/api/mcp/asset/dc034ced-a6d8-4ac5-a87d-8b8ce9f364a1.png" },
];
const filters = ["Все работы", "Оклейка", "Защитная плёнка", "Антихром"];

export function Portfolio() {
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
    if (completedScenes.has("portfolio")) {
      stage.dataset.revealed = "true";
      stage.dataset.motion = "complete";
      return;
    }

    let visible = false;
    let cancelled = false;
    let ready = false;
    let allLoaded = false;

    const reveal = () => {
      if (cancelled || !visible || !ready || completedScenes.has("portfolio")) return;
      completedScenes.add("portfolio");
      stage.dataset.revealed = "true";
      if (allLoaded) {
        stage.dataset.motion = "animate";
      } else {
        // A missing remote image must not trigger a zoom on empty cards.
        stage.dataset.motion = "complete";
      }
      observer.disconnect();
    };

    // Preload each unique image; wait for decoding before starting the camera move.
    Promise.all(works.map(async ({ image }) => {
      const preload = new window.Image();
      preload.src = image;
      await new Promise<void>((resolve, reject) => {
        if (preload.complete) {
          preload.naturalWidth ? resolve() : reject(new Error("Image unavailable"));
          return;
        }
        preload.onload = () => resolve();
        preload.onerror = () => reject(new Error("Image unavailable"));
      });
      if (preload.decode) await preload.decode();
    })).then(() => {
      if (cancelled) return;
      allLoaded = true;
      ready = true;
      reveal();
    }).catch(() => {
      if (cancelled) return;
      ready = true;
      reveal();
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible = true;
        reveal();
      }
    }, { rootMargin: "0px 0px -35% 0px" });
    const section = stage.querySelector<HTMLElement>("#portfolio");
    if (section) observer.observe(section);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);
  const [filter, setFilter] = useState("Все работы");
  const [offset, setOffset] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const filtered = useMemo(() => filter === "Все работы" ? works : works.filter((work) => work.filter === filter), [filter]);
  const looped = useMemo(() => filtered.length ? Array.from({ length: Math.max(8, filtered.length * 3) }, (_, i) => filtered[(i + offset) % filtered.length]) : [], [filtered, offset]);

  const move = (delta: number) => setOffset((value) => {
    const length = Math.max(filtered.length, 1);
    return (value + delta + length) % length;
  });

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchCurrentX.current = touchStartX.current;
    setDragX(0);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const x = event.touches[0]?.clientX ?? touchStartX.current;
    touchCurrentX.current = x;
    setDragX(x - touchStartX.current);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    touchCurrentX.current = null;
    setDragX(0);
    if (Math.abs(delta) < 42) return;
    move(delta < 0 ? 1 : -1);
  };

  return (
    <div ref={stageRef} data-revealed="false" className={styles.stage}>
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <span className={styles.sceneTone} aria-hidden="true" />
      <div className={styles.header}>
        <div>
          <div className={styles.kickerRow}><span className={styles.kicker}>ПОРТФОЛИО</span><i /></div>
          <h2 id="portfolio-title" className={styles.title}><span>Наши работы</span><span>в новом облике</span></h2>
        </div>
        <div className={styles.filters}>
          {filters.map((item) => <button key={item} type="button" className={item === filter ? styles.activeFilter : ""} onClick={() => { setFilter(item); setOffset(0); }}>{item}</button>)}
        </div>
      </div>

      <div className={styles.carousel} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className={styles.track} style={{ "--drag-x": `${dragX}px` } as React.CSSProperties}>
          {looped.map((work, index) => (
            <article className={styles.card} key={`${work.title}-${index}`}>
              <img className={styles.photo} src={work.image} alt="" />
              <span className={styles.gradient} aria-hidden="true" />
              <div className={styles.cardCopy}><h3>{work.title}</h3><p>{work.type}</p></div>
              <span className={styles.frame} aria-hidden="true" />
            </article>
          ))}
        </div>
        <button className={`${styles.nav} ${styles.prev}`} type="button" onClick={() => move(-1)} aria-label="Предыдущая работа">←</button>
        <button className={`${styles.nav} ${styles.next}`} type="button" onClick={() => move(1)} aria-label="Следующая работа">→</button>
      </div>
      <div className={styles.pagination} aria-label="Навигация по портфолио">
        {Array.from({ length: Math.min(3, Math.max(filtered.length, 1)) }, (_, index) => (
          <button
            key={index}
            type="button"
            className={index === offset % Math.min(3, Math.max(filtered.length, 1)) ? styles.activeDot : ""}
            onClick={() => setOffset(index % Math.max(filtered.length, 1))}
            aria-label={`Перейти к работе ${index + 1}`}
          />
        ))}
      </div>
    </section>
    </div>
  );
}
