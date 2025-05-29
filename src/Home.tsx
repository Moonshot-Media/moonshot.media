import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Jobs from "./sections/Jobs";
import Projects from "./sections/Projects";
import Team from "./sections/Team";

function Home() {
    return (
        <>
            <Header />
            <Projects />
            <Team />
            <Jobs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;