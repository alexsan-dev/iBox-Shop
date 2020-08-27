// NEXT
import { AppProps } from 'next/app'

// ANIMACIÓN Y HOOKS
import { AnimatePresence } from 'framer-motion'

// COMPONENTES
import Layout from 'layout/Layout'
import Splash from 'components/Splash'

// HOOKS
import { useUpdateAlert, useSplash } from 'utils/FXHooks'

const iBoxApp = ({ Component, pageProps, router }: AppProps) => {
	// ACTUALIZAR APP
	useUpdateAlert()

	// USAR SPLASH SCREEN
	useSplash()

	return (
		<>
			<Layout>
				<Splash />
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
			<style global jsx>{`
				@font-face {
					font-family: 'Material Icons';
					font-style: normal;
					font-weight: 400;
					font-display: block;
					src: url('/fonts/material-icons.woff2') format('woff2');
				}
				.material-icons {
					font-family: 'Material Icons';
					font-weight: normal;
					font-style: normal;
					font-display: block;
					font-size: 24px;
					line-height: 1;
					letter-spacing: normal;
					text-transform: none;
					display: inline-block;
					white-space: nowrap;
					word-wrap: normal;
					direction: ltr;
					-webkit-font-feature-settings: 'liga';
					-webkit-font-smoothing: antialiased;
				}
				body {
					overscroll-behavior: none;
					position: relative;
					top: 0;
					left: 0;
					width: 100%;
					--primary: rgb(47, 109, 153);
					--blue: #2196f3;
					--gray: #777;
					--gray-light: rgb(245, 245, 245);
					--dark: rgb(44, 68, 130);
					--secondary: #ffca28;
					--secondary-dark: #f9a825;
					--third: #ee477c;
					--four: #00e562;
					--five: #bc868d;
					--backgrounds: #fff;
					--text: #444;
					--paragraph: #666;
					--disable: #999;
					margin: 0;
					background: var(--backgrounds);
					padding: 50px 0 0 0;
					box-sizing: border-box;
					font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
						'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					overflow-x: hidden;
					font-size: 15px;
					font-display: block;
				}
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
					-ms-user-select: none;
					-khtml-user-select: none;
					-webkit-user-select: none;
					-webkit-touch-callout: none;
					-webkit-tap-highlight-color: transparent;
					-webkit-user-drag: none;
				}
				ul {
					margin: 0;
					list-style: none;
					padding: 0;
				}
				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				p {
					margin: 0;
				}
				hr {
					height: 1.5px;
					border: none;
					outline: none;
					margin: 0;
					box-shadow: none;
					background: #ddd;
					margin: 15px 0;
				}
				button {
					border: none;
					box-shadow: none;
					outline: none;
				}
				a {
					text-decoration: none;
				}
				input {
					border: none;
					box-shadow: none;
					outline: none;
				}
				h2 {
					display: flex;
					align-items: center;
					color: var(--text);
					font-size: 1.8em;
				}
				h2 i {
					margin-left: 5px;
				}
				p {
					font-size: 1em;
				}
				.uil {
					font-size: 1.5em;
				}
				h2 > .uil {
					font-size: 1em;
				}
				h1 > .uil {
					font-size: 1em;
				}
				.seeMore {
					padding: 10px;
					text-decoration: none;
					color: var(--paragraph);
					display: flex;
					align-items: center;
					font-weight: 500;
				}
				.seeMore i {
					margin-left: 7px;
				}
				.seeMore.right {
					position: absolute;
					right: 5.5px;
				}
				::selection {
					background: var(--primary);
					color: #fff;
				}
				::-webkit-scrollbar {
					display: none;
				}
				::-moz-scrollbar {
					display: none;
				}
				::-o-scrollbar {
					display: none;
				}
				::scrollbar {
					display: none;
				}
				.blue,
				.white,
				.amber,
				.red,
				.green,
				.gray,
				.gray-light,
				.primary,
				.five {
					position: relative;
				}
				.blue:before,
				.white:before,
				.amber:before,
				.red:before,
				.green:before,
				.gray:before,
				.gray-light:before,
				.primary:before,
				.five:before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: -3;
				}
				.blue:before {
					background-color: var(--blue);
				}
				.white:before {
					background-color: var(--backgrounds);
				}
				.amber:before {
					background-color: var(--secondary);
				}
				.red:before {
					background-color: var(--third);
				}
				.green:before {
					background-color: var(--four);
				}
				.gray:before {
					background-color: var(--gray);
				}
				.gray-light:before {
					background-color: var(--gray-light);
				}
				.primary:before {
					background-color: var(--primary);
				}
				.five:before {
					background-color: var(--five);
				}

				@keyframes float {
					0% {
						transform: translateY(0);
					}
					25% {
						transform: translateY(10px);
					}
					50% {
						transform: translateY(0);
					}
					75% {
						transform: translateY(-10px);
					}
					100% {
						transform: translateY(0);
					}
				}
				.float {
					animation: float 0.8s ease-in-out infinite;
				}
				.waves {
					position: relative;
					overflow: hidden;
				}
				.ripple {
					border-radius: 100%;
					background-color: rgba(255, 255, 255, 0.7);
					position: absolute;
					transform: scale(0);
					z-index: -1;
				}
				.ripple-dark {
					background-color: rgba(0, 0, 0, 0.2);
				}
				@keyframes ripple {
					to {
						transform: scale(2.5);
						opacity: 0;
					}
				}
				button {
					text-align: left;
					padding: 12px 15px;
					padding-left: 19px;
					display: flex;
					align-items: center;
					border-radius: 5px;
					font-weight: 550;
					background: transparent;
				}
				button > i {
					margin-right: 10px;
				}
				.btn {
					text-align: left;
					padding: 12px 15px;
					display: inline-flex;
					align-items: center;
					border-radius: 5px;
					font-weight: 550;
					background: transparent;
				}
				.btn > i {
					margin-right: 10px;
					margin-left: -5px;
				}
				.floating {
					border-radius: 100%;
					padding: 18px;
					box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
					margin: 0;
				}
				.floating > i {
					color: var(--backgrounds);
					margin: 0;
					font-size: 22px;
					pointer-events: none;
				}
				.cardBackground {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.05'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
				}
				@media screen and (max-width: 355px) {
					body {
						font-size: 13px;
					}
				}
				@media screen and (min-width: 445px) {
					body {
						font-size: 17px;
					}
				}
			`}</style>
		</>
	)
}

export default iBoxApp
