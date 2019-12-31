import { useRef } from 'react';

const Card = props => {
	const card = useRef(null);
	return (
		<div className="card" ref={card}>
			<div className="card-head waves">
				<img src={img} alt={props.title} />
			</div>

			<div className="card-body">
				<div className="card-content">
					<h3>{props.title}</h3>
					<p>{props.text}</p>

					<div id="cartInfo">
						<button className="card-price">Q {props.price - 0.01}</button>
						<button className="primary waves addToCart"><i className="material-icons">add_shopping_cart</i> Agregar al carrito</button>
					</div>
				</div>
			</div>

			<style jsx>{`
	    		.card{
	       			position:relative;
	       			width:100%;
	       			margin-bottom:20px;
	       			border-radius:15px;
	       			overflow:hidden;
	       			z-index:1;
	       			box-shadow:0 0 10px rgba(0,0,0,.1);
	    		}
	    		.card .card-head{
	     	  		width:100%;
	   	    		height:13vh;
	     	  		position:relative;
	  	     		z-index:2;
	      	 		transition:transform 0.3s ease-in-out;
         	  	     transform-origin:right bottom;
	    		}
	   			.card .card-head::before{
       	 	       content:'';
	     	  		position:absolute;
	    	   		top:0;
	      	 		left:0;
	   	    		width:100%;
	       			height:100%;
	     			z-index:1;
	       			background:rgba(0,0,0,.1);
	    		}
	    		.card .card-head > img{
	       			width:100%;
	       			position:relative;
	       			z-index:-2;
	    		}
	    		.card .card-body #cartInfo{
	      	 		display:flex;
	      	 		width:100%;
	       			justify-content:space-between;
	       			margin-top:15px;
	    		}
	    		.card .card-body #cartInfo .addToCart{
	       			color:var(--backgrounds);
	    		}
	   			.card .card-body #cartInfo .card-price{
	       			color:var(--primary);
	       			z-index:2;
	       			font-weight:550;
	       			overflow:hidden;
	       			padding:0;
	       			font-size:1.6em;
	    		}
	    		.card .card-body{
	       			position:relative;
	       			width:100%;
	       			padding:30px;
	       			color:var(--text);
	       			display:flex;
	       			align-items:center;
	       			background:var(--backgrounds);
	       			z-index:2;
	    		}
	    		.card .card-body .card-content > p{
    	       		font-size:0.9em;
	       			width:100%;
	    		}
	 		`}</style>
		</div>
	)
}
export default Card;
