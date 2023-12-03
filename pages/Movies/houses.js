import Link from 'next/link';
import HousesCardTitle from '../components/housesCard/housesCardTitle';
import styles from '../styles/Houses.module.css';
import IconHome from '../components/icons/iconHome';
import Grifinoria from '../components/housesCard/grifinoria';
import Sonserina from '../components/housesCard/sonserina';
import Corvinal from '../components/housesCard/corvinal';
import LufaLufa from '../components/housesCard/lufaLufa';
import { getHousesData } from '../../api/houseApi';

export default function Houses({ housesData }) {
  return (
    <div className={styles.background}>
      <HousesCardTitle title="Casas de Hogwarts" className={styles.specialCard}/>
      <div className={styles.cardsContainer}>
        <Grifinoria
          className={styles.houseCardGrifinoria}
          title= {housesData[0].nome}
          image= {housesData[0].imagem}
          colors= {`Cores: ${housesData[0].cor}`}
          animal= {`Mascote: ${housesData[0].animal}`}
          description= {`Síntese: ${housesData[0].descricao}`}
        />
        <Corvinal
          className={styles.houseCardCorvinal}
          title= {housesData[1].nome}
          image= {housesData[1].imagem}
          colors= {`Cores: ${housesData[1].cor}`}
          animal= {`Mascote: ${housesData[1].animal}`}
          description= {`Síntese: ${housesData[1].descricao}`}
        />
        <Sonserina
          className={styles.houseCardSonserina}
          title= {housesData[2].nome}
          image= {housesData[2].imagem}
          colors= {`Cores: ${housesData[2].cor}`}
          animal= {`Mascote: ${housesData[2].animal}`}
          description= {`Síntese: ${housesData[2].descricao}`}
        />
        <LufaLufa
          className={styles.houseCardLufaLufa}
          title= {housesData[3].nome}
          image= {housesData[3].imagem}
          colors= {`Cores: ${housesData[3].cor}`}
          animal= {`Mascote: ${housesData[3].animal}`}
          description= {`Síntese: ${housesData[3].descricao}`}
        />
      </div>
      <Link className={styles.linkHome} href="/">
        <IconHome />
      </Link>

      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

    </div>
  );
}

export async function getStaticProps() {
  const housesData = await getHousesData();
  return {
    props: {
      housesData,
    },
  };
}