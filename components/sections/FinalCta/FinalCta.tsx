import styles from "./FinalCta.module.css";

const benefits = [
  ["5 лет", "Гарантия на работы"],
  ["Премиум", "Материалы"],
  ["Опытные", "Мастера"],
  ["Точные", "Сроки"],
];

export function FinalCta() {
  return (
    <div className={styles.stage}>
      <section className={styles.section} aria-labelledby="final-cta-title">
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
