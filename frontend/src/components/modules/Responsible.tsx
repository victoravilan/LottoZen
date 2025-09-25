import React from 'react';
import { Link } from 'react-router-dom';

const Responsible: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">❤️‍🩹 Juego Responsable</h1>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">🎯 Límite de gasto mensual</h3>
          <p>Actual: $100</p>
          <Link to="/profile" className="text-indigo-600 hover:underline text-sm">Editar en perfil →</Link>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">🧘‍♀️ Modo Zen (Pausa Activa)</h3>
          <p>Activa una pausa de 24h, 3d o 7d para desconectarte.</p>
          <button
            onClick={() => alert("¡Modo Zen activado por 24 horas!")}
            className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
          >
            Activar Pausa de 24h
          </button>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="font-bold mb-2">🆘 ¿Necesitas ayuda?</h3>
          <ul className="text-sm space-y-1">
            <li>• <a href="https://www.jugarbien.es" target="_blank" rel="noreferrer" className="text-red-700 hover:underline">JugarBien.es</a></li>
            <li>• <a href="https://www.gamblersanonymous.org" target="_blank" rel="noreferrer" className="text-red-700 hover:underline">Gamblers Anonymous</a></li>
            <li>• Teléfono de ayuda: 900 15 00 15</li>
          </ul>
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

export default Responsible;