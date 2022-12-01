import React, {useEffect} from 'react'

import {useSelector} from 'react-redux'

const ClickedTime = () => {
  const count = useSelector(state => state.count)
  
  useEffect(() => {    
    const randomHex = '#'+ Math.floor(Math.random()*16777215).toString(16)
    document.querySelector(".ClickedTime").style.color = randomHex
  }, [count])
  return (
    <div className="ClickedTime">
      
    </div>
  )
}

export default ClickedTime