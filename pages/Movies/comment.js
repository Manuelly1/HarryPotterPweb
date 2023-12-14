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

        setComments([...comments, { text: userComment, id: Date.now() }]);
        setUserComment("");
    };

    const handleCommentEdit = (id) => {
        // Implement edit functionality as needed
        console.log(`Edit comment with id ${id}`);
    };

    const handleCommentDelete = (id) => {
        // Implement delete functionality as needed
        setComments(comments.filter(comment => comment.id !== id));
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
                    {comments.map((comment) => (
                        <div key={comment.id} className={styles.commentList}>
                            <CommentCard description={comment.text} />
                            <div className={styles.iconButtons}>
                                <div className={styles.iconChange} onClick={() => handleCommentEdit(comment.id)}>
                                    <IconChange />
                                </div>
                                <div className={styles.iconBin} onClick={() => handleCommentDelete(comment.id)}>
                                    <IconBin />
                                </div>
                            </div>
                        </div>
                    ))}
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
