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
                    <Input type="email" placeholder="Informe um e-mail:"/> 
                    <Input type="login" placeholder="Informe um login:"/> 
                    <Input type="password" placeholder="Informe uma senha:"/>
                    <label className={styles.label} for="hogwartsHouse">Selecione a casa de Hogwarts que você pertence:</label>
                    <div className={styles.customSelect}>
                        <select>
                            <option className={styles.option}>
                                <img src='https://cdn.ome.lt/EFCnnfUKzPbhTfocxkrOH7laQOM=/770x0/smart/uploads/conteudo/fotos/legiao_NkHcwaty4j17.jpg.jpeg' alt='Griffindor'/>
                            </option>
                            <option>
                                <img src='https://www.braian.com.br/wp-content/uploads/2021/04/wallhaven-x18v2l.png' alt='Slytherin'/>
                            </option>
                            <option>
                                <img src='https://i.pinimg.com/originals/d1/3b/95/d13b954a39da0640b83a8fc22ad2f7b3.jpg' alt='Ravenclaw'/>
                            </option>
                            <option>
                                <img src='https://i.pinimg.com/474x/a2/29/30/a2293015da53b2a6d9c6d38ce449fc51.jpg' alt='Hufflepuff'/>
                            </option>
                        </select>
                    </div>
                    <Button>Criar conta</Button>
                    <Link className={styles.linkLogin} href="/User/login">Já possui uma conta?</Link>
                </form>
                <Link className={styles.linkHome} href="/">Home</Link>
            </LoginCard>/
        </div>
    )
} 

// aqui terá a seleção das casas 