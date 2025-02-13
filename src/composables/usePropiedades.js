import { collection, doc, deleteDoc } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'
import { computed, ref } from 'vue'

export default function usePropiedades() {

    const alberca = ref(false)

    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db, 'propiedades'))

    const filteredItems = computed(() =>{
        return alberca.value ? 
            propiedadesCollection.value.filter(propiedad => propiedad.alberca)
                :
            propiedadesCollection.value
    })

    async function deleteItem(id){

        if(confirm("¿Desas eliminar esta propiedad?")){
            const docRef = doc(db, 'propiedades', id)
            await deleteDoc(docRef)
        }
        
    }

    return{
        alberca,
        filteredItems,
        propiedadesCollection,
        deleteItem
    }
}