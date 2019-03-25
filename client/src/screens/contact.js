import React, {Component} from 'react'
import './contact.css'



class Contact extends Component {
    render() {
        return(
            <div style={{textAlign: "center"}}>
                <h1 style={{color: "green", marginBottom: "30px"}}>Contact Us Here</h1>

                <form>
                 <input className="form_field" type="text" placeholder="full name" /><br />
                 <input className="form_field" type="textA" placeholder="email address" /><br />
                 <textarea cols="111" rows="10" placeholder="leave a message" /><br />
                 <button style={{backgroundColor: "#ccc", with: "100%"}}>submit</button>
                </form>
            </div>
        )
    }
}

export default Contact