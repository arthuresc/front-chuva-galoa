import '../css/content.css'
import '../css/style.css'
import '../css/reset.css'
import Button from './misc/Button.jsx'

// import React, { useState } from 'react';

export default function Content (props){
    const video = !props.video ? 'M7lc1UVf-VE' : props.video;
    return (
        <section className="colorT3 main-content" id="content">
            <div>
                <div>
                    <h2 className="title-media">Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                    <iframe id="ytplayer" type="text/html" width="783" height="440.4375" src={"https://www.youtube.com/embed/"+ video +"?disablekb=1&fs=0&modestbranding=1&color=white"} title="Teste" frameborder="0" allowfullscreen> Titulo? </iframe>
                </div>
                <div>
                    <div className="btn-group">
                        <Button size="big"/>
                    </div>
                </div>
            </div>

            <div>Resumo</div>
        </section>
    )
}