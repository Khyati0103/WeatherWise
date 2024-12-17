import React, { useContext }from 'react'
import '../styles/components/Background.scss';
import darki from "../Components/Assets/dark1.png";
import lighti from "../Components/Assets/light.png";

import ThemeContext from '../context/theme.context'


const Background = () => {
    const { dark } =useContext(ThemeContext);
  return (
    <div className={`Bg-${ dark ? {darki} : {lighti}}`}>
    
    </div>
  )
}

export default Background