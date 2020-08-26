// TIPOS DE DATOS Y CONTEXTO
import { FC, useContext, RefObject, useRef } from 'react'
import { appContext } from 'Ctx'

// NAVEGACIÓN
import Link from 'next/link'

const Card: FC<CardProps> = (props: CardProps) => {
	// OBTENER LENGUAJE Y EVENTO DE AGREGAR AL CARRITO
	const { lang, addToCartEvent } = useContext(appContext)
	const card: RefObject<HTMLDivElement> = useRef(null)

	// AGREGAR AL CARRITO
	const addToCartCall = () => {
		// ANIMAR CARD
		card.current?.classList.add('animCard')
		setTimeout(() => card.current?.classList.remove('animCard'), 300)

		// AGREGAR AL CARRITO
		addToCartEvent(props.code, true)
	}

	return (
		<div className='card' ref={card}>
			<div className='card-head'>
				<img loading='lazy' src={props.img} alt={props.title} />
				<Link href={`/tienda/[pid]`} as={`/tienda/${props.pid}`} scroll={false}>
					<div className='waves waves-dark headShadow' />
				</Link>
			</div>

			<div className='card-body'>
				<div className='card-content'>
					<h3>{props.title}</h3>
					<p>{props.text}</p>
					<div id='cartInfo'>
						<button className='card-price'>
							<span>Q</span>
							{Math.floor(props.price)}
							<span id='round'>{Math.round((props.price - Math.floor(props.price)) * 100)}</span>
						</button>
						<button className='amber waves addToCart' onClick={addToCartCall}>
							<i className='material-icons'>add_shopping_cart</i>
							{lang.general.buttons.addToCart}
						</button>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes animCard {
					0% {
						transform: rotate(${Math.random() * 5}deg);
					}
					25% {
						transform: rotate(-${Math.random() * 5}deg);
					}
					50% {
						transform: rotate(${Math.random() * 5}deg);
					}
					100% {
						transform: rotate(0deg);
					}
				}
				.animCard {
					animation: animCard 0.3s ease-in-out 1;
				}
				.card {
					position: relative;
					width: 100%;
					margin-bottom: 20px;
					border-radius: 15px;
					overflow: hidden;
					z-index: 1;
					box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
				}
				.card .card-head {
					width: 100%;
					height: 150px;
					position: relative;
					z-index: 2;
					transition: transform 0.3s ease-in-out;
					transform-origin: right bottom;
				}
				.card .card-head > img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				.card .card-head .headShadow {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1;
					background: rgba(0, 0, 0, 0.1);
				}
				.card .card-body #cartInfo {
					display: flex;
					width: 100%;
					justify-content: space-between;
					margin-top: 15px;
				}
				.card .card-body #cartInfo .addToCart {
					color: var(--backgrounds);
				}
				.card .card-body #cartInfo .addToCart i {
					margin-left: -5px;
				}
				.card .card-body #cartInfo .card-price {
					color: var(--primary);
					z-index: 2;
					font-weight: 550;
					padding: 0;
					font-size: 2em;
					position: relative;
				}
				.card .card-body {
					position: relative;
					width: 100%;
					padding: 30px;
					color: var(--text);
					display: flex;
					align-items: center;
					background: var(--backgrounds);
					z-index: 2;
				}
				.card .card-body .card-content > p {
					font-size: 0.9em;
					width: 100%;
				}
				span {
					font-size: 0.8em;
					display: block;
					position: relative;
					top: 2px;
				}
				#round {
					font-size: 0.6em;
					position: absolute;
					top: 5px;
					right: -23px;
				}
			`}</style>
		</div>
	)
}

export default Card
