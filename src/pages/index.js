import Head from 'next/head';
import Image from 'next/image';
import styles from '@/components/Home/Home.module.scss';
import Header from '@/components/Header/Header';
import Title from '@/components/Title/Title';
import { cardsList } from '@/data/cards';

import localFont from '@next/font/local';
import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';

const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-Regular.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={manrope.className}>
        <Header />
        <main className={styles.main}>
          <section className={styles.section}>
            <div className="container">
              <Title variant="h2" className={styles.title}>
                ut aliquip ex ea commodo consequat
              </Title>
              <Card
                bigImg={true}
                className={styles.card}
                title={cardsList[0].title}
                paragraphs={cardsList[0].paragraphs}
                img={cardsList[0].img}
              />
              <Card
                className={styles.card}
                title={cardsList[1].title}
                paragraphs={cardsList[1].paragraphs}
                img={cardsList[1].img}
              />
            </div>
          </section>
          <section className={styles.gallerySection}>
            <Gallery />
          </section>
          <section className={styles.section}>
            <div className="container">
              <Title variant="h2" className={styles.title}>
                ut aliquip ex ea commodo consequat
              </Title>

              <Card
                bigImg={true}
                className={styles.card}
                title={cardsList[2].title}
                paragraphs={cardsList[2].paragraphs}
                img={cardsList[2].img}
              />
              <Card
                className={styles.card}
                title={cardsList[3].title}
                paragraphs={cardsList[3].paragraphs}
                img={cardsList[3].img}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
