import React, {Component} from 'react'

class Header extends Component {
    constructor(){
        super()
        this.state={
            displayDropDown: false
        }
    }
    toggleDropDown = () => {
        if(this.state.displayDropDown === true){
            this.setState({displayDropDown: false})
        }else{
            this.setState({displayDropDown: true})
        }
        // this.setState({displayDropDown: !this.setState.displayDropDown})
    }
    render(){
        return(
            <div>
            <header id='header'>
                <div id='logo'>
                    <img id='crest' src="https://cdn10.bigcommerce.com/s-yhxhf/products/9664/images/23860/STCT006_2.75X2.75__03819.1450226912.1080.1080.JPG?c=2" alt='The Imperial Crest'/>
                    Empire
                </div>
                <nav id='links'>
                    <a>Services</a>
                    <a>Tyranny</a>
                    <a>Join the Empire</a>
                    <a>Military</a>
                    <a>Contact</a>
                </nav>
                <button id='smallerScreen' onClick={this.toggleDropDown}>
                    Menu
                </button>
                {this.state.displayDropDown
                ?
                    (<div id='dropdown'>
                    <a>Services</a>
                    <a>Tyranny</a>
                    <a>Join the Empire</a>
                    <a>Military</a>
                    <a>Contact</a>
                </div>)
                : null}
            </header>
            <img id='background' src="https://i.stack.imgur.com/GSbZp.jpg" alt='The death star at Scariff'/>
             { <body>
                <div id='intro'>
                    <span id='first'>Welcome to our Empire</span>
                    <span id='second'>WE ARE SO LUCKY YOU ARE HERE</span>
                    <button id='third'>HOW DO I Join</button>
                </div>
            </body> }
            </div>
        )
    }
}

export default Header