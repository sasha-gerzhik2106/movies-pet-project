import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();

  const onLogin = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await loginWithPopup();
      const searchParams = new URLSearchParams(window.location.search);
      navigate(
        searchParams.has('redirect_to')
          ? decodeURIComponent(searchParams.get('redirect_to'))
          : '/'
      );
    } catch (error) {
      console.error('Login error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    setIsLoading(true);
    logout();
  };

  const handleClick = isAuthenticated ? onLogout : onLogin;
  const buttonText = isAuthenticated
    ? isLoading
      ? 'Выход...'
      : 'Logout'
    : isLoading
      ? 'Вход...'
      : 'Login';

  return (
    <Button color="inherit" onClick={handleClick} disabled={isLoading}>
      {buttonText}
    </Button>
  );
};

const MainLayout = ({ children }) => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h5"
            flexGrow={1}
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              transition: 'opacity 0.3s',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Movies List
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
      <Box pt={{ xs: 7, sm: 8 }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
