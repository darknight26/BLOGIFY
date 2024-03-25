import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Blogify" width={50} height={50}/>
          <h1 className={styles.logoText}>Blogify</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi 
          necessitatibus ipsa suscipit! Quidem totam debitis nobis incidunt ea in porro dolores beatae, 
          facere enim voluptate quae nostrum distinctio. Eum mollitia cumque animi?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18}/>
          <Image src="/instagram.png" width={18} height={18}/>
          <Image src="/tiktok.png" width={18} height={18}/>
          <Image src="/youtube.png" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
