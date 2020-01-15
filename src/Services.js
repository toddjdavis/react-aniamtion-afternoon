import React, {Component} from 'react'

class Services extends Component {
    render(){
        return(
            <div class='bodyOne'>
                <div class='boxThree'>
                <span id='service'>Services</span>
                <span id='praise'>All is possible because our Emperor</span>
                </div>
                <div class='boxTwo'>
                    <div class='box'>
                        <img class='servicePic' src='https://static.thenounproject.com/png/312226-200.png' alt='Tie fighter outlie'/>
                        <div>
                        <span class='titleText'>The Imperial Navy</span>
                        <span class='bodyText'>This bickering is pointless. Now Lord Vader will provide us with the location of the hidden Rebel fortress. We will then crush the Rebellion with one swift stroke. - grand Moff Tarkin</span>
                        </div>
                    </div>
                    <div class='box'>
                        <img class='servicePic' src='https://cdn1.iconfinder.com/data/icons/ios-space/64/spa-death-star-512.png'/>
                        <span class='titleText'>A single Leader</span>
                        <span class='bodyText'>The Imperial Senate will no longer be of any concern to us. I have just received word that the Emperor has dissolved the Council permanently. The last remnants of the Old Republic have been swept away. -Grand Moff Tarkin</span>
                    </div>
                    <div class='box'>
                        <img class='servicePic' src='https://easydrawingguides.com/wp-content/uploads/2018/09/Stormtrooper-Helmet-10.png'/>
                        <span class='titleText'>The Imperial Army </span>
                        <span class='bodyText'> The Jedi are extinct. Their fire has gone out of the universe.</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Services