import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CARKVIZ_URL } from "@/lib/constants";
import styles from "./Configurator.module.css";

export function Configurator() {
  return (
    <section
      id="configurator"
      className={styles.section}
      aria-labelledby="configurator-title"
    >
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>ОНЛАЙН-КОНФИГУРАТОР</p>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>

          <h2 id="configurator-title" className={styles.title}>
            <span className={styles.mobileTitleLine}>Примерьте новый</span>
            <span className={styles.mobileTitleLine}>цвет на своём</span>
            <span className={`${styles.accent} ${styles.mobileTitleLine}`}>автомобиле</span>
          </h2>

          <p className={styles.description}>
            Выберите цвет и варианты оклейки и посмотрите, как будет выглядеть ваш автомобиль.
          </p>

          <Button
            className={styles.cta}
            href={CARKVIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            ПРИМЕРИТЬ НА СВОЙ АВТО
          </Button>
        </div>

        <div className={styles.playerWrap}>
          <a
            className={styles.player}
            href={CARKVIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть демонстрацию конфигуратора"
          >
            <iframe
              className={styles.preview}
              src={CARKVIZ_URL}
              title="Демонстрация Car Quiz"
              loading="lazy"
              tabIndex={-1}
            />
            <span className={styles.scrim} aria-hidden="true" />
            <span className={styles.playBackdrop} aria-hidden="true">
              <span className={styles.playControl}>
                <span className={styles.playTriangle} />
              </span>
            </span>
          </a>

          <div className={styles.controls} aria-hidden="true">
            <span className={styles.miniPlay}>▶</span>
            <span className={styles.time}>00:12 / 01:04</span>
            <span className={styles.track}>
              <i />
            </span>
            <span className={styles.controlIcon}>◐</span>
            <span className={styles.controlIcon}>⛶</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
