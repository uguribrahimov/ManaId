import axios from "axios";
// npx json-server --watch public/db.json --port 3000
const apiClient = axios.create({
  baseURL: "https://rough-mighty-dream.glitch.me/",
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("⏳ İstek gönderiliyor:", config);
    return config;
  },
  (error) => {
    console.error("❌ İstek hatası:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("✅ Yanıt alındı:", response);
    return response.data;  
  },
  (error) => {
    console.error("⚠️ Yanıt hatası:", error.response || error);
    return Promise.reject(error);
  }
);

export default apiClient;
