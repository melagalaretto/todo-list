import React, { useState } from "react";
import PropTypes from "prop-types";

export function ListarItems(props) {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<p>{props.list}</p>
			<div
				className="cursor-pointer"
				onClick={() => props.deleteId(props.idBorrar)}>
				<i className="far fa-trash-alt"></i>
			</div>
		</li>
	);
}

ListarItems.propTypes = {
	list: PropTypes.string,
	idBorrar: PropTypes.number,
	deleteId: PropTypes.func
};
