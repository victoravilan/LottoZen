import React from 'react';
import { useNavigate } from 'react-router-dom';

const Generator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🎲 Generador de Números</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => alert("Modo Numerológico aún en desarrollo")}
          className="p-6 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-all"
        >
          <div className="text-4xl mb-2">🔮</div>
          <h3 className="font-bold text-lg text-purple-800">Numerológico</h3>
          <p className="text-sm text-purple-600">Basado en tu perfil</p>
        </button>

        <button
          onClick={() => alert("Modo Aleatorio aún en desarrollo")}
          className="p-6 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all"
        >
          <div className="text-4xl mb-2">🎲</div>
          <h3 className="font-bold text-lg text-green-800">Aleatorio</h3>
          <p className="text-sm text-green-600">Totalmente al azar</p>
        </button>

        <button
          onClick={() => alert("Modo Manual aún en desarrollo")}
          className="p-6 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition-all"
        >
          <div className="text-4xl mb-2">✍️</div>
          <h3 className="font-bold text-lg text-orange-800">Manual</h3>
          <p className="text-sm text-orange-600">Elige tú mismo</p>
        </button>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Generator;