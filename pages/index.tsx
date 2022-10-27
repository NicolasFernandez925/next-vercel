import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Ir a <Link href={{ pathname: "about" }}>About</Link>
      </h1>
    </MainLayout>
  );
}
