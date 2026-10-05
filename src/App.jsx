import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import Topics from "./components/Topics.jsx";
import CommunityPage from "./components/CommunityPage.jsx";
import Footer from "./components/Footer.jsx";
import { intro } from "./data/content.js";

// Tiny hash router: "#/community" shows The Community page, anything else shows the home page.
const getRoute = () => (window.location.hash.startsWith("#/community") ? "community" : "home");

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // After a page change: open at the top, or jump to the in-page anchor if there is one.
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const target = id && !id.startsWith("/") ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route]);

  // Fade/slide home-page elements in as they scroll into view.
  useEffect(() => {
    if (route !== "home") return;
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route]);

  return (
    <>
      <Navbar route={route} />
      <main>
        {route === "community" ? (
          <CommunityPage />
        ) : (
          <>
            <Hero />
            <Section {...intro} />
            <Topics />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
