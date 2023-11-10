import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../components/loginCard/loginCard'
import Input from '../components/input/input'
import Button from '../components/button/button'
import Register from "./register"

export default function Login() {
    return(
        <div className={styles.background}>
            <LoginCard title="Entre em sua conta"> 
                <form className={styles.form}>
                    <Input type="login" placeholder="Seu login:"/> 
                    <Input type="password" placeholder="Sua senha:"/>
                    <Button>Entrar na conta</Button>
                    <Link href="/register">Ainda não possui conta?</Link>
                </form>
                <Link href="/">Home</Link>
            </LoginCard>/
        </div>
    )
} 

