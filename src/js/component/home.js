import React, { useState, isValidElement } from "react";
import { ListarItems } from "./listar.js";
import { element } from "prop-types";

export function Home() {
	/* const [tarea, setTarea] = useState([""]); */
	const [list, setList] = useState([]);

	/* const lista = e => {
		e.preventDefault();
		if (tarea !== "") {
			setList([...list, tarea]);
            setTarea([""]);
            
		}
    }; */

	const handleKeyPress = e => {
		if (e.target.value !== "" && e.charCode === 13) {
			console.log(e.target.value);

			let newToDo = {
				label: e.target.value,
				done: false
			};
			let newToDoList = [...list, newToDo];
			console.log(newToDoList);

			setList(newToDoList);
			/* updateData(newToDoList); */
			e.target.value = "";
		}
	};

	const deleteId = numId => {
		let numArray = [];
		list.filter(function(element, i) {
			if (i !== numId) {
				numArray.push(element);
			}
			setList(numArray);
		});
	};

	return (
		<div className="text-center mt-5">
			<h1 id="text">Ingrese Tareas</h1>

			<div className="container">
				{/* <form onSubmit={handleKeyPress}> */}
				<input
					id="input"
					type="text"
					placeholder="Ingresar"
					className="list-group-item mt-5"
					/* onChange={e => setTarea(e.target.value)} */
					onKeyPress={handleKeyPress}
					// value={list}
				/>
				{/* </form> */}
				{list.map((item, i) => {
					// Cambien el element por item, realmente no tiene nada que ver solo es costumbre
					return (
						<ListarItems
							key={i}
							item={item.label} // Cambie solo esto aqui //
							idBorrar={i}
							deleteId={deleteId}
						/>
					);
				})}
			</div>
		</div>
	);
}
