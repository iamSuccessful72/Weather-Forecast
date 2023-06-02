import { WiCelsius, WiFahrenheit, WiHumidity, WiWindy } from "react-icons/wi";
import { ApiResponseType } from "../types/dataTypes";
import Overview from "./Overview";

function FutureForecast({ forecast }: { forecast: ApiResponseType }) {
  return (
    <div className="bg-zircon h-full lg:mt-0 mt-4 p-4 rounded-md">
      <h2 className="font-bold m-2 text-xl">3-DAY FORECAST</h2>
      <div>
        {forecast.forecast.forecastday.map((day) => (
          <div key={day.date}>
            <div className="flex items-center justify-between">
              <time className="basis-1/4" dateTime={day.date}>
                {new Date(day.date).toDateString().slice(0, 3)}
              </time>
              <figure className="">
                <div className="h-12 w-12">
                  <img
                    alt={day.day.condition.text}
                    className="h-full max-h-full max-w-full object-fill w-full"
                    src={day.day.condition.icon}
                  />
                </div>
                <figcaption className="font-bold">
                  {day.day.condition.text}
                </figcaption>
              </figure>
            </div>
            <Overview
              forecast={`${day.day.avghumidity}`}
              icon={<WiHumidity />}
              title="Avg_humidity"
            />
            <Overview
              forecast={`${day.day.avgtemp_c}°`}
              icon={<WiCelsius />}
              title="Avg_Temp_c"
            />
            <Overview
              forecast={`${day.day.avgtemp_f}°`}
              icon={<WiFahrenheit />}
              title="Avg_Temp_f"
            />
            <Overview
              forecast={`${day.day.maxtemp_c}°`}
              icon={<WiCelsius />}
              title="Max_Temp_c"
            />
            <Overview
              forecast={`${day.day.maxtemp_f}°`}
              icon={<WiFahrenheit />}
              title="Max_Temp_f"
            />
            <Overview
              forecast={`${day.day.maxwind_kph}kph`}
              icon={<WiWindy />}
              title="Maxwind_kph"
            />
            <Overview
              forecast={`${day.day.maxwind_mph}mph`}
              icon={<WiWindy />}
              title="Maxwind_kph"
            />
            <Overview
              forecast={`${day.day.mintemp_c}°`}
              icon={<WiCelsius />}
              title="Min_Temp_c"
            />
            <Overview
              forecast={`${day.day.mintemp_f}°`}
              icon={<WiFahrenheit />}
              title="Min_Temp_f"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FutureForecast;
