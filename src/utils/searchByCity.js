
const searchByCity = async (city) => {
   try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
   }catch(error){
        console.error("Error searching by city:", error);
   }
}
export default searchByCity;