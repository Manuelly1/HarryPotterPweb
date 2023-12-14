import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getAssMovieData(email, id) {
  const firestore = getFirestore(db);
  const moviesCollection = collection(firestore, 'avaliacao');

  const q = query(moviesCollection, where('idUsuario', '==', email));

  const moviesSnapshot = await getDocs(q);
  
  const moviesData = moviesSnapshot.docs.map(doc => doc.data());

  if (moviesData.length != 0) {
    console.log(moviesData);

    const moviesDataFiltered = moviesData.filter(movie => movie.idFilme === id);
    return moviesDataFiltered;
  }

  return [];
}
