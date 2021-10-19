import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Weather from "./screens/Weather";
import { key } from "./common/constants";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({})
  const updateCity = (cityName) => {
    setCity(cityName);
  }
  
  const notifyError = (message)=>{
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const fetchData = () =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data)
      })
      .catch(error=>{
          notifyError("city not found");
          setWeather({})
          setCity("")
      });
  }

  return (
    <div>
      <Nav city={city} cityUpdate={updateCity} fetchData={fetchData} />
      <Weather city={city} weather={weather} setWeather={setWeather} />
      <ToastContainer/>
    </div>
  );
}

export default App;
