const prod = {
  url: {
    API_URL: "http://ec2-52-201-160-8.compute-1.amazonaws.com",
  }
};

const dev = {
  url: {
    API_URL: "http://localhost:5000"
  }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
