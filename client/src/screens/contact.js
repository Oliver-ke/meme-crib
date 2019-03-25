import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './contact.css'



class Contact extends Component {
    render() {
        return(
            <div style={{textAlign: "center"}}>
                <h1 style={{color: "green", marginBottom: "30px"}}>Contact Us Here</h1>
                <Form>

        <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
       
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
       
       
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input className="text_area" type="textarea" name="text" id="exampleText" />
        </FormGroup>
    
        <Button color="success">Submit</Button>{' '}
        <Button outline color="secondary">reset</Button>{' '}

      </Form>
                
            </div>
        )
    }
}

export default Contact