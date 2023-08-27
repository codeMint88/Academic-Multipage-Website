const allowedOrigins = [
  "https://your-frontend.fly.dev",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    // remove !origin before hosting the backend
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
