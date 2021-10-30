import {client} from "../Main/App";

export const test = () => {

	console.log(client.readyState === WebSocket.OPEN)

	if (client.readyState === WebSocket.OPEN){
		client.send(
			JSON.stringify({
				type: 'message',
				msg: 'hello world!'
			})
		)
		console.log('sent')
	}

}

export const documentDeleted = (id) => {

}

export const documentTitleSaved = (documentId, documentTitle) => {

}

export const blockTitleSaved = (blockId, blockTitle) => {

}

export const versionTitleSaved = (versionId, versionTitle) => {

}

export const blockCreated = (documentId, blockTitle, versionTitle) => {

}

export const blockDeleted = (blockId) => {

}

export const versionCreated = (blockId, versionTitle) => {

}

export const versionDeleted = (versionId) => {

}

export const versionSetAsPreferred = (versionId) => {

}

export const contentSaved = (contentId, content) => {

}