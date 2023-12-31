import Link from 'next/link';
import styles from '../styles/Login.module.css';
import LoginCard from '../components/loginCard/loginCard';
import Input from '../components/input/input';
import Button from '../components/button/button';
import IconHome from '../components/icons/iconHome';
import IconEyeCloseLine from '../components/icons/iconEyeClose';
import IconEyeOpen from '../components/icons/iconEyeOpen'; 
import validator from 'validator';
import { useState } from 'react';
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../util/firebase';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/router';
import { getUserByEmail } from '../../api/userApi';

export default function Login() {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { logIn } = useAuth();
    const router = useRouter();

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validEmail) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMessage('');

                getUserByEmail(email)
                  .then(userData => {
                    if (userData) {
                        logIn(email, userData.idCasa);
                        router.push('/'); 

                    } else {
                      setErrorMessage('Nenhum usuário encontrado com este e-mail.');
                    }
                  })
                  .catch(error => {
                    setErrorMessage('Erro ao buscar os dados do usuário:', error);
                  });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage('Email ou senha incorretos');
            });
        } else {
            console.error('Email inválido');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return(
        <div className={styles.background}>
            <LoginCard title="Entre em sua conta"> 
                <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <Input 
                        type="login" 
                        placeholder="Seu login:"
                        value={email}
                        onChange={handleEmailChange}
                    /> 
                </div>

                    {!validEmail && <p className={styles.errorMsg}> Email inválido </p>}

                    <div className={styles.inputContainer}>
                        <Input 
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Sua senha:"
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <div className={styles.icon} onClick={togglePasswordVisibility}>
                            {showPassword ? <IconEyeCloseLine /> : <IconEyeOpen />}
                        </div>

                    </div>

                    {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
                        
                    <Button>Entrar na conta</Button>
                    <Link className={styles.linkReg} href="/User/register">Ainda não possui conta?</Link>
                    <Link className={styles.linkReg} href="/User/recover">Recuperar conta</Link>
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
