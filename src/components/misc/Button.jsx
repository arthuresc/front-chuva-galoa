import './css/button.css'
import '../../css/reset.css'
import downImage from './icon/download.svg'


// import React, { useState } from 'react';

export default function Button(props) {

    function handleSize(props) {
        switch (props) {
            case ('small'):
                return 'btn-1s';
            case ('medium'):
                return 'btn-2s';
            case ('big'):
                return 'btn-3s';
        }
    }

    let sizeBtn = handleSize(props.size);
    
    return (
        <button className={sizeBtn + ' btn-default'} >

            <img src={downImage} className="img-btn"/>
            <p>Download</p>

        </button>
    )
}