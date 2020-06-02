// PROPIEDADES
interface Props {
	user: IUser | null
	title: string
	span: string
}

// VARIABLES GLOBALES
let pic: string | undefined

const ProfileHeader: React.FC<Props> = (props: Props) => {
	// VERIFICAR SI LA FOTO ES DE FACEBOOK O DE OTRO PROVEEDOR
	if (props.user)
		pic =
			props.user.provider === 'facebook.com'
				? props.user.photoURL + '?height=600'
				: props.user.photoURL || undefined
	else pic = undefined

	return (
		<>
			<div id='info'>
				<div>
					<h1>{props.title}</h1>
					<h2>{props.user?.displayName}</h2>
					<span>
						<i className='material-icons'>email</i> {props.user?.email}
					</span>
				</div>

				<div id='profilePic'>
					<img src='/images/account/profile.png' alt='Profile Placeholder' />
					<img src={pic} alt='Profile' />
				</div>
			</div>

			<span id='infoSecure'>{props.span}</span>

			<div id='wave'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='var(--primary)'
						fillOpacity='1'
						d='M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,202.7C672,171,768,117,864,112C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
					/>
				</svg>
			</div>

			<style jsx>{`
				#info {
					background: var(--primary);
					padding: 20px;
					color: var(--backgrounds);
					position: relative;
					z-index: 2;
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				#info > div:nth-child(1) {
					width: 60%;
					min-width: 0;
					display: block;
				}
				h1 {
					font-size: 0.9em;
				}
				h2 {
					display: block;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					color: var(--backgrounds);
				}
				span {
					font-size: 1.1em;
					opacity: 0.8;
					display: block;
					align-items: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				span i {
					font-size: 1em;
					position: relative;
					top: 3px;
				}
				#infoSecure {
					padding: 10px;
					width: 100px;
					border-radius: 0 10px 10px 0;
					margin-top: -8px;
					box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
					font-size: 0.8em;
					color: var(--backgrounds);
					display: block;
					white-space: unset;
					background: var(--blue);
					opacity: 1;
					position: absolute;
					z-index: 2;
				}
				#wave {
					width: 100%;
					position: relative;
					overflow: hidden;
				}
				svg {
					margin-top: -38px;
					width: calc(100% + 60px);
				}
				#profilePic {
					width: 120px;
					height: 120px;
					position: absolute;
					right: 20px;
					bottom: -50px;
					border-radius: 100%;
					overflow: hidden;
					background: red;
				}
				#profilePic img {
					width: 100%;
					position: absolute;
					top: 0;
					right: 0;
					color: transparent;
				}
				@media screen and (max-width: 355px) {
					#profilePic {
						width: 110px;
						height: 110px;
					}
					#info > div:nth-child(1) {
						width: 55%;
					}
				}
			`}</style>
		</>
	)
}

export default ProfileHeader
