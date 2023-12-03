import { useState } from 'react';
import CommentCard from '../components/commentCard/commentCard';
import styles from '../styles/Comment.module.css';
import IconBin from '../components/icons/iconBin';
import IconChange from '../components/icons/iconChange';
import IconLike from '../components/icons/iconLike';
import IconDislike from '../components/icons/iconDislike';

export default function Comment() {
    const [userComment, setUserComment] = useState(""); 

    const handleCommentChange = (event) => {
        setUserComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault(); 
        console.log("Comentário do usuário:", userComment);
    };

    return (
        <div className={styles.background}>
            <div className={styles.cardsContainer}>
                <CommentCard
                    title="Comentários"
                    description={
                        <textarea
                            className={styles.commentInput}
                            placeholder="Digite um comentário aqui"
                            value={userComment}
                            onChange={handleCommentChange}
                        />
                    }
                    className={styles.description}
                />
                <div type="submit">
                    <div className={styles.iconChange}>
                        <IconChange/>
                    </div>
                    <div className={styles.iconBin}>
                        <IconBin/>
                    </div>
                </div>
                <button type="submit" className={styles.button}>
                    Compartilhar comentário
                </button>
            </div>
        </div>
    );
}    