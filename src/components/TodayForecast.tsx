import { ApiResponseType } from "../types/dataTypes";

function TodayForecast({ forecast }: { forecast: ApiResponseType }) {
  return (
    <div className="bg-zircon mt-4 p-4 rounded-md">
      <h2 className="font-bold m-2 text-xl">TODAY'S FORECAST</h2>
      <div className="flex items-center justify-center lg:flex-wrap lg:overflow-x-hidden overflow-x-scroll">
        {forecast.forecast.forecastday[0].hour.map((hour) => (
          <div
            className="border-r border-r-rock-blue flex flex-col items-center justify-center lg:mb-2"
            key={hour.time}
          >
            <time dateTime={hour.time.slice(10)}>
              {hour.time.slice(10)}{" "}
              {+hour.time.slice(10, 13) > 11 ? "PM" : "AM"}
            </time>
            <div className="h-24 w-24">
              <img
                alt={hour.condition.text}
                className="h-full max-h-full max-w-full object-fill w-full"
                src={hour.condition.icon}
              />
            </div>
            <p className="font-bold">{`${hour.temp_f}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayForecast;
