import { Form, Button, Card } from "react-bootstrap";
const SubmitForm = () => {
  return (
    <Card className="m-3 p-3 card">
      <Form
        className="form"
        action="https://formsubmit.co/ivnescbr1989@gmail.com"
        method="POST"
      >
        <Form.Group className="m-1">
          <Form.Label>What is your name?</Form.Label>
          <Form.Control name="name" type="text" placeholder="name" required />
        </Form.Group>
        <Form.Group className="m-1">
          <Form.Label>What is your E-mail?</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="e-mail@domain.com"
            required
          />
        </Form.Group>
        <Form.Group className="m-1">
          <Form.Label>What is your professional title?</Form.Label>
          <Form.Control name="title" type="text" placeholder="stuntman..." />
        </Form.Group>

        <Form.Group className="m-1">
          <Form.Label>
            Do you have any question, coments, and/or concerns?
          </Form.Label>
          <Form.Control name="textarea-message" as="textarea" rows={3} />
        </Form.Group>
        <Button className="mt-2" type="submit" variant="dark">
          submit
        </Button>
      </Form>
    </Card>
  );
};

export default SubmitForm;
