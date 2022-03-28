import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { AuthProvider } from "../components/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
