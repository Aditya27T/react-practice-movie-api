import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { getMovie, movieSearch } from './api';
import './App.css';


function App() {

  const [theMovie, setTheMovie] = useState([]);



  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovie();
      setTheMovie(movie);
    };
    fetchMovie();
  }, [setTheMovie]);

  const SetTheMovie = () => {
    return theMovie.map((movie, i) => {
      return (
        <Row className="Movie-List" key={i}>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Text style = {{color: 'red'}}>Release Date: {movie.release_date}</Card.Text>
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
    })
  };

  const searchMovie = async (q) => {
    const query = await movieSearch(q);
    setTheMovie(query.slice(0, 10));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="Title">Movie List</h1>
          <Form.Control type="text" placeholder="Search for a movie" onChange={(q) => searchMovie(q.target.value)}/>
          <Col className="Movie-List">
            <SetTheMovie />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
