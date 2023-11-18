import Link from 'next/link';
import styles from '../styles/Login.module.css';
import LoginCard from '../components/loginCard/loginCard';
import Input from '../components/input/input';
import Button from '../components/button/button';
import IconHome from '../components/icons/iconHome';

export default function Login() {
    return(
        <div className={styles.background}>
            <LoginCard title="Entre em sua conta"> 
                <form className={styles.form}>
                    <Input type="login" placeholder="Seu login:"/> 
                    <Input type="password" placeholder="Sua senha:"/>
                    <Button>Entrar na conta</Button>
                    <Link className={styles.linkReg} href="/User/register">Ainda não possui conta?</Link>
                </form>
                <Link className={styles.linkHome} href="/">
                    <IconHome />
                </Link>
            </LoginCard>/

            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>
            
        </div>
    )
} 

// só falta gerar um link para "recuperar senha" e enviar uma notificação no email registrado