import BarcelonaIcon from "../assets/BarcelonaIcon";
import BarcelonaIcon2 from "../assets/BarcelonaIcon2";
import BudapestIcon from "../assets/BudapestIcon";
import BusIcon from "../assets/BusIcon";
import ColosseumIcon from "../assets/ColosseumIcon";
import LisbonIcon from "../assets/LisbonIcon";
import LondonIcon from "../assets/LondonIcon";
import ParisIcon from "../assets/ParisIcon";
import RomeIcon from "../assets/RomeIcon";
import StadiumIcon from "../assets/StadiumIcon";
import Card from "../components/Card";

function Projects() {
    return (
        <div className="relative mx-auto w-full pt-20 px-3 md:px-5 lg:px-8">
            <div className="w-full max-w-5xl mx-auto" id="projects">
                <h1 className="text-3xl lg:text-3xl font-bold text-zinc-800 mb-10">Projects</h1>
            </div>
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex flex-wrap gap-4">
                    <Card title="barcelonacard.org" icon={BarcelonaIcon} flag="./es-flag.svg" year="2013" />
                    <Card title="budapestcard.org" icon={BudapestIcon} flag="./hu-flag.svg" year="2013" />
                    <Card title="hoponhopoffbarcelona.org" icon={BusIcon} flag="./es-flag.svg" year="2014" />
                    <Card title="lisboacard.org" icon={LisbonIcon} flag="./pt-flag.svg" year="2013" />
                    <Card title="rome.info" icon={RomeIcon} flag="./it-flag.svg" year="2002" />
                    <Card title="thecolosseum.org" icon={ColosseumIcon} flag="./it-flag.svg" year="2016" />
                    <Card title="thingstodoinbarcelona.com" icon={BarcelonaIcon2} flag="./es-flag.svg" year="2014" />
                    <Card title="thingstodoinlondon.com" icon={LondonIcon} flag="./en-flag.svg" year="2002" />
                    <Card title="thingstodoinparis.com" icon={ParisIcon} flag="./it-flag.svg" year="2005" />
                    <Card title="visitcampnou.com" icon={StadiumIcon} flag="./es-flag.svg" year="2016" />
                </div>
            </div>
        </div>
    )
}

export default Projects;