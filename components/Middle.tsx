// TIPOS DE DATOS Y CONTEXTO
import { FC, useContext } from 'react'
import { appContext } from 'Ctx'

// NAVEGACIÓN
import Link from 'next/link'

const Middle: FC<ILangIndexPage['middle']> = (strings: ILangIndexPage['middle']) => {
	// OBTENER USUARIO DEL CONTEXTO
	const { user } = useContext(appContext)

	return (
		<div className='middle'>
			<div id='mWave'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='var(--secondary)'
						fillOpacity='1'
						d='M0,160L48,176C96,192,192,224,288,250.7C384,277,480,299,576,266.7C672,235,768,149,864,144C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					/>
				</svg>
			</div>

			<div id='showInf'>
				<svg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'>
					<g transform='translate(300, 300)'>
						<path
							d='M127.5,-181.1C165.2,-174.1,195.9,-138.8,219.3,-97.3C242.7,-55.8,258.9,-8.1,255.6,38.9C252.2,86,229.3,132.4,191.6,153.8C154,175.2,101.6,171.5,60.7,164.1C19.7,156.7,-9.9,145.5,-52.1,147C-94.3,148.5,-149.2,162.7,-172.6,144.6C-196.1,126.5,-188.1,76.2,-184,33.1C-179.8,-10,-179.5,-45.9,-173.6,-87.8C-167.8,-129.7,-156.3,-177.6,-126.5,-188.1C-96.6,-198.6,-48.3,-171.8,-1.7,-169.2C44.9,-166.5,89.7,-188,127.5,-181.1Z'
							fill='var(--blue)'
						/>
					</g>
				</svg>
				<p id='blobText'>
					{strings.blob_1}
					<br />
					{strings.blob_2}
				</p>
			</div>

			<div className='amber'>
				<h2>
					{strings.title} <i className='material-icons'>pages</i>
				</h2>
				<p>{strings.text}</p>

				<Link href='/cuenta' passHref scroll={false}>
					<a
						className='btn waves white waves-dark'
						title={user ? strings.button_1 : strings.button_2}>
						<i className='material-icons'>person</i> {user ? strings.button_1 : strings.button_2}
					</a>
				</Link>
			</div>

			<style jsx>{`
				.middle {
					position: relative;
					margin-top: -23px;
				}
				.middle > div {
					width: 100%;
					padding: 20px;
					padding-bottom: 100px;
				}
				.middle > div h2,
				.middle > div p {
					color: var(--backgrounds);
					display: block;
				}
				#mWave {
					overflow: hidden;
					width: 100%;
					padding: 0;
					margin: 0;
				}
				#mWave > svg {
					width: calc(100% + 100px);
					margin-left: -100px;
					margin-bottom: -5px;
				}
				.middle > div h2 {
					line-height: 30px;
					margin-bottom: 5px;
				}
				.middle > div h2 i {
					margin-left: -2px;
					position: relative;
					top: 3px;
				}
				.middle > #showInf {
					position: absolute;
					top: 2px;
					left: 20px;
					width: 150px;
					height: 100px;
				}
				.middle > #showInf > svg {
					transform: scale(1.8, 1.2);
				}
				#blobText {
					position: absolute;
					top: 60px;
					left: 35px;
					font-weight: 500;
					font-size: 1em;
					line-height: 15px;
					width: 130px;
				}
				.middle > div a {
					margin-top: 15px;
					color: var(--secondary);
					position: relative;
				}
				@media screen and (max-width: 355px) {
					.middle > #showInf {
						top: -3px;
						left: 10px;
					}
					.middle > #showInf > svg {
						transform: scale(1.7, 1.1);
					}
					.middle > div h2 {
						line-height: 25px;
					}
				}
				@media screen and (min-width: 445px) {
					.middle > #showInf > svg {
						transform: scale(2, 1.4);
					}
					.middle > #showInf {
						top: 10px;
					}
					#blobText {
						left: 30px;
					}
				}
				@media screen and (min-width: 460px) {
					.middle > #showInf {
						top: 8px;
						left: -5%;
					}
				}
				@media screen and (min-width: 545px) {
					.middle > #showInf {
						top: 15px;
					}
				}
			`}</style>
		</div>
	)
}

export default Middle
