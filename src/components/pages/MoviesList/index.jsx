import { Box, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { apiUrls } from '../../../constants/api.js';

const MoviesList = () => {
  useQuery({
    queryKey: [apiUrls.moviesList],
  });

  return (
    <Box>
      <Typography variant="h2">Movies list</Typography>
    </Box>
  );
};

export default MoviesList;
