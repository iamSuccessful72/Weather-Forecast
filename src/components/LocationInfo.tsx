import { ApiResponseType } from "../types/dataTypes";

function LocationInfo({ forecast }: { forecast: ApiResponseType }) {
  return (
    <div>
      <h2 className="font-bold text-xl">{`${forecast.location.region}/${forecast.location.country}`}</h2>
      <time dateTime={forecast.location.localtime}>
        {new Date(forecast.location.localtime.slice(0, 10)).toDateString()},
      </time>
      <time dateTime={forecast.location.localtime.slice(9)}>
        {forecast.location.localtime.slice(10)}{" "}
        {+forecast.location.localtime.slice(10, 13) > 11 ? "PM" : "AM"}
      </time>
      <div className="flex items-center justify-between">
        <p className="text-6xl text-rock-blue">{`${forecast.current.temp_f}°`}</p>
        <figure>
          <div className="h-24 w-24">
            <img
              alt={forecast.current.condition.text}
              className="h-full max-h-full max-w-full object-fill w-full"
              src={forecast.current.condition.icon}
            />
          </div>
          <figcaption>{forecast.current.condition.text}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default LocationInfo;
