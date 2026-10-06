import { CARKVIZ_URL } from "@/lib/constants";

export type ServiceCard = {
  id: string;
  number: string;
  title: string;
  titleLines: readonly string[];
  description: string;
  cta: string;
  href: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const SERVICES = {
  kicker: "Услуги",
  headline: "Меняем облик.",
  headlineAccent: "Сохраняем ценное.",
  cards: [
    {
      id: "vinyl",
      number: "01",
      title: "Виниловая плёнка",
      titleLines: ["Виниловая", "плёнка"],
      description: "Новый цвет, фактура\nи характер.",
      cta: "Примерить цвет",
      href: CARKVIZ_URL,
      image: {
        src: "/images/services/vinyl.jpg",
        width: 928,
        height: 1152,
        alt: "Оливковый автомобиль с виниловой плёнкой в студии",
      },
    },
    {
      id: "ppf",
      number: "02",
      title: "Защитная плёнка",
      titleLines: ["Защитная", "плёнка"],
      description: "Защита кузова от сколов\nи внешних воздействий.",
      cta: "Рассчитать защиту",
      href: CARKVIZ_URL,
      image: {
        src: "/images/services/ppf.jpg",
        width: 928,
        height: 1152,
        alt: "Нанесение защитной плёнки на кузов автомобиля",
      },
    },
    {
      id: "chrome",
      number: "03",
      title: "Хромзона",
      titleLines: ["Хромзона"],
      description: "Стильный и цельный\nобраз.",
      cta: "Примерить хромзону",
      href: CARKVIZ_URL,
      image: {
        src: "/images/services/chrome.jpg",
        width: 928,
        height: 1152,
        alt: "Хромированные зеркала и стойки автомобиля",
      },
    },
  ] as const satisfies readonly ServiceCard[],
} as const;
