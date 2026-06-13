import "./Section-one.css";
import watch from "../assets/intro-bg.png"

function SectionOne() {
  return (
    <section className="ab-freedom">
      <div className="freedom">
        <h2>Freedom calls.</h2>
        <blockquote className='freedom-text'>Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.</blockquote>
        <button type='button'>Watch the keynote</button>
      </div>
      <div className="freedom-img">
        <img src={watch} alt="watch" />
      </div>
    </section>
  );
}
export default SectionOne;
