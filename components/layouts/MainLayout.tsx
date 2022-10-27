import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children } : {children: ReactNode}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
