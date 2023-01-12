import React from "react";
import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty Nfts.
        Start Selling & Growing"
        description="Buy, Store, Collect NFTS, exchange & earn crypto. Join 25+ ,illion people using proNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery Ui of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which run netaivley on all user devices. you can easily get your app into peoples hands."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to Showcase the Store"
        description="The app contains the two screens.
        The first screens list all NFTs while the second 
        one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner= "banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with Love by {" "}
            <span className="bold">Swati B2C consultances</span>
        </p>
      </div>
    </>
  );
};

export default App;
