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

export default function Register() {
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const houses = [
        {name: 'Gryffindor', url: 'https://i.pinimg.com/564x/7e/8c/2e/7e8c2e995e1d8a41fa7d13034edb24ad.jpg'},
        {name: 'Hufflepuff', url: 'https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg'},
        {name: 'Ravenclaw', url: 'https://i.pinimg.com/564x/6d/ed/03/6ded03a78ba6b8d870c899586117245a.jpg'},
        {name: 'Slytherin', url: 'https://i.pinimg.com/564x/e7/6c/57/e76c57c8c4352a05c3c573fe1fba08d8.jpg'},
    ];

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const isValid = validator.isEmail(inputEmail);
        setValidEmail(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validEmail) {
            console.log('Email válido');
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

                    <div className={styles.inputContainer}>
                        <Input type="login" placeholder="Informe um login:"/> 
                    </div>
                    
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
                                    value={house.name}
                                    checked={selectedHouse === house.name}
                                    onChange={() => setSelectedHouse(house.name)}
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
