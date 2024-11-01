import { useEffect, useState } from "react";
import { getAnime } from "./services/anime.service";
import Card from "./Fragments/Card";

export default function Anime() {
  const [animes, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAnime()
      .then((data) => {
        setAnime(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load anime data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex justify-center py-5 px-5">
        <div className="flex flex-wrap">
          {animes.map((anime) => (
            <Card key={anime.mal_id}>
              <Card.Header img={anime.images.jpg.image_url} />
              <Card.Body title={anime.title}>
                {anime.genres.map((genre) => genre.name).join(", ")}
              </Card.Body>
              <Card.Footer link={anime.url}>
                {anime.themes.map((theme) => theme.name).join(", ")}
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
