import React, {Component} from 'react'
import './about.css'
import about_banner from '../assets/images/about_banner.jpg';



class About extends Component {
    render() {
        return(
            <div>
              
                    <img className="about_banner" src={about_banner} />
                    <div className="info_section">
                    <h4>WE BRING YOU FUN</h4>

                    </div>
                           
                 
            </div>
        )
    }
}

export default About