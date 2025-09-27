# 🎯 LottoZen - App de Lotería Ética
> *No predice el futuro. Celebra tu intuición, respeta tu bolsillo.*

## 🌟 Descripción

LottoZen es una aplicación web moderna y responsable para generar números de lotería. Combina diferentes métodos de generación con un enfoque ético hacia el juego responsable.

## ✨ Características

### 🎲 Generador de Números
- **Numerológico**: Basado en tu nombre y fecha de nacimiento
- **Aleatorio**: Completamente al azar con algoritmos seguros
- **Manual**: Selecciona tus números favoritos

### 📊 Análisis Inteligente
- Frecuencias históricas de números
- Estadísticas de sorteos pasados
- Patrones y tendencias

### ❤️‍🩹 Juego Responsable
- Configuración de límites de gasto
- Pausas automáticas
- Evaluación de bienestar
- Recordatorios éticos

## 🚀 Tecnologías

### Frontend
- **React 18** con TypeScript
- **Vite** para build optimizado
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React Router** para navegación
- **Zustand** para gestión de estado
- **Axios** para API calls

### Backend
- **FastAPI** (Python)
- **PostgreSQL** para base de datos
- **Redis** para caché
- **Docker** para containerización

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- Python 3.9+
- Docker y Docker Compose

### Desarrollo Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/lottozen.git
cd lottozen
```

2. **Frontend**
```bash
cd frontend
npm install
npm run dev
```

3. **Backend (con Docker)**
```bash
docker-compose up -d
```

4. **Solo Backend**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 🌐 Despliegue

### Netlify (Frontend)
- Configurado automáticamente con `netlify.toml`
- Build command: `npm run build`
- Publish directory: `frontend/dist`

### Variables de Entorno
```env
VITE_API_BASE_URL=https://tu-backend-url.com
```

## 📁 Estructura del Proyecto

```
lottozen/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── store/          # Estados Zustand
│   │   ├── services/       # API services
│   │   └── ...
│   ├── dist/               # Build de producción
│   └── ...
├── backend/                 # API FastAPI
│   ├── app/
│   │   ├── routers/        # Endpoints API
│   │   ├── models/         # Modelos de datos
│   │   └── ...
│   └── ...
├── docker-compose.yml       # Configuración Docker
├── netlify.toml            # Configuración Netlify
└── README.md
```

## 🎯 Características Implementadas

- ✅ Generador numerológico funcional
- ✅ Generador aleatorio seguro
- ✅ Selección manual de números
- ✅ Interfaz responsive y moderna
- ✅ Animaciones fluidas
- ✅ Configuración de build optimizada
- ✅ Despliegue automático en Netlify

## 🔮 Próximas Características

- 📊 Análisis estadístico completo
- ❤️‍🩹 Sistema de juego responsable
- 👤 Perfiles de usuario
- 📱 PWA (Progressive Web App)
- 🔔 Notificaciones de sorteos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## ⚠️ Disclaimer

LottoZen es una herramienta de entretenimiento. Los números generados son aleatorios y no garantizan ningún resultado. Juega responsablemente y solo con dinero que puedas permitirte perder.

---

*Desarrollado con ❤️ para promover el juego responsable*
