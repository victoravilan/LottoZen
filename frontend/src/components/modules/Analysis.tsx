import React from 'react';
import { Link } from 'react-router-dom';

const Analysis: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Análisis de Loterías</h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-bold">⚠️ ADVERTENCIA:</p>
        <p>Los números pasados no predicen el futuro. La lotería es azar puro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">EuroMillions</h3>
          <p><strong>Números calientes:</strong> 23, 17, 5</p>
          <p><strong>Números fríos:</strong> 45, 38, 12</p>
          <p className="text-sm text-gray-500 mt-2">Basado en últimos 50 sorteos</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Powerball</h3>
          <p><strong>Números calientes:</strong> 8, 24, 31</p>
          <p><strong>Números fríos:</strong> 59, 63, 4</p>
          <p className="text-sm text-gray-500 mt-2">Basado en últimos 50 sorteos</p>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Analysis;