import Link from "next/link";

const Slider = () => {
	return (
		<div className="mainSlide">

			<div id="slideTitle">
				<h2>Categorias <i className="material-icons">widgets</i></h2>
				<p>Puedes pedir tus piezas por mayor y recibirás descuentos y regalos en la tienda 🎁, agrega un método de pago o pide contra entrega. 🏍️</p>
			</div>

			<div className="slider">

				<ul>
					<li className="green">
						<Link href="/tienda" passHref scroll={false}>

							<a className="catContent waves" title="Electrónica">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>Electrónica</h3>
									<p>Componentes, integrados y más</p>
								</div>
								<i className="material-icons">memory</i>
							</a>

						</Link>
					</li>

					<li className="red">
						<Link href="/tienda" passHref scroll={false}>

							<a className="catContent waves" title="Dispositivos">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>Dispositivos</h3>
									<p>Audio, video, red y smartphones</p>
								</div>
								<i className="material-icons">router</i>
							</a>

						</Link>
					</li>

					<li className="five">
						<Link href="/tienda" passHref scroll={false}>

							<a className="catContent waves" title="Accesorios">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>Accesorios</h3>
									<p>Audifonos, cables, protectores.</p>
								</div>
								<i className="material-icons">headset</i>
							</a>

						</Link>
					</li>
				</ul>

			</div>

			<Link href="/tienda" passHref scroll={false}><a className="waves waves-dark seeMore right" title="Ver todo">Ver todo <i className="material-icons">arrow_forward</i></a></Link>
			<style jsx>{`
	       .mainSlide{
		  position:relative;
		  margin-top:-25px;
		  width:100%;
	       }
	       .mainSlide > .seeMore{
		  z-index:2;
		  bottom:-55px;
	       }
	       #slideTitle{
		  padding:0 20px;
	       }
	       .slider{
		  position:relative;
		  width:100%;
		  overflow:scroll;
		  padding:20px 0px 0px 40px;
	       }
	       .slider ul{
	          position:relative;
		  margin-left:-20px;
		  width:800px;
	          overflow-x:scroll;
		  list-style:none;
	       }
	       .slider ul li{
		  align-items:center;
		  border-radius:5px;
		  width:250px;
		  display:inline-block;
		  margin-right:15px;
	       }
	       .slider ul li:before{
		   border-radius:10px;
	       }
	       .slider ul li .catContent{
	          position:relative;
		  display:flex;
		  align-items:center;
		  padding:15px 20px;
		  overflow:hidden;
		  border-radius:10px;
	       }
	       .slider ul li .cardBackground{
		  position:absolute;
		  top;0;
		  left:0;
		  width:100%;
		  height:100%;
		  z-index:-2;
	       }
	       .slider ul li .catContent:before{
		  content:"";
		  position:absolute;
		  top:0;
		  left:0;
		  width:100%;
		  height:100%;
		  z-index:-1;
		  background:rgba(0,0,0,.05);
	       }
	       .slider ul li .catContent .catTitle{
		  font-size:1em;
		  color:var(--backgrounds);
	       }
	       .slider ul li .catContent .catTitle p{
		  font-size:0.9em;
	       }
	       .slider ul li .catContent i{
	 	  font-size:4em;
		  margin-left:0px;
		  color:var(--backgrounds);
	       }
	   `}</style>
		</div>
	)
}

export default Slider;
