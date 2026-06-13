import "./Section-three.css"
import watchInHand from "../assets/watch-in-hand.jpg"

function SectionThree(){
  return(
    <section id='offers' className='section-three'>
      <div className="nike-sport">
        <h2>Nike Sport Band.
          Light. Flexible.
          Breathable.</h2>
          <blockquote>
            Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.
          </blockquote>
          <button type='submit'>Buy now</button>
      </div>
      <div className="sec-three-img">
        <img src={watchInHand} alt="watch" />
      </div>
    </section>
  )
}
export default SectionThree;