import {Form} from 'react-bootstrap'
const Form = () => { 
    return (
        <Form className="form"  action="https://formsubmit.co/ivnescbr1989@gmail.com" method="POST">
            <Form.Group>
                <Form.Label>
                    What is your name?
                </Form.Label>
                <Form.Contol name="name" type="text" placeholder="name" required />
                <Form.Text>This is required to submit</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    What is your professional title?
                </Form.Label>
                <Form.Contol name="title" type="text" placeholder="title"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    What is your E-mail?
                </Form.Label>
                <Form.Contol name="email" type="text" placeholder="e-mail" required />
                <Form.Text>This is required to submit</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Do you have any question, coments, and/or concerns?
                </Form.Label>
                <Form.Contol name="name" type="textarea" placeholder="name"/>
            </Form.Group>
            <Form.Text>Submitted information will be e-mailed to ivnescbr1989@gmail.com via formsubmit.co</Form.Text>
        </Form>
    )
}

export default Form