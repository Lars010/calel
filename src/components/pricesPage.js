import React from "react";
import Header from "./header";
import Prices from "./prices";
import styled from 'styled-components';

const PricesPageStyled = styled.div`

`

function PricesPage() {
    return (
        <>
            <Header />
            <Prices />
        </>
    )
}

export default PricesPage
