import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function deleteComment(commentId) {
    const firestore = getFirestore(db);
    const commentRef = doc(firestore, 'comentarios', commentId);

    try {
        await deleteDoc(commentRef);
        console.log('Comentário excluído com sucesso!');
        return true;
    } catch (error) {
        console.error('Erro ao excluir comentário:', error);
        return false;
    }
}
