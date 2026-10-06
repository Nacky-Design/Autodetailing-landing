import styles from "./ContactFooter.module.css";

const bg="https://www.figma.com/api/mcp/asset/53f874a0-3c28-4f44-9dc0-9b8e71ab9c27.png";
const logo="https://www.figma.com/api/mcp/asset/34af36d6-7a2a-4cda-bba2-9ff4e6608f43.png";

export function ContactFooter(){
 return <section id="contacts" className={styles.section} style={{backgroundImage:`linear-gradient(rgba(3,9,12,.74),rgba(3,9,12,.86)),url("${bg}")`}}>
  <div className={styles.inner}>
   <header className={styles.heading}><div className={styles.kicker}>КОНТАКТЫ<i/></div><h2>Будем рады вашему <span>обращению</span></h2><p>Ответим на вопросы, рассчитаем стоимость и подберём лучшее решение для вашего автомобиля.</p></header>
   <div className={styles.content}>
    <div className={styles.contacts}>
      <a href="tel:+70000000000"><small>Телефон</small><strong>+7 (000) 000-00-00</strong></a>
      <a href="mailto:info@atelier01.ru"><small>E-mail</small><strong>info@atelier01.ru</strong></a>
      <div><small>Адрес</small><strong>г. Самара, ул. Примерная, 1</strong></div>
      <div><small>Режим работы</small><strong>Ежедневно, 10:00–20:00</strong></div>
    </div>
    <div className={styles.actions}>
      <a className={styles.primary} href="tel:+70000000000">Записаться на консультацию <span>↗</span></a>
      <div className={styles.socials}><a href="#" aria-label="Telegram">TG</a><a href="#" aria-label="VK">VK</a><a href="#" aria-label="WhatsApp">WA</a></div>
    </div>
   </div>
  </div>
  <footer className={styles.footer}><img src={logo} alt="ATELIER 01"/><nav><a href="#top">Главная</a><a href="#services">Услуги</a><a href="#portfolio">Работы</a><a href="#pricing">Прайс</a><a href="#faq">FAQ</a></nav><div className={styles.legal}><span>© 2026 ATELIER 01</span><a href="#">Политика конфиденциальности</a></div></footer>
 </section>
}