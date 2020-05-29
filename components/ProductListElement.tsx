// HOOKS
import { useEffect, RefObject, useRef } from 'react'

// ROUTER
import Link from 'next/link'

// PROPIEDADES
interface ProductProps {
	text: string
	search: string
	id: string
	index: number
	onPush: Function
}

const ProductListElement: React.FC<ProductProps> = (props: ProductProps) => {
	// REFERENCIAS
	const li: RefObject<HTMLLIElement> = useRef(null)

	/// ANIMACIÓN
	useEffect(() => {
		setTimeout(() => {
			if (li.current) {
				li.current.style.opacity = '1'
				li.current.classList.add('animLi')
				setTimeout(() => li.current?.classList.remove('animLi'), 300)
			}
		}, 100 * props.index)
	}, [])

	return (
		<>
			<Link href='/tienda/[pid]' as={`/tienda/${props.id}`}>
				<li ref={li} className='white waves waves-dark' onClick={() => props.onPush()}>
					<span>{props.text}</span>
				</li>
			</Link>

			<style jsx>{`
				@keyframes animLI {
					0% {
						transform: translateX(50px);
					}
					25% {
						transform: translateX(0);
					}
					50% {
						transform: translateX(10px);
					}
					75% {
						transform: translateX(-10px);
					}
					100% {
						transform: translateX(0);
					}
				}
				li {
					transition: all 0.3s ease-in-out;
					padding: 15px;
					font-weight: bold;
					border-radius: 10px;
					box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
					margin-bottom: 10px;
					cursor: pointer;
					opacity: 0;
					transition: opacity 0.3s ease-in-out;
				}
				span {
					color: rgba(0, 0, 0, 0.8);
				}
				.animLi {
					animation: animLI 0.3s ease-in-out 1;
				}
			`}</style>
		</>
	)
}

export default ProductListElement
