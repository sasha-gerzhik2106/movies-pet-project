import { Box, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


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

      <Grid container spacing={3}>
      
      {data.results.map((movie)=>(
        
           <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
    <Card sx={{ height: '100%' }}>
      <CardMedia
        sx={{ height: 150 }}
        image={movie.posterUrl}
        title={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" >
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
  </Grid>
      ))}
      </Grid>
    </Box>
  );
};

export default MoviesList;
