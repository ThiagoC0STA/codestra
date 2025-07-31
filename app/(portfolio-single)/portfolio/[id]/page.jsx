import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { allPortfolios } from "@/data/portfolio";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { portfolios1 } from "@/data/portfolio";

import { menuItemsDark } from "@/data/menu";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";

export const metadata = {
  title:
    "Main Portfolio Single Page 1 Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainPortfolioSinglePage1Dark({ params }) {
  const portfolioItem =
    portfolios1.filter((elm) => elm.id == params.id)[0] || portfolios1[0];
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              {" "}
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
                  }}
                >
                  <div className="container position-relative pt-30 pt-sm-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <div className="mb-20">
                            <a
                              href="#"
                              className="btn btn-mod btn-small btn-border btn-circle"
                              data-btn-animate="y"
                            >
                              <i className="mi-arrow-left align-center size-18" />{" "}
                              Back to portfolio
                            </a>
                          </div>
                          <h1 className="hs-title-1 mb-20">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text={portfolioItem.title} />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              <p
                                className="section-descr mb-0 wow fadeIn"
                                data-wow-delay="0.2s"
                                data-wow-duration="1.2s"
                              >
                                {portfolioItem.introduction}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
              </section>
              <>
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    <div className="row">
                      {/* Project Details */}
                      <div className="col-md-4 mb-sm-40 wow fadeInUp">
                        <div className="block-sticky">
                          <h2 className="h3 mb-20">Project Details</h2>
                          <hr className="mb-20" />
                          <div className="row text-gray small">
                            <div className="col-sm-4">
                              <b>Data:</b>
                            </div>
                            <div className="col-sm-8">{portfolioItem.date}</div>
                          </div>
                          <hr className="mb-20" />
                          <div className="row text-gray small">
                            <div className="col-sm-4">
                              <b>Cliente:</b>
                            </div>
                            <div className="col-sm-8">
                              {portfolioItem.client}
                            </div>
                          </div>
                          <hr className="mb-20" />
                          <div className="row text-gray small">
                            <div className="col-sm-4">
                              <b>Serviços:</b>
                            </div>
                            <div className="col-sm-8">
                              {portfolioItem.description}
                            </div>
                          </div>
                          <hr className="mb-20" />
                          <div className="text-gray small">
                            <div>
                              <b>Description:</b>
                            </div>
                            <div>{portfolioItem.longDescription}</div>
                          </div>
                          <hr className="mb-20" />
                        </div>
                      </div>
                      {/* End Project Details */}
                      <div className="col-md-8">
                        <div className="mb-n30 items-portfolio align-center-col">
                          {(portfolioItem.images || portfolioItem.videos)?.map(
                            (media, index) => (
                              <div key={index} className="mb-30 wow fadeInUp">
                                {media.src
                                  .toLowerCase()
                                  .match(/\.(mp4|webm|ogg)$/) ? (
                                  <video
                                    src={media.src}
                                    className="portfolio-videos"
                                    preload="metadata"
                                    loop={media?.loopMuted ?? false}
                                    autoPlay={media?.loopMuted ?? false}
                                    muted={media?.loopMuted ? true : false}
                                    playsInline={
                                      media?.loopMuted ? true : false
                                    }
                                    disablePictureInPicture={
                                      media?.loopMuted ? true : false
                                    }
                                    disableRemotePlayback={
                                      media?.loopMuted ? true : false
                                    }
                                    controls={media?.loopMuted ? false : true}
                                    controlsList={
                                      media?.loopMuted
                                        ? "nodownload noplaybackrate"
                                        : undefined
                                    }
                                  />
                                ) : (
                                  <Image
                                    src={media.src}
                                    alt={media.alt || "Portfolio media"}
                                    width={1350}
                                    height={865}
                                    className="portfolio-images"
                                    loading="lazy"
                                    quality={100}
                                  />
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <RelatedProject10 excludeId={portfolioItem.id} />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Work Navigation */}
                <div className="work-navigation clearfix bg-dark-1 light-content">
                  {portfolioItem.id > 1 && (
                    <Link
                      href={`/portfolio/${portfolioItem.id - 1}`}
                      className="work-prev"
                    >
                      <span>
                        <i className="mi-arrow-left size-24 align-middle" />{" "}
                        Previous
                      </span>
                    </Link>
                  )}
                  <Link href="/portfolio" className="work-all">
                    <span>
                      <i className="mi-close size-24 align-middle" /> All works
                    </span>
                  </Link>

                  {portfolioItem.id < portfolios1.length && (
                    <Link
                      href={`/portfolio/${portfolioItem.id + 1}`}
                      className="work-next"
                    >
                      <span>
                        Next{" "}
                        <i className="mi-arrow-right size-24 align-middle" />
                      </span>
                    </Link>
                  )}
                </div>
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
