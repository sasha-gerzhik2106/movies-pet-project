import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <Box>
      <Typography variant="h2">Movie details</Typography>
      <Typography variant="h3">Movie ID: {movieId}</Typography>
    </Box>
  );
};

export default MovieDetails;
