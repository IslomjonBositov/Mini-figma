import "./Section-one.css";
import watch from "../assets/intro-bg.png"

function SectionOne({soh, sot, btn}) {
  return (
    <section id='home' className="ab-freedom">
      <div className="freedom">
        <h2>{soh}</h2>
        <blockquote className='freedom-text'>{sot}</blockquote>
        <button type='button'>{btn}</button>
      </div>
      <div className="freedom-img">
        <img src={watch} loading='lazy' alt="watch" />
      </div>
    </section>
  );
}
export default SectionOne;
