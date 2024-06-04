import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {
	const contador = counter.toString().padStart(6, "0");
	console.log(contador);
	const arregloContador = contador.split("");
	console.log(arregloContador);
	return (
		<div className="text-center bg-dark fs-1 d-flex justify-content-center text-white gap-5">
			<div ><i className="far fa-clock"></i></div>
			{arregloContador.map((elemento, index) => {
				return <div key={index}><span>{elemento}</span> </div> 
			})}
		</div>
	);
};

export default Home;
