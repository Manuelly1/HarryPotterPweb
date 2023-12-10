import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Register.module.css';
import LoginCard from '../components/loginCard/loginCard';
import Input from '../components/input/input';
import Button from '../components/button/button';
import IconHome from '../components/icons/iconHome';
import IconEyeCloseLine from '../components/icons/iconEyeClose';
import IconEyeOpen from '../components/icons/iconEyeOpen'; 
import validator from 'validator';
import { auth } from '../../util/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
import { saveUserData } from '../../api/userRegisterApi';
import { useAuth } from '../../context/authContext';

export default function Register() {
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const { logIn } = useAuth();

    const houses = [
        {id: 1 , name: 'Ravenclaw', url: 'https://i.pinimg.com/564x/6d/ed/03/6ded03a78ba6b8d870c899586117245a.jpg'},
        {id: 2 , name: 'Gryffindor', url: 'https://i.pinimg.com/564x/7e/8c/2e/7e8c2e995e1d8a41fa7d13034edb24ad.jpg'},
        {id: 3 , name: 'Slytherin', url: 'https://i.pinimg.com/564x/e7/6c/57/e76c57c8c4352a05c3c573fe1fba08d8.jpg'},
        {id: 4 , name: 'Hufflepuff', url: 'https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg'},
        
    ];

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validEmail && selectedHouse  && password.length >= 8) {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setErrorMessage('');
                saveUserData(email, selectedHouse)
                .then((success) => {
                    if (success) {
                        logIn(email, selectedHouse);
                        router.push('/');
                    } else {
                        setErrorMessage('Erro ao criar a conta');
                    }
                });

            })
            .catch((error) => {
                setErrorMessage('Email já está em uso');
                
            });
        } 
        else if (password.length < 8) {
            setErrorMessage('Senha deve ter no mínimo 8 caracteres');
        } 

        else if (!selectedHouse) {
            setErrorMessage('Selecione uma casa');
        }

        else {
            setErrorMessage('Email inválido');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.background}>
            <LoginCard title="Crie sua conta">
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>

                        <Input 
                            type="email" 
                            placeholder="Informe um e-mail:"
                            value={email}
                            onChange={handleEmailChange}
                        />

                    </div>

                    {!validEmail && <p className={styles.errorMsg}> Email inválido </p>}
                    {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}


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

                    <p className={styles.titleQuestion}>Selecione a sua casa em Hogwarts:</p>
                    <div className={styles.houseSelection}>
                        {houses.map((house, index) => (
                            <div key={index} className={styles.houseOption}>
                                <input
                                    type="radio"
                                    id={`house-${index}`}
                                    name="house"
                                    value={house.id}
                                    checked={selectedHouse === house.id}
                                    onChange={() => setSelectedHouse(house.id)}
                                />
                                <label htmlFor={`house-${index}`}>
                                    <img src={house.url} alt={house.name} />
                                </label>
                            </div>
                        ))}
                    </div>
                    <Button>Criar conta</Button>
                    <Link className={styles.linkLogin} href="/User/login">Já possui uma conta?</Link>
                </form>
                <Link className={styles.linkHome} href="/">
                    <IconHome />
                </Link>
            </LoginCard>

            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
            `}</style>

        </div>
    );
}
