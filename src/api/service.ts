const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acbc8c3254msheb3e17a8482eb55p1b00a2jsn3355b454281a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherForecast<T>(location: string): Promise<T> {
    return await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, options)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error(`Http Error ${response.statusText}`)
        }
    })
}