import React from 'react'

const Footer = () => {
  let footerStyle ={ 
    position : "relative",
    width : "100%",
  }
  return (
      <footer className="text-center p-2 bg-black" style={footerStyle} >
        <p className="text-white my-2">© 2022 Copyright <strong>Made With &#129505; By Sahil Nagar</strong></p>
      </footer>
      
  )
}

export default Footer