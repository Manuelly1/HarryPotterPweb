import Link from 'next/link';
import styles from '../styles/Characters.module.css';
import IconHome from '../components/icons/iconHome';
import IconSearch from '../components/icons/iconSearch';
import IconBack from '../components/icons/iconBack';

const charactersData = [
    {
        id: 1,
        name: "Harry Potter",
        image: "https://imagem.band.com.br/f_480959.jpg",
    },
    {
        id: 2,
        name: "Draco Malfoy",
        image: "https://i.pinimg.com/474x/32/c3/7e/32c37e565a7138117dbe2dbbcc61b158.jpg",
    },
    {
        id: 3,
        name: "Hermione Granger",
        image: "https://images7.alphacoders.com/726/726078.jpg",
    },
    {
        id: 4,
        name: "Ron Weasley",
        image: "https://wallpapercave.com/wp/wp1965058.jpg",
    },
    {
        id: 5,
        name: "Lord Voldemort",
        image: "https://images7.alphacoders.com/556/556455.jpg",
    },
    {
        id: 6,
        name: "Severus Snape",
        image: "https://c4.wallpaperflare.com/wallpaper/437/200/42/snape-harry-potter-alan-wallpaper-preview.jpg",
    },
    {
        id: 7,
        name: "Albus Dumbledore",
        image: "https://i.pinimg.com/originals/b7/be/1e/b7be1e2cb786303c378406895a591f02.jpg",
    },
    {
        id: 8,
        name: "Dobby",
        image: "https://rollingstone.uol.com.br/media/uploads/dobby_em_harry_potter_e_camara_secreta_foto_reproducao__imdb.jpg",
    },
];
  
export default function Characters() {
    return (
        <body>
        <div className={styles.divPersonagens}>
            <h1 className={styles.titlePersonagens}>Personagens</h1>
            <div className={styles.charactersGrid}>
            {charactersData.map((character) => (
                <div key={character.id} className={styles.characterCard}>
                <img
                    src={character.image}
                    alt={character.name}
                    className={styles.characterImageName}
                />
                <h2>{character.name}</h2>
                </div>
            ))}
            </div>
            <div className={styles.searchIcon}>
            <IconSearch />
        </div>
        <Link className={styles.linkHome} href="/">
            <IconHome />
        </Link>
        <Link className={styles.linkMovieDetails} href="/Movies/movieDetails">
            <IconBack />
        </Link>
        </div>
        </body>
    );
}