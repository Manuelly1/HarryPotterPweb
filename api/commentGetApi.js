import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getMovieComments(movieId) {
  try {
    const firestore = getFirestore(db);
    const commentsCollection = collection(firestore, 'comentarios');
    const commentsQuery = query(commentsCollection, where('idFilme', '==', movieId));
    const commentsSnapshot = await getDocs(commentsQuery);

    const commentsData = commentsSnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }));
    
    return commentsData;
  } catch (error) {
    console.error('Erro ao buscar comentários do filme:', error);
    return [];
  }
}
