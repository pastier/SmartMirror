export class AppSettings {

    // API KEYS - enter your OpenWeatherMap api key here.
    public static OPEN_WEATHER_MAP_API = 'API_KEY';

    // enter your google calendar clientId here - i used this link to create it https://console.developers.google.com/start/api?id=calendar.
    public static GOOGLE_CALENDAR_API = 'API_KEY';

    // REQUEST URLS - enter the urls for OpenWeatherMap api you want to request, examples and explanation below.
    // OpenWeatherMap api documentation https://openweathermap.org/api
    // http://api.openweathermap.org/data/2.5/weather?id=2815076&units=metric&lang=de, i used german, metric system and my hometown to be displayed.
    public static OPEN_WEATHER_MAP_URL1 = 'currentweather';
    // needed the same request in english to cast the OpenWeatherMap icons to weather-icons.
    public static OPEN_WEATHER_MAP_URL2 = 'currentweather_eng';
    // http://api.openweathermap.org/data/2.5/forecast/daily?id=2815076&units=metric&lang=de&cnt=5, same as current, with 5 days forecast.
    public static OPEN_WEATHER_MAP_URL3 = 'forecastweather';
    // needed the same request in english to cast the OpenWeatherMap icons to weather-icons.
    public static OPEN_WEATHER_MAP_URL4 = 'forecastweather_eng';

    // enter the news feed you want in here.
    // i used this online api to convert the news rss xml to json https://api.rss2json.com/v1/api.json?rss_url=
    // just add your news rss url to the end of the api
    public static NEWS_RSS_URL = 'newsrssurl';
    // did the same for sport news
    public static SPORT_NEWS_FUSSBALL_RSS_URL = 'sportnewsrssurl';

    // and the same for quotes rss, i used quotesdayy inspirational quote
    public static QUOTES_RSS_URL = 'quotesrssur';

    // the mapping from OpenWeatherMap icons to weather-icons
    public static ICON_JSON = '../../assets/icons.json';
}
