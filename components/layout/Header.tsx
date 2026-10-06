"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CARKVIZ_URL, SITE } from "@/lib/constants";
import { CONTACT } from "@/lib/data/contacts";
import { NAV_LINKS } from "@/lib/data/nav";
import styles from "./Header.module.css";

type HeaderProps = {
  activeHref?: string;
};

export function Header({ activeHref = "#services" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label={SITE.name}>
          <span className={styles.wordmark}>
            {SITE.brand}{" "}
            <span className={styles.brandAccent}>{SITE.brandAccent}</span>
          </span>
          <span className={styles.descriptor}>{SITE.descriptor}</span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    link.href === activeHref
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.headerSocials}>
            <a href={CONTACT.messengers.telegram} aria-label="Telegram"><Image src="/icons/send.svg" alt="" width={20} height={20}/></a>
            <a href={CONTACT.messengers.vk} aria-label="VK">VK</a>
          </div>
          <Button
            href={CARKVIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            className={styles.actionOutline}
            leadingIcon={
              <Image
                src="/icons/box.svg"
                alt=""
                width={27}
                height={27}
                aria-hidden
              />
            }
          >
            Онлайн-примерка
          </Button>
          <Button
            type="button"
            variant="primary"
            size="md"
            className={styles.actionPrimary}
            leadingIcon={
              <Image
                src="/icons/phone.svg"
                alt=""
                width={25}
                height={25}
                aria-hidden
              />
            }
            aria-label="Заказать звонок (скоро)"
            onClick={() => {
              /* placeholder action */
            }}
          >
            Заказать звонок
          </Button>
        </div>

        <a className={styles.mobilePhone} href={CONTACT.phone.href} aria-label="Позвонить">
          <Image src="/icons/phone.svg" alt="" width={20} height={20}/>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.burgerOpen : styles.burger} />
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className={`${styles.mobilePanel} ${styles.mobilePanelOpen}`}
        >
          <nav aria-label="Мобильная навигация">
            <ul className={styles.mobileList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileContact}>
            <a href={CONTACT.phone.href}>{CONTACT.phone.display}</a>
            <div><a href={CONTACT.messengers.telegram}>Telegram</a><a href={CONTACT.messengers.vk}>VK</a></div>
          </div>
          <div className={styles.mobileActions}>
            <Button
              href={CARKVIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              leadingIcon={
                <Image
                  src="/icons/box.svg"
                  alt=""
                  width={27}
                  height={27}
                  aria-hidden
                />
              }
            >
              Онлайн-примерка
            </Button>
            <Button
              type="button"
              variant="primary"
              size="md"
              leadingIcon={
                <Image
                  src="/icons/phone.svg"
                  alt=""
                  width={25}
                  height={25}
                  aria-hidden
                />
              }
              onClick={() => {
                setOpen(false);
              }}
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
