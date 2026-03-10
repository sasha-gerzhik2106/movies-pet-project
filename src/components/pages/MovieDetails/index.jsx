import { useParams } from 'react-router';
import { privateRoute } from '../../layouts/PrivateRoute';
import { apiUrls } from '../../../constants/api.js';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Grid, Chip, Rating } from '@mui/material';
import Api from '../../../utils/api.js';
const MovieDetails = () => {
  const { movieId } = useParams();

  const { isLoading, data: movie } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () =>
      Api.get(`${apiUrls.moviesList}/${movieId}`).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <Box p={4}>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={movie.posterUrl}
            alt={movie.title}
            sx={{
              width: '100%',
              borderRadius: 3,
              boxShadow: 5,
            }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h3" fontWeight={700}>
            Title: {movie.title}
          </Typography>
          <Box mt={2}>
            <Typography variant="h7" fontWeight={600}>
              Directors: {movie.director}
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h7" fontWeight={600}>
              Actors: {movie.actors}
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="p" mb={2} mt={2}>
              Movie year: {movie.year}
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography variant="p" mb={2}>
              Run time: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </Typography>
          </Box>
          <Box mt={2}>
            <Rating value={movie.rating / 2} readOnly precision={0.1} />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="p" fontWeight={700}>
              Plot: {movie.plot}
            </Typography>
          </Box>
          <Box mt={2}>
            {movie.genres?.map((genre) => (
              <Chip key={genre} label={genre} sx={{ mr: 1 }} />
            ))}
          </Box>

          <Typography mt={3}>{movie.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const PrivateMovieDetails = privateRoute(MovieDetails);

export default PrivateMovieDetails;
