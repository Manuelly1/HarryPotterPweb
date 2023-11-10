import Link from 'next/link'
import styles from '..styles/Login.module.css'
import LoginCard from '../../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'

export default function Login() {
    return(
        <div className={styles.background}>
            <Link href="/">Home</Link>
            <LoginCard title="Entre em sua conta"> 
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail:"/> 
                    <Input type="password" placeholder="Sua senha:"/>
                    <Button>Entrar na conta</Button>
                    <Link href="/register">Ainda não possui conta?</Link>
                </form>
            </LoginCard>/
        </div>
    )
} 

// no projeto no lugar de email na de login será username