export interface Units {
  distance: string;
  pressure: string;
  speed: string;
  temperature: string;
}

export interface Location {
  city: string;
  country: string;
  region: string;
}

export interface Wind {
  chill: string;
  direction: string;
  speed: string;
}

export interface Atmosphere {
  humidity: string;
  pressure: string;
  rising: string;
  visibility: string;
}

export interface Astronomy {
  sunrise: string;
  sunset: string;
}

export interface Image {
  title: string;
  width: string;
  height: string;
  link: string;
  url: string;
}

export interface Condition {
  code: string;
  date: string;
  temp: string;
  text: string;
}

export interface Forecast {
  code: string;
  date: string;
  day: string;
  high: string;
  low: string;
  text: string;
}

export interface Guid {
  isPermaLink: string;
}

export interface Item {
  title: string;
  lat: string;
  long: string;
  link: string;
  pubDate: string;
  condition: Condition;
  forecast: Forecast[];
  description: string;
  guid: Guid;
}

export interface Channel {
  units: Units;
  title: string;
  link: string;
  description: string;
  language: string;
  lastBuildDate: string;
  ttl: string;
  location: Location;
  wind: Wind;
  atmosphere: Atmosphere;
  astronomy: Astronomy;
  image: Image;
  item: Item;
}

export interface Results {
  channel: Channel;
}

export interface Query {
  count: number;
  created: Date;
  lang: string;
  results: Results;
}
  
  export interface WeatherDetails {
    query: Query;
  }