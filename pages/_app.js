import "@/styles/globals.css";
import "@/styles/app.scss";
require("dotenv").config();

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
