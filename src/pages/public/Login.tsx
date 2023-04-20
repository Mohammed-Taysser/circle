import { useLocation, useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

function Login() {
  let location = useLocation();
  let navigate = useNavigate();

  let next = location.state?.next?.pathname || '/';

  const onSignIn = () => {
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.

    localStorage.setItem('isLogin', JSON.stringify(true));

    navigate(next, { replace: true });
  };

  return (
    <div className=''>
      <button onClick={onSignIn}>Login</button>
    </div>
  );
}

export default Login;
