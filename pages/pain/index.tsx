import Layout from "../../components/layout";
import CatCards from "../../components/CatCards";
import styles from "../../styles/Home.module.scss";
export default function Pain() {
  return (
    <Layout>
      <section>
        <CatCards />
      </section>
    </Layout>
    /*<div className={styles.container}>
      <header>

      </header>

      <main className={styles.main}>

      </main>

     {/!* <footer className={styles.footer}>
      </footer>*!/}
    </div>*/
  );
}
