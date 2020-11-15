const prod = {
  url: {
    API_URL: "https://ec2-100-26-208-96.compute-1.amazonaws.com",
  }
};

const dev = {
  url: {
    API_URL: "http://localhost:5000"
  }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;