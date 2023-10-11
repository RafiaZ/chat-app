import Feeds from "../components/Feeds"
import LeftPanel from "../components/LeftPanel"
import Navbar from "../components/Navbar"


const Home = () => {
    return (
        <div className="w-100">
            <Navbar/>
            <div className="d-flex">
                <LeftPanel />
                <Feeds/>
            </div>
        </div>
    )
}

export default Home