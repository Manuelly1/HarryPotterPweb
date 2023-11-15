import styles from './housesCard.module.css'

export default function Corvinal({ title, children }) { 
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}