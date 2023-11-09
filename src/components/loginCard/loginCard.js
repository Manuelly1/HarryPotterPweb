import styles from './loginCard.module.css'

export default function LoginCard({ title, children }) { //usando o children, pois o cadastro vai precisar de outras informações além das de login
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}