import { Button } from "@/components/ui/Button";
import styles from "./Configurator.module.css";

export function Configurator() {
  return (
    <section id="configurator" className={styles.section} aria-labelledby="configurator-title">
      <div className={styles.copy}>
        <div className={styles.kickerRow}>
          <p className={styles.kicker}>Интерактивный конфигуратор</p>
          <span className={styles.kickerLine} aria-hidden="true" />
        </div>
        <h2 id="configurator-title" className={styles.title}>
          <span>Соберите свой</span>
          <span className={styles.accent}>идеальный образ</span>
          <span>автомобиля</span>
        </h2>
        <p className={styles.description}>
          Выберите автомобиль, материал и цвет. Посмотрите результат до начала работ — прямо в браузере.
        </p>
        <Button className={styles.cta} href="https://carkviz.vercel.app/" target="_blank" rel="noopener noreferrer" size="lg">
          Открыть конфигуратор
        </Button>
      </div>

      <div className={styles.playerWrap}>
        <a className={styles.player} href="https://carkviz.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Открыть демонстрацию конфигуратора">
          <iframe className={styles.preview} src="https://carkviz.vercel.app/" title="Демонстрация Car Quiz" loading="lazy" tabIndex={-1} />
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.play} aria-hidden="true"><span /></span>
        </a>
        <div className={styles.controls} aria-hidden="true">
          <span className={styles.miniPlay}>▶</span><span className={styles.time}>00:12 / 01:04</span>
          <span className={styles.track}><i /></span><span>◐</span><span>⛶</span>
        </div>
      </div>
    </section>
  );
}
