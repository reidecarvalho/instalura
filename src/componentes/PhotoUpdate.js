import React from 'react';

export default function PhotoUpdate() { 
    return (
        <section className="fotoAtualizacoes">
            <a href="#" className="fotoAtualizacoes-like">Likar</a>
            <form className="fotoAtualizacoes-form">
            <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
            <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
            </form>
        </section>
    )
}