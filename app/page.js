import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Header1 from "@/Components/Header1";
import LandingTop from "@/Components/LandingTop";
import NewItemCard from "@/Components/NewItemCard";
import LandingSecond from "@/Components/LandingSecond";
import Test from "@/Components/Test";
import LandingThird from "@/Components/LandingThird";
import Banner from "@/Components/Banner"

export default function Home() {
  return (
      <div className="relative">
        <Header1/>
        <Header/> 
        <LandingTop/>
        <NewItemCard/>
        <LandingSecond/>
        <LandingThird/>
        <Banner/>
        <Footer/>
       

      </div>
  );
}
