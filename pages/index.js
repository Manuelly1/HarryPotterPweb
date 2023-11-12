import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/index.module.css';
import IconUser from './components/icons/iconUser';

const testedeurls = [
  'https://cdn.hmv.com/r/w-640/hmv/files/b4/b457a57a-811f-42c7-8f6a-7d77fa28457d.jpg',
  'https://images.booklooker.de/s/00CsMo/Harry-Potter-und-die-Kammer-des-Schreckens.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg',
];

const testeimagensmainpage = [
  "https://img.elo7.com.br/product/original/1C6878E/painel-2x1-harry-potter-magicos.jpg",
  "https://initiate.alphacoders.com/images/133/stretched-1920-1080-1331712.png?9843",
  "https://initiate.alphacoders.com/images/130/cropped-1920-1080-1309409.jpg?8077",
  "https://img.elo7.com.br/product/original/1C6878E/painel-2x1-harry-potter-magicos.jpg",
  "https://initiate.alphacoders.com/images/129/stretched-1920-1080-1299476.png?3555",
  "https://initiate.alphacoders.com/images/132/stretched-1920-1080-1324809.png?1657",
];

export default function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % testeimagensmainpage.length);
    }, 7000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className={styles.bodyWrapper}>
      <div>
        <div className={styles.linkWrapper}>
          <Link href="User/login">
            <IconUser />
          </Link>
          <Link href="User/register"></Link>
        </div>
        <img src={testeimagensmainpage[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
      </div>
      <div className={styles['all-movies']}>
        {testedeurls.map((testedeurl, index) => (
          <div key={index} className={styles.movies}>
            <img src={testedeurl} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
