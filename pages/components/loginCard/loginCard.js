import styles from './loginCard.module.css';

export default function LoginCard({ title, children }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}