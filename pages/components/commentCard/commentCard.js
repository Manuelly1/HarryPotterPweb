import styles from './commentCard.module.css';

export default function CommentCard({ title, description }) {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    );
}
