import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 'generator',
      title: 'Generador',
      icon: '🎲',
      description: 'Crea combinaciones con numerología, aleatorias o manuales',
      gradient: 'from-purple-500 to-indigo-600',
      hoverGradient: 'from-purple-600 to-indigo-700',
      path: '/generate'
    },
    {
      id: 'analysis',
      title: 'Análisis',
      icon: '📊',
      description: 'Explora frecuencias de números en sorteos pasados',
      gradient: 'from-green-500 to-teal-600',
      hoverGradient: 'from-green-600 to-teal-700',
      path: '/analysis'
    },
    {
      id: 'responsible',
      title: 'Juego Responsable',
      icon: '❤️‍🩹',
      description: 'Configura límites, activa pausas y evalúa tu bienestar',
      gradient: 'from-orange-500 to-red-600',
      hoverGradient: 'from-orange-600 to-red-700',
      path: '/responsible'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🎯</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">LottoZen</h1>
                <p className="text-sm text-gray-600">Juega con conciencia</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                U
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🌟 Bienvenido a LottoZen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu compañero inteligente para jugar lotería de manera responsable y consciente
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(feature.path)}
              className="cursor-pointer group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.gradient} group-hover:${feature.hoverGradient}`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} group-hover:${feature.hoverGradient} text-white font-medium rounded-lg transition-all`}>
                      Explorar →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">0</div>
            <div className="text-gray-600">Números Generados</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Juego Responsable</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-600">Posibilidades</div>
          </div>
        </motion.div>

        {/* Reminder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl"
        >
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold mb-4">Recordatorio Amable</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            ❝ La verdadera suerte no está en los números... está en saber cuándo parar. ❞
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/responsible')}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-medium transition-all"
            >
              Configurar Límites →
            </button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">Acciones Rápidas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/generate')}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              🎲 Generar Números
            </button>
            <button
              onClick={() => navigate('/analysis')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              📊 Ver Estadísticas
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;