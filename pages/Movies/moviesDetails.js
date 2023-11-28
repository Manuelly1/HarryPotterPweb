import Link from 'next/link';
import styles from '../styles/MoviesDetails.module.css';
import IconBack from '../components/icons/iconBack';
import DetailsCard from '../components/detailsCard/detailsCard';
import IconLike from '../components/icons/iconLike';
import IconDislike from '../components/icons/iconDislike';

export default function MoviesDetails({  }) {
  return (
    <div className={styles.background}>
        <Link className={styles.linkHome} href="/">
            <IconBack />
        </Link>
        <div className={styles.cardsContainer}>
            <DetailsCard
                image="https://w.forfun.com/fetch/cd/cdb10fb1fa03fd60e3f73fcce3fcad6c.jpeg"
                title = "Harry Potter e as Relíquias da Morte: Parte 2"
                year = "2011"
                time = "130 minutos"
                type = "Fantasia"
                sinopse = "Sinopse"
                description= "A batalha entre as forças do bem e do mal da magia alcançam o mundo dos trouxas. O risco nunca foi tão grande, e ninguém está seguro. Harry Potter precisa fazer um sacrifício final conforme o confronto com Lord Voldemort se aproxima."
            />
            <Link href="characters">
                <button className={styles.buttonPersonagens}>Ver personagens</button>        
            </Link>
            <div className={styles.icons}>
                <div className={styles.iconLike}>
                    <IconLike/>
                </div>
                <div className={styles.iconDislike}>
                    <IconDislike/>
                </div>
            </div>

        
        </div>

        <style jsx global>{`

            body {
                margin: 0px;
                padding: 0px;
            }
            
        `}</style>

    </div>
  );
}


