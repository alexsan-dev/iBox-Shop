// NAVEGACIÓN
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { useContext } from 'react'
import { appContext } from 'Ctx'

// PROPIEDADES
interface Props {
	title: string | any
	text: string
	span?: string
	href: string
	img?: string
	icon?: string
	link?: string
	back?: boolean
}

const Header: React.FC<Props> = (props: Props) => {
	// ROUTER
	const router: NextRouter = useRouter()

	// CONTEXTO
	const backStrings = useContext(appContext).lang.general.buttons.back

	// REGRESAR A PAGINA ANTERIOR
	const returnBack = () => router.back()

	return (
		<div id='mainHeader'>
			<div id='headText'>
				<h1>{props.title}</h1>
				<p>{props.text}</p>
				{props.link && !props.back && (
					<Link href={props.href} passHref scroll={false}>
						<a id='shopBtn' className='waves btn' title={props.link}>
							<i className='material-icons'>{props.icon}</i>
							{props.link}
						</a>
					</Link>
				)}
				{props.back && (
					<button onClick={returnBack} id='shopBtn' className='waves btn' title='Shop'>
						<i className='material-icons'>reply</i>
						{backStrings}
					</button>
				)}
			</div>

			{props.span && <span>{props.span}</span>}

			{props.img && <img src={props.img} alt='Header Image' />}

			{props.img ? (
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='var(--primary)'
						fillOpacity='1'
						d='M0,64L48,53.3C96,43,192,21,288,10.7C384,0,480,0,576,48C672,96,768,192,864,229.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
					/>
				</svg>
			) : (
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='var(--primary)'
						fillOpacity='1'
						d='M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,218.7C672,192,768,160,864,170.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
					/>
				</svg>
			)}

			<style jsx>{`
				#mainHeader {
					position: relative;
					z-index: 2;
					width: 100%;
				}
				#mainHeader > img {
					position: absolute;
					left: 0px;
					margin-top: -32px;
					z-index: 3;
					height: 95px;
				}
				#mainHeader > span {
					font-size: 10px;
					color: var(--paragraph);
					font-weight: bold;
					background: var(--backgrounds);
					padding: 10px 10px 10px 20px;
					border-radius: 5px;
					position: absolute;
					left: 90px;
					margin-top: -20px;
					z-index: 3;
					display: block;
					width: ${props.span ? (props.span.length > 20 ? 130 + 'px' : 'unset') : 'unset'};
				}
				#headText {
					padding: 20px;
					background: var(--primary);
					position: relative;
					z-index: 3;
					padding-bottom: 40px;
				}
				#headText a i {
					position: relative;
					left: 4px;
				}
				#headText h1 {
					color: var(--backgrounds);
					font-size: 1.8em;
					line-height: 30px;
				}
				#headText p {
					color: var(--backgrounds);
					font-size: 1em;
				}
				#shopBtn {
					position: absolute;
					background: transparent;
					border: 2px solid var(--backgrounds);
					color: var(--backgrounds);
					border-radius: 10px;
					right: 20px;
					bottom: -30px;
					padding: 12px 15px;
					z-index: 3;
				}
				#wavesOne {
					position: relative;
					z-index: 2;
					margin-top: -2px;
				}
				@media screen and (max-width: 355px) {
					#headText h1 {
						line-height: 25px;
					}
					#mainHeader > img {
						height: 80px;
					}
				}
				@media screen and (min-width: 445px) {
					#mainHeader > img {
						height: 110px;
					}
				}
				@media screen and (min-width: 460px) {
					#mainHeader > img {
						height: 100px;
						left: -2.5%;
					}
					#shopBtn {
						bottom: -40px;
					}
				}
				@media screen and (min-width: 545px) {
					#mainHeader > img {
						height: 110px;
					}
				}
			`}</style>
		</div>
	)
}

export default Header
