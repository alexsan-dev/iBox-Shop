// NAVEGACIÓN
import Link from 'next/link'

// COMPONENTES
import ProductList from './ProductList'

const Recent: React.FC<ILangIndexPage['recent']> = (strings: ILangIndexPage['recent']) => {
	return (
		<div id='middle'>
			<div id='recent'>
				<div id='wave'>
					<svg id='recentD' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path
							fill='var(--gray-light)'
							fillOpacity='1'
							d='M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,202.7C672,213,768,171,864,133.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
						/>
					</svg>
				</div>
				<div>
					<h2>
						{strings.title}
						<i className='material-icons'>history</i>
					</h2>
					<p>{strings.text}</p>

					<ProductList recent />
				</div>
				<img src='/images/home/middle.png' alt='Store' />
			</div>

			<Link href='/tienda' passHref scroll={false}>
				<a className='waves waves-dark seeMore right' title={strings.button}>
					{strings.button} <i className='material-icons'>arrow_forward</i>
				</a>
			</Link>

			<style jsx>{`
				#middle {
					position: relative;
				}
				#recent {
					position: relative;
					width: 100%;
					margin-top: -115px;
				}
				#recentD {
					margin-bottom: -5px;
					width: 115%;
				}
				.seeMore {
					bottom: 45px;
					z-index: 10;
				}
				#recent > div {
					background: var(--gray-light);
					padding: 20px;
					padding-bottom: 125px;
				}
				#recent > #wave {
					background: none;
					padding: 0;
					width: 100%;
					overflow: hidden;
				}
				h2 {
					margin-top: -50px;
					position: relative;
					z-index: 3;
				}
				p {
					width: calc(100% - 165px);
					max-width: 225px;
					margin-bottom: 25px;
					font-size: 0.8em;
				}
				img {
					position: absolute;
					top: -35px;
					right: -5%;
					z-index: 2;
				}
				@media screen and (min-width: 445px) {
					img {
						right: -5%;
						width: 230px;
					}
				}
			`}</style>
		</div>
	)
}

export default Recent
