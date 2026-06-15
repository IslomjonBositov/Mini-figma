import "./Footer.css"

function Footer({footh, foott, btn}){
  return(
    <footer id='services' className='footer'>

      <div className="take-control">
        <h2>{footh}</h2>
        <blockquote>{foott}</blockquote>
        <button type='submit'>{btn}</button>
      </div>
    </footer>
  )
}
export default Footer;