import React from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

//  import Logo from './logo';


function Header() {
    return (
      <Nav> 
          <img src="images/logo.svg  width:40px, height:40px"/> 
           
         <NavMenu>
<a>
  <img src="/images/home-icon.svg" />
  
</a>
<a>

  <span>SEARCH</span>
</a>
<a> 
  <img src="/images/watchlist.svg" />
  <span>WATCHLISTS</span>
</a>
<a>
  <img src="/images/original.svg" />
  <span>ORIGINALS</span>
</a>







         >
          
        
    )
}

export default Header;

