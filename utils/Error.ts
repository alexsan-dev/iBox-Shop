// CÓDIGOS DE ERROR EN EL INICIO DE SESIÓN
export const useAuthError = (code: string, str: ILangErrors) => {
	const codeText = code.substr(5)
	switch (codeText) {
		case 'app-deleted':
			return str.app_deleted
		case 'app-not-authorized':
			return str.app_not_authorized
		case 'argument-error':
			return str.argument_error
		case 'invalid-api-key':
			return str.invalid_api_key
		case 'invalid-user-token':
			return str.invalid_user_token
		case 'network-request-failed':
			return str.network_request_failed
		case 'operation-not-allowed':
			return str.operation_not_allowed
		case 'requires-recent-login':
			return str.requires_recent_login
		case 'too-many-requests':
			return str.too_many_requests
		case 'unauthorized-domain':
			return str.unauthorized_domain
		case 'user-disabled':
			return str.user_disabled
		case 'user-token-expired':
			return str.user_token_expired
		case 'web-storage-unsupported':
			return str.web_storage_unsupported
		case 'account-exists-with-different-credential':
			return str.account_exists_with_different_credential
		case 'credential-already-in-used':
			return str.credential_already_in_used
		case 'email-already-in-use':
			return str.email_already_in_use
		case 'user-not-found':
			return str.user_not_found
		case 'weak-password':
			return str.weak_password
		case 'invalid-email':
			return str.invalid_email
		case 'wrong-password':
			return str.wrong_password
		case 'invalid-verification-code':
			return str.invalid_verification_code
		case 'invalid-verification-id':
			return str.invalid_verification_id
		case 'captcha-check-failed':
			return str.captcha_check_failed
		case 'invalid-phone-number':
			return str.invalid_phone_number
		case 'missing-phone-number':
			return str.missing_phone_number
		case 'quota-exceeded':
			return str.quota_exceeded
		case 'popup-closed-by-user':
			return str.popup_closed_by_user
		default:
			return str.defaultVal
	}
}
