export interface Url {
    execution_start_time: string;
    execution_stop_time: string;
    execution_time: string;
    content: string;
  }
  
  export interface Javascript {
    execution_start_time: string;
    execution_stop_time: string;
    execution_time: string;
    instructions_used: string;
    table_name: string;
  }
  
  export interface Diagnostics {
    publiclyCallable: string;
    url: Url;
    javascript: Javascript;
    user_time: string;
    service_time: string;
    build_version: string;
  }
  
  export interface Country {
    code: string;
    type: string;
    woeid: string;
    content: string;
  }
  
  export interface Place {
    name: string;
    country: Country;
  }
  
  export interface Results {
    place: Place;
  }
  
  export interface Query {
    count: number;
    created: string;
    lang: string;
    diagnostics: Diagnostics;
    results: Results;
  }
  
  export interface WeatherDetails {
    query: Query;
  }