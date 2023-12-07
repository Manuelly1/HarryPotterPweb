import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/index.module.css';
import IconUser from './components/icons/iconUser';
import IconHouses from './components/icons/iconHouses';
import IconHome from './components/icons/iconHome';
import IconExit from './components/icons/iconExit';
import { open_close_modal } from './components/exitCard/exitCard';
import { getMoviesData } from '../api/moviesApi';
import { useAuth } from '../context/authContext';

const testeimagensmainpage = [
  "https://img.elo7.com.br/product/original/1C6878E/painel-2x1-harry-potter-magicos.jpg",
  "https://wallpapers.com/images/featured/harry-potter-gi5aixvd4d26cpij.jpg",
  "https://www.hdwallpapers.in/download/hogwarts_castle_hd_harry_potter_and_the_chamber_of_secrets-HD.jpg",
  "https://i.pinimg.com/originals/a7/ee/0f/a7ee0facd8ef1cef052c3d8faf2a3bf5.jpg",
  "https://i.pinimg.com/originals/5a/ab/18/5aab18d5d3ba0f96c7091cc4cc3aae3d.jpg",
  "https://cutewallpaper.org/28/deathly-hallows-wallpaper-for-android/688024323.jpg",
  "https://i.pinimg.com/originals/dd/cf/a5/ddcfa58c8d74b38bdcbcb431f94bf58b.jpg",
  "https://wallpapercave.com/wp/JQGpuF3.jpg",
];

export default function Main({ moviesData }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    const { isLoggedIn, userDetails, logout } = useAuth();
  
    const handleLogoutClick = () => {
        if (isLoggedIn) {
            open_close_modal(true);
        } else {
          window.alert('Você precisa estar logado para realizar o logout');
        }
      };
  
    const handleLogoutConfirmed = () => {
      logout();
      setShowLogoutConfirmation(false);
    };
  
    const handleLogoutCancelled = () => {
      setShowLogoutConfirmation(false);
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % testeimagensmainpage.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + testeimagensmainpage.length) % testeimagensmainpage.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.navbar}>
          <div className={styles.linkHome}>
            <Link href="/">
              <IconHome />
            </Link>
          </div>
          <div className={styles.linkWrapperHouses}>
            <Link href="Movies/houses">
              <IconHouses />
            </Link>
          </div>
          <div className={styles.linkWrapperUser}>
            <Link href="User/login">
              <IconUser />
            </Link>
          </div>
          <div className={styles.linkWrapperHouses} onClick={handleLogoutClick}>
            <IconExit />
          </div>
        </div>
  
        <div className={styles.roundedImageWrapper}>
          <img src={testeimagensmainpage[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} />
        </div>
        <br></br>
  
        <Link href="Movies/moviesDetails" passHref>
          <div className={styles['all-movies']}>
            {moviesData.map((movie, index) => (
              <div key={movie.id} className={styles.movies}>
                <img src={movie.imagem} alt={`Imagem ${movie.id}`} />
                <span className={styles.movieNumber}>{index + 1}</span>
              </div>
            ))}
          </div>
        </Link>
  
        {/* Modal de confirmação de logout */}
        {showLogoutConfirmation && (
          <div className={styles.logoutConfirmationModal}>
            <p>Deseja realmente sair?</p>
            <button onClick={handleLogoutConfirmed}>Sim</button>
            <button onClick={handleLogoutCancelled}>Cancelar</button>
          </div>
        )}
  
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
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