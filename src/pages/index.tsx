import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../../public/logo.svg";
import catImg from "../../public/cat.svg";
import dogImg from "../../public/dog.svg";
import allImg from "../../public/all.svg";
import centerImg from "../../public/center.png";

import { HomeBoxLink } from "../common/components/HomeBoxLink";
import { Footer } from "../common/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iAdopt</title>
        <meta
          name="description"
          content="Plataforma de adopción que pone en contacto protectoras y adoptantes"
        />
        <link rel="icon" href="/favicon.ico" />=
      </Head>

      <main className={styles.main}>
        <div className={styles.home_section}>
          <Image src={logo} alt="iAdopt" />
          <div className={styles.text}>
            <p>
              iAdopt te facilita encontrar al animal que buscas. Pone en
              contacto protectoras y asociaciones con los adoptantes para
              facilitar todo el proceso de adopción
            </p>
          </div>
          <h3 className={styles.description}>¿En qué podemos ayudarte?</h3>
        </div>

        <div className={styles.linkboxes}>
          <HomeBoxLink path="/cats" pathImage={catImg} altImage="Ver gatos" />
          <HomeBoxLink path="/dogs" pathImage={dogImg} altImage="Ver perros" />
          <HomeBoxLink path="/animals" pathImage={allImg} altImage="Ver todos los animales" />
          <HomeBoxLink path="/centros" pathImage={centerImg} altImage="Ver centros" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
