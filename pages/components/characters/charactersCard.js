import styles from './charactersCard.module.css';

const colorsMapping = [
    '#222F5B', // Corvinal
    '#740001', // Grifinória
    '#1A472A', // Sonserina
    '#FFD700', // Lufa-Lufa
    '#333333', // Sem Casa
];
  
export default function CharactersCard({ nome, image, ator, descricao, filmes, casa }) {
    const corFundo = colorsMapping[casa - 1];

    return (
        <div className={styles.card} style={{ backgroundColor: corFundo }}>
            <h2 className={styles.nome}>{nome}</h2>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={nome} />
            </div>
            <div className={styles.charactersInfo}>
                <p className={styles.description}>{descricao}</p>
                <p className={styles.actor}>Ator/Atriz: {ator}</p>
                <p className={styles.movies}>Filmes: {filmes.join(', ')}</p>
            </div>
        </div>
    );
}
