import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NumerologyTooltipProps {
  number: number;
  children: React.ReactNode;
}

// Función para calcular la esencia numerológica de un número
const calculateEssence = (num: number): number => {
  if (num === 0) return 0;
  if (num <= 9) return num;
  if ([11, 22, 33, 44, 55, 66, 77, 88, 99].includes(num)) return num; // Números maestros
  
  let sum = num;
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return sum;
};

// Función para generar interpretación numerológica completa
const generateNumerologyData = (number: number) => {
  const essence = calculateEssence(number);
  
  // Datos base para números del 0-9
  const baseData = {
    0: { title: "El Vacío Infinito", meaning: "Potencial infinito, vacío creativo", mystical: "Amplifica la energía de otros números. Eternidad y conexión divina." },
    1: { title: "El Iniciador", meaning: "Liderazgo, independencia, nuevos comienzos", mystical: "Unidad primordial, chispa divina. Fuerza yang, masculina y activa." },
    2: { title: "El Cooperador", meaning: "Diplomacia, cooperación, equilibrio", mystical: "Polaridad cósmica, yin y yang. Primera división de la unidad." },
    3: { title: "El Creativo", meaning: "Creatividad, comunicación, expresión", mystical: "Trinidad sagrada. Tesla lo consideraba clave del universo." },
    4: { title: "El Constructor", meaning: "Estabilidad, orden, trabajo duro", mystical: "Cuatro elementos, cuatro direcciones. Manifestación material." },
    5: { title: "El Aventurero", meaning: "Libertad, aventura, cambio", mystical: "Pentagrama, ser humano perfecto. Búsqueda del conocimiento." },
    6: { title: "El Sanador", meaning: "Responsabilidad, cuidado, armonía", mystical: "Estrella de David. Equilibrio entre lo material y espiritual." },
    7: { title: "El Místico", meaning: "Espiritualidad, introspección, verdad", mystical: "Siete chakras, siete cielos. Número más sagrado." },
    8: { title: "El Ejecutivo", meaning: "Poder material, ambición, logros", mystical: "Infinito horizontal. Karma y justicia cósmica." },
    9: { title: "El Humanitario", meaning: "Sabiduría universal, compasión", mystical: "Culminación de la sabiduría. Final antes del nuevo comienzo." }
  };

  // Números maestros especiales
  const masterNumbers = {
    11: { title: "El Visionario", meaning: "Intuición elevada, inspiración espiritual", mystical: "Portal de luz divina. Maestro de la iluminación." },
    22: { title: "El Arquitecto Cósmico", meaning: "Constructor maestro, manifestación de visiones", mystical: "Puede construir imperios espirituales en el mundo físico." },
    33: { title: "El Maestro Sanador", meaning: "Compasión universal, servicio a la humanidad", mystical: "Cristo cósmico. Sanación a través del amor incondicional." },
    44: { title: "El Visionario Práctico", meaning: "Visión espiritual con aplicación material", mystical: "Puente entre mundos. Materializa lo imposible." },
    55: { title: "El Transformador", meaning: "Cambio radical, revolución espiritual", mystical: "Agente del cambio cósmico. Destruye para crear." },
    66: { title: "El Sanador Cósmico", meaning: "Sanación planetaria, amor universal", mystical: "Corazón del cosmos. Sana a través del amor puro." },
    77: { title: "El Místico Supremo", meaning: "Sabiduría oculta, conocimiento esotérico", mystical: "Guardián de los misterios. Acceso a la sabiduría ancestral." },
    88: { title: "El Ejecutor Cósmico", meaning: "Poder material al servicio del espíritu", mystical: "Manifiesta abundancia divina en el plano físico." },
    99: { title: "El Servidor Universal", meaning: "Servicio desinteresado a la humanidad", mystical: "Bodhisattva. Renuncia al nirvana para servir a otros." }
  };

  // Si es un número maestro, usar su interpretación especial
  if (masterNumbers[number as keyof typeof masterNumbers]) {
    const masterData = masterNumbers[number as keyof typeof masterNumbers];
    return {
      title: `${number} - ${masterData.title}`,
      meaning: masterData.meaning,
      mystical: masterData.mystical,
      essence: number,
      ismaster: true
    };
  }

  // Para números compuestos, combinar la interpretación
  const base = baseData[essence as keyof typeof baseData];
  
  if (number <= 9) {
    return {
      title: `${number} - ${base.title}`,
      meaning: base.meaning,
      mystical: base.mystical,
      essence: essence,
      ismaster: false
    };
  }

  // Interpretaciones específicas para números compuestos importantes
  const specialMeanings = {
    10: "Perfección y nuevo ciclo. Fin de una etapa, inicio de otra mayor.",
    12: "Completitud cósmica. Los 12 signos, 12 apóstoles, 12 meses.",
    13: "Transformación y renacimiento. Muerte de lo viejo, nacimiento de lo nuevo.",
    14: "Temperancia y equilibrio. Moderación en todas las cosas.",
    15: "Tentación y materialismo. Prueba de la voluntad espiritual.",
    16: "Destrucción necesaria. La torre que debe caer para renacer.",
    17: "Esperanza y renovación. La estrella que guía en la oscuridad.",
    18: "Ilusión y engaño. Necesidad de discernimiento espiritual.",
    19: "Éxito y realización. El sol que ilumina el camino.",
    20: "Despertar espiritual. El juicio que transforma.",
    21: "Culminación y logro. El mundo alcanzado, la meta cumplida.",
    23: "Versatilidad y comunicación. Múltiples talentos y habilidades.",
    24: "Trabajo duro y recompensa. Esfuerzo que da frutos.",
    25: "Sabiduría a través de la experiencia. Lecciones aprendidas.",
    26: "Responsabilidad y servicio. Carga que se convierte en bendición.",
    27: "Compasión universal. Servicio desinteresado a otros.",
    28: "Liderazgo y autoridad. Poder usado con sabiduría.",
    29: "Intuición y sensibilidad. Percepción más allá de lo físico.",
    30: "Creatividad expandida. Expresión artística elevada.",
    31: "Organización y método. Estructura que libera la creatividad.",
    32: "Cooperación elevada. Trabajo en equipo trascendente.",
    33: "Maestría en el servicio. Sanación a través del amor.",
    34: "Construcción espiritual. Edificar en el plano superior.",
    35: "Aventura del alma. Exploración de nuevos territorios espirituales.",
    36: "Servicio compasivo. Sanación familiar y comunitaria.",
    37: "Búsqueda mística. Investigación de los misterios.",
    38: "Justicia material. Equilibrio entre dar y recibir.",
    39: "Sabiduría creativa. Expresión de la verdad universal.",
    40: "Transformación completa. Muerte del ego, renacimiento espiritual.",
    41: "Nuevo liderazgo. Iniciación en niveles superiores.",
    42: "Cooperación cósmica. Trabajo con fuerzas universales.",
    43: "Creatividad disciplinada. Arte al servicio de lo sagrado.",
    44: "Construcción maestra. Manifestación de visiones elevadas.",
    45: "Libertad espiritual. Aventura en planos superiores.",
    46: "Servicio material. Sanación a través de recursos físicos.",
    47: "Misticismo práctico. Espiritualidad aplicada a la vida.",
    48: "Justicia superior. Equilibrio kármico perfecto.",
    49: "Sabiduría completada. Fin de un gran ciclo de aprendizaje.",
    50: "Libertad total. Liberación de todas las ataduras.",
    51: "Liderazgo innovador. Pionero en nuevos caminos.",
    52: "Cooperación intuitiva. Trabajo guiado por la sabiduría interior.",
    53: "Expresión libre. Creatividad sin limitaciones.",
    54: "Construcción armoniosa. Edificar con amor y sabiduría.",
    55: "Transformación radical. Cambio revolucionario.",
    56: "Servicio intuitivo. Sanación guiada por la intuición.",
    57: "Misticismo elevado. Conexión directa con lo divino.",
    58: "Poder equilibrado. Autoridad al servicio del bien común.",
    59: "Compasión infinita. Amor sin condiciones ni límites.",
    60: "Servicio perfecto. Dedicación total al bienestar ajeno.",
    61: "Liderazgo espiritual. Guía iluminada para otros.",
    62: "Cooperación divina. Trabajo en sintonía con el cosmos.",
    63: "Creatividad sagrada. Arte que eleva el espíritu.",
    64: "Construcción eterna. Obras que trascienden el tiempo.",
    65: "Aventura cósmica. Exploración de dimensiones superiores.",
    66: "Sanación planetaria. Amor que abraza a toda la humanidad.",
    67: "Sabiduría ancestral. Conocimiento de los antiguos maestros.",
    68: "Abundancia espiritual. Riqueza que nutre el alma.",
    69: "Servicio universal. Dedicación a toda forma de vida.",
    70: "Perfección mística. Unión completa con lo divino.",
    71: "Intuición maestra. Percepción directa de la verdad.",
    72: "Cooperación celestial. Trabajo con seres de luz.",
    73: "Expresión divina. Creatividad que refleja la perfección cósmica.",
    74: "Orden superior. Estructura que refleja la armonía universal.",
    75: "Libertad cósmica. Movimiento libre en todas las dimensiones.",
    76: "Amor incondicional. Compasión que abraza todo lo existente.",
    77: "Conocimiento oculto. Acceso a los misterios más profundos.",
    78: "Justicia cósmica. Equilibrio perfecto en todos los planos.",
    79: "Sabiduría infinita. Comprensión total de la existencia.",
    80: "Poder divino. Autoridad que emana de la fuente suprema.",
    81: "Nuevo cosmos. Iniciación en realidades superiores.",
    82: "Equilibrio cósmico. Armonía perfecta entre todos los opuestos.",
    83: "Creatividad infinita. Expresión ilimitada de la belleza divina.",
    84: "Construcción universal. Edificación de nuevos mundos.",
    85: "Aventura eterna. Exploración sin fin de la existencia.",
    86: "Servicio cósmico. Dedicación a la evolución universal.",
    87: "Misticismo supremo. Unión directa con la consciencia cósmica.",
    88: "Abundancia infinita. Riqueza que fluye de la fuente eterna.",
    89: "Compasión cósmica. Amor que abraza toda la creación.",
    90: "Servicio perfecto. Dedicación total a la voluntad divina.",
    91: "Liderazgo cósmico. Guía para la evolución de la consciencia.",
    92: "Cooperación universal. Trabajo en unidad con toda la existencia.",
    93: "Expresión cósmica. Creatividad que refleja la mente divina.",
    94: "Orden divino. Estructura perfecta del cosmos.",
    95: "Libertad absoluta. Movimiento libre en la consciencia infinita.",
    96: "Amor universal. Compasión que abraza toda forma de vida.",
    97: "Sabiduría cósmica. Conocimiento directo de la verdad suprema.",
    98: "Justicia divina. Equilibrio perfecto de la ley cósmica.",
    99: "Perfección absoluta. Culminación de toda evolución posible."
  };

  const specialMeaning = specialMeanings[number as keyof typeof specialMeanings];
  
  return {
    title: `${number} - ${base.title} Expandido`,
    meaning: specialMeaning || `${base.meaning} (Esencia ${essence})`,
    mystical: `${base.mystical} Número compuesto que amplifica la energía del ${essence}.`,
    essence: essence,
    ismaster: false
  };
};

const combinationMeanings = {
  "11": "Número Maestro: Intuición elevada, inspiración espiritual, canal de luz divina.",
  "22": "Número Maestro: Constructor maestro, manifestación de grandes visiones en la realidad.",
  "33": "Número Maestro: Maestro sanador, compasión universal, servicio a la humanidad.",
  "13": "Transformación y renacimiento, muerte de lo viejo para dar paso a lo nuevo.",
  "21": "Éxito y logros, culminación de esfuerzos, victoria después de la lucha.",
  "27": "Compasión universal, servicio desinteresado, sabiduría aplicada al bien común.",
  "36": "Creatividad al servicio del amor, expresión artística con propósito humanitario.",
  "39": "Creatividad iluminada, expresión de la sabiduría universal a través del arte.",
  "69": "Servicio compasivo, sanación a través del amor incondicional."
};

const NumerologyTooltip: React.FC<NumerologyTooltipProps> = ({ number, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setIsVisible(!isVisible);
  };

  const data = generateNumerologyData(number);
  if (!data) return <>{children}</>;

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="cursor-pointer relative"
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <>
            {/* Overlay para móviles */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsVisible(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="fixed md:absolute z-50 bg-white rounded-xl shadow-2xl border border-purple-200 p-6 max-w-sm w-80"
              style={{
                left: window.innerWidth < 768 ? '50%' : position.x,
                top: window.innerWidth < 768 ? '50%' : position.y,
                transform: window.innerWidth < 768 
                  ? 'translate(-50%, -50%)' 
                  : 'translate(-50%, -100%)'
              }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
                <h3 className="text-lg font-bold text-purple-800">{data.title}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Significado:</h4>
                  <p className="text-gray-600">{data.meaning}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Aspecto Místico:</h4>
                  <p className="text-gray-600">{data.mystical}</p>
                </div>

                {/* Mostrar combinaciones relevantes */}
                {Object.entries(combinationMeanings).filter(([combo]) => 
                  combo.includes(number.toString())
                ).slice(0, 2).map(([combo, meaning]) => (
                  <div key={combo} className="bg-purple-50 p-2 rounded">
                    <h4 className="font-semibold text-purple-800 text-xs">Combinación {combo}:</h4>
                    <p className="text-purple-600 text-xs">{meaning}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NumerologyTooltip;