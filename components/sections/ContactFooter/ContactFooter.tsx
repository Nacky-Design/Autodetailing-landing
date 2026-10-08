"use client";
import { useEffect, useRef } from "react";
import styles from "./ContactFooter.module.css";
import { CONTACT } from "@/lib/data/contacts";

const completedScenes = new Set<string>();
const bg="https://www.figma.com/api/mcp/asset/133ec847-e43b-4cfd-af46-21c7aac80fc4.png";
const send="https://www.figma.com/api/mcp/asset/9256bad0-aac5-46b0-97c4-7c137a8726f8.svg";
const logo="https://www.figma.com/api/mcp/asset/2a5888de-65dd-4394-9f8e-276d0404687d.svg";
const parking="https://www.figma.com/api/mcp/asset/cf149be5-6b2e-4df0-9c9a-a0082c5e4e36.svg";
const clock="https://www.figma.com/api/mcp/asset/0341c8af-a939-4c2d-9e74-b61ba3d19314.svg";
const pin="https://www.figma.com/api/mcp/asset/11688031-a073-4050-b6b1-51ea4b2b3876.svg";

export function ContactFooter(){
 const sectionRef = useRef<HTMLElement>(null);
 useEffect(() => {
  const section = sectionRef.current;
  if (!section || !window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)").matches) return;
  if (completedScenes.has("contacts")) { section.dataset.revealed = "true"; section.dataset.motion = "complete"; return; }
  const observer = new IntersectionObserver(([entry]) => {
   if (entry.isIntersecting) { completedScenes.add("contacts"); section.dataset.revealed = "true"; observer.disconnect(); }
  }, { rootMargin:"0px 0px -35% 0px" });
  observer.observe(section);
  return () => observer.disconnect();
 }, []);
 return <section ref={sectionRef} data-revealed="false" id="contacts" className={styles.section}>
<img className={styles.bg} src={bg} alt=""/><div className={styles.leftShade}/><div className={styles.tone}/>
<div className={styles.heading} data-scene-heading><div className={styles.kicker}>КОНТАКТЫ<i/></div><h2>Будем рады<br/><span>вашему обращению</span></h2><p>Проконсультируем, подберём решение<br/>и запишем на удобное время.</p></div>
<div className={styles.phone}><strong>+7 987 654-32-10</strong><span>Ежедневно с 10:00 до 21:00</span></div>
<a className={styles.cta} data-cta-system href={CONTACT.phone.href}>Позвонить в студию</a>
<div className={styles.info}>
<div className={styles.infoItem}><img src={pin} alt=""/><div><strong>Адрес студии</strong><span>г. Самара, ул. Лесная, 12<br/>БЦ «Кристалл», 1 этаж</span></div></div>
<div className={styles.infoItem}><img src={clock} alt=""/><div><strong>Часы работы</strong><span>Ежедневно<br/>с 10:00 до 21:00</span></div></div>
<div className={styles.infoItem}><img src={parking} alt=""/><div><strong>Парковка</strong><span>Бесплатная парковка<br/>для наших клиентов</span></div></div>
</div>
<footer className={styles.footer}><div className={styles.brand}><img src={logo} alt=""/><div><strong>ATELIER 01</strong><span>DETAILING &amp; STYLE</span></div></div>
<nav><a href="#services">Услуги</a><a href="#configurator">Конфигуратор</a><a href="#portfolio">Портфолио</a><a href="#pricing">Стоимость</a><a href="#reviews">Отзывы</a><a href="#faq">FAQ</a><a href="#contacts">Контакты</a></nav>
<div className={styles.social}><a href="#"><img src={send} alt="Telegram"/></a><a href="#">VK</a></div>
<div className={styles.legal}><span>© 2026 ATELIER 01. Детейлинг и стайлинг автомобилей в Самаре.</span><div><a href="#">Политика конфиденциальности</a><a href="#">Карта сайта</a></div></div></footer>
</section>}