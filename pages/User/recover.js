import Link from 'next/link';
import styles from '../styles/Login.module.css';
import LoginCard from '../components/loginCard/loginCard';
import Input from '../components/input/input';
import Button from '../components/button/button';
import IconHome from '../components/icons/iconHome';
import validator from 'validator';
import { useState } from 'react';
import { sendPasswordResetEmail} from "firebase/auth";
import { auth } from '../../util/firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validEmail) {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                setErrorMessage('E-mail enviado com sucesso');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage('Email incorreto');
            });
        } else {
            console.error('Email inválido');
        }
    };

    return(
        <div className={styles.background}>
            <LoginCard title="Digite seu e-mail"> 
                <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <Input 
                        type="login" 
                        placeholder="Seu e-mail:"
                        value={email}
                        onChange={handleEmailChange}
                    /> 
                </div>

                    {!validEmail && <p className={styles.errorMsg}> Email inválido </p>}
                        
                    <Button>Mandar email de recuperação de senha</Button>
                </form>

                {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}

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
