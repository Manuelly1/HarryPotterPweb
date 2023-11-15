import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getHousesData() {
  const firestore = getFirestore(db);
  const housesCollection = collection(firestore, 'casas');
  const housesSnapshot = await getDocs(housesCollection);
  const housesData = housesSnapshot.docs.map(doc => doc.data());
  return housesData;
}
