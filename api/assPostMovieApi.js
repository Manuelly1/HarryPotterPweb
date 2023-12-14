import { collection, addDoc, getFirestore, doc, setDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../util/firebase';
import { getAssMovieData } from "./assMovieApi";

export async function postAssMovieData(email, id, like, deslike) {
    try {    
        const firestore = getFirestore(db);

        const movieLikes = await getAssMovieData(email, id);

        if (movieLikes.length === 0) {
            await addDoc(collection(firestore, 'avaliacao'), {
                idUsuario: email,
                idFilme: id,
                like: like,
                deslike: deslike
            });
        } else {
            const querySnapshot = await getDocs(
                query(
                    collection(firestore, 'avaliacao'),
                    where('idUsuario', '==', email),
                    where('idFilme', '==', id)
                )
            );

            if (!querySnapshot.empty) {
                const documentRef = querySnapshot.docs[0].ref;
                
                await setDoc(documentRef, {
                    idUsuario: email,
                    idFilme: id,
                    like: like,
                    deslike: deslike
                }, { merge: true });
            }
        }

        return true;
    } catch (error) {
        console.error('Erro ao salvar dados do usuário no Firestore:', error);
        return false;
    }
}
