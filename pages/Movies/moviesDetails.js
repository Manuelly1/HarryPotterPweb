import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/MoviesDetails.module.css';
import IconBack from '../components/icons/iconBack';
import DetailsCard from '../components/detailsCard/detailsCard';
import IconLike from '../components/icons/iconLike';
import IconDislike from '../components/icons/iconDislike';
import { useAuth } from '../../context/authContext';

export default function MoviesDetails() {
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [showNotLoggedIn, setShowNotLoggedIn] = useState(false);
    const { isLoggedIn} = useAuth();

    const handleLikeClick = () => {
        if (isLoggedIn) {
            setLikeActive(!likeActive);
            setDislikeActive(false);
        }
        else {
            setShowNotLoggedIn(true);

        }
    };

    const handleDislikeClick = () => {
        if (isLoggedIn) {
            setDislikeActive(!dislikeActive);
            setLikeActive(false); 
        }
        else{
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
                <DetailsCard
                    image="https://w.forfun.com/fetch/cd/cdb10fb1fa03fd60e3f73fcce3fcad6c.jpeg"
                    title="Harry Potter e as Relíquias da Morte: Parte 2"
                    year="2011"
                    time="130 minutos"
                    type="Fantasia"
                    sinopse="Sinopse"
                    description="A batalha entre as forças do bem e do mal da magia alcançam o mundo dos trouxas. O risco nunca foi tão grande, e ninguém está seguro. Harry Potter precisa fazer um sacrifício final conforme o confronto com Lord Voldemort se aproxima."
                />
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
