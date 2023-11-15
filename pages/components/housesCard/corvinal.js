import styles from './housesCard.module.css';

export default function Corvinal({ title, image, colors, animal, description }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={`Imagem de ${title}`} />
      </div>
      <div className={styles.houseInfo}>
        <p className={styles.colors}>{colors}</p>
        <p className={styles.animal}>{animal}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
