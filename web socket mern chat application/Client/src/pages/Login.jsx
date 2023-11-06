import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const {
    updateLoginInfo,
    loginUser,
    loginLoading,
    loginInfo,
    loginError,
  } = useContext(AuthContext);

 

  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: '100vh',
            justifyContent: 'center',
            paddingTop: '5%',
          }}
        >
          <Col xs={6}>
            <Stack className='forms' gap={3}>
              <h2> Login </h2>
              <Form.Control
                type='email'
                placeholder='email'
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <Form.Control
                type='password'
                placeholder='password'
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              <Button
                variant='primary'
                type='submit'
                className='registerButton'
                disabled={loginLoading} // Disable the button during login loading
              >
                {loginLoading ? 'Logging in...' : 'Login'}
              </Button>
              {loginError && ( // Show login error if it exists
                <Alert variant='danger' className='mt-3'>
                  <Alert.Heading>Error</Alert.Heading>
                  <p>{loginError.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
