import React, {useState, useEffect} from "react";

import ItemList from "./ItemList/ItemList";

import Productos from "./Productos";
import { useParams } from "react-router-dom";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";


const Itemlistcontainer = ({props}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();


    useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

   
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList data={data}/>
            
        </div>
    )
}

export default Itemlistcontainer;