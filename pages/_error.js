import React from 'react';
import Link from "next/link";
import ErrorP from '../assets/error.png';
import { motion } from 'framer-motion';

const Error = ({ statusCode }) => {
	return (
		<motion.div initial="exit" animate="enter" exit="exit">
			<div id="errorPage">
				<div>
					<h1>¡Ocurrió un error!</h1>
					<p>Lo sentimos, tenemos un error {statusCode} en la plataforma 😅, intenta de nuevo más tarde o revisa si la dirección es correcta.</p>
					<Link href="/" passHref scroll={false}><a className="waves waves-dark btn white" title="Home"><i className="uil uil-corner-up-left-alt"></i> Regresar</a></Link>
				</div>
				<img src={ErrorP} />
				<style jsx>{`
					#errorPage{
						position:fixed;
						top:0;
						left:0;
						width:100%;
						height:100vh;
						background:var(--primary);
					}
					#errorPage > div{
						position:absolute;
						top:40%;
						left:50%;
						width:100%;
						padding:20px;
						transform:translate(-50%, -50%);
						font-size:1.2em;
						color:var(--backgrounds);
					}
					a{
						color:var(--text);
						width:145px;
						margin-top:20px;
						justify-content:space-between;
					}
						img{
						width:250px;
						position:fixed;
						bottom:-30px;
						right:0;
					}
      			`}</style>
			</div>
		</motion.div>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
