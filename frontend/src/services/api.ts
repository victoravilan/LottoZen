import axios from 'axios';

// Configuración de API - usa variable de entorno o modo mock para producción
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const IS_PRODUCTION = import.meta.env.PROD;
const USE_MOCK_API = !API_BASE_URL || IS_PRODUCTION;

// Crear instancia de axios solo si no estamos en modo mock
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores y modo mock
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (USE_MOCK_API) {
      // En modo mock, devolver datos simulados
      return Promise.resolve({
        data: { message: 'Mock API response' },
        status: 200,
        statusText: 'OK'
      });
    }
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor para requests en modo mock
api.interceptors.request.use(
  (config) => {
    if (USE_MOCK_API) {
      // Simular respuesta exitosa para modo mock
      return Promise.reject({
        response: {
          data: { message: 'Mock API - Backend not available' },
          status: 200,
          statusText: 'OK'
        },
        config
      });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;