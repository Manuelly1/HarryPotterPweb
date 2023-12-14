import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/MoviesDetails.module.css';
import IconBack from '../components/icons/iconBack';
import DetailsCard from '../components/detailsCard/detailsCard';
import IconLike from '../components/icons/iconLike';
import IconDislike from '../components/icons/iconDislike';
import { useAuth } from '../../context/authContext';
import { getMovieData } from '../../api/idMovieApi';
import { getAssMovieData } from '../../api/assMovieApi';
import { useEffect } from 'react';

export default function MoviesDetails({ moviesData }) {
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [showNotLoggedIn, setShowNotLoggedIn] = useState(false);
    const { isLoggedIn, whatMovie, userDetails } = useAuth();

    whatMovie(moviesData.id);

    useEffect(() => {
        async function fetchData() {
            if (isLoggedIn) {
                const movieLikes = await getAssMovieData(userDetails.email, moviesData.id);
                if (movieLikes.length === 0) {
                    setLikeActive(false);
                    setDislikeActive(false);
                } else {
                    const movie = movieLikes[0];
                    setLikeActive(movie.like);
                    setDislikeActive(movie.deslike);
                }
            }
        }

        fetchData();
    }, [isLoggedIn, userDetails.email, moviesData.id]);

    const handleLikeClick = () => {
        if (isLoggedIn) {
            setLikeActive(!likeActive);
            setDislikeActive(false);
        } else {
            setShowNotLoggedIn(true);
        }
    };

    const handleDislikeClick = () => {
        if (isLoggedIn) {
            setDislikeActive(!dislikeActive);
            setLikeActive(false);
        } else {
            setShowNotLoggedIn(true);
        }
    };

    const handleLNotLoggedIn = () => {
        setShowNotLoggedIn(false);
    };

    return (
        <div className={styles.background}>
            <Link className={styles.linkHome} href="/">
                <IconBack />
            </Link>
            <div className={styles.cardsContainer}>
                {moviesData && (
                    <DetailsCard
                        image={moviesData.imagem}
                        title={moviesData.nome}
                        year={moviesData.ano}
                        time={moviesData.duracao}
                        type={moviesData.tipo}
                        sinopse="Sinopse"
                        description={moviesData.sinopse}
                    />
                )}
                <div className={styles.icons}>
                    <div className={styles.iconLike} onClick={handleLikeClick}>
                        <IconLike key={likeActive ? 'active' : 'inactive'} fill={likeActive ? 'blue' : '#fff'} />
                    </div>
                    <div className={styles.iconDislike} onClick={handleDislikeClick}>
                        <IconDislike key={dislikeActive ? 'active' : 'inactive'} fill={dislikeActive ? 'red' : '#fff'} />
                    </div>
                </div>
                <Link href="comment">
                    <button className={styles.buttonComment}>Comentários</button>
                </Link>
                <Link href="characters">
                    <button className={styles.buttonPersonagens}>Personagens</button>
                </Link>
            </div>

            {showNotLoggedIn && (
                <div className={styles.notLoggedIn}>
                    <p>Precisa logar para reagir</p>
                    <button onClick={handleLNotLoggedIn}>Ok</button>
                </div>
            )}

            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}
            </style>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
            { params: { id: '8' } },
        ],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    try {
        const moviesData = await getMovieData(params.id);

        if (!moviesData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                moviesData,
            },
        };
    } catch (error) {
        console.error("Erro ao buscar dados do filme:", error);
        return {
            notFound: true,
        };
    }
}
