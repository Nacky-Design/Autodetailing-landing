import styles from "./About.module.css";

const cards = [
  { number: "01", title: <>Точность<br />в каждой детали</>, image: "https://www.figma.com/api/mcp/asset/6f7c5aac-0090-49f1-8872-2398d0b9594d.png", className: styles.cardWide },
  { number: "02", title: <>Чистое<br />и контролируемое пространство</>, image: "https://www.figma.com/api/mcp/asset/26852556-4b8a-44c8-9673-5289021bb190.png", className: styles.cardMedium },
  { number: "03", title: <>Внимание<br />к результату</>, image: "https://www.figma.com/api/mcp/asset/12ac21ed-13f5-4fbf-9b1f-4c9b7d82879a.png", className: styles.cardSmall },
];

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.copy}>
        <div className={styles.kickerRow}>
          <p className={styles.kicker}>О СТУДИИ</p>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>
        <h2 id="about-title" className={styles.title}>
          <span>Детейлинг</span>
          <span className={styles.accent}>без компромиссов</span>
        </h2>
        <p className={styles.description}>
          ATELIER 01 — студия автомобильного стайлинга в Самаре.<br />
          Мы специализируемся на оклейке, защите и индивидуализации автомобилей, сочетая качественные материалы, внимание к деталям и современный подход к работе.
        </p>
      </div>

      <div className={styles.cards}>
        {cards.map((card) => (
          <article key={card.number} className={`${styles.card} ${card.className}`}>
            <img className={styles.cardImage} src={card.image} alt="" />
            <span className={styles.cardGradient} aria-hidden="true" />
            <div className={styles.cardCaption}>
              <div className={styles.numberRow}>
                <span>{card.number}</span><i aria-hidden="true" />
              </div>
              <p>{card.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
