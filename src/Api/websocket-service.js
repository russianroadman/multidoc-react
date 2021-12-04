import {client} from "../Main/App";
import {action} from "./action";

let documentId = ''

// let blocks
// let setBlocks
//
// let versionTitle
// let setVersionTitle
//
// let content
// let setContent
//
export const setId = (_id) => documentId = _id
// export const setSetBlocks = (b, sb) => {
// 	blocks = b
// 	setBlocks = sb
// }
// export const setSetVersionTitle = (v, sv) => {
//   	versionTitle = v
// 	setVersionTitle = sv
// }
//
// export const setSetContent = (c, sc) => {
// 	content = c
// 	setContent = sc
// }
//
// export const test = (id) => {
//
// 	if (client.readyState === WebSocket.OPEN){
// 		client.send(
// 			JSON.stringify({
// 				type: 'message',
// 				msg: {
// 					type: 'action',
// 					payload: {
// 						action : action.CONTENT_SAVED,
// 						documentId : id,
// 						body : {
// 							contentId: '14c065cc-6902-4a26-bbd3-00c1af40577e',
// 							content: '<p>xXx lol trash xXx</p>'
// 						}
// 					}
// 				}
// 			})
// 		)
// 		console.log('sent')
// 	}
//
// }
//
// const updateBlockTitle = (id, newTitle) => {
// 	setBlocks(prev => prev.map(block => block.id === id ? {...block, title: newTitle} : block));
// }
//
// const updateVersionTitle = (id, newTitle) => {
//
// 	setBlocks(prev => prev.map(block => block.versions.filter(v => v.id === id).length === 1 ? {
// 		...block, versions: block.versions.map(v => v.id === id ? {...v, title: newTitle} : v)
// 	} : block))
//
// }
//
// const updateContent = (id, newContent) => {
//
// 	const updatedVersion = (v) => {
// 		v.content.content = newContent
// 		return v
// 	}
//
// 	setBlocks(prev => prev.map(block => block.versions.filter(v => v.content.id === id).length === 1 ? {
// 		...block, versions: block.versions.map(
// 			v => v.content.id === id ? {...v, this: updatedVersion(v)} : v
// 		)
// 	} : block))
//
// }
//
// const updateBlocksCreated = (blockTitle, versionTitle) => {
//
// }
//
// const updateBlocksDeleted = (blockId) => {
//
// }
//
// const updateBlocksVersionCreated = (blockId, versionTitle) => {
//
// }
//
// const updateBlocksVersionDeleted = (versionId) => {
//
// }
//
// const updateBlocksVersionSetAsPreferred = (versionId) => {
//
// }
//
//
// export const applyResult = (
// 	data,
// 	setDocumentTitle
// ) => {
// 	console.log(data.payload.action)
// 	const payload = data.payload
// 	switch (payload.action) {
// 		case action.DOCUMENT_DELETED:
// 			window.location = window.location.origin + '/404'
// 			break
// 		case action.DOCUMENT_TITLE_SAVED:
// 			setDocumentTitle(payload.body.documentTitle)
// 			break
// 		case action.BLOCK_TITLE_SAVED:
// 			updateBlockTitle(payload.body.blockId, payload.body.blockTitle)
// 			break
// 		case action.VERSION_TITLE_SAVED:
// 			updateVersionTitle(payload.body.versionId, payload.body.versionTitle)
// 			break
// 		case action.BLOCK_CREATED:
// 			updateBlocksCreated(payload.body.blockTitle, payload.body.versionTitle)
// 			break
// 		case action.BLOCK_DELETED:
// 			updateBlocksDeleted(payload.body.blockId)
// 			break
// 		case action.VERSION_CREATED:
// 			updateBlocksVersionCreated(payload.body.blockId, payload.body.versionTitle)
// 			break
// 		case action.VERSION_DELETED:
// 			updateBlocksVersionDeleted(payload.body.versionId)
// 			break
// 		case action.VERSION_SET_AS_PREFERRED:
// 			updateBlocksVersionSetAsPreferred(payload.body.versionId)
// 			break
// 		case action.CONTENT_SAVED:
// 			updateContent(payload.body.contentId, payload.body.content)
// 			break
// 	}
// }

const sendAction = (action, body) => {
	if (client.readyState === WebSocket.OPEN){
		client.send(
			JSON.stringify({
				type: 'message',
				msg: {
					type: 'action',
					payload: {
						action : action,
						documentId : documentId,
						body : body
					}
				}
			})
		)
		console.log('sent')
	}
}

export const documentDeleted = (id) => {

}

export const documentTitleSaved = (documentId, documentTitle) => {
	sendAction(
		action.DOCUMENT_TITLE_SAVED,
		{
			documentTitle: documentTitle
		}
	)
}

export const blockTitleSaved = (blockId, blockTitle) => {
	sendAction(
		action.BLOCK_TITLE_SAVED,
		{
			blockId: blockId,
			blockTitle: blockTitle
		}
	)
}

export const versionTitleSaved = (versionId, versionTitle) => {
	sendAction(
		action.VERSION_TITLE_SAVED,
		{
			versionId: versionId,
			versionTitle: versionTitle
		}
	)
}

export const blockCreated = (documentId, blockTitle, versionTitle) => {
	sendAction(
		action.BLOCK_CREATED,
		{
			blockTitle: blockTitle,
			versionTitle: versionTitle
		}
	)
}

export const blockDeleted = (blockId) => {
	sendAction(
		action.BLOCK_DELETED,
		{
			blockId: blockId
		}
	)
}

export const versionCreated = (blockId, versionTitle) => {
	sendAction(
		action.VERSION_CREATED,
		{
			blockId: blockId,
			versionTitle: versionTitle
		}
	)
}

export const versionDeleted = (versionId) => {
	sendAction(
		action.VERSION_DELETED,
		{
			versionId: versionId
		}
	)
}

export const versionSetAsPreferred = (versionId) => {
	sendAction(
		action.VERSION_SET_AS_PREFERRED,
		{
			versionId: versionId
		}
	)
}

export const contentSaved = (contentId, content) => {
	sendAction(
		action.CONTENT_SAVED,
		{
			contentId: contentId,
			content: content
		}
	)
}
