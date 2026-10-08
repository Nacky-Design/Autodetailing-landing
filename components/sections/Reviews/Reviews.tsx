"use client";
import { useEffect, useRef } from "react";
import styles from "./Reviews.module.css";

const completedScenes = new Set<string>();

const bg="https://www.figma.com/api/mcp/asset/f553936c-27bc-4b61-b5f2-fe5eae72ac2f.png";
const photo1="https://www.figma.com/api/mcp/asset/ba79e4cb-9af6-443e-a14d-aed7a7a3d554.png";
const avatar1="https://www.figma.com/api/mcp/asset/129c158f-979f-4036-8650-cae6de6cc418.png";
const photo2="https://www.figma.com/api/mcp/asset/82e48a98-874a-483c-8f54-c163df0c3a4b.png";
const avatar2="https://www.figma.com/api/mcp/asset/cff1b50a-e7cc-4c68-9ea6-ca625bef255e.png";
const map="https://www.figma.com/api/mcp/asset/eb4f2499-6475-4995-9985-35444242e652.png";

const reviews=[
 {photo:photo1,avatar:avatar1,name:"Алексей К.",date:"3 недели назад",text:"«Делал оклейку в цветной винил. Качество на высшем уровне — всё аккуратно, в срок и с вниманием к деталям. Машина выглядит просто огонь!»"},
 {photo:photo2,avatar:avatar2,name:"Мария С.",date:"1 месяц назад",text:"«Уже второй раз обращаюсь в ATELIER 01. В этот раз делали защитную плёнку и антихром. Всё как всегда — профессионально, честно и с отличным результатом. Рекомендую!»"}
];

export function Reviews(){
 const sectionRef = useRef<HTMLElement>(null);
 useEffect(() => {
   const section = sectionRef.current;
   if (!section || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
   if (completedScenes.has("reviews")) { section.dataset.revealed = "true"; section.dataset.motion = "complete"; return; }
   const observer = new IntersectionObserver(([entry]) => {
     if (entry.isIntersecting) { completedScenes.add("reviews"); section.dataset.revealed = "true"; observer.disconnect(); }
   }, { rootMargin: "0px 0px -35% 0px" });
   observer.observe(section);
   return () => observer.disconnect();
 }, []);
 return <div className={styles.stage}><section ref={sectionRef} data-revealed="false" className={styles.section} aria-labelledby="reviews-title" style={{backgroundImage:`linear-gradient(90deg,rgba(2,7,9,.85),rgba(2,7,9,.62) 55%,rgba(2,7,9,.29)),url("${bg}")`}}>
  <header className={styles.heading} data-scene-heading><div className={styles.kicker}>ОТЗЫВЫ КЛИЕНТОВ<i/></div><h2 id="reviews-title">Что говорят о нас <span>клиенты</span></h2></header>
  <div className={styles.grid}>
   {reviews.map(r=><article className={styles.card} key={r.name}><img className={styles.photo} src={r.photo} alt=""/><div className={styles.review}><b>★★★★★</b><p>{r.text}</p></div><footer><img src={r.avatar} alt=""/><div><strong>{r.name}</strong><span>{r.date}</span></div><i>•••</i></footer></article>)}
   <article className={styles.rating}><h3>⌖ <span>Яндекс Карты</span><i>↗</i></h3><div className={styles.score}><strong>4,9</strong><div><b>★★★★★</b><span>128 отзывов</span></div></div><div className={styles.map}><img src={map} alt=""/><div><strong>ATELIER 01</strong><span>Детейлинг и стиль</span></div></div><a href="#" className={styles.cta}>Смотреть все отзывы <span>→</span></a></article>
  </div>
 </section></div>
}