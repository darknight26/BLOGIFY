import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '../components/menu/Menu';
import Image from 'next/image';
import Comments from '../components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" className={styles.avatar} fill />
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>Ashutosh Shukla</span>
                    <span className={styles.date}>03.03.2024</span>
                </div>
            </div>
        </div>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" className={styles.image}fill />
      </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde 
                maiores voluptate non facilis itaque quasi repellendus laborum sequi id?</p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos 
                adipisci aliquam nesciunt libero ea quis earum, totam saepe at magnam enim neque facere 
                quibusdam reiciendis incidunt asperiores dicta dolorum? Quam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit 
                veniam totam, dignissimos error blanditiis libero inventore tempora?
                Dolores aperiam repudiandae labore maxime eaque aspernatur fugiat laudantium, blanditiis dolorum veniam.
            </p>
            </div>
            <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage;
