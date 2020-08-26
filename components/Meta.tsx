// PROPIEDADES
interface MetaProps {
	title: string
	desc: string
	keys: string[]
	banner: string
	url: string
}

const Meta: React.FC<MetaProps> = (props: MetaProps) => {
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
			<meta name='twitter:site' content={`@https://www.ibox.gt/${props.url}`} />
			<meta property='og:url' content={`https://www.ibox.gt/${props.url}`} />
			<link rel='canonical' href={`https://www.ibox.gt/${props.url}`} />
		</>
	)
}

export default Meta
