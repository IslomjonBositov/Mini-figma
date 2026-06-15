import "./Section-two.css";
import dots from "../assets/dots-divider.png";

function SectionTwo({knur, knurt, run, runt, just, justt, lnk}) {
  return (
    <section id='about' className="ab-apple">
      <div className="know-your">
        <h3>{knur}</h3>
        <blockquote>{knurt}</blockquote>
        <img className='dots' src={dots} alt="switch" />
      </div>

      <div className="run-in">
        <h3>{run}</h3>
        <blockquote>
         {runt}
        </blockquote>
        <img className='dots' src={dots} alt="switch" />
      </div>

      <div className="just-do">
        <h3>{just}</h3>
        <blockquote>
          {justt}
        </blockquote>

        <div className="links">
          <span className="line"></span>
        <a href="">{lnk}</a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
