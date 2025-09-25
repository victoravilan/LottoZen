import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🌟 Bienvenido a LottoZen</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-3">🎲 Generador</h2>
          <p className="text-gray-600 mb-4">Crea combinaciones con numerología, aleatorias o manuales.</p>
          <a href="/generate" className="text-indigo-600 hover:text-indigo-800 font-medium">→ Ir al generador</a>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-3">📊 Análisis</h2>
          <p className="text-gray-600 mb-4">Explora frecuencias de números en sorteos pasados.</p>
          <a href="/analysis" className="text-indigo-600 hover:text-indigo-800 font-medium">→ Ver análisis</a>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-3">❤️‍🩹 Juego Responsable</h2>
          <p className="text-gray-600 mb-4">Configura límites, activa pausas y evalúa tu bienestar.</p>
          <a href="/responsible" className="text-indigo-600 hover:text-indigo-800 font-medium">→ Configurar</a>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white">
        <h2 className="text-xl font-bold mb-2">🛡️ Recordatorio Amable</h2>
        <p>❝ La verdadera suerte no está en los números... está en saber cuándo parar. ❞</p>
      </div>
    </div>
  );
};

export default Dashboard;