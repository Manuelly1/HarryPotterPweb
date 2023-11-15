import Link from 'next/link';
import HousesCardTitle from '../components/housesCard/housesCardTitle';
import styles from '../styles/Houses.module.css';
import IconHome from '../components/icons/iconHome';
import Grifinoria from '../components/housesCard/grifinoria';
import Sonserina from '../components/housesCard/sonserina';
import Corvinal from '../components/housesCard/corvinal';
import LufaLufa from '../components/housesCard/lufaLufa';

export default function Houses() {
    return(
        <div className={styles.background}>
            <HousesCardTitle title="Casas de Hogwarts"></HousesCardTitle>/
            <Grifinoria
                className={styles.grifinoria}
                title="Grifinória"
                image="https://i.pinimg.com/564x/7e/8c/2e/7e8c2e995e1d8a41fa7d13034edb24ad.jpg"
                colors="Cores: Vermelho e Dourado."
                animal="Animal: Leão."
                description="A casa é conhecida por valorizar a ação e a defesa dos fracos."
            />
            <Link className={styles.linkHome} href="/">
                <IconHome />
            </Link>
        </div>
    )
}