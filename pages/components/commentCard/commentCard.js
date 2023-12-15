import styles from './commentCard.module.css';

export default function CommentCard({ title, description }) {
    return (
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    );
}
