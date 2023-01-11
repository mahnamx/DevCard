import { useNavigate } from "react-location";
import { useState } from "react";

export default function CreateCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    favouriteArtists: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    NodeJS: false,
    Sass: false,
    PHP: false
  });

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    setFormData({ ...formData, [e.target.value]: isChecked });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate({ to: "showcase", replace: true, search: (old) => formData });
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>DevCard</h1>
          <p className="ypdp">Your personal digital portfolio</p>
        </section>
      </div>

      <div className="right">
        <form>
          <section className="copy">
            <h2>Create your DevCard</h2>
          </section>
          <div className="input-container name">
            <input
              type="text"
              name="fname"
              placeholder="Your Full Name"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <input
              type="text"
              name="title"
              placeholder="Your Job Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <textarea
              name="aboutMe"
              placeholder="About Me"
              onChange={(e) =>
                setFormData({ ...formData, aboutMe: e.target.value })
              }
            />
          </div>
          <h3>Technologies You Know</h3>
          <div className="checkboxes">
            <label className="myLabel">
              <input
                type="checkbox"
                value="HTML"
                onChange={(e) => handleChange(e)}
              />
              HTML
            </label>
            <label className="myLabel">
              <input type="checkbox" onChange={(e) => handleChange(e)} />
              CSS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="JS"
                onChange={(e) => handleChange(e)}
              />
              JavaScript
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="Git"
                onChange={(e) => handleChange(e)}
              />
              Git
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="React"
                onChange={(e) => handleChange(e)}
              />
              React
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="NodeJS"
                onChange={(e) => handleChange(e)}
              />
              NodeJS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="Sass"
                onChange={(e) => handleChange(e)}
              />
              Sass
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="PHP"
                onChange={(e) => handleChange(e)}
              />
              PHP
            </label>
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="githubURL"
              placeholder="Github URL"
              onChange={(e) =>
                setFormData({ ...formData, githubURL: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="twitterURL"
              placeholder="Twitter URL"
              onChange={(e) =>
                setFormData({ ...formData, twitterURL: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <textarea
              type="text"
              name="favouriteBooks"
              placeholder="Favorite Books"
              onChange={(e) =>
                setFormData({ ...formData, favouriteBooks: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <textarea
              type="text"
              name="favouriteArtists"
              placeholder="Favorite Artists"
              onChange={(e) =>
                setFormData({ ...formData, favouriteArtists: e.target.value })
              }
            />
          </div>
          <div className="wrap-collabsible">
            <input id="collapsible" className="toggle" type="checkbox" />
            <label htmlFor="collapsible" className="lbl-toggle">
              More Info
            </label>
            <div className="collapsible-content">
              <div className="content-inner">
                <p className="instructions">
                  You can write your favorite books like this : Book Name -
                  Author , Book Name - Author , ... Also your favorite artists
                  should be like : Artist 1 , Artist 2 , ...
                </p>
              </div>
            </div>
          </div>
          <button onClick={handleClick} className="glow-on-hover" type="submit">
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}
