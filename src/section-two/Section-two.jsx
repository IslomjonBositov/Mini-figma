import "./Section-two.css";
import dots from "../assets/dots-divider.png";
import App from "../App.jsx"

function SectionTwo() {
  return (
    <section id='about' className="ab-apple">
      <div href={App} className="quick-back">
        <a href="">↑</a>
      </div>
      <div className="know-your">
        <h3>Know your runs. In and out.</h3>
        <blockquote>
          Train smarter with more in-run stats. Want to compare a run to your
          last five? Just swipe left. Mark splits by selecting pause or using
          gestures, like tapping the screen or double-clicking the side button.
          And get a full post-run report, including elevation.
        </blockquote>
        <img className='dots' src={dots} alt="switch" />
      </div>

      <div className="run-in">
        <h3>Run in good spirits.</h3>
        <blockquote>
          A little support can go a long way. You can receive encouraging emoji
          from friends. And reminders triggered by your friends’ shared
          activity, the current weather, or your own history give you every
          reason to run.
        </blockquote>
        <img className='dots' src={dots} alt="switch" />
      </div>

      <div className="just-do">
        <h3>Just do it. Sunday.</h3>
        <blockquote>
          Run every Sunday and see how long you can keep your streak alive. Fuel
          your run with exclusive Nike+ Run Club playlists on Apple Music.
        </blockquote>

        <div className="links">
          <span className="line"></span>
        <a href="Learn more">Learn more</a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
