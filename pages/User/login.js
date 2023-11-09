import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../../src/components/loginCard/loginCard'

export default function Login() {
    return(
        <div className={styles.background}>
            <Link href="/">Home</Link>
            <LoginCard/>
        </div>
    )
} 