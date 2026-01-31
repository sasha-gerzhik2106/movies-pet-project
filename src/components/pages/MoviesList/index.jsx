import { Box, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import Loader from '../Loader/Loader.jsx';
import { apiUrls } from '../../../constants/api.js';

const MoviesList = () => {
  const {isLoading} =
  useQuery({
    queryKey: [apiUrls.moviesList],
    queryFn: async () => {
      return new Promise((resolve)=>
      setTimeout(() => resolve([]), 2000))
    }
  });
if (isLoading){
  return <Loader/>
}
  return (
    <Box>
      <Typography variant="h2">Movies list</Typography>
    </Box>
  );
};

export default MoviesList;
