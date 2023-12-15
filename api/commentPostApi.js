import { collection, addDoc, getFirestore, doc, setDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../util/firebase';

export async function postComment(email, id, descricao) {
    try {    
        const firestore = getFirestore(db);

        await addDoc(collection(firestore, 'comentarios'), {
            idUsuario: email,
            idFilme: id,
            descricao: descricao
        });
       
        return true;
    } catch (error) {
        console.error('Erro ao salvar comentários no Firestore:', error);
        return false;
    }
}
