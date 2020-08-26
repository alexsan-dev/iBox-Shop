// CONTEXTO Y HOOKS
import { useContext } from 'react'
import { appContext } from 'Ctx'

// MOSTRAR SOLO EN MODO DE PRODUCCIÓN
const display: string = process.env.NODE_ENV === 'development' ? 'none' : 'block'

const Splash: React.FC = () => {
	// CONTEXTO DEL LENGUAJE
	const { splash } = useContext(appContext).lang

	return (
		<div id='splash'>
			<img src='/images/general/icon.png' alt='Logo' />

			<div>
				<h2>{splash.title}</h2>
				<p>{splash.text}</p>
			</div>

			<style jsx>{`
				@keyframes spl {
					0% {
						transform: translate(-50%, -50%) scale(1, 1);
					}
					50% {
						transform: translate(-50%, -50%) scale(1.2, 1.2);
					}
					100% {
						transform: translate(-50%, -50%) scale(1, 1);
					}
				}
				#splash {
					background: var(--primary);
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100vh;
					z-index: 101;
					opacity: 1;
					transition: opacity 0.3s ease-in-out;
					display: ${display};
				}
				img {
					position: absolute;
					top: 40%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 80%;
					max-width: 200px;
					animation: spl 2s ease-in-out infinite;
				}
				div {
					width: 100%;
					font-size: 15px;
					padding: 20px;
					color: var(--backgrounds);
					background: var(--third);
					position: fixed;
					bottom: 0;
					left: 0;
				}
				div h2 {
					color: var(--backgrounds);
				}
			`}</style>
		</div>
	)
}

export default Splash
