import {
  WiCelsius,
  WiCloud,
  WiDegrees,
  WiFahrenheit,
  WiHumidity,
  WiSunset,
  WiWindDeg,
  WiWindy,
} from "react-icons/wi";
import { ApiResponseType } from "../types/dataTypes";
import Overview from "./Overview";

function TodayOverview({ forecast }: { forecast: ApiResponseType }) {
  return (
    <div className="bg-zircon mt-2 p-4 rounded-md">
      <h2 className="font-bold m-2 text-xl">TODAY'S OVERVIEW</h2>
      <div className="2xl:grid-cols-3 gap-4 grid md:grid-cols-2">
        <Overview
          forecast={`${forecast.current.cloud}%`}
          icon={<WiCloud />}
          title="Cloud"
        />
        <Overview
          forecast={`${forecast.current.feelslike_c}°`}
          icon={<WiCelsius />}
          title="Feels Like C"
        />
        <Overview
          forecast={`${forecast.current.feelslike_f}°`}
          icon={<WiFahrenheit />}
          title="Feels Like F"
        />
        <Overview
          forecast={`${forecast.current.humidity}%`}
          icon={<WiHumidity />}
          title="Humidity"
        />
        <Overview
          forecast={`${forecast.current.uv} of 10`}
          icon={<WiSunset />}
          title="Uv Index"
        />
        <Overview
          forecast={`°${forecast.current.wind_degree}`}
          icon={<WiDegrees />}
          title="Wind_degree"
        />
        <Overview
          forecast={`${forecast.current.wind_dir}`}
          icon={<WiWindDeg />}
          title="Wind_dir"
        />
        <Overview
          forecast={`${forecast.current.wind_kph}kph`}
          icon={<WiWindy />}
          title="Wind_kph"
        />
        <Overview
          forecast={`${forecast.current.wind_mph}mph`}
          icon={<WiWindy />}
          title="Wind_mph"
        />
      </div>
    </div>
  );
}

export default TodayOverview;
