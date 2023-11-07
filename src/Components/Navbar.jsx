import { useState } from "react";


const Navbar = ({setCategory}) => {
    
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container">
      <div className="navbar-brand" onClick={()=> setCategory("general")}><span className="badge bg-light text-dark fs-4">logo</span></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> {setCategory("business")}}>business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> setCategory("entertainment")}>entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> setCategory("health")}>health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> setCategory("science")}>science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> setCategory("sports")}>sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light" style={{cursor: "pointer"}} onClick={()=> setCategory("technology")}>technology</div>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar