import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
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
            Busy lifes we're living, huh? We want to be productive at work and
            make the most of the time with our friends and families. It's time
            our calendar took that into account.
          </p>
          <p className={styles.code}>Launching in 2021</p>
        </content>
        <footer className={styles.footer}>
          <a
            href="mailto:hey@millenical.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's keep in touch:&nbsp;
            <span className={styles.highlight}>hey@millenical.com</span>
          </a>
        </footer>
      </div>
    </Layout>
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
