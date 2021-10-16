import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'

export default function Ck({content}){
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

            } }
            onBlur={ ( event, editor ) => {

            } }
            onFocus={ ( event, editor ) => {

            } }
        />
    )
}
