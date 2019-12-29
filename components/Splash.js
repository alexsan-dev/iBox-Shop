import Logo from "../assets/logo.svg";

const Splash = p => {

	let display = process.env.NODE_ENV === "development" ? 'none' : 'block';

	return (
		<div id="splash">
			<img src={Logo} alt="Logo" />

			<div>
				<h2>Mejora tu experiencia 🔥</h2>
				<p>iBox es la tienda electrónica con el mayor impacto en Guatemala, creada desde cero para mejorar en cada detalle 👌, ayúdanos a mejorar tu experiencia dejándonos tu comentario sobre la tienda. 📲</p>
			</div>

			<style jsx>{`
         @keyframes spl {
	    0%{transform:translate(-50%, -50%) scale(1,1)}
	    50%{transform:translate(-50%, -50%) scale(1.2, 1.2)}
	    100%{transform:translate(-50%, -50%) scale(1,1)}
	 }
         #splash{
	    background:var(--primary);
	    position:fixed;
	    top:0;
	    left:0;
	    width:100%;
	    height:100vh;
	    z-index:101;
	    opacity:1;
	    display:${display};
	    transition:opacity 0.3s ease-in-out;
	 }
	 img{
	    position:absolute;
	    top:40%;
	    left:50%;
	    transform:translate(-50%, -50%);
	    width:80%;
	    max-width:200px;
	    animation:spl 2s ease-in-out infinite;
	 }
	 div{
	    width:100%;
	    font-size:15px;
	    padding:20px;
	    color:var(--backgrounds);
	    background:var(--third);
	    position:fixed;
	    bottom:0;
	    left:0;
	 }
	 div h2{
	    color:var(--backgrounds);
	}
         `}</style>
		</div>
	)
}

export default Splash;
