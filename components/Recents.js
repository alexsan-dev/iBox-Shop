import CardShadow from './ProductCardPlaceholder';
import Link from 'next/link';
import Middle from '../assets/middle.png';

const Recents = props => {
	return (
		<div id="middle">

			<div id="recents">
				<svg id="recentsD" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--gray-light)" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,202.7C672,213,768,171,864,133.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

				<div>
					<h2>Recientes <i className="material-icons">access_time</i></h2>
					<p>Conoce los productos recientes vienen con ofertas para los primeros clientes, aprovéchalo. 💰</p>

					{<CardShadow />}

				</div>

			</div>

			<Link href="/tienda" passHref scroll={false}>
				<a className="waves waves-dark seeMore right" title="Ver más">Ver más <i className="material-icons">arrow_forward</i></a>
			</Link>
			<img src={Middle} alt="Store" />
			<style jsx>{`
         #middle{
	    position:relative;
	 }
         #recents{
	    position:relative;
	    width:100%;
	    margin-top:-115px;
         }
	 #recentsD{
	    margin-bottom:-5px;
	    width:115%;
	 }
	 .seeMore{
	    bottom:45px;
	    z-index:10;
	 }
	 #recents > div{
	    background:var(--gray-light);
	    padding:20px;
	    padding-bottom:80px;
	 }
	 h2{
	    margin-top:-50px;
	}
	 p{
	   width:calc(100% - 135px);
	   margin-bottom:25px;
	 }
	 img{
	   position:absolute;
	   top:-40px;
	   right:-9%;
	   z-index:2;
	 }

	`}</style>
		</div>
	)
}

export default Recents;
