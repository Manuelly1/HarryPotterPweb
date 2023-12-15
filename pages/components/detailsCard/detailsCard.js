import styles from './detailsCard.module.css';
import IconTime from '../../components/icons/iconTime';
import IconCategory from '../../components/icons/iconCategory';
import IconCalendar from '../../components/icons/iconCalendar';
import IconBar from '../../components/icons/iconBar';

export default function DetailsCard({ title, year, image, time, type, description, sinopse }) {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={`Imagem de ${title}`} />
        </div>

        <div className={styles.movieInfo}>

            <div className={styles.icon}> 
                <div> <IconCalendar/> <p className={styles.year}>{year}</p> </div> 
                <div> <IconBar/> </div>
                <div> <IconTime /> <p className={styles.time}>{time}</p> </div>
                <div> <IconBar/> </div>
                <div> <IconCategory/> <p className={styles.type}>{type}</p> </div>
            </div>

            <h3 className={styles.sinopse}>{sinopse}</h3>
            <p className={styles.description}>{description}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}