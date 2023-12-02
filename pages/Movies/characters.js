import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Characters.module.css';
import IconHome from '../components/icons/iconHome';
import IconSearch from '../components/icons/iconSearch';
import IconBack from '../components/icons/iconBack';
import CharactersCard from '../components/characters/charactersCard';

const charactersData = [
    {
        id: 1,
        nome: "Harry Potter",
        image: "https://imagem.band.com.br/f_480959.jpg",
    },
    {
        id: 2,
        nome: "Draco Malfoy",
        image: "https://i.pinimg.com/474x/32/c3/7e/32c37e565a7138117dbe2dbbcc61b158.jpg",
    },
    {
        id: 3,
        nome: "Hermione Granger",
        image: "https://images7.alphacoders.com/726/726078.jpg",
    },
    {
        id: 4,
        nome: "Ron Weasley",
        image: "https://wallpapercave.com/wp/wp1965058.jpg",
    },
    {
        id: 5,
        nome: "Lord Voldemort",
        image: "https://images7.alphacoders.com/556/556455.jpg",
    },
    {
        id: 6,
        nome: "Severus Snape",
        image: "https://c4.wallpaperflare.com/wallpaper/437/200/42/snape-harry-potter-alan-wallpaper-preview.jpg",
    },
    {
        id: 7,
        nome: "Albus Dumbledore",
        image: "https://i.pinimg.com/originals/b7/be/1e/b7be1e2cb786303c378406895a591f02.jpg",
    },
    {
        id: 8,
        nome: "Dobby",
        image: "https://rollingstone.uol.com.br/media/uploads/dobby_em_harry_potter_e_camara_secreta_foto_reproducao__imdb.jpg",
    },
];
  
export default function Characters() {
    return (
            <div className={styles.divPersonagens}>
                <h1 className={styles.titlePersonagens}>Personagens</h1>
                <div className={styles.charactersGrid}>
                {
                    charactersData.map((character) => (
                        <div key={character.id} className={styles.characterCard}>
                            <CharactersCard 
                                nome={character.nome} 
                                image={character.image} 
                                ator = {"character.ator"}
                                descricao = {"descricao bla bla bla"}
                                filmes = {["filme1", "filme2", "filme3"]}
                                casa = {Math.floor(character.id / 3)}
                            />
                        </div>
                        )
                    )
                }
                
                </div>
                <div className={styles.searchIcon}>
                    <IconSearch />
                </div>
                <Link className={styles.linkHome} href="/">
                    <IconHome />
                </Link>
                <Link className={styles.linkMovieDetails} href="/Movies/moviesDetails">
                    <IconBack />
                </Link>

                <style jsx global>{`
                    h1 {
                        margin: 0px;
                        padding: 0px;
                    }
                    
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                `}</style>

            </div>
    );
}