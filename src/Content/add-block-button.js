import React from "react";

export default function AddBlockButton(id, isAddBlockDialogHidden, setAddBlockDialogHidden){

    const showNewBlock = () => {
        if (isAddBlockDialogHidden) setAddBlockDialogHidden(false);
    }

    return(
        <div className="redactor-shadow-element add-block-button-wrapper">
            <button id="add-block-button" onClick={showNewBlock}>
                <div>
                    <div
                        style={
                            {
                                height: '15px',
                                width: '15px',
                                borderRadius: '100% 0 0 0',
                                borderRight: '1px solid grey',
                                borderBottom: '1px solid grey'
                            }
                        }
                    />
                    <div
                        style={
                            {
                                height: '15px',
                                width: '15px',
                                borderRadius: '0 0 0 100%',
                                borderRight: '1px solid grey',
                                borderTop: '1px solid grey'
                            }
                        }
                    />
                </div>
                <div>
                    <div
                        style={
                            {
                                height:'15px',
                                width:'15px',
                                borderRadius:'0 100% 0 0',
                                borderLeft:'1px solid grey',
                                borderBottom:'1px solid grey'
                            }
                        }
                    />
                    <div
                        style={
                            {
                                height:'15px',
                                width:'15px',
                                borderRadius:'0 0 100% 0',
                                borderLeft:'1px solid grey',
                                borderTop:'1px solid grey'
                            }
                        }
                    />
                </div>
            </button>
        </div>
    )
}
