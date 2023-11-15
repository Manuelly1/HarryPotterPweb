import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getMoviesData() {
  const firestore = getFirestore(db);
  const moviesCollection = collection(firestore, 'filmes');
  const moviesSnapshot = await getDocs(moviesCollection);
  const moviesData = moviesSnapshot.docs.map(doc => doc.data());
  return moviesData;
}
