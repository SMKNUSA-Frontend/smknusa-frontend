import HomeHero from "@/components/home/home-hero";
import HomeMajor from "@/components/home/home-major";
import HomeSlider from "@/components/home/home-slider";
import HomeFacility from "@/components/home/home-facility";
import HomeAnnouncement from "@/components/home/home-announcements";
import HomeEntrepreneur from "@/components/home/home-entrepreneur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HomeHero />
      <HomeSlider />
      <div className="px-1 lg:px-3">
      <HomeAnnouncement />
        <HomeMajor />
        <HomeFacility />
        <HomeEntrepreneur />
    
      </div>
    </main>
  );
}
