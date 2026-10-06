import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CARKVIZ_URL, SITE } from "@/lib/constants";
import { CONTACT } from "@/lib/data/contacts";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          className={styles.studioBg}
          src="/images/hero/studio-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className={styles.tone} />
        <div className={styles.leftVeil} />

        <div className={styles.mobileVehicleStage}>
          <Image
            className={styles.mobileVehicle}
            src="https://www.figma.com/api/mcp/asset/0c7c97d7-1b97-4b7f-a551-2b07fcd5294b.png"
            alt="Премиальный автомобиль, вид спереди"
            width={1246}
            height={1262}
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className={styles.vehicleStage}>
          <Image
            className={styles.vehicleShadow}
            src="/images/hero/vehicle-shadow.png"
            alt=""
            width={1311}
            height={974}
            priority
            sizes="(max-width: 1023px) 120vw, 70vw"
          />
          <Image
            className={styles.vehicle}
            src="/images/hero/vehicle.png"
            alt="Премиальный автомобиль в студии ATELIER 01"
            width={1058}
            height={619}
            priority
            quality={90}
            sizes="(max-width: 767px) 100vw, (max-width: 1439px) 70vw, 1058px"
          />
        </div>

        <div className={styles.wallSign}>
          <p className={styles.wallWordmark}>{SITE.name}</p>
          <p className={styles.wallDescriptor}>{SITE.descriptor}</p>
        </div>
      </div>


      <div className={styles.content}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.headline}>
            <span className={styles.headlineLine}>Новый образ</span>
            <span className={`${styles.headlineLine} ${styles.headlineAccent}`}>
              вашего авто
            </span>
          </h1>

          <p className={styles.description}>
            <span>Премиальные пленки.</span>
            <span>Профессиональная оклейка.</span>
            <span>Индивидуальный стиль.</span>
          </p>

          <div className={styles.actions}>
            <Button
              href={CARKVIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className={styles.primaryCta}
              leadingIcon={
                <Image
                  src="/icons/box-dark.svg"
                  alt=""
                  width={35}
                  height={35}
                  aria-hidden
                />
              }
              trailingIcon={
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={25}
                  height={25}
                  aria-hidden
                />
              }
            >
              Примерить на своём авто
            </Button>

          </div>
        </div>
      </div>

      <div className={styles.contactBar}>
        <div className={styles.contactInner}>
          <div className={styles.contactInfo}>
            <div className={styles.contactDetail}>
              <Image
                className={styles.contactIcon}
                src="/icons/map-pin.svg"
                alt=""
                width={38}
                height={38}
                aria-hidden
              />
              <div>
                <p className={styles.contactPrimary}>
                  {CONTACT.address.primary}
                </p>
                <p className={styles.contactSecondary}>
                  {CONTACT.address.secondary}
                </p>
              </div>
            </div>

            <div className={styles.contactDivider} aria-hidden="true" />

            <div className={styles.contactDetail}>
              <Image
                className={styles.contactIcon}
                src="/icons/phone-light.svg"
                alt=""
                width={38}
                height={38}
                aria-hidden
              />
              <div>
                <a className={styles.contactPrimary} href={CONTACT.phone.href}>
                  {CONTACT.phone.display}
                </a>
                <p className={styles.contactSecondary}>{CONTACT.phone.hours}</p>
              </div>
            </div>
          </div>

          <div className={styles.messengers}>
            <p className={styles.messengerPrompt}>{CONTACT.messengers.prompt}</p>
            <div className={styles.messengerDivider} aria-hidden="true" />
            <div className={styles.socialActions}>
              <a
                className={`${styles.socialBtn} ${styles.socialTelegram}`}
                href={CONTACT.messengers.telegram}
                aria-label="Telegram (ссылка появится позже)"
              >
                <Image src="/icons/send.svg" alt="" width={30} height={30} />
              </a>
              <a
                className={`${styles.socialBtn} ${styles.socialVk}`}
                href={CONTACT.messengers.vk}
                aria-label="VK (ссылка появится позже)"
              >
                VK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
