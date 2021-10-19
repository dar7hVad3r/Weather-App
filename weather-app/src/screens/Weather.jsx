import Card from "../components/Card";

const Weather = ({city, weather, setWeather}) => {
    return (
        <div>
            <Card city={city} weather={weather} setWeather={setWeather} />
        </div>
    );
}

export default Weather