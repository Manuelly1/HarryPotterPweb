import { useState } from 'react';
import CommentCard from '../components/commentCard/commentCard';
import styles from '../styles/Comment.module.css';
import IconBin from '../components/icons/iconBin';
import IconChange from '../components/icons/iconChange';

export default function Comment() {
    const [userComment, setUserComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (event) => {
        setUserComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        console.log("Comentário do usuário:", userComment);

        setComments([...comments, userComment]);
        setUserComment("");
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

                <div className={styles.commentListContainer} style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {comments.map((comment, index) => (
                        <CommentCard key={index} description={comment} className={styles.commentList} />
                    ))}
                </div>
            </div>

            <div className={styles.iconButtons}>
                <div className={styles.iconChange}>
                    <IconChange />
                </div>
                <div className={styles.iconBin}>
                    <IconBin />
                </div>
            </div>

            <button type="submit" className={styles.button} onClick={handleCommentSubmit}>
                Compartilhar comentário
            </button>

            <style jsx global>
                {`
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                `}
            </style>
        </div>
    );
}
