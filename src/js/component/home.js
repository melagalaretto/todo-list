import React, { useState, isValidElement } from "react";
import { ListarItems } from "./listar.js";
import { element } from "prop-types";

export function Home() {
	const [tarea, setTarea] = useState([""]);
	const [list, setList] = useState([]);
	const lista = e => {
		e.preventDefault();
		if (tarea != "") {
			setList([tarea, ...list]);
			setTarea([""]);
		}
	};
	const deleteId = numId => {
		let numArray = [];
		list.filter(function(element, i) {
			if (i != numId) {
				numArray.push(element);
			}
			setList(numArray);
		});
	};

	return (
		<div className="text-center mt-5">
			<h1 id="text">Ingrese Tareas</h1>

			<div className="container">
				<form onSubmit={lista}>
					<input
						id="input"
						type="text"
						placeholder="Ingresar"
						onChange={e => setTarea(e.target.value)}
						value={tarea}
					/>
				</form>
				{list.map((element, i) => {
					return (
						<ListarItems
							key={i}
							list={list}
							idBorrar={i}
							deleteId={deleteId}
						/>
					);
				})}
			</div>
		</div>
	);
}
