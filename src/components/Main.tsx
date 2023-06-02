import { useEffect, useContext } from "react";
import { ApiResponseType } from "../types/dataTypes";
import { getWeatherForecast } from "../api/service";
import { WeatherContext, WeatherContextProps } from "./Wrapper";
import WeatherInfo from "./WeatherInfo";

function Main() {
  const { forecast, onError, setError, setForecast } = useContext(
    WeatherContext
  ) as WeatherContextProps;

  useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      getWeatherForecast<ApiResponseType>(`London`)
        .then((data) => setForecast(data))
        .catch((err) => setError(err));
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (onError) {
      setTimeout(() => setError(""), 1000);
    }
  }, [onError]);

  return (
    <main className="p-4">
      <section className="" role="region">
        {onError ? (
          <p className="text-red-500">
            Oops an error occured please type in a valid location!!
          </p>
        ) : (
          <>{forecast && <WeatherInfo forecast={forecast} />}</>
        )}
      </section>
    </main>
  );
}

export default Main;
