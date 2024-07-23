import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/layout/navbar/Navigation";
import Dish from "@/components/items/Dish";
import List from "@/components/items/List";



export default function Home() {
  return (<>
  {/* <h2>
    Alors, ça roule ?
  </h2> */}
  <List />
  {/* <Dish /> */}
    {/* <Navigation /> */}
{/* <h2>Accueil</h2> */}
  </>
  );
}
