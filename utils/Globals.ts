import { Variants } from 'framer-motion'

// CONFIGURACIÓN DE ANIMACIÓN
const ease: number[] = [0.175, 0.85, 0.42, 0.96]
const duration: number = 0.5
const transition: object = { duration, ease }

// VARIANTES
export const upAnimation: Variants = {
	exit: { opacity: 0, y: -150, transition },
	enter: { opacity: 1, y: 0, transition },
}

export const rightAnimation: Variants = {
	exit: { opacity: 0, x: 200, transition },
	enter: { opacity: 1, x: 0, transition },
}

export const leftAnimation: Variants = {
	exit: { opacity: 0, x: -200, transition },
	enter: { opacity: 1, x: 0, transition },
}
