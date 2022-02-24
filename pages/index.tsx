import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const arr = [
    { id: 0, ref: "/img/cat0.jpg" },
    { id: 1, ref: "/img/cat1.jpg" },
    { id: 2, ref: "/img/cat2.jpg" },

    { id: 4, ref: "/img/cat4.jpg" },
  ];
  return (
    <Layout home>
      <section>
        <Carousel
          fade
          interval={5000}
          style={{ width: "100%", height: "100%" }}
        >
          {arr.map((item, index) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={`${item.ref}`} alt="Кот" />
              <Carousel.Caption>
                <h3>Морда {index + 1}</h3>
                <p>Ну очень вредная</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
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
