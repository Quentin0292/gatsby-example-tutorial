import React from "react"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./layout.css"
import "../sass/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
