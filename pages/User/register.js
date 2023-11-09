import Link from 'next/link'
import styles from '../styles/Register.module.css'
import LoginCard from '../../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'

export default function Register() {
    return(
        <div className={styles.background}>
            <Link href="User/login"></Link>
            <LoginCard title="Crie sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Informe seu e-mail:"/> 
                    <Input type="password" placeholder="Informe uma senha:"/>
                    <Button>Criar conta</Button>
                    <Link href="/login">Já possui uma conta?</Link>
                </form>
            </LoginCard>/
        </div>
    )
} 

// aqui terá a seleção das casas 