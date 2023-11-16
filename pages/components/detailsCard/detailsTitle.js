import styles from './detailsCard.module.css';

export default function DetailsCardTitle({ title, children }) { 
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}