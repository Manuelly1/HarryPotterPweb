import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Register.module.css';
import LoginCard from '../components/loginCard/loginCard';
import Input from '../components/input/input';
import Button from '../components/button/button';

export default function Register() {
    const [selectedHouse, setSelectedHouse] = useState(null);

    const houses = [
        { name: 'Gryffindor', url: 'https://i.pinimg.com/564x/7e/8c/2e/7e8c2e995e1d8a41fa7d13034edb24ad.jpg'},
        { name: 'Hufflepuff', url: 'https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg'},
        { name: 'Ravenclaw', url: 'https://i.pinimg.com/564x/6d/ed/03/6ded03a78ba6b8d870c899586117245a.jpg'},
        { name: 'Slytherin', url: 'https://i.pinimg.com/564x/e7/6c/57/e76c57c8c4352a05c3c573fe1fba08d8.jpg'},
    ];

    return (
        <div className={styles.background}>
            <LoginCard title="Crie sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Informe um e-mail:"/> 
                    <Input type="login" placeholder="Informe um login:"/> 
                    <Input type="password" placeholder="Informe uma senha:"/>
                    <p className={styles.titleQuestion}>Selecione a casa de Hogwarts que você pertence:</p>
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
                <Link className={styles.linkHome} href="/">Home</Link>
            </LoginCard>
        </div>
    );
}
