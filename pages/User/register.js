import Link from 'next/link'
import styles from '../styles/Register.module.css'
import LoginCard from '../../src/components/loginCard/loginCard'

export default function Register() {
    return(
        <div className={styles.background}>
            <Link href="User/login"></Link>
            <LoginCard/>
        </div>
    )
} 