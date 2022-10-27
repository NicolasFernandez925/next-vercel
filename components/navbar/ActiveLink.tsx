import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";

const styleActive: CSSProperties = {
  color: "#0070f3",
  textDecoration: "none",
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} legacyBehavior passHref style={{ marginRight: "10px" }}>
      <a style={asPath === href ? styleActive : undefined}>{text}</a>
    </Link>
  );
};
