import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow ">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}
