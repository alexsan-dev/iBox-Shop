// NAVEGACION
import Link from "next/link";

// PROPIEDADES
interface Props {
	title: string;
	text: string;
	button: string;
	electroCatTitle: string;
	electroCatText: string;
	devicesCatTitle: string;
	devicesCatText: string;
	accesCatTitle: string;
	accesCatText: string;
}

const Slider: React.FC<Props> = (props: Props) => {
	return (
		<div className="mainSlide">
			<div id="slideTitle">
				<h2>
					{props.title} <i className="uil uil-apps"></i>
				</h2>
				<p>{props.text}</p>
			</div>

			<div className="slider">
				<ul>
					<li className="green">
						<Link href="/tienda" passHref scroll={false}>
							<a className="catContent waves" title="Electrónica">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>{props.electroCatTitle}</h3>
									<p>{props.electroCatText}</p>
								</div>
								<i className="uil uil-circuit"></i>
							</a>
						</Link>
					</li>

					<li className="red">
						<Link href="/tienda" passHref scroll={false}>
							<a className="catContent waves" title="Dispositivos">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>{props.devicesCatTitle}</h3>
									<p>{props.devicesCatText}</p>
								</div>
								<i className="uil uil-wifi-router"></i>
							</a>
						</Link>
					</li>

					<li className="five">
						<Link href="/tienda" passHref scroll={false}>
							<a className="catContent waves" title="Accesorios">
								<div className="cardBackground"></div>
								<div className="catTitle">
									<h3>{props.accesCatTitle}</h3>
									<p>{props.accesCatText}</p>
								</div>
								<i className="uil uil-headphones"></i>
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<Link href="/tienda" passHref scroll={false}>
				<a className="waves waves-dark seeMore right" title="Ver todo">
					{props.button} <i className="uil uil-arrow-right"></i>
				</a>
			</Link>

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
				.seeMore{
					bottom:0;
				}
				.slider{
					position:relative;
					width:100%;
					overflow:scroll;
					padding:20px 0px 0px 40px;
					z-index:3;
				}
				.slider ul{
					position:relative;
					margin-left:-20px;
					width:740px;
					overflow-x:scroll;
					list-style:none;
				}
				.slider ul li{
					align-items:center;
					border-radius:5px;
					width:230px;
					display:inline-block;
					margin-right:15px;
				}
				.slider ul li:before{
					border-radius:10px;
				}
				.slider ul li .catContent{
					position:relative;
					display:flex;
					justify-content:space-between;
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
					width:60%;
					color:var(--backgrounds);
				}
				.slider ul li .catContent .catTitle p{
					font-size:0.9em;
				}
				.slider ul li .catContent i{
					font-size:4em;
					margin-right:-17px;
					color:var(--backgrounds);
				}
				@media screen and (max-width:355px){
					.mainSlide > .seeMore{
						bottom:-45px;
					}
					.slider ul{
						width:650px;
					}
					.slider ul li{
						width:200px;
					}
				}
				@media screen and (min-width:445px){
          .slider ul{
						width:800px;
					}
					.slider ul li{
						width:250px;
					}
					.mainSlide > .seeMore{
						bottom:-63px;
					}
        }
				@media screen and (min-width:460px){
					.slider{
						width:110%;
						left:-5%;
					}
				}
	   		`}</style>
		</div>
	);
};

export default Slider;