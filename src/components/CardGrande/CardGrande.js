import React from 'react';
import { LayoutCardGrande, ImgCardGrande, InfosCardGrande, TituloCardGrande } from './styles';


export const CardGrande = (props) => {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}