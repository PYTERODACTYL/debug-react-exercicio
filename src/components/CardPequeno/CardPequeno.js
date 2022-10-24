import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./styles"

export const  CardPequeno = (props) => {
       return (
       <LayoutCardPequeno>
            <ImgCardPequeno src={props.img} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
       )
}

export default CardPequeno