import React, { Component } from 'react'
import{ menu } from "./menu"
import{Button} from "../Button"
import './NavBar.css'


class NavBar extends Component{
    state = {clicked: false}

    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        return(
            <nav className="NavbarItems"> 
                <h1 className="NavbarLogo">React <i className="fab fa-react"></i> </h1>
                <div className="menu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menu.map((item,index) =>{
                       return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                {item.titulo}
                                </a>
                            </li>
                       ) 
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default NavBar