import Link from 'next/link';
import HousesCard from '../components/housesCard/housesCard';
import styles from '../styles/Houses.module.css';
import IconHome from '../components/icons/iconHome';

export default function Houses() {
    return(
        <div className={styles.background}>
            <HousesCard title="Casas de Hogwarts"> 
                <Link className={styles.linkHome} href="/">
                    <IconHome />
                </Link>
            </HousesCard>/
        </div>
    )
}