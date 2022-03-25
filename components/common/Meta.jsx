import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Bits & Bots",
  keywords: "Game store, Games, PC, Xbox, Playstation",
  description:
    "Bits & Bots is an online game store for gamers on multiple gaming platforms",
};

export default Meta;
