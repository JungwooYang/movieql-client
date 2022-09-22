import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIES = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIES, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <h1>Loading..</h1>;
  }
  return <div>{data.movie.title}</div>;
}
