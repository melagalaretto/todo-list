import React, { useState } from "react";
import PropTypes from "prop-types";

export function ListarItems(props) {
	return (
		<li
			className="list-group-item d-flex justify-content-between"
			id="list">
			<p>{props.item}</p>
			{/* aqui coloque item que viene del componente padre */}
			<div
				className="cursor-pointer"
				onClick={() => props.deleteId(props.idBorrar)}>
				<i className="far fa-trash-alt"></i>
			</div>
		</li>
	);
}

ListarItems.propTypes = {
	item: PropTypes.string,
	idBorrar: PropTypes.number,
	deleteId: PropTypes.func
};
