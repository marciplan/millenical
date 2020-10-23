import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A new kind of calendar. Again.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Millenical</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            The calendar for those with a full agenda
          </code>
        </p>
      </main>
      <content className={styles.secondary}>
        <p className={styles.holder}>
          Busy lifes we're living, huh? We want to be productive but we also
          want to see our friends and families. So do your friends and families.
          Millenical is going to solve for that.
        </p>
        <p className={styles.code}>Launching in 2021</p>
      </content>
      <footer className={styles.footer}>
        <a
          href="mailto:hey@millenical.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's keep in touch. hey@millenical.com
        </a>
      </footer>
    </div>
  );
}

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter;
  }

  p {
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
  }
`}</style>;
