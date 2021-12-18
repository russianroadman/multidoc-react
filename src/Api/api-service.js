import {post} from './api'
import {
	blockCreated, blockDeleted,
	blockTitleSaved, contentSaved,
	documentDeleted,
	documentTitleSaved, versionCreated, versionDeleted, versionSetAsPreferred,
	versionTitleSaved
} from "./websocket-service";

//const baseurl = 'http://localhost:8080'
const baseurl = 'https://multidoc-core.herokuapp.com'

export const load = (id) => {
	return post(baseurl+'/force-update',{
		documentId: id
	})
}

export const getDocumentTitle = (documentId) => {
	return post(baseurl+'/get-document-title',{
		documentId: documentId
	})
}

export const create = (documentTitle, blockTitle, versionTitle) => {
	return post(baseurl+'/create',{
		documentTitle: documentTitle,
		blockTitle: blockTitle,
		versionTitle: versionTitle
	})
}

export const createExample = () => {
	return post(baseurl+'/create-example')
}

export const deleteDocument = (id) => {
	return post(baseurl+'/delete',{ documentId: id }).then(r => {
		documentDeleted(id)
		return r
	}).then(r => {
		documentDeleted(id)
		return r
	})
}

export const saveDocumentTitle = (documentId, documentTitle) => {
	return post(baseurl+'/save-document-title',{
		documentId: documentId,
		documentTitle: documentTitle
	}).then(r => {
		documentTitleSaved(documentId, documentTitle)
		return r
	})
}

export const saveBlockTitle = (blockId, blockTitle) => {
	return post(baseurl+'/save-block-title',{
		blockId: blockId,
		blockTitle: blockTitle
	}).then(r => {
		blockTitleSaved(blockId, blockTitle)
		return r
	})
}

export const saveVersionTitle = (versionId, versionTitle) => {
	return post(baseurl+'/save-version-title',{
		versionId: versionId,
		versionTitle: versionTitle
	}).then(r => {
		versionTitleSaved(versionId, versionTitle)
		return r
	})
}

export const createBlock = (documentId, blockTitle, versionTitle) => {
	return post(baseurl+'/add-block',{
		documentId: documentId,
		blockTitle: blockTitle,
		versionTitle: versionTitle
	}).then(r => {
		blockCreated(documentId, blockTitle, versionTitle)
		return r
	})
}

export const deleteBlock = (blockId) => {
	return post(baseurl+'/delete-block',{
		blockId: blockId
	}).then(r => {
		blockDeleted(blockId)
		return r
	})
}

export const createVersion = (blockId, versionTitle) => {
	return post(baseurl+'/add-version',{
		blockId: blockId,
		versionTitle: versionTitle
	}).then(r => {
		versionCreated(blockId, versionTitle)
		return r
	})
}

export const deleteVersion = (versionId) => {
	return post(baseurl+'/delete-version',{
		versionId: versionId
	}).then(r => {
		versionDeleted(versionId)
		return r
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
	}).then(r => {
		versionSetAsPreferred(versionId)
		return r
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
	}).then(r => {
		contentSaved(contentId, content)
		return r
	})
}

export const getPreferredList = (documentId) => {
	return post(baseurl+'/get-preferred-list',{
		documentId: documentId
	})
}
