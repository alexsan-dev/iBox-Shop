// PROPIEDADES
interface HistoryProps {
	name: string
	cant: number
	date: string
}

const HistoryElement: React.FC<HistoryProps> = (props: HistoryProps) => {
	// CONVERTIR FECHA A DD/MM/AA
	const toNormalDate = (UTC: string) => {
		const date = new Date(UTC)
		return `${date.getDate()}/${
			date.getMonth() + 1
		}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
	}

	// CONVERTIR FECHA
	const fDate = toNormalDate(props.date)

	return (
		<li>
			<i className='material-icons'>radio_button_checked</i>
			<div id='bar' />
			<div>
				<p>{props.name}</p>
				<div>
					<span>
						<strong>Cantidad: </strong>
						{props.cant}
					</span>
					<span>
						<strong>Fecha: </strong>
						{fDate}
					</span>
				</div>
			</div>

			<style jsx>{`
				li {
					display: flex;
					margin-bottom: 20px;
					position: relative;
					align-items: center;
				}
				p {
					font-weight: bold;
					opacity: 0.7;
				}
				i {
					margin-right: 10px;
					color: var(--backgrounds);
				}
				li > div {
					background: var(--backgrounds);
					box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
					border-radius: 10px;
					padding: 20px;
				}

				#bar {
					border-radius: none;
					padding: 0;
					box-shadow: none;
					background: var(--backgrounds);
					position: absolute;
					left: 10.5px;
					width: 3px;
					height: 115px;
					bottom: -60%;
				}

				li > div > div {
					width: 105%;
					margin-top: 10px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					font-size: 0.85em;
				}
				span {
					opacity: 0.8;
					margin-right: 10px;
				}
				span:nth-child(2) {
					margin-right: 0;
				}
				strong {
					font-weight: normal;
				}
			`}</style>
		</li>
	)
}

export default HistoryElement
