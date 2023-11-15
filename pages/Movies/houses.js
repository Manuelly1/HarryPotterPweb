// Houses.js

import Link from 'next/link';
import HousesCardTitle from '../components/housesCard/housesCardTitle';
import styles from '../styles/Houses.module.css';
import IconHome from '../components/icons/iconHome';
import Grifinoria from '../components/housesCard/grifinoria';
import Sonserina from '../components/housesCard/sonserina';
import Corvinal from '../components/housesCard/corvinal';
import LufaLufa from '../components/housesCard/lufaLufa';

export default function Houses() {
  return (
    <div className={styles.background}>
      <HousesCardTitle title="Casas de Hogwarts" className={styles.specialCard}/>
      <div className={styles.cardsContainer}>
        <Grifinoria
          className={styles.houseCardGrifinoria}
          title="Grifinória"
          image="https://i.pinimg.com/564x/7e/8c/2e/7e8c2e995e1d8a41fa7d13034edb24ad.jpg"
          colors="Cores: Vermelho e Dourado"
          animal="Animal: Leão"
          description="A casa é conhecida por valorizar a ação e a defesa dos fracos"
        />
        <Corvinal
          className={styles.houseCardCorvinal}
          title="Corvinal"
          image="https://i.pinimg.com/564x/6d/ed/03/6ded03a78ba6b8d870c899586117245a.jpg"
          colors="Cores: Azul e Prata/Bronze"
          animal="Animal: Águia"
          description="A casa valoriza a mente e a busca constante pelo aprendizado"
        />
        <Sonserina
          className={styles.houseCardSonserina}
          title="Sonserina"
          image="https://i.pinimg.com/564x/e7/6c/57/e76c57c8c4352a05c3c573fe1fba08d8.jpg"
          colors="Cores: Verde e Prata"
          animal="Animal: Cobra"
          description="A casa é conhecida por produzir bruxos astutos e estratégicos"
        />
        <LufaLufa
          className={styles.houseCardLufaLufa}
          title="Lufa-Lufa"
          image="https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg"
          colors="Cores: Amarelo e Preto"
          animal="Animal: Texugo"
          description="A casa é conhecida por aceitar e valorizar todas as habilidades, sem favorecer nenhuma em particular"
        />
      </div>
      <Link className={styles.linkHome} href="/">
        <IconHome />
      </Link>
    </div>
  );
}
