import Header from "./header/Header.jsx";
import SectionOne from "./section-one/Section-one.jsx";
import SectionTwo from "./section-two/Section-two.jsx";
import SectionThree from "./section-three/Section-three.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header
        m1="Home"
        m2="About"
        m3="Offers"
        m4="Services"
        m5="How can we help you?"
      />
      <SectionOne
        soh="Freedom calls."
        sot="Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch."
        btn="Watch the keynote"
      />
      <SectionTwo
        knur="Know your runs. In and out."
        knurt="Train smarter with more in-run stats. Want to compare a run to your last five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation."
        run="Run in good spirits"
        runt=" A little support can go a long way. You can receive encouraging emoji
        from friends. And reminders triggered by your friends’ shared
        activity, the current weather, or your own history give you every
        reason to run."
        just="Just do it. Sunday."
        justt="Run every Sunday and see how long you can keep your streak alive. Fuel
          your run with exclusive Nike+ Run Club playlists on Apple Music."
        lnk="Learn more"
      />
      <SectionThree
        sec3h="Nike Sport Band.
          Light. Flexible.
          Breathable."
        sec3t="Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations."
        btn="Buy now"
      />
      <Footer
        footh="Take control of your health."
        foott="With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool." btn="Explore features"
      />
    </div>
  );
}

export default App;
