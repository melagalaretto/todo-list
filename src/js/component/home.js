import React, { useState, isValidElement, useEffect } from "react";
import { ListarItems } from "./listar.js";
import { element } from "prop-types";

export function Home() {
	const [list, setList] = useState([]);
	const [showError, setShowError] = useState(false);

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
			updateData(newToDoList);
			e.target.value = "";
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const deleteId = numId => {
		let numArray = [];
		list.filter(function(element, i) {
			if (i !== numId) {
				numArray.push(element);
			}
			setList(numArray);
		});
	};

	const getData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/melagalaretto")
			.then(resp => resp.json())
			.then(data => setList(data))
			.catch(error => setShowError(true));
	};

	const updateData = updatedList => {
		let updatedListToSend = JSON.stringify(updatedList);
		let options = {
			method: "PUT",
			body: updatedListToSend,
			headers: {
				"Content-Type": "application/json"
			}
		};

		console.log(updatedListToSend);
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/melagalaretto",
			options
		)
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	return (
		<div className="text-center mt-5">
			<h1 id="text">Ingrese Tareas</h1>

			<div className="container" id="ingresar">
				<input
					id="input"
					type="text"
					placeholder="Ingresar"
					className="list-group-item mt-5"
					onKeyPress={handleKeyPress}
				/>
				{list.map((item, i) => {
					return (
						<ListarItems
							key={i}
							item={item.label} // Cambie solo esto aqui //
							idBorrar={i}
							deleteId={deleteId}
						/>
					);
				})}
				{showError ? <h1>Algo salió mal</h1> : null}
			</div>
		</div>
	);
}
