// HOOKS Y TIPOS
import { useContext, useRef, MutableRefObject } from 'react'

// ROUTER
import { useRouter, NextRouter } from 'next/router'

// ANIMACIÓN
import { motion } from 'framer-motion'

// CONTEXTO
import { appContext } from 'Ctx'

// COMPONENTES
import CardShadow from '../../components/ProductCardPlaceholder'
import Header from '../../components/Header'

// HOCS Y ANIMACIONES
import { pageAnimation } from 'utils/HOCs'
import { upAnimation } from 'utils/Globals'

const Post: React.FC = () => {
	// CONTEXTO
	const { productList, lang, addToCartEvent } = useContext(appContext)

	// ROUTER Y PATH
	const router: NextRouter = useRouter()
	const { pid } = router.query

	// BUSCAR EN LISTA DE PRODUCTOS
	const product: MutableRefObject<product | undefined> = useRef(undefined)
	productList.forEach((nProduct: product) =>
		nProduct.key === pid ? (product.current = nProduct) : null
	)

	// LISTA DE PUNTUACIONES
	const pointsList: JSX.Element[] = []
	let pointsAverage = 0
	product.current?.points.points.forEach((p: number) => (pointsAverage += p))

	// CREAR LISTA DE ESTRELLAS
	if (product.current)
		for (let i = 0; i < 5; i++)
			if (i < pointsAverage / product.current?.points.points.length)
				pointsList.push(
					<i
						key={i}
						style={{ fontSize: '1.3em', color: 'var(--secondary)' }}
						className='material-icons'>
						star
					</i>
				)
			else
				pointsList.push(
					<i key={i} className='material-icons' style={{ fontSize: '1.3em' }}>
						star_outline
					</i>
				)

	const toCartClick = () => addToCartEvent(product.current?.key || '', true)

	return (
		<>
			{product.current ? (
				<motion.div variants={upAnimation}>
					<Header
						title={product.current.key}
						text={lang.shopPage.productPage.header.text}
						href='/'
						img='/images/shop/product.png'
						back
						span='BEST QUALITY'
					/>
					<div id='productContainer'>
						<div id='productGallery'>
							<img src={product.current.img} alt={product.current.name} />
						</div>
						<div id='productContent'>
							<h2>{product.current.name}</h2>
							<p>{product.current.description}</p>
							<p>{product.current.specs}</p>
							<div>
								<div id='points'>
									<strong>
										<i className='material-icons'>local_play</i>{' '}
										{lang.shopPage.productPage.description.points}{' '}
									</strong>
									<span>
										{product.current.points.points[0] === 0 ? (
											<span>{lang.shopPage.productPage.description.pointsDefault}</span>
										) : (
											pointsList
										)}
									</span>
								</div>
								<strong>
									<i className='material-icons'>local_offer</i>{' '}
									{lang.shopPage.productPage.description.tags}{' '}
								</strong>
								<span>
									{product.current.tag.map((tagK: string, i: number) => (
										<span className='tag' key={i}>
											{tagK}
										</span>
									))}
								</span>
								<br />
								<br />
								<strong>
									<i className='material-icons'>security</i>{' '}
									{lang.shopPage.productPage.description.brand}{' '}
								</strong>
								<span>{product.current.brand}</span>
								<br />
								<strong>
									<i className='material-icons'>style</i>{' '}
									{lang.shopPage.productPage.description.color}{' '}
								</strong>
								<span>{product.current.color}</span>
								<br />
								<div id='cartSection'>
									<span className='card-price'>
										<span>Q</span>
										{Math.floor(product.current.price)}
										<span id='round'>
											{Math.round(
												(product.current.price - Math.floor(product.current.price)) * 100
											)}
										</span>
									</span>
									<button className='amber waves addToCart' onClick={toCartClick}>
										<i className='material-icons'>add_shopping_cart</i>
										{lang.general.buttons.addToCart}
									</button>
								</div>
							</div>
						</div>
					</div>
					<style jsx>{`
						#productContainer {
							padding: 20px;
							margin-bottom: 10vh;
							margin-top: -80px;
						}
						#productGallery {
							width: 100%;
							height: 35vh;
							border-radius: 10px;
							overflow: hidden;
						}
						#productGallery > * {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
						#productContent {
							margin-top: 20px;
							margin-bottom: 10vh;
						}
						h2 {
							font-size: 1.2em;
						}
						p {
							margin-top: 10px;
						}
						.card-price {
							text-align: center;
							margin: 0 auto;
							display: block;
							font-size: 1.6em;
							font-weight: bold;
							color: var(--primary);
							margin-bottom: 5px;
						}
						.card-price > span:nth-child(1) {
							font-size: 0.8em;
						}
						.card-price > span:nth-child(2) {
							font-size: 0.7em;
							position: relative;
							top: -8px;
							left: 3px;
						}
						strong {
							opacity: 0.8;
						}
						strong > i {
							position: relative;
							top: 2px;
							font-size: 0.9em;
						}
						#points {
							padding: 0;
							margin: 0;
							display: flex;
							align-items: center;
							margin-bottom: 5px;
						}
						#points > span {
							position: relative;
							top: 2px;
							margin-left: 5px;
						}
						#points > span > span {
							position: relative;
							top: -2px;
						}
						.tag {
							color: var(--backgrounds);
							background: rgba(0, 0, 0, 0.4);
							padding: 5px 10px;
							margin: 0 5px;
							border-radius: 5px;
							font-size: 0.8em;
						}
						#cartSection {
							float: right;
							margin-top: -55px;
							display: inline-block;
						}
						button {
							color: var(--backgrounds);
						}
					`}</style>
				</motion.div>
			) : (
				<div>
					<CardShadow />
					<style jsx>{`
						div {
							margin: 5vh 0 25vh 0;
						}
					`}</style>
				</div>
			)}
		</>
	)
}

export default pageAnimation(Post)
