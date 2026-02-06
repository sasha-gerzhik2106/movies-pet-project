import { Box, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Loader from '../Loader/Loader.jsx';
import { apiUrls } from '../../../constants/api.js';

const MoviesList = () => {
  const {isLoading, data} =
  useQuery({
    queryKey: [apiUrls.moviesList],
  
  });
  console.log(data);
  
if (isLoading){
  return <Loader/>
}
  return (
    <Box>
      <Typography variant="h2">Movies list</Typography>
      {data.results.map((movie)=>{
          return (
    <Card sx={{ maxWidth: 345 }} key = {movie.id}>
      <CardMedia
        sx={{ height: 150 }}
        image={movie.posterUrl}
        title={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Title:{movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Year:{movie.year}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Run time:{movie.runtime}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Genres:{movie.genres.join(', ')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
 
      })}
    </Box>
  );
};

export default MoviesList;
