// PROPIEDADES
interface Props {
	title: string
	desc: string
	keys: string[]
	banner: string
}

const Meta: React.FC<Props> = (props: Props) => {
	return (
		<>
			<meta name='application-name' content={props.title} />
			<meta name='description' content={props.desc} />
			<meta name='keywords' content={props.keys.join(', ')} />
			<meta name='apple-mobile-web-app-title' content={props.title} />
			<meta property='og:title' content={props.title} />
			<meta property='og:description' content={props.desc} />
			<meta property='og:image' content={props.banner} />
			<meta property='og:image:secure_url' content={props.banner} />
			<meta property='og:site_name' content={props.title} />
			<meta name='twitter:title' content={props.title} />
			<meta name='twitter:description' content={props.desc} />
			<meta name='twitter:image' content={props.banner} />
		</>
	)
}

export default Meta
