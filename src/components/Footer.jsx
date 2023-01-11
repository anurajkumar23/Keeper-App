import React from 'react'

const Footer = () => {
    const currentyear = new Date().getFullYear()
  return (
    <footer>
       <p>Copyright © {currentyear}</p>
    </footer>
  )
}

export default Footer
