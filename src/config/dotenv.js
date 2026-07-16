const ENV = {
    API_URL: process.env.REACT_APP_API_URL,
    APP_NAME: process.env.REACT_APP_NAME,
    APP_VERSION: process.env.REACT_APP_VERSION,
    IS_DEV: process.env.NODE_ENV === "development",
    IS_PROD: process.env.NODE_ENV === "production"
};

export default ENV;