import { useState } from 'react';
import CommentCard from '../components/commentCard/commentCard';
import styles from '../styles/Comment.module.css';
import IconBin from '../components/icons/iconBin';
import IconChange from '../components/icons/iconChange';
import { useAuth } from '../../context/authContext';
import { postComment } from '../../api/commentPostApi';
import { useEffect } from 'react';
import { getMovieComments } from '../../api/commentGetApi';

export default function Comment() {
    const [userComment, setUserComment] = useState("");
    const [comments, setComments] = useState([]);
    const [showNotLoggedIn, setShowNotLoggedIn] = useState(false);
    const { isLoggedIn, lastMovie, userDetails} = useAuth();

    const handleCommentChange = (event) => {
        setUserComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        if (isLoggedIn) {
            event.preventDefault();
            postComment(userDetails.email, lastMovie, userComment);

            setComments([...comments, { idUsuario: userDetails.email, descricao: userComment, id: Date.now() }]);
            setUserComment("");
        }
        else {
            setShowNotLoggedIn(true);
        }
    };

    const handleCommentEdit = (id) => {
        // Implement edit functionality as needed
        console.log(`Edit comment with id ${id}`);
    };

    const handleCommentDelete = (id) => {
        // Implement delete functionality as needed
        setComments(comments.filter(comment => comment.id !== id));
    };

    const handleLNotLoggedIn = () => {
        setShowNotLoggedIn(false);
    };

    useEffect(() => {
        async function fetchComments() {
            const commentsData = await getMovieComments(lastMovie);
            setComments(commentsData);
        }

        fetchComments();
    }, [lastMovie]);

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
                            <CommentCard 
                                title={comment.idUsuario}
                                description={comment.descricao} />
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
            
            {showNotLoggedIn && (
                <div className={styles.notLoggedIn}>
                    <p>Precisa logar para reagir</p>
                    <button onClick={handleLNotLoggedIn}>Ok</button>
                </div>
            )}

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
