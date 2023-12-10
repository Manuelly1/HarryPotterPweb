import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getMovieData(id) {
    const idNum = parseInt(id, 10);
    const firestore = getFirestore(db);
    const moviesCollection = collection(firestore, 'filmes');
    const q = query(moviesCollection, where('id', '==', idNum));
    const moviesSnapshot = await getDocs(q);
    const moviesData = moviesSnapshot.docs.map(doc => doc.data());
    return moviesData[0];
  }