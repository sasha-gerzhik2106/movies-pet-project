import fs from 'fs';
import Fastify from 'fastify';

const moviesInfo = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
const { genres: allGenres, movies: allMovies } = moviesInfo;
const fastify = Fastify({
  logger: true,
});

const defaultPageSize = 10;

fastify.get('/genres', (_, res) => res.send(allGenres));

fastify.get('/movies', (req, res) => {
  const page = Math.max(+req.query.page || 1, 1);
  const pageSize = Math.max(
    Object.hasOwn(req.query, 'page_size')
      ? req.query.page_size
      : defaultPageSize,
    1
  );
  const startIdx = (page - 1) * pageSize;
  if (startIdx > allMovies.length) {
    return res.status(404).send('Not found');
  }
  const movies = allMovies.slice(startIdx, startIdx + pageSize);
  const response = {
    results: movies,
    page: page,
    count: allMovies.length,
  };
  return res.send(response);
});

fastify.get('/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  const movie = allMovies.find(({ id }) => id.toString() === movieId);
  if (!movie) {
    return res.status(404).send('Not found');
  }
  return res.send(movie);
});

fastify
  .listen({ port: 3456, host: '0.0.0.0' })
  .then(() => {
    fastify.log.info('Server started');
  })
  .catch((error) => {
    fastify.log.error(error);
  });
