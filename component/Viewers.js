import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
          <wrap>
              <img src="/images/disney.png" />
          </wrap>
          <wrap>
              <img src="/images/disney.png" />
          </wrap>
          <wrap>
              <img src="/images/disney.png" />
          </wrap>
          
        </Container>
    )
}

export default Viewers



img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}


