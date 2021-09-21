import Connect from "../../components/Connect";
import { NextSeo } from "next-seo";
import { NoiseBackground } from "../../components/NoiseBackground";
import { BountyList } from "../../components/BountyDashboard";

function App() {
  return (
    <>
      <NextSeo
        title="prologe.press | Invest in content"
        description="Invest in content and get a stake in the content's success"
      />
      <NoiseBackground />
      <div className="relative h-full grid md:grid-cols-16 py-6 md:py-14 ">
        <div
          className={`md:col-start-3 md:col-end-15 h-full px-8 md:px-0 grid grid-rows-3 gap-y-2`}
        >
          <Connect />
          <BountyList />
        </div>
      </div>
    </>
  );
}

export default App;
