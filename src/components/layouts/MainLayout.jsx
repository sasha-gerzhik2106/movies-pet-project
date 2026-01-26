import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useIsLoggedIn } from '../../store/slices/user.js';

const LoginButton = () => {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn) {
    return null;
  }
  return <Button color="inherit">Login</Button>;
};

const MainLayout = ({ children }) => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" flexGrow={1}>
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
