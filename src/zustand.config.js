import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { collection, query, getDocs, doc, setDoc, orderBy, limit, serverTimestamp } from "firebase/firestore"

import { firestore } from "./firebase.config"

export const useStore = create(devtools((set, get) => ({
    isSend: false,
    loading: false,
    error: "",

    cleanError: (event) => {
        set({ error: "" })
    },

    cleanIsSend: (event) => {
        set({ isSend: false })
    },

    sendEmail: async (event) => {
        try {
            set({ loading: true, error: "" })

            let emailId = doc(collection(firestore, "email"))

            let snapshot = await getDocs(query(collection(firestore, "email"), orderBy("number", "desc"), limit(1)))
            let emailNumber = "0001"

            if(snapshot && snapshot.docs.length > 0){
                let emailLast = snapshot.docs[0].data().number
                let emailLastNR = Number(emailLast)
                emailNumber = (emailLastNR + 1).toString().padStart(4, "0")
            }

            await setDoc(doc(firestore, "email", emailId.id), {...event, id: emailId.id, number: emailNumber, status: "nieprzeczytane", createdAt: serverTimestamp()})
            set({ loading: false, isSend: true })
        }
        catch (error) {
            let errorId = doc(collection(firestore, "error"))

            await setDoc(doc(firestore, "error", errorId.id), {id: errorId.id, error: `sendEmail/${error.code}`, createdAt: serverTimestamp()})
            set({ loading: false, error: `sendEmail/${error.code}` })
        }
    },
})))