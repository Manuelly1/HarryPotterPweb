import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getCharactersData() {
    const firestore = getFirestore(db);
    const charactersCollection = collection(firestore, 'personagens');
    const charactersSnapshot = await getDocs(charactersCollection);

    const charactersData = charactersSnapshot.docs.map(doc => {
        const data = doc.data();
        const casaId = data.idCasa && typeof data.idCasa === 'object' && data.idCasa.id ? data.idCasa.id : 5;
        return { ...data, idCasa: casaId };
    });

    return charactersData;
}
  
  
