import styles from "./hero.module.scss";

const HeroBanner = async () => {
  const data = await fetch("http://localhost:1337/api/homepages");
  const info = await data.json();

  console.log(info);
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to the Future</h1>
        <p>An extendable launcher. Fast, ergonomic, and reliable.</p>
        <a className={styles.heroButton} href="#download">
          Download
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
