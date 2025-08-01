import React from "react";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItemsDark } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title: "CNP Mídia | Agência Especializada em Social Media",
  description:
    "A CNP Mídia é uma agência de social media focada em construir autoridade digital para marcas e empresas, oferecendo estratégias personalizadas e gestão de redes sociais.",
};

export default function Home1MainDemoMultiPageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5 parallax-mousemove-scene scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-2.jpg)",
                }}
                id="home"
              >
                <Hero1 />
              </ParallaxContainer>

              <Home1 dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
