import { AnyNaptrRecord } from 'dns';
import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

const Login = () => {

  const [login, setLogin] = useState<any>();


  const onValueChange = (e: any, name: string) => {
    setLogin({ ...login, [name]: e.target.value });
  }

  console.log(login);
  

  return (
    <>
      <Container className = "mt-4">
        <h2 className="text-center">Employee Login</h2>
        <Card className="mt-3" style={{ width: '40rem', marginLeft: "20rem" }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => onValueChange(e, "email")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="paissword" placeholder="Enter Password" name="password" onChange={(e) => onValueChange(e, "password")} />
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login