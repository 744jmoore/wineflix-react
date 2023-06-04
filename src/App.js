import "./App.css";
import Navigation from "./Navigation";
import SecondaryNavigation from "./SecondaryNavigation";
import HeroContent from "./HeroContent";
import DrinkAgain from "./DrinkAgain";
import KeepDrinking from "./KeepDrinking";



const App = () => {
  return (
    <div className="App">

      <header className="hero">
        <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
        <nav className="navigation">
          <Navigation />
          <SecondaryNavigation />
        </nav>
        <HeroContent />
      </header>
      <main>
        <DrinkAgain />
        <KeepDrinking />
      </main>
    </div>
  )
}

export default App
