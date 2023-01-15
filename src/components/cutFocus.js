import styled from 'styled-components'

const CutFocusStyled = styled.div`

`

function CutFocus() {
    return (
        <CutFocusStyled>
            CutFocus
        </CutFocusStyled>
    )
}

export default CutFocus

/*IDEA DE COMO CREAR ESTE COMPONENTE: 
Primero hacemos los marcos del contenedor y luego le damos un
display FLEX para que cuando tengamos los dos DIVS en linea
podamos usar el align-items: flex-start luego de eso los items
se pegaran al techo del contenedor y de ahi le agregamos
margin-block-start a ambos DIVS dependiendo lo requerido por FIGMA  */