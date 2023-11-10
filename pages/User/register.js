import Link from 'next/link'
import styles from '../styles/Register.module.css'
import LoginCard from '../components/loginCard/loginCard'
import Input from '../components/input/input'
import Button from '../components/button/button'

export default function Register() {
    return(
        <div className={styles.background}>
            <LoginCard title="Crie sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Informe seu e-mail:"/> 
                    <Input type="login" placeholder="Informe um login:"/> 
                    <Input type="password" placeholder="Informe uma senha:"/>
                    <Button>Criar conta</Button>
                    <Link href="/User/login">Já possui uma conta?</Link>
                </form>
                <Link href="/">Home</Link>
            </LoginCard>/
        </div>
    )
} 

// aqui terá a seleção das casas 