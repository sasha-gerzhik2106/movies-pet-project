import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { privateRoute } from '../../layouts/PrivateRoute';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <Box>
      <Typography variant="h2">Movie details</Typography>
      <Typography variant="h3">Movie ID: {movieId}</Typography>
    </Box>
  );
};

const PrivateMovieDetails = privateRoute(MovieDetails);

export default PrivateMovieDetails;
