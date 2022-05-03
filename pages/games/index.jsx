import Link from "next/link";
import Meta from "../../components/common/Meta";
//import Loader from "../../components/common/Loader";
import Paragraph from "../../components/common/Paragraph";
import Card from "../../components/game-page/Card";
import Image from "next/image";
import SearchMenu from "../../components/game-page/SearchMenu";
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
import styles from "../../styles/page-styles/game-page.module.scss";

// ---------- Browse Page Function ---------- //

function BrowsePage(props) {
  const { games } = props;
  //rendered from getStaticProps
  console.log(props);

  return (
    <>
      <Meta description="browse games page" />

      <div className={styles.game__page}>
        <section className={styles.top__section} aria-label="sub-menu section">
          <div>
            <SearchMenu />
          </div>
          <div>
            <Link href="/games/store">
              <a>
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </Link>
          </div>
        </section>

        <h1 aria-label="h1 heading">Games for Sale!</h1>

        <div className={styles.content__container} aria-label="paragraph">
          <Paragraph content="Bits & Bots strive to give its members good deals on the newest games on the market for all members at the lowest cost possible." />

          <section
            className={styles.cards__section}
            aria-label="game-cards section"
          >
            {games.map((game) => {
              return (
                <>
                  <Card key={game.id} aria-label={game.name}>
                    <div className={styles.card__container}>
                      <Image
                        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                        alt="Cover of the different games on browse games page"
                        width={300}
                        height={300}
                      />
                      <h4>{game.name}</h4>
                      <Link
                        href={`${"/"}${game.id}`}
                        aria-label={`Details link to ${game.name}`}
                      >
                        <a>
                          <span>
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>{" "}
                          Details
                        </a>
                      </Link>
                    </div>
                  </Card>
                </>
              );
            })}
          </section>
        </div>
        <div />
      </div>
    </>
  );
}

// ---------- GetStatic Props Function ---------- //

export async function getStaticProps() {
  //games path
  const url = BASE_URL + GAMES_URL;

  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  let games = [];

  try {
    const response = await axios.post(
      url,
      "fields name, genres.*, artworks.*, cover.*, rating, screenshots.*, videos.*; where release_dates.platform = (48,49); limit 60;",
      HEADER
    );
    // the log here will happen on the server, you can check the console in your editor

    // the array is on the response.data property
    games = response.data;
  } catch (error) {
    console.log(error);
  }

  //example if no object returned from props, automatically takes one to the 404 page.
  if (games.length === 0) {
    return { notFound: true };
  }

  // shows update in development server
  console.log("(RE-)Generating...");

  // the props object we return here will become the props in the component
  return {
    props: {
      games: games,
    },
    revalidate: 30,
  };
}

export default BrowsePage;
