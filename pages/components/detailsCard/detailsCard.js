import styles from './detailsCard.module.css';
import IconTime from '../../components/icons/IconTime';
import IconCategory from '../../components/icons/iconCategory';
import IconCalendar from '../../components/icons/iconCalendar';

export default function DetailsCard({ title, year, image, time, type, description, sinopse }) {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={`Imagem de ${title}`} />
        </div>
        <div className={styles.movieInfo}>
            <div className={styles.iconCalendar}>
                <IconCalendar/>
                <p className={styles.year}>{year}</p>
            </div>
            <div className={styles.iconTime}>
                <IconTime />
                <p className={styles.time}>{time}</p>
            </div>
            <div className={styles.iconCategory}>
                <IconCategory/>
                <p className={styles.type}>{type}</p>
            </div>
            <h3 className={styles.sinopse}>{sinopse}</h3>
            <p className={styles.description}>{description}</p>
        </div>
        </div>
    );
}