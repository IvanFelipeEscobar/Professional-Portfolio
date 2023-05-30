import {Form, Button, Card} from 'react-bootstrap'
const SubmitForm = () => { 
    return (
        <Card className='m-3 p-3 card'>
        <Form className="form"  action="https://formsubmit.co/ivnescbr1989@gmail.com" method="POST">
            <Form.Group className='m-1'>
                <Form.Label>
                    What is your name?
                </Form.Label>
                <Form.Control name="name" type="text" placeholder="name" required />
                <Form.Text className='text-muted'>This is required to submit</Form.Text>
            </Form.Group>
            <Form.Group className='m-1'>
                <Form.Label>
                    What is your professional title?
                </Form.Label>
                <Form.Control name="title" type="text" placeholder="title"/>
            </Form.Group>
            <Form.Group className='m-1'>
                <Form.Label>
                    What is your E-mail?
                </Form.Label>
                <Form.Control name="email" type="text" placeholder="e-mail" required />
                <Form.Text className='text-muted'>This is required to submit</Form.Text>
            </Form.Group>
            <Form.Group className='m-1'>
                <Form.Label>
                    Do you have any question, coments, and/or concerns?
                </Form.Label>
                <Form.Control name="name" type="textarea" placeholder="name"/>
            </Form.Group>
            <Button className='mt-2' type='submit' variant='dark'>submit</Button><br/>
            <Form.Text className='text-muted'>Submitted info will be e-mailed to ivnescbr1989@gmail.com via formsubmit.co</Form.Text>
           
        </Form>
        </Card>
    )
}

export default SubmitForm