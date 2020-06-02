import { motion } from 'framer-motion'
import { NextPage, NextPageContext } from 'next'

// tslint:disable-next-line: only-arrow-functions
function pageAnimation<T = any>(
	Page: React.FC<T>,
	initialProps?: (context: NextPageContext) => T | Promise<T>
) {
	const gPage: NextPage<T> = (props: T) => {
		return (
			<motion.div
				initial='exit'
				animate='enter'
				exit='exit'
				variants={{
					exit: { transition: { staggerChildren: 0.1 } },
					enter: { transition: { staggerChildren: 0.1 } },
				}}>
				<Page {...props} />
			</motion.div>
		)
	}

	// INITIAL PROPS
	if (initialProps) gPage.getInitialProps = initialProps

	return gPage
}

export { pageAnimation }
