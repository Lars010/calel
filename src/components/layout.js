import styled from 'styled-components'

const LayoutStyled = styled.div`

inline-size: 100%;
max-inline-size: 85.37rem;
min-block-size: 100vh;
border: 4px solid red;
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            { children }
        </LayoutStyled>
    )
}

export default Layout
