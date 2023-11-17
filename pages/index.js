import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/index.module.css';
import IconUser from './components/icons/iconUser';
import IconHouses from './components/icons/iconHouses';
import { getMoviesData } from '../api/moviesApi';

const testeimagensmainpage = [
  "https://img.elo7.com.br/product/original/1C6878E/painel-2x1-harry-potter-magicos.jpg",
  "https://initiate.alphacoders.com/images/133/stretched-1920-1080-1331712.png?9843",
  "https://initiate.alphacoders.com/images/130/cropped-1920-1080-1309409.jpg?8077",
  "https://img.elo7.com.br/product/original/1C6878E/painel-2x1-harry-potter-magicos.jpg",
  "https://initiate.alphacoders.com/images/129/stretched-1920-1080-1299476.png?3555",
  "https://initiate.alphacoders.com/images/132/stretched-1920-1080-1324809.png?1657",
];

export default function Main({ moviesData }) {
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
        <div className={styles.linkWrapperUser}>
          <Link href="User/login">
            <IconUser />
          </Link>
        </div>
        <div className={styles.linkWrapperHouses}>
          <Link href="Movies/houses">
            <IconHouses />
          </Link>
        </div>
        <Link href="User/register"></Link>

        <img src={testeimagensmainpage[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
      </div>
      <div className={styles['all-movies']}>
        {moviesData.map((movie, index) => (
          <div key={movie.id} className={styles.movies}>
            <img src={movie.imagem} alt={`Imagem ${movie.id}`} />
            <span className={styles.movieNumber}>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const moviesData = await getMoviesData();
  return {
    props: {
      moviesData,
    },
  };
}
