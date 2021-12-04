import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import {saveContent} from "../Api/api-service";

export default function Ck({contentId, content, setIsEditing}){

    return(
        <CKEditor

            editor={ BalloonEditor }
            data={content}
            config={ {
                toolbar: [
                    'bold',
                    'italic',
                    'redo',
                    'indent',
                    'outdent',
                    'numberedList',
                    'bulletedList',
                    'mediaEmbed',
                    'insertTable',
                    // 'fontFamily',
                    // 'fontSize',
                    // 'fontBackgroundColor',
                    // 'fontColor',
                    // 'highlight',
                    // 'underline',
                    // 'alignment',
                    // 'removeFormat',
                    // 'strikethrough',
                    // 'subscript',
                    // 'superscript',
                    // 'specialCharacters',
                    // 'todoList',
                    // 'sourceEditing',
                    // 'codeBlock',
                    // 'htmlEmbed',
                    // 'horizontalLine',
                    // 'pageBreak',
                    // 'imageInsert',
                    // 'imageUpload',
                    // 'code',
                    // 'findAndReplace'
                ]
            } }
            onReady={ editor => {

            } }
            onChange={ ( event, editor ) => {
                saveContent(contentId, editor.getData())
            } }
            onBlur={ ( event, editor ) => {
                setIsEditing(false)
            } }
            onFocus={ ( event, editor ) => {
                setIsEditing(true)
            } }
        />
    )
}
