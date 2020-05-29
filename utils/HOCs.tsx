import { motion } from 'framer-motion'
import { NextPage } from 'next'

const pageAnimation = (Page: React.FC) => {
	const gPage: NextPage = () => {
		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={{
					exit: { transition: { staggerChildren: 0.1 } },
					enter: { transition: { staggerChildren: 0.1 } },
				}}>
				<Page />
			</motion.div>
		)
	}

	return gPage
}

export { pageAnimation }
