export const SOCKET_URL = "http://localhost:4000";
export const BASE_URL = "http://localhost:4000/api";

export const CUSTOMER_SIGNUP_ROUTE = "/customer/signup";
export const CUSTOMER_SIGNIN_ROUTE = "/customer/signin";
export const CUSTOMER_SIGNOUT_ROUTE = "/customer/signout";

export const ADMIN_ADD_ROUTE = "/admin/add";
export const ADMIN_SIGNIN_ROUTE = "/admin/signin";
export const ADMIN_SIGNOUT_ROUTE = "/admin/signout";
export const ADMIN_REMOVE_ROUTE = (id: string) => `/admin/remove/${id}`;
export const ADMIN_UPDATE_ROUTE = "/admin/update";
export const ADMIN_GET_ALL_ROUTE = "/admin/all";

export const WAITER_ADD_ROUTE = "/waiter/add";
export const WAITER_SIGNIN_ROUTE = "/waiter/signin";
export const WAITER_SIGNOUT_ROUTE = "/waiter/signout";
export const WAITER_GET_ALL_ROUTE = "/waiter/all";
export const WAITER_REMOVE_ROUTE = (id: string) => `/waiter/remove/${id}`;

export const KITCHEN_ADD_ROUTE = "/kitchen/add";
export const KITCHEN_SIGNIN_ROUTE = "/kitchen/signin";
export const KITCHEN_SIGNOUT_ROUTE = "/kitchen/signout";
export const KITCHEN_GET_ALL_ROUTE = "/kitchen/all";
export const KITCHEN_REMOVE_ROUTE = (id: string) => `/kitchen/remove/${id}`;

export const FOOD_CREATE_ROUTE = "/food/create";
export const FOOD_UPDATE_ROUTE = (id: string) => `/food/update/food/${id}`;
export const FOOD_GET_ROUTE = "/food/all";
export const FOOD_REMOVE_ROUTE = (id: string) => `/food/remove/${id}`;

export const CATEGORY_CREATE_ROUTE = "/category/create";
export const CATEGORY_REMOVE_ROUTE = (id: string) => `/category/remove/${id}`;
export const CATEGORY_GET_ROUTE = "/category/all";

export const TABLE_CREATE_ROUTE = "/table/create";
export const TABLE_REMOVE_ROUTE = (id: string) => `/table/remove/${id}`;
export const TABLE_UPDATE_ROUTE = (id: string) => `/table/update/${id}`;
export const TABLE_GET_ROUTE = "/table/all";

export const ORDER_PLACE_ROUTE = "/order/place";
export const ORDER_UPDATE_ROUTE = (id: string) => `/order/update/${id}`;
export const ORDER_CANCEL_ROUTE = (id: string) => `/order/cancel/${id}`;
export const ORDER_STATUS_UPDATE_ROUTE = (id: string) => `/order/status/${id}`;
export const ORDER_GET_ROUTE = "/order/all";
