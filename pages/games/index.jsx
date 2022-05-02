import Link from "next/link";
import Meta from "../../components/common/Meta";
import Loader from "../../components/common/Loader";
import Paragraph from "../../components/common/Paragraph";
import Card from "../../components/game-page/Card";
import SearchMenu from "../../components/game-page/SearchMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

//import NextBreadcrumbs from "../../components/layout/NextBreadcrumbs";
import axios from "axios";
import { BASE_URL, GAMES_URL, HEADER } from "../../pages/api/api";
import styles from "../../styles/page-styles/game-page.module.scss";

// ---------- Browse Page Function ---------- //

function BrowsePage(props) {
  const { id, name, url } = props;
  //rendered from getStaticProps
  console.log(props);

  return (
    <>
      <Meta description="browse games page" />

      <div className={styles.page__wrapper}>
        <section className={styles.top__section} aria-label="sub-menu section">
          <div>Crumbs...</div>
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
            {props.games.map((game) => {
              return (
                <>
                  <Card key={game.id}>
                    <h3 key={game.slug}>{game.name}</h3>
                    <p key={game.slug}>{game.url}</p>
                  </Card>
                </>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

// ---------- GetStatic Props Function ---------- //

export async function getStaticProps() {
  //games path
  const url = BASE_URL + GAMES_URL;

  //User & data
  //const credentials = HEADER;

  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  let games = [];

  try {
    const response = await axios.post(url, "fields *;", HEADER);
    // the log here will happen on the server, you can check the console in your editor

    // the array is on the response.data property
    games = response.data;
  } catch (error) {
    console.log(error);
  }

  // example if no object returned from props, automatically takes one to the 404 page.
  // if (games.length === 0) {
  //   return { notFound: true };
  // }

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
