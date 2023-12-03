import { useState } from 'react';
import CommentCard from '../components/commentCard/commentCard';
import styles from '../styles/Comment.module.css';

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
                <button type="submit" className={styles.button}>
                    Adicionar comentário
                </button>
            </div>
        </div>
    );
}    