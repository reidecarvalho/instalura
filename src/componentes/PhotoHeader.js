import React from 'react';

export default function PhotoHeader() {
    return (
        <header className="foto-header">
            <figure className="foto-usuario">
            <img src="https://www.contasonline.com.br/recursos/img/usuarios.jpg" alt="foto do usuario" />
            <figcaption className="foto-usuario">
                <a href="#">
                    alots
                </a>  
            </figcaption>
            </figure>
            <time className="foto-data">03/10/2016 20:13</time>
        </header>
    )
}