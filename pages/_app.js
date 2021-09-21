import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);
  if (loading) return <BountyLoader />;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
            <div className="relative subpixel-antialiased ">
      <Component {...pageProps} />
      </div>
    </Web3ReactProvider>
  );
}
