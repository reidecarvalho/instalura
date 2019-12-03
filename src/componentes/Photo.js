import React from 'react';
import PhotoHeader from './PhotoHeader';
import PhotoInfo from './PhotoInfo';
import PhotoUpdate from './PhotoUpdate';

export default function Photo() {
    return (
        <div className="foto">
            <PhotoHeader />
            <img alt="foto" className="foto-src" src="https://blog.rocketseat.com.br/content/images/2018/12/3-passos-para-aprender-react-native.png" />
            <PhotoInfo />
            <PhotoUpdate />
        </div>
    )
}