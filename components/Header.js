import Link from "next/link";
const Header = props => {
	return (
		<div id="mainHeader">

			<div id="headText">
				<h1>{props.title}</h1>
				<p>{props.text}</p>
				<Link href={props.href} passHref scroll={false}><a id="shopBtn" className="waves btn" title="Tienda"><i className="material-icons">{props.icon}</i>{props.link}</a></Link>
			</div>

			<span>{props.span}</span>

			<img src={props.img} alt="Header Image" />

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--primary)" fillOpacity="1" d="M0,64L48,53.3C96,43,192,21,288,10.7C384,0,480,0,576,48C672,96,768,192,864,229.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

			<style jsx>{`
	    #mainHeader{
               position:relative;
	       z-index:2;
	       width:100%;
	    }
	    #mainHeader > img{
	       position:absolute;
	       left:0px;
	       margin-top:-32px;
	       z-index:3;
	       height:95px;
	    }
	    #mainHeader > span{
	       font-size:10px;
	       color:var(--parraf);
	       font-weight:bold;
	       background:var(--backgrounds);
	       padding:10px 10px 10px 20px;
	       border-radius:5px;
	       position:absolute;
	       left:90px;
	       margin-top:-20px;
	       z-index:3;
	    }
	    #headText{
	       padding:20px;
	       background:var(--primary);
	       position:relative;
	       z-index:3;
	       padding-bottom:40px;
	    }
	    #headText h1{
	       color:var(--backgrounds);
	       font-size:1.8em;
	       line-height:30px;
	    }
	    #headText p{
	       color:var(--backgrounds);
	       font-size:1em;
	    }
	    #shopBtn{
	       position:absolute;
	       background:transparent;
	       border:2px solid var(--backgrounds);
	       color:var(--backgrounds);
	       border-radius:10px;
	       right:20px;
	       bottom:-30px;
	       padding:12px 15px;
	       z-index:3;
	    }
	    #wavesone{
	       position:relative;
	       z-index:2;
	       margin-top:-2px;
	    }
	    @media screen and (max-width:355px){
			#headText h1{
				line-height:20px;
			 }
			 #mainHeader > img{
				height:80px;
			 }
		}
	 `}</style>
		</div>
	)
}

export default Header;
