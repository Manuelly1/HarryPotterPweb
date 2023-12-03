import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Characters.module.css';
import IconHome from '../components/icons/iconHome';
import IconSearch from '../components/icons/iconSearch';
import IconBack from '../components/icons/iconBack';
import CharactersCard from '../components/characters/charactersCard';
import { getCharactersData } from '../../api/charactersApi';

export default function Characters({ charactersData }) {
    return (
            <div className={styles.divPersonagens}>
                <h1 className={styles.titlePersonagens}>Personagens</h1>
                <div className={styles.charactersGrid}>
                {
                    charactersData.map((character) => (
                        <div key={character.id} className={styles.characterCard}>
                            <CharactersCard 
                                nome={character.nome} 
                                image={character.imagem} 
                                ator = {character.ator}
                                descricao = {character.descricao}
                                filmes = {["filme1", "filme2", "filme3"]}
                                casa = {Math.floor(character.idCasa)}
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

export async function getStaticProps() {
    const charactersData = await getCharactersData();
    return {
      props: {
        charactersData,
      },
    };
}