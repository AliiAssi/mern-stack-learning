import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { registerInfo, updateRegisterInfo, registerError, registerUser, isRegisterLoading } = useContext(AuthContext);

    return (
        <>
            <Form onSubmit={registerUser}>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "5%"
                }}>
                    <Col xs={6}>
                        <Stack className='forms' gap={3}>
                            <h2>Register</h2>
                            <Form.Control
                                type='text'
                                placeholder='name'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                            />
                            <Form.Control
                                type='email'
                                placeholder='email'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                            />
                            <Form.Control
                                type='password'
                                placeholder='password'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                            />
                            <Button variant='primary' type='submit' className='registerButton'>
                                {isRegisterLoading ? "Creating your account" : "Register"}
                            </Button>
                            {registerError?.error && (
                                <Alert variant="danger" className="mt-3">
                                    <Alert.Heading>Error</Alert.Heading>
                                    <p>{registerError?.message}</p>
                                </Alert>
                            )}
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Register;
