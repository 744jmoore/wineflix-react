
import Buttons from "./Buttons";
import { useState } from "react";

const HeroContent = () => {
    const [bl] = useState([
        {title: "Drink", type: "primary-action", key:1, icon:"images/play.png"},
        {title: "More Info", type: "secondary-action", key:2, icon:"images/info.png"}
    ]);
    const heroContent = {
        title: 'Rex Goliath',
        subtitle: 'His Royal Majesty is back.',
        imageUrl: '/rex-goliath-logo.png',
        description: `America's most unhinged rooster is out of retirement, and this time? He's mad
        as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
    }
    return ( 
        <div className="hero-content">
        <h2>
          <img alt={ heroContent.title } src={ heroContent.imageUrl } />
        </h2>
        <h3>{ heroContent.subtitle }</h3>
        <p>{ heroContent.description }</p>
        <ul className="controls">
        {bl.map((b)=>(<Buttons b={b}/>))}
        </ul>
      </div>
    );
}

export default HeroContent;
