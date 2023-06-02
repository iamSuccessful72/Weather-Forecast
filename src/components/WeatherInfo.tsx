import { ApiResponseType } from "../types/dataTypes";
import FutureForecast from "./FutureForecast";
import LocationInfo from "./LocationInfo";
import TodayForecast from "./TodayForecast";
import TodayOverview from "./TodayOverview";

function WeatherInfo({ forecast }: { forecast: ApiResponseType }) {
  return (
    <div className="lg:flex text-bright-gray">
      <div className="basis-8/12 mr-2">
        <LocationInfo forecast={forecast} />
        <TodayOverview forecast={forecast} />
        <TodayForecast forecast={forecast} />
      </div>
      <div className="basis-4/12 ml-2">
        <FutureForecast forecast={forecast} />
      </div>
    </div>
  );
}

export default WeatherInfo;
