export const API_URL = "http://localhost:5000/api/restaurants"
                        
export const CARD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

export const SINGLE_PAGE = (restaurantId) => `http://localhost:5000/api/menu/${restaurantId}`;
