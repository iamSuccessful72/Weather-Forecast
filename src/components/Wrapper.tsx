import { createContext, useState } from "react";
import { ApiResponseType } from "../types/dataTypes";
import Header from "./Header";
import Main from "./Main";

export const WeatherContext = createContext<WeatherContextProps | null>(null);
export interface WeatherContextProps {
  forecast: ApiResponseType | null;
  onError: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setForecast: React.Dispatch<React.SetStateAction<ApiResponseType | null>>;
}

function Wrapper() {
  const [onError, setError] = useState<string>("");
  const [forecast, setForecast] = useState<ApiResponseType | null>(null);

  return (
    <div className="font-kanit">
      <WeatherContext.Provider
        value={{ forecast, onError, setError, setForecast }}
      >
        <Header />
        <Main />
      </WeatherContext.Provider>
    </div>
  );
}

export default Wrapper;
