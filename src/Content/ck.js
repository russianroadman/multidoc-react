import React, {useEffect} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import {saveContent} from "../Api/api-service";

export default function Ck({contentId, content, setContent}){

    console.log(content)

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
                setContent(editor.getData())
                saveContent(contentId, editor.getData())
            } }
            onBlur={ ( event, editor ) => {

            } }
            onFocus={ ( event, editor ) => {

            } }
        />
    )
}
