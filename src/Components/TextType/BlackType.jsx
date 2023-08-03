import React from 'react'
import "./BlackType.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const BlackType = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div class="btxt-parent">
    <div class="bwrapper">
        <div class="bstatic-txt" 
        style={{color: darkMode?"white":""}}
        >
          I'm a</div>
        <ul class="bdynamic-txt">
            <li><span>YouTuber</span></li>
            <li><span>Designer</span></li>
            <li><span>Developer</span></li>
            <li><span>Freelancer</span></li>
        </ul>
    </div>
</div>
  )
}

export default BlackType