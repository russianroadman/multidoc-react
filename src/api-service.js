import {get, post} from './api'

const baseurl = 'http://localhost:8080'

export const load = (id) => {

	return post(baseurl+'/force-update',{ documentId: id })

}
