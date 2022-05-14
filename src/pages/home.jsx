import { Row, Banner, Navbar, Footer } from "./components";
import requests from "./request";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;