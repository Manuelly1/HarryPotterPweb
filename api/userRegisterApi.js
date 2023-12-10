import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { db } from '../util/firebase';

export async function saveUserData(email, idCasa) {
    try {    
        const firestore = getFirestore(db);

        await addDoc(collection(firestore, 'usuario'), {
            email: email,
            idCasa: idCasa
        })
    

        return true;
    } catch (error) {
        console.error('Erro ao salvar dados do usuário no Firestore:', error);
        return false;
    }
}
