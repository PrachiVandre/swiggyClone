// src/utils/constant.jsx

const proxy = "https://thingproxy.freeboard.io/fetch/";

// Swiggy endpoints
const RESTAURANTS_ENDPOINT =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const MENU_ENDPOINT_BASE =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=";

// Do not encode the endpoint when using thingproxy
export const API_URL = proxy + RESTAURANTS_ENDPOINT;
export const SINGLE_PAGE = (restaurantId) =>
  proxy + MENU_ENDPOINT_BASE + restaurantId;

export const CARD_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const MENU_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
