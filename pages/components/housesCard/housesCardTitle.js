import styles from './housesCard.module.css'

export default function HousesCardTitle({ title, children }) { 
    return (
        <div className={styles.card}>
            <h2 className={styles.titleOne}>{title}</h2>
            {children}
        </div>
    )
}