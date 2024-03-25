import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt=""fill/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>7.03.2024 </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, est!</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet ab deleniti 
            aliquid dignissimos earum in neque, nemo quo atque.</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;