import {post} from './api'

const baseurl = 'http://localhost:8080'

export const load = (id) => {
	return post(baseurl+'/force-update',{
		documentId: id
	})
}

export const forceLoad = (id) => {
	return post(baseurl+'/update',{
		documentId: id
	})
}

export const create = (documentTitle, blockTitle, versionTitle) => {
	return post(baseurl+'/update',{
		documentTitle: documentTitle,
		blockTitle: blockTitle,
		versionTitle: versionTitle
	})
}

export const deleteDocument = (id) => {
	return post(baseurl+'/delete',{ documentId: id })
}

export const saveDocumentTitle = (documentId, documentTitle) => {
	return post(baseurl+'/save-document-title',{
		documentId: documentId,
		documentTitle: documentTitle
	})
}

export const saveBlockTitle = (blockId, blockTitle) => {
	return post(baseurl+'/save-block-title',{
		blockId: blockId,
		blockTitle: blockTitle
	})
}

export const saveVersionTitle = (versionId, versionTitle) => {
	return post(baseurl+'/save-version-title',{
		versionId: versionId,
		versionTitle: versionTitle
	})
}

export const createBlock = (documentId, blockTitle, versionTitle) => {
	return post(baseurl+'/add-block',{
		documentId: documentId,
		blockTitle: blockTitle,
		versionTitle: versionTitle
	})
}

export const deleteBlock = (blockId) => {
	return post(baseurl+'/delete-block',{
		blockId: blockId
	})
}

export const createVersion = (blockId, versionTitle) => {
	return post(baseurl+'/add-version',{
		blockId: blockId,
		versionTitle: versionTitle
	})
}

export const deleteVersion = (versionId) => {
	return post(baseurl+'/delete-version',{
		versionId: versionId
	})
}

export const isPreferred = (versionId) => {
	return post(baseurl+'/is-preferred',{
		versionId: versionId
	})
}

export const setPreferred = (versionId) => {
	return post(baseurl+'/set-preferred',{
		versionId: versionId
	})
}

export const getContent = (contentId) => {
	return post(baseurl+'/get-content',{
		contentId: contentId
	})
}

export const saveContent = (contentId, content) => {
	return post(baseurl+'/save-content',{
		contentId: contentId,
		content: content
	})
}
