import styles from "./ContactFooter.module.css";

const bg="https://www.figma.com/api/mcp/asset/a6c6ac23-1851-4472-9818-b327e37ba592.png";
const logo="https://www.figma.com/api/mcp/asset/90c0cdcc-6202-442a-9eb4-a20fc685c514.svg";

export function ContactFooter(){
 return <section id="contacts" className={styles.section} style={{backgroundImage:`linear-gradient(rgba(3,9,12,.74),rgba(3,9,12,.86)),url("${bg}")`}}>
  <div className={styles.inner}>
   <header className={styles.heading}><div className={styles.kicker}>КОНТАКТЫ<i/></div><h2>Будем рады вашему <span>обращению</span></h2><p>Проконсультируем, подберём решение и запишем на удобное время.</p></header>
   <div className={styles.content}>
    <div className={styles.contacts}>
      <a href="tel:+70000000000"><small>Телефон</small><strong>+7 987 654-32-10</strong></a>
      <a href="mailto:info@atelier01.ru"><small>E-mail</small><strong>info@atelier01.ru</strong></a>
      <div><small>Адрес</small><strong>г. Самара, ул. Лесная, 12 — БЦ «Кристалл», 1 этаж</strong></div>
      <div><small>Режим работы</small><strong>Ежедневно с 10:00 до 21:00</strong></div>
    </div>
    <div className={styles.actions}>
      <a className={styles.primary} href="tel:+70000000000">Примерить на своём авто <span>↗</span></a>
      <div className={styles.socials}><a href="#" aria-label="Telegram">TG</a><a href="#" aria-label="VK">VK</a><a href="#" aria-label="WhatsApp">WA</a></div>
    </div>
   </div>
  </div>
  <footer className={styles.footer}><img src={logo} alt="ATELIER 01"/><nav><a href="#top">Главная</a><a href="#services">Услуги</a><a href="#portfolio">Работы</a><a href="#pricing">Прайс</a><a href="#faq">FAQ</a></nav><div className={styles.legal}><span>© 2026 ATELIER 01</span><a href="#">Политика конфиденциальности</a></div></footer>
 </section>
}