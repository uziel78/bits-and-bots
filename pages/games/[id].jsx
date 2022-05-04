import Link from "next/link";
import Meta from "../../components/common/Meta";
//import Loader from "../../components/common/Loader";
import Paragraph from "../../components/common/Paragraph";
import Card from "../../components/game-page/Card";
import Image from "next/image";
//import SearchMenu from "../../components/game-page/SearchMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping, faArrowRight);

//import NextBreadcrumbs from "../../components/layout/NextBreadcrumbs";
import axios from "axios";
import { BASE_URL, GAMES_URL, HEADER } from "../../pages/api/api";
import styles from "../../styles/page-styles/details-page.module.scss";

// ---------- Details Page Function ---------- //

export default function Details({ game }) {
  return (
    <>
      <Meta description="game details page" />

      <div className={styles.game__page}>
        <section className={styles.top__section} aria-label="sub-menu section">
          <div>
            <Link href="/store">
              <a>
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </Link>
          </div>
        </section>

        <h1>Game: {game.name}</h1>

        <section
          className={styles.cards__section}
          aria-label="game-cards section"
        >
          <Card key={game.id}>
            {/* <Image
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                alt="Cover of the different games on browse games page"
                width={300}
                height={300}
              /> */}
            <h4>{game.name}</h4>
          </Card>
        </section>
      </div>
      <div />
    </>
  );
}

// ---------- GetStatic Paths Function ---------- //

export async function getStaticPaths() {
  const pathUrl = BASE_URL + GAMES_URL;
  try {
    const response = await axios.post(
      pathUrl,
      "fields name, genres.*, artworks.*, cover.*, rating, screenshots.*, videos.*; where release_dates.platform = (48,49); limit 60;",
      HEADER
    );
    console.log(response.data);
    // the array is on the response.data.property
    const games = response.data;

    // Get the paths we want to pre-render based on the id in the games
    const paths = games.map((game) => ({
      params: { id: game.id.toString() },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// ---------- GetStatic Props Function ---------- //

export async function getStaticProps(context) {
  const id = context.params.id;
  //const url = `${BASE_URL + GAMES_URL}/${params.id}`;

  let game = null;

  try {
    const response = await axios.post(
      url + id,
      "fields name, genres.*, artworks.*, cover.*, rating, screenshots.*, videos.*; where release_dates.platform = (48,49); limit 60;",
      HEADER
    );
    game = response.data;
    console.log(game);
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { game: game },
  };
}
