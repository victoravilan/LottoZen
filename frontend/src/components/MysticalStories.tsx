import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MysticalStoriesProps {
  isOpen: boolean;
  onClose: () => void;
  initialStoryIndex?: number;
}

const mysticalStories = [
  {
    id: 1,
    title: "Tesla y el 3-6-9",
    numbers: [3, 6, 9],
    story: "Nikola Tesla tenía una obsesión con los números 3, 6 y 9. Creía que estos números eran la clave para entender el universo. 'Si supieras la magnificencia del 3, 6 y 9, tendrías la clave del universo', decía. Tesla caminaba alrededor de un edificio 3 veces antes de entrar, y siempre pedía 18 servilletas (1+8=9).",
    meaning: "El 3 representa la creatividad divina, el 6 la armonía perfecta, y el 9 la sabiduría universal. Juntos forman el triángulo sagrado de la manifestación."
  },
  {
    id: 2,
    title: "La Secuencia de Fibonacci",
    numbers: [1, 1, 2, 3, 5, 8],
    story: "Leonardo Fibonacci descubrió una secuencia donde cada número es la suma de los dos anteriores. Esta secuencia aparece en la naturaleza: pétalos de flores, espirales de caracolas, galaxias. Los antiguos griegos la llamaban 'la proporción divina'.",
    meaning: "Representa el crecimiento orgánico y la armonía natural. Es el código matemático de la belleza y la perfección en la naturaleza."
  },
  {
    id: 3,
    title: "Los 7 Chakras Sagrados",
    numbers: [7, 14, 21],
    story: "En la tradición hindú, el cuerpo humano tiene 7 centros de energía principales. Cada chakra vibra en una frecuencia específica. Los maestros espirituales enseñan que meditar 21 días (3x7) puede activar completamente un chakra.",
    meaning: "El 7 es la perfección espiritual, el 14 (2x7) es la transformación dual, y el 21 (3x7) es la maestría completa."
  },
  {
    id: 4,
    title: "El Número de Oro: 1.618",
    numbers: [1, 6, 1, 8],
    story: "Los antiguos arquitectos griegos usaban la proporción áurea (1.618) para construir templos perfectos. Esta proporción aparece en el Partenón, las pirámides de Egipto, y en obras de Leonardo da Vinci como la Mona Lisa.",
    meaning: "Representa la belleza divina y la perfección estética. Es la proporción que el ojo humano encuentra más agradable."
  },
  {
    id: 5,
    title: "Los 12 Signos del Zodíaco",
    numbers: [1, 2, 3, 6, 12],
    story: "Los babilonios dividieron el cielo en 12 secciones, creando el zodíaco. Cada signo gobierna 30 grados del círculo celestial. Los antiguos creían que estos números contenían los secretos del destino humano.",
    meaning: "El 12 es la completitud cósmica, la unión del 3 (espíritu) y el 4 (materia), representando la totalidad de la experiencia humana."
  },
  {
    id: 6,
    title: "La Estrella de David: 6 Puntas",
    numbers: [6, 12, 18],
    story: "La estrella de seis puntas simboliza la unión del cielo y la tierra. Cada triángulo representa una dirección: uno apunta hacia arriba (espíritu), otro hacia abajo (materia). Los cabalistas la usan para invocar protección divina.",
    meaning: "El 6 es la armonía perfecta, el equilibrio entre lo material y lo espiritual. Representa la responsabilidad y el servicio amoroso."
  },
  {
    id: 7,
    title: "Los 40 Días de Transformación",
    numbers: [4, 0, 40],
    story: "En muchas tradiciones espirituales, 40 días es el período de transformación: Jesús ayunó 40 días, Moisés estuvo 40 días en el monte Sinaí, Buda meditó bajo el árbol Bodhi durante 40 días. Los científicos confirman que se necesitan 40 días para formar un nuevo hábito.",
    meaning: "El 40 (4x10) representa la transformación completa, la muerte del ego y el renacimiento espiritual."
  },
  {
    id: 8,
    title: "El Infinito: Símbolo del 8",
    numbers: [8, 16, 24],
    story: "El símbolo del infinito (∞) es un 8 acostado. Los antiguos matemáticos griegos lo usaban para representar lo ilimitado. En la numerología china, el 8 es el número más afortunado porque suena como 'prosperidad' en mandarín.",
    meaning: "El 8 representa el equilibrio perfecto entre lo material y lo espiritual, el karma y la justicia cósmica."
  },
  {
    id: 9,
    title: "Los 9 Mundos Nórdicos",
    numbers: [9, 18, 27],
    story: "En la mitología nórdica, existen 9 mundos conectados por el árbol Yggdrasil. Odín se colgó del árbol durante 9 días y 9 noches para obtener la sabiduría de las runas. El 9 era considerado el número de la sabiduría suprema.",
    meaning: "El 9 es la culminación de la sabiduría, la compasión universal y la iluminación espiritual."
  },
  {
    id: 10,
    title: "Los 13 Ciclos Lunares",
    numbers: [1, 3, 13],
    story: "Un año tiene aproximadamente 13 ciclos lunares completos. Las culturas matriarcales antiguas basaban sus calendarios en estos ciclos. El 13 era sagrado para las diosas lunares y representaba la renovación y la transformación.",
    meaning: "El 13 representa la muerte y renacimiento, la transformación necesaria para el crecimiento espiritual."
  },
  {
    id: 11,
    title: "El 11:11 Portal Cósmico",
    numbers: [1, 1, 11],
    story: "Muchas personas reportan ver 11:11 en relojes repetidamente. Los numerólogos creen que es un portal cósmico, un momento donde el velo entre dimensiones es más delgado. Se dice que es el momento perfecto para hacer un deseo.",
    meaning: "El 11 es un número maestro que representa la intuición elevada y la conexión con la sabiduría superior."
  },
  {
    id: 12,
    title: "Los 22 Arcanos Mayores",
    numbers: [2, 2, 22],
    story: "El Tarot tiene 22 cartas de Arcanos Mayores, cada una representando una etapa del viaje del alma. Los cabalistas conectan estas cartas con las 22 letras del alfabeto hebreo, consideradas las fuerzas creativas del universo.",
    meaning: "El 22 es el número maestro constructor, capaz de manifestar grandes visiones en la realidad física."
  },
  {
    id: 13,
    title: "Los 33 Años de Cristo",
    numbers: [3, 3, 33],
    story: "Jesús vivió 33 años según la tradición cristiana. En la masonería, el grado 33 es el más alto. Los hindúes creen que hay 33 dioses principales. Este número representa la maestría espiritual completa.",
    meaning: "El 33 es el número maestro sanador, representa la compasión universal y el servicio desinteresado a la humanidad."
  },
  {
    id: 14,
    title: "Los 108 Nombres Sagrados",
    numbers: [1, 0, 8],
    story: "En el hinduismo y budismo, 108 es un número sagrado. Los malas tienen 108 cuentas, hay 108 nombres de dioses, 108 puntos marma en el cuerpo. Los matemáticos descubrieron que 108 = 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8².",
    meaning: "El 108 representa la totalidad cósmica, la unión de todos los aspectos de la existencia."
  },
  {
    id: 15,
    title: "La Secuencia 3-7-21",
    numbers: [3, 7, 21],
    story: "Los antiguos alquimistas usaban la progresión 3-7-21 para la transmutación. 3 días para la purificación inicial, 7 días para la transformación, 21 días para la manifestación completa. Esta secuencia aparece en muchas tradiciones de sanación.",
    meaning: "Representa el proceso completo de transformación: iniciación (3), perfección (7), y maestría (21)."
  },
  {
    id: 16,
    title: "Los 5 Elementos Chinos",
    numbers: [5, 10, 15],
    story: "La medicina china se basa en 5 elementos: madera, fuego, tierra, metal y agua. Cada elemento tiene 2 órganos asociados (10 total), y el ciclo completo se renueva cada 15 días según el calendario lunar chino.",
    meaning: "El 5 representa la experiencia humana completa a través de los sentidos y la conexión con la naturaleza."
  },
  {
    id: 17,
    title: "Los 4 Elementos Occidentales",
    numbers: [4, 8, 12],
    story: "Los antiguos griegos identificaron 4 elementos: fuego, agua, aire y tierra. Cada elemento tiene 2 cualidades (8 total), y se combinan en 12 formas diferentes según la astrología occidental.",
    meaning: "El 4 representa la estabilidad material y la manifestación de las ideas espirituales en el mundo físico."
  },
  {
    id: 18,
    title: "El Número Pi: 3.14159",
    numbers: [3, 1, 4, 1, 5, 9],
    story: "Pi es la relación entre la circunferencia y el diámetro de cualquier círculo. Los antiguos consideraban el círculo la forma más perfecta, y Pi era el número que conectaba lo finito con lo infinito. Aparece en fenómenos naturales inexplicables.",
    meaning: "Pi representa la perfección divina y la conexión entre lo conocido y lo misterioso del universo."
  },
  {
    id: 19,
    title: "Los 7 Días de la Creación",
    numbers: [7, 14, 21],
    story: "Según el Génesis, Dios creó el mundo en 7 días. Muchas culturas adoptaron la semana de 7 días. Los babilonios asociaron cada día con un planeta visible, creando la base de nuestro calendario actual.",
    meaning: "El 7 representa la perfección divina y la completitud de los ciclos naturales y espirituales."
  },
  {
    id: 20,
    title: "Los 12 Apóstoles",
    numbers: [1, 2, 12],
    story: "Jesús eligió 12 apóstoles, número que representa la completitud espiritual. En muchas tradiciones, 12 es el número de la perfección: 12 meses, 12 signos zodiacales, 12 tribus de Israel, 12 caballeros de la mesa redonda.",
    meaning: "El 12 simboliza la organización divina y la completitud de la experiencia espiritual humana."
  },
  {
    id: 21,
    title: "El Cubo de Metatrón",
    numbers: [1, 3, 6, 10],
    story: "El Cubo de Metatrón contiene los 5 sólidos platónicos y representa toda la geometría sagrada del universo. Tiene 13 círculos conectados por líneas sagradas. Los místicos lo usan para la protección y la conexión con la sabiduría angelical.",
    meaning: "Representa la estructura geométrica perfecta del universo y la conexión entre todas las formas de vida."
  }
];

const MysticalStories: React.FC<MysticalStoriesProps> = ({ isOpen, onClose, initialStoryIndex = 0 }) => {
  const [currentStory, setCurrentStory] = useState(initialStoryIndex);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Actualizar la historia cuando cambie el índice inicial
  useEffect(() => {
    if (initialStoryIndex !== undefined) {
      setCurrentStory(initialStoryIndex);
    }
  }, [initialStoryIndex]);

  useEffect(() => {
    if (isAutoPlay && isOpen) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % mysticalStories.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, isOpen]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % mysticalStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + mysticalStories.length) % mysticalStories.length);
  };

  const randomStory = () => {
    const randomIndex = Math.floor(Math.random() * mysticalStories.length);
    setCurrentStory(randomIndex);
  };

  if (!isOpen) return null;

  const story = mysticalStories[currentStory];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Historias Místicas</h2>
                <p className="text-purple-100">Sabiduría ancestral de los números</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-purple-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-2 mb-4">
                {story.numbers.map((num, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg"
                  >
                    {num}
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{story.title}</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📖 Historia:</h4>
                <p className="text-gray-700 leading-relaxed">{story.story}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">✨ Significado Místico:</h4>
                <p className="text-purple-700 leading-relaxed">{story.meaning}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <button
                onClick={prevStory}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              >
                ← Anterior
              </button>
              
              <button
                onClick={randomStory}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-lg font-medium transition-all"
              >
                🎲 Aleatoria
              </button>
              
              <button
                onClick={nextStory}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              >
                Siguiente →
              </button>
              
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isAutoPlay 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isAutoPlay ? '⏸️ Pausar' : '▶️ Auto'}
              </button>
            </div>

            {/* Progress indicator */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStory + 1) / mysticalStories.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MysticalStories;