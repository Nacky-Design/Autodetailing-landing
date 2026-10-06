"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const items = [
  {
    question: "Сколько занимает оклейка автомобиля?",
    answer: "Срок зависит от модели автомобиля и объёма работ. В среднем полная виниловая оклейка занимает от 2 до 5 дней. Точный срок называем после осмотра автомобиля и согласования всех деталей."
  },
  {
    question: "Какие материалы вы используете?",
    answer: "Работаем с профессиональными автомобильными плёнками проверенных производителей. Материал подбираем под задачу: изменение цвета и фактуры, защита кузова или отдельных элементов. Перед работой показываем образцы и объясняем различия."
  },
  {
    question: "Можно ли оклеить только часть автомобиля?",
    answer: "Да. Можно оклеить отдельные элементы — крышу, капот, зеркала, бамперы, молдинги или сделать акцентные детали. Подберём вариант так, чтобы материал и цвет сочетались с остальным кузовом."
  },
  {
    question: "Как ухаживать за плёнкой после оклейки?",
    answer: "После оклейки дадим рекомендации по первой мойке и дальнейшему уходу. Обычно достаточно бережной ручной или бесконтактной мойки без агрессивной химии и воздействия высоким давлением вплотную к краям плёнки."
  },
  {
    question: "Даёте ли гарантию на работы?",
    answer: "Да, на выполненные работы действует гарантия. Условия зависят от выбранного материала и вида услуги — фиксируем их при согласовании заказа и отдельно объясняем, что относится к гарантии."
  }
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.stage}>
      <section id="faq" className={styles.section} aria-labelledby="faq-title">
        <span className={styles.veil} aria-hidden="true" />
        <div className={styles.heading}>
          <div className={styles.kicker}><span>FAQ</span><i /></div>
          <h2 id="faq-title" className={styles.title}><span>Ответы</span><span>на частые вопросы</span></h2>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => {
            const active = open === index;
            return (
              <article className={active ? styles.itemOpen : styles.item} key={item.question}>
                <button className={styles.question} type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
                  <span>{item.question}</span><i aria-hidden="true" />
                </button>
                <div className={styles.answerWrap} aria-hidden={!active}>
                  <div className={styles.divider} />
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <aside className={styles.quote}>
          <b>“</b>
          <div><p>Всегда подберём лучшее решение для вашего автомобиля и ответим на все вопросы.</p><i/><strong>Алексей</strong><span>Руководитель студии ATELIER 01</span></div>
        </aside>
      </section>
    </div>
  );
}
