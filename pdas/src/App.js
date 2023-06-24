import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
          <p className="subtitle">... something that can help you</p>
        </div>
      </section>

      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              title="Alexa"
              handle="@alexa99"
              image={AlexaImage}
              description="alexa was created by Amazon."
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={CortanaImage}
              description="cortana was made by Mircosoft.Who know what it does?"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              title="Siri"
              handle="@siri01"
              image={SiriImage}
              description="Siri was made by Apple and was being phase out."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
