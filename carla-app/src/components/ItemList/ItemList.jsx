import React from "react";
import Item from "./Item";


const ItemList = ({ data = [] }) => {
	return data.map((Productos) => <Item key={Productos.id} info={Productos} />);
};


export default ItemList;