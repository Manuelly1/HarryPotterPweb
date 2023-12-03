import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../util/firebase';

export async function getUserByEmail(email) {

    const firestore = getFirestore(db);
    const usersCollection = collection(firestore, 'usuario');
    const userQuery = query(usersCollection, where('email', '==', email));
    const userSnapshot = await getDocs(userQuery);

    const userData = userSnapshot.docs.map(doc => doc.data());
    return userData[0]; 

}
