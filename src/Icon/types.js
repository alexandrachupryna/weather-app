const WEATHER_ICONS_BY_TYPE = {
    rain: "rain",
    clear: "clear",
    clouds: "cloudy",
    unknown: "unknown"
};

export const getIconByWeatherType = (type) => {
    return WEATHER_ICONS_BY_TYPE[type || 'unknown'];
}