import Connect from "../../components/Connect";
import { NextSeo } from "next-seo";
import { NoiseBackground } from "../../components/NoiseBackground";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BountyCreator, BountyList } from "../../components/BountyDashboard";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <>
      <NextSeo
        title="prologe.press | Invest in content"
        description="Invest in content and get a stake in the content's success"
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="relative subpixel-antialiased ">
          <NoiseBackground />
          <div className="relative h-full grid md:grid-cols-16 py-6 md:py-14 ">
            <div
              className={`md:col-start-3 md:col-end-15 h-full px-8 md:px-0 grid grid-rows-3 gap-y-2`}
            >
              <Connect />
              <BountyCreator />
              <BountyList />
            </div>
          </div>
        </div>
      </Web3ReactProvider>
    </>
  );
}

export default App;
