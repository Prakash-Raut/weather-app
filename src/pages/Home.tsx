import {Sidebar} from "../components/sidebar/Sidebar.tsx";
import {Main} from "../components/main/Main.tsx";
import WeatherAppBackground from "../assets/weather.jpg";

export function Home () {
    return (
        <div className="h-[100vh]" style={{backgroundImage: `url(${WeatherAppBackground})`}}>
            <div className="h-[90%] mx-8 py-8 flex flex-row justify-center items-center">
                <Sidebar/>
                <Main/>
            </div>
        </div>
    )
}
