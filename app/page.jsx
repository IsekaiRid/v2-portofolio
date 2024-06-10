import AboutConten from "@/components/Main/AboutConten";
import Footer from "@/components/Main/Footer";
import HistoryConten from "@/components/Main/HistoryConten";
import ProjectHistory from "@/components/Main/ProjectHistory";
import SertifikatConten from "@/components/Main/SertifikatConten";
import dynamic from 'next/dynamic';

const LazyHero = dynamic(() => import('../components/Main/Hero'));

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <LazyHero />
        <AboutConten />
        <HistoryConten />
        <ProjectHistory />
        <SertifikatConten />
        <Footer />
      </div>
    </main>
  );
}
