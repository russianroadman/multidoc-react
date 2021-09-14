import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import { CKEditor } from '@ckeditor/ckeditor5-react';


export default function Ck(){
    return(
        <CKEditor
            editor={ BalloonEditor }
            data=''
            config={ {
                toolbar: [
                    'fontFamily',
                    'fontSize',
                    'fontBackgroundColor',
                    'fontColor',
                    'highlight',
                    'bold',
                    'italic',
                    'underline',
                    'alignment',
                    'redo',
                    'indent',
                    'outdent',
                    'removeFormat',
                    'strikethrough',
                    'subscript',
                    'superscript',
                    'specialCharacters',
                    'numberedList',
                    'bulletedList',
                    'todoList',
                    'sourceEditing',
                    'codeBlock',
                    'mediaEmbed',
                    'insertTable',
                    'htmlEmbed',
                    'horizontalLine',
                    'pageBreak',
                    'imageInsert',
                    'imageUpload',
                    'code',
                    'findAndReplace'
                ]
            } }
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
    )
}