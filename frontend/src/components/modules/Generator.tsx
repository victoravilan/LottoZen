import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NumerologyTooltip from '../NumerologyTooltip';
import MysticalStories from '../MysticalStories';

type GeneratorMode = 'selection' | 'numerological' | 'random' | 'manual';

interface LotteryNumbers {
  numbers: number[];
  timestamp: Date;
  mode: string;
}

const Generator: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<GeneratorMode>('selection');
  const [generatedNumbers, setGeneratedNumbers] = useState<LotteryNumbers | null>(null);
  const [manualNumbers, setManualNumbers] = useState<number[]>([]);
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [showMysticalStories, setShowMysticalStories] = useState(false);
  const [randomStoryIndex, setRandomStoryIndex] = useState(0);

  // Mostrar historia aleatoria al cargar el generador
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 21); // 21 historias disponibles
    setRandomStoryIndex(randomIndex);
    
    // Mostrar la historia solo si es la primera vez que se carga el generador en esta sesión
    const hasSeenStory = sessionStorage.getItem('hasSeenMysticalStory');
    if (!hasSeenStory) {
      setShowMysticalStories(true);
      sessionStorage.setItem('hasSeenMysticalStory', 'true');
    }
  }, []);

  // Función para generar números aleatorios
  const generateRandomNumbers = (): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  // Función para generar números numerológicos
  const generateNumerologicalNumbers = (name: string, birthDate: string): number[] => {
    if (!name || !birthDate) return generateRandomNumbers();
    
    const nameValue = name.toLowerCase().split('').reduce((sum, char) => {
      const charCode = char.charCodeAt(0);
      return sum + (charCode >= 97 && charCode <= 122 ? charCode - 96 : 0);
    }, 0);
    
    const dateNumbers = birthDate.split('-').join('').split('').map(Number);
    const birthSum = dateNumbers.reduce((sum, num) => sum + num, 0);
    
    const baseNumbers = [
      (nameValue % 49) + 1,
      (birthSum % 49) + 1,
      ((nameValue + birthSum) % 49) + 1,
      ((nameValue * 2) % 49) + 1,
      ((birthSum * 2) % 49) + 1,
      ((nameValue + birthSum + dateNumbers[0]) % 49) + 1
    ];
    
    const uniqueNumbers = Array.from(new Set(baseNumbers));
    while (uniqueNumbers.length < 6) {
      uniqueNumbers.push(Math.floor(Math.random() * 49) + 1);
    }
    
    return uniqueNumbers.slice(0, 6).sort((a, b) => a - b);
  };

  // Manejar selección de números manuales
  const toggleManualNumber = (number: number) => {
    if (manualNumbers.includes(number)) {
      setManualNumbers(manualNumbers.filter(n => n !== number));
    } else if (manualNumbers.length < 6) {
      setManualNumbers([...manualNumbers, number].sort((a, b) => a - b));
    }
  };

  // Generar números según el modo
  const handleGenerate = () => {
    let numbers: number[] = [];
    let modeText = '';

    switch (mode) {
      case 'random':
        numbers = generateRandomNumbers();
        modeText = 'Aleatorio';
        break;
      case 'numerological':
        numbers = generateNumerologicalNumbers(name, birthDate);
        modeText = 'Numerológico';
        break;
      case 'manual':
        numbers = manualNumbers;
        modeText = 'Manual';
        break;
    }

    if (numbers.length === 6) {
      setGeneratedNumbers({
        numbers,
        timestamp: new Date(),
        mode: modeText
      });
    }
  };

  const resetGenerator = () => {
    setMode('selection');
    setGeneratedNumbers(null);
    setManualNumbers([]);
    setBirthDate('');
    setName('');
  };

  if (mode === 'selection') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🎲 Generador de Números</h1>
          <p className="text-gray-600">Elige tu método preferido para generar números de lotería</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('numerological')}
            className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-2 border-purple-200 rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="font-bold text-xl text-purple-800 mb-2">Numerológico</h3>
            <p className="text-sm text-purple-600">Basado en tu nombre y fecha de nacimiento</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('random')}
            className="p-8 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-2 border-green-200 rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            <div className="text-5xl mb-4">🎲</div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Aleatorio</h3>
            <p className="text-sm text-green-600">Completamente al azar, pura suerte</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode('manual')}
            className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border-2 border-orange-200 rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="font-bold text-xl text-orange-800 mb-2">Manual</h3>
            <p className="text-sm text-orange-600">Elige tus números favoritos</p>
          </motion.button>
        </div>

        <div className="mt-8 text-center space-y-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowMysticalStories(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              ✨ Historias Místicas
            </button>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Volver al inicio
          </button>
        </div>

        <MysticalStories 
          isOpen={showMysticalStories} 
          onClose={() => setShowMysticalStories(false)} 
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {mode === 'numerological' && '🔮 Generador Numerológico'}
          {mode === 'random' && '🎲 Generador Aleatorio'}
          {mode === 'manual' && '✍️ Selección Manual'}
        </h1>
        <button
          onClick={resetGenerator}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
        >
          ← Cambiar modo
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!generatedNumbers ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {mode === 'numerological' && (
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="font-bold text-lg text-purple-800 mb-4">Información Personal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Fecha de nacimiento</label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-3">
                  Los números se generarán basándose en la numerología de tu nombre y fecha de nacimiento.
                </p>
              </div>
            )}

            {mode === 'random' && (
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="font-bold text-lg text-green-800 mb-2">Generación Aleatoria</h3>
                <p className="text-green-600 mb-4">
                  Se generarán 6 números completamente al azar entre 1 y 49.
                </p>
                <div className="text-4xl">🍀</div>
              </div>
            )}

            {mode === 'manual' && (
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-lg text-orange-800 mb-4">
                  Selecciona 6 números ({manualNumbers.length}/6)
                </h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {Array.from({ length: 49 }, (_, i) => i + 1).map((number) => (
                    <NumerologyTooltip key={number} number={number}>
                      <button
                        onClick={() => toggleManualNumber(number)}
                        disabled={!manualNumbers.includes(number) && manualNumbers.length >= 6}
                        className={`
                          w-10 h-10 rounded-lg font-bold text-sm transition-all
                          ${manualNumbers.includes(number)
                            ? 'bg-orange-500 text-white shadow-lg'
                            : 'bg-white border border-orange-300 text-orange-700 hover:bg-orange-100'
                          }
                          ${!manualNumbers.includes(number) && manualNumbers.length >= 6
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:scale-105'
                          }
                        `}
                      >
                        {number}
                      </button>
                    </NumerologyTooltip>
                  ))}
                </div>
                {manualNumbers.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-orange-700 font-medium">Seleccionados:</span>
                    {manualNumbers.map((number) => (
                      <span key={number} className="px-2 py-1 bg-orange-200 text-orange-800 rounded-lg text-sm font-bold">
                        {number}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="text-center">
              <button
                onClick={handleGenerate}
                disabled={
                  (mode === 'numerological' && (!name || !birthDate)) ||
                  (mode === 'manual' && manualNumbers.length !== 6)
                }
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:cursor-not-allowed text-lg"
              >
                ✨ Generar Números
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-200 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">🎉 ¡Tus Números de la Suerte!</h3>
              <div className="flex justify-center gap-4 mb-6">
                {generatedNumbers.numbers.map((number, index) => (
                  <NumerologyTooltip key={number} number={number}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    >
                      {number}
                    </motion.div>
                  </NumerologyTooltip>
                ))}
              </div>
              <div className="text-sm text-indigo-600 space-y-1">
                <p><strong>Método:</strong> {generatedNumbers.mode}</p>
                <p><strong>Generado:</strong> {generatedNumbers.timestamp.toLocaleString('es-ES')}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setGeneratedNumbers(null)}
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
              >
                🔄 Generar Otros
              </button>
              <button
                onClick={resetGenerator}
                className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
              >
                🔀 Cambiar Método
              </button>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                <strong>💡 Recordatorio:</strong> Los números de lotería son completamente aleatorios. 
                Juega con responsabilidad y solo lo que puedas permitirte perder.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowMysticalStories(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                ✨ Historias Místicas
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MysticalStories 
        isOpen={showMysticalStories} 
        onClose={() => setShowMysticalStories(false)}
        initialStoryIndex={randomStoryIndex}
      />
    </div>
  );
};

export default Generator;