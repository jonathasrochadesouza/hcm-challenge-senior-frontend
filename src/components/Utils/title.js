import { TituloPrincipalStyled, TituloPaginaStyled } from '../Style/titleStyled';

/**
 * @author Jonathas Rocha
 */

/**
 * Componente título principal
 *  
 * @param {*} props
 */
function TituloPrincipal(props) {
    return(
        <TituloPrincipalStyled>
            {props.internal}
        </TituloPrincipalStyled>
    );
}

/**
 * Componente título da página
 * 
 * @param {*} props
 */
function TituloPagina(props) {
    return(
        <TituloPaginaStyled>
            {props.internal}
        </TituloPaginaStyled>
    )
}


export { TituloPrincipal, TituloPagina } ;
