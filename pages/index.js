import Image from "next/image";
import { Inter } from "next/font/google";
import HomeContent from "../components/home/home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <HomeContent />;
}
