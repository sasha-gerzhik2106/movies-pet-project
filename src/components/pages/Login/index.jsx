import { Box, Button, Stack, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

const Login = () => {
  const { isLoading, loginWithPopup } = useAuth0();
  const navigate = useNavigate();

  const onLogin = async () => {
    if (isLoading) return;
    await loginWithPopup();
    const searchParams = new URLSearchParams(window.location.search);
    navigate(
      searchParams.has('redirect_to')
        ? decodeURIComponent(searchParams.get('redirect_to'))
        : '/'
    );
  };

  return (
    <Box p={4}>
      <Typography variant="h2" textAlign="center">
        Login
      </Typography>
      <Stack direction="row" justifyContent="center" mt={3}>
        <Button variant="contained" disabled={isLoading} onClick={onLogin}>
          Click to Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
