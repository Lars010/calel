import styled from 'styled-components'

const LayoutStyled = styled.div`

inline-size: 100%;
max-inline-size: 85.37rem;
min-block-size: 100vh;
margin: 0;
/* border: 4px solid red; */

@media screen and (max-width: 414px) {
display: grid;
grid-template-columns: 390px;
inline-size: 100%;
max-inline-size: 24.37rem;
block-size: 1fr;
padding-inline: 1rem;
}

@media (min-width:768px) and (max-width: 1440px){

    display: grid;
    grid-template-columns: 768px;
    inline-size: 100%;
    max-inline-size: 48rem;
    min-block-size: 100%;
    /* border: 4px solid red; */
    /* padding-inline: 1.5rem; */
    justify-content: center;
    margin: 0;
}
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            { children }
        </LayoutStyled>
    )
}

export default Layout
