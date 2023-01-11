import "./showcase.css";
import { useSearch } from "react-location";
import R from "ramda";
import { useNavigate } from "react-location";

export default function CardShowCase() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate({ to: "/", replace: true });
  };

  const search = useSearch() || {};
  const {
    fullName = "",
    title = "",
    aboutMe = "",
    githubURL = "",
    twitterURL = "",
    favouriteBooks = "",
    favouriteArtists = "",
    HTML = false,
    CSS = false,
    JS = false,
    Git = false,
    React = false,
    NodeJS = false,
    Sass = false,
    PHP = false
  } = search;
  const firstName = R.path([0], fullName.split(","));

  const Artists = favouriteArtists.split(",").reduce((acc, artist) => {
    const singer = artist.split("-");
    acc.push({
      title: R.path([0], singer)
    });
    return acc;
  }, []);

  const books = favouriteBooks.split(",").reduce((acc, book) => {
    const titleAuthor = book.split("-");
    acc.push({
      title: R.path([0], titleAuthor),
      author: R.path([1], titleAuthor)
    });
    return acc;
  }, []);

  return (
    <div className="pageBody">
      <main className="has-dflex-center">
        <section>
          <div className="lx-container-85">
            <div className="lx-row align-stretch">
              <div className="lx-column is-3">
                <div className="lx-row">
                  <div className="lx-card">
                    <div className="lx-row">
                      <div className="has-dflex-center bs-md pic">
                        <img src={githubURL + ".png"} alt={fullName} />
                      </div>
                      <div className="infos">
                        <span>
                          <i className="fas fa-user-circle"></i>&nbsp;&nbsp;{" "}
                          {fullName}
                        </span>
                        <span>
                          <i className="fas fa-briefcase"></i>&nbsp;&nbsp;{" "}
                          {title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">Connect with {firstName}</h1>
                      <div className="mini-cards">
                        <a
                          className="has-dflex-center bs-md"
                          href={githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github-alt"></i>
                        </a>
                        <a
                          className="has-dflex-center bs-md"
                          href={twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-info-circle"></i>&nbsp;Welcome
                      to&nbsp;
                      {firstName}'s corner of the Internet
                    </h1>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div className="text">
                      <p>{aboutMe}</p>
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div className="mini-cards">
                      {CSS ? (
                        <span className="has-dflex-center bs-md" title="CSS">
                          <i className="fab fa-css3-alt"></i>
                        </span>
                      ) : null}
                      {HTML ? (
                        <span className="has-dflex-center bs-md" title="HTML">
                          <i className="fab fa-html5"></i>
                        </span>
                      ) : null}
                      {JS ? (
                        <span className="has-dflex-center bs-md" title="JS">
                          <i className="fab fa-js"></i>
                        </span>
                      ) : null}
                      {Git ? (
                        <span className="has-dflex-center bs-md" title="Git">
                          <i className="fab fa-git-alt"></i>
                        </span>
                      ) : null}
                      {NodeJS ? (
                        <span
                          className="has-dflex-center bs-md"
                          title="Node JS"
                        >
                          <i className="fab fa-node-js"></i>
                        </span>
                      ) : null}
                      {React ? (
                        <span className="has-dflex-center bs-md" title="React">
                          <i className="fab fa-react"></i>
                        </span>
                      ) : null}
                      {Sass ? (
                        <span className="has-dflex-center bs-md" title="Sass">
                          <i className="fab fa-sass"></i>
                        </span>
                      ) : null}
                      {PHP ? (
                        <span className="has-dflex-center bs-md" title="PHP">
                          <i className="fab fa-php"></i>
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div className="text">
                      <ol>
                        {books.map((book, i) => {
                          const { title, author = "" } = book;
                          return (
                            <li key={i}>
                              <p>
                                <b>{title}</b>&nbsp;
                                {author.trim() ? (
                                  <span>- {author.trim()}</span>
                                ) : null}
                              </p>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite Artists
                    </h1>
                    <div className="text">
                      <ul>
                        {Artists.map((artist, i) => {
                          const { title = "" } = artist;
                          return (
                            <li key={i}>
                              <p>
                                <b>{title}</b>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="glow-on-hover"
              type="submit"
            >
              Return
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
