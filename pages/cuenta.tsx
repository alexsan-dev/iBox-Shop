// CONTEXTO DEL COMPONENTE
import { useContext } from 'react'

// NEXT
import { NextPage, NextPageContext } from 'next'

// CONTEXTO
import { appContext } from 'Ctx'

// PAGINAS Y COMPONENTES
import Profile from 'components/Profile'
import Logins from 'components/Logins'

const AccountPage: NextPage = () => {
	// OBTENER USUARIO DEL CONTEXTO
	const { user } = useContext(appContext)

	// RETORNAR PAGINA PROFILE SI EXISTE USUARIO SINO ASIGNAR PAGINA DE LOGINS
	return user ? <Profile /> : <Logins />
}

AccountPage.getInitialProps = async ({ res }: NextPageContext) => {
	// CONFIGURAR SPR VERCEL
	if (res) res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

	return {}
}

export default AccountPage
