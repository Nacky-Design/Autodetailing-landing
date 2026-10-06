import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "ghost" | "social";
type Size = "md" | "lg" | "icon";

type Common = {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

type ButtonAsButton = Common &
  Omit<ComponentPropsWithoutRef<"button">, keyof Common> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  Omit<ComponentPropsWithoutRef<"a">, keyof Common> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  leadingIcon,
  trailingIcon,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leadingIcon ? <span className={styles.icon}>{leadingIcon}</span> : null}
      {children ? <span className={styles.label}>{children}</span> : null}
      {trailingIcon ? (
        <span className={styles.icon}>{trailingIcon}</span>
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
