import styles from './detailsCard.module.css';

export default function DetailsCard({ title, image, time, type, description, sinopse }) {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={`Imagem de ${title}`} />
        </div>
        <div className={styles.movieInfo}>
          <p className={styles.time}>{time}</p>
          <p className={styles.type}>{type}</p>
          <h3 className={styles.sinopse}>{sinopse}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );
  }