import "./Section-three.css"
import watchInHand from "../assets/watch-in-hand.jpg"

function SectionThree({sec3h, sec3t, btn}){
  return(
    <section id='offers' className='section-three'>
      <div className="nike-sport">
        <h2>{sec3h}</h2>
          <blockquote>
            {sec3t}
          </blockquote>
          <button type='submit'>{btn}</button>
      </div>
      <div className="sec-three-img">
        <img src={watchInHand} loading='lazy' alt="watch"/>
      </div>
    </section>
  )
}
export default SectionThree;