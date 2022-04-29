import Meta from "../../components/common/Meta";
import Loader from "../../components/common/Loader";
import Paragraph from "../../components/common/Paragraph";
import Card from "../../components/game-page/Card";
import axios from "axios";
import {
  CORS_FIX,
  BASE_URL,
  GAMES_URL,
  HEADER,
  DATA,
} from "../../pages/api/api";

import styles from "../../styles/page-styles/game-page.module.scss";

// ---------- Browse Page Function ---------- //

export default function BrowsePage(props) {
  //rendered from getStaticProps
  console.log(props);
  return (
    <>
      <Meta description="browse games page" />

      <section className={styles.top__section}>
        <div>Breadcrumb</div>
        <div>SearchMenu</div>
        <div>View Cart Button</div>
      </section>

      <h1>Games for Sale!</h1>

      <div className={styles.content__container}>
        <Paragraph content="Bits & Bots strive to give its members good deals on the newest games on the market for all members at the lowest cost possible." />

        <Loader />

        <section className={styles.cards__section}>
          {props.games.map((game) => {
            return (
              <>
                <Card key={game.id}>
                  <h3 key={game.slug}>{game.name}</h3>
                </Card>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

// ---------- GetStatic Props Function ---------- //

//games path
const url = CORS_FIX + BASE_URL + GAMES_URL;

//User & method
const credentials = HEADER;
const gamesData = DATA;

export async function getStaticProps() {
  // in case there is an error in the API call
  // we'll send an empty array in as the prop
  let games = [];

  try {
    const response = await axios.post(url, credentials, gamesData);
    // the log here will happen on the server, you can check the console in your editor
    console.log(response.games);
    // the array is on the response.data.data property
    games = response.gamesData.slug;
  } catch (error) {
    console.log(error);
  }

  // the props object we return here will become the props in the component
  return {
    props: {
      games: games,
    },
  };
}
