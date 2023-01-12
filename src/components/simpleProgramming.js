import styled from 'styled-components'

const SimpleProgrammingStyled = styled.div`
& {
    margin-block-start: 8rem;
}
`

function SimpleProgramming() {
    return (
        <SimpleProgrammingStyled>
            SimpleProgramming
        </SimpleProgrammingStyled>
    )
}

export default SimpleProgramming
