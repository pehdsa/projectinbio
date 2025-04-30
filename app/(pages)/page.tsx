import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VideoExplanation } from "@/components/video-explanation";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";


export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl m-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <Faq />
    </div>
  );
}
