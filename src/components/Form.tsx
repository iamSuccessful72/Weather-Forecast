import { useContext, useState } from "react";
import { getWeatherForecast } from "../api/service";
import { WeatherContext, WeatherContextProps } from "./Wrapper";
import { ApiResponseType } from "../types/dataTypes";

function Form() {
  const [search, setSearch] = useState<string>("");
  const { setError, setForecast } = useContext(
    WeatherContext
  ) as WeatherContextProps;

  return (
    <form className="basis-2/4 lg:ml-2" onSubmit={handleSubmit} role="search">
      <input
        aria-placeholder="Search for cities"
        className="bg-zircon p-2 rounded w-full"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for cities"
        type="search"
        value={search}
      />
    </form>
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (search.trim()) {
      getWeatherForecast<ApiResponseType>(search)
        .then((data) => setForecast(data))
        .catch((err) => setError(err));
    }
    setSearch("");
  }
}

export default Form;
