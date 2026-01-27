export interface Exercise {
  id: string;
  name: string;
  repetitions: string;
  material: string;
  "pro-version": string;
  muscles: string;
  img: string;
}

export interface Routine {
  name: string;
  "estimated-time": string;
  "number-cycles": string;
  exercises: Exercise[];
}

export const routineA: Routine = {
  "name": "Rutina A: Tren Inferior y Estabilidad Pélvica",
  "estimated-time": "30-35 minutos",
  "number-cycles": "3 a 4 vueltas (descanso de 60s entre vueltas)",
  "exercises": [
    {
      "id": "A1",
      "name": "Hip Thrust con Goma y Pausa",
      "repetitions": "15-20 reps (aguantando 3 seg arriba)",
      "material": "Goma elástica (rodillas) + Pesas 2kg (cadera) + Sofá",
      "pro-version": "Aumentar el tiempo isométrico arriba a 5 segundos y usar una goma de mayor resistencia.",
      "muscles": "Glúteo mayor, Glúteo medio",
      "img": "Mujer apoyando escápulas en sofá, goma sobre rodillas, elevando cadera hasta la horizontal."
    },
    {
      "id": "A2",
      "name": "Sentadilla Búlgara Asistida",
      "repetitions": "10 reps por pierna",
      "material": "Silla/Sofá (para apoyar empeine trasero) + Pared (equilibrio)",
      "pro-version": "Soltar la pared y sostener las pesas de 2kg en las manos (brazos muertos a los lados).",
      "muscles": "Cuádriceps, Glúteo, Estabilidad de rodilla",
      "img": "Zancada estática con el pie trasero elevado en un banco o sofá."
    },
    {
      "id": "A3",
      "name": "Apresiones de Aductor con Aro",
      "repetitions": "20 reps lentas",
      "material": "Aro de Pilates + Mat",
      "pro-version": "Elevar ligeramente los pies del suelo (posición Table Top) manteniendo lumbar neutra mientras aprietas.",
      "muscles": "Aductores (interior muslo), Suelo pélvico",
      "img": "Tumbada boca arriba, rodillas flexionadas, aro entre las rodillas apretando hacia dentro."
    },
    {
      "id": "A4",
      "name": "Monster Walk (Caminata Lateral)",
      "repetitions": "1 minuto (30 seg cada dirección)",
      "material": "Goma elástica (tobillos)",
      "pro-version": "Bajar más el centro de gravedad (más sentadilla) y poner la goma en la punta de los pies.",
      "muscles": "Glúteo medio (estabilizador de cadera)",
      "img": "De pie, rodillas semiflexionadas, caminando lateralmente como un cangrejo con resistencia."
    },
    {
      "id": "A5",
      "name": "Plancha sobre Fitball",
      "repetitions": "30-45 segundos",
      "material": "Fitball",
      "pro-version": "Hacer pequeños círculos con los codos ('remover la olla') sin mover la cadera.",
      "muscles": "Transverso abdominal, Core profundo",
      "img": "Posición de plancha apoyando los antebrazos sobre el balón suizo."
    }
  ]
};

export const routineB: Routine = {
  "name": "Rutina B: Tren Superior, Postura y Anti-rotación",
  "estimated-time": "30-35 minutos",
  "number-cycles": "3 a 4 vueltas (descanso de 60s entre vueltas)",
  "exercises": [
    {
      "id": "B1",
      "name": "Remo Bilateral con Goma",
      "repetitions": "15 reps",
      "material": "Goma elástica (en pomo puerta o pies)",
      "pro-version": "Aguantar 2 segundos en el punto de máxima contracción (atrás).",
      "muscles": "Dorsal, Romboides (corrector postural)",
      "img": "Sentada o de pie, tirando de la goma hacia las costillas, codos pegados al cuerpo."
    },
    {
      "id": "B2",
      "name": "Pájaro (Vuelos posteriores)",
      "repetitions": "12 reps",
      "material": "Pesas 2kg + Silla",
      "pro-version": "Hacer la bajada (fase excéntrica) muy lenta, en 3 o 4 segundos.",
      "muscles": "Deltoides posterior, Trapecio medio",
      "img": "Sentada, tronco inclinado adelante, abriendo brazos en cruz hacia el techo."
    },
    {
      "id": "B3",
      "name": "Press Pallof",
      "repetitions": "12 reps por lado",
      "material": "Goma elástica (anclada a puerta)",
      "pro-version": "Alejarse un paso más de la puerta para aumentar la tensión de la goma.",
      "muscles": "Oblicuos, Multífidos (protección lumbar)",
      "img": "De pie de perfil a la goma, estirando brazos al frente resistiendo el giro."
    },
    {
      "id": "B4",
      "name": "Fondos en Pared (Push-ups)",
      "repetitions": "12-15 reps",
      "material": "Pared",
      "pro-version": "Hacerlos apoyada en una mesa robusta o encimera (más inclinado = más peso).",
      "muscles": "Pectoral, Tríceps, Deltoides anterior",
      "img": "Flexiones de brazos realizadas de pie contra la pared."
    },
    {
      "id": "B5",
      "name": "Dead Bug (Bicho Muerto) con Fitball",
      "repetitions": "10 reps totales (5 por lado) muy lentas",
      "material": "Fitball + Mat",
      "pro-version": "Presionar el balón con más fuerza entre mano y rodilla antes de mover las extremidades libres.",
      "muscles": "Core anterior, Coordinación lumbopélvica",
      "img": "Tumbada boca arriba, sujetando balón con mano y rodilla contraria, estirando las otras extremidades."
    }
  ]
};

export const routineC: Routine = {
  "name": "Rutina C: Pausas Activas & Oficina (Invisible/Baño)",
  "estimated-time": "5 - 10 minutos (Discontinuo a lo largo del día)",
  "number-cycles": "Realizar ejercicios sueltos cada 90-120 min o aprovechar visitas al baño",
  "exercises": [
    {
      "id": "C1",
      "name": "Activación de Glúteo Invisible",
      "repetitions": "10 reps (aguantando 5 seg la contracción)",
      "material": "Ninguno (se puede hacer de pie o sentada)",
      "pro-version": "Hacerlo a una sola pierna (apoyando el peso en una y contrayendo ese glúteo sin moverte).",
      "muscles": "Glúteo mayor",
      "img": "De pie, apretar ambos glúteos con fuerza como si quisieras sostener una moneda entre ellos."
    },
    {
      "id": "C2",
      "name": "Elevación de Talones (Bombeo venoso)",
      "repetitions": "15 - 20 reps rápidas",
      "material": "Mesa o silla (para leve apoyo)",
      "pro-version": "Hacerlo a una sola pierna para añadir equilibrio y carga.",
      "muscles": "Gemelos, Sóleo (mejora retorno venoso)",
      "img": "De pie, subir y bajar de puntillas rítmicamente."
    },
    {
      "id": "C3",
      "name": "Retroversión Pélvica en Lavabo",
      "repetitions": "10 reps suaves",
      "material": "Lavabo (apoyo de manos)",
      "pro-version": "Hacerlo sin apoyo de manos, controlando solo con el abdomen.",
      "muscles": "Abdominales bajos, Zona lumbar (descompresión L5-S1)",
      "img": "Manos en lavabo, movimiento sutil de pelvis 'escondiendo el culete' y volviendo a neutro."
    },
    {
      "id": "C4",
      "name": "Estiramiento de Psoas de pie",
      "repetitions": "30 seg por lado",
      "material": "Ninguno",
      "pro-version": "Contraer el glúteo de la pierna trasera para intensificar el estiramiento frontal.",
      "muscles": "Psoas ilíaco (flexor de cadera)",
      "img": "Posición de zancada corta, empujando cadera adelante sin arquear lumbares."
    },
    {
      "id": "C5",
      "name": "Sentadilla Isométrica (Wall Sit)",
      "repetitions": "45 - 60 segundos",
      "material": "Pared (idealmente en el baño para privacidad)",
      "pro-version": "Bajar la cadera hasta que esté alineada con las rodillas (90 grados).",
      "muscles": "Cuádriceps, Glúteo",
      "img": "Espalda apoyada en pared, piernas flexionadas como sentada en silla invisible."
    },
    {
      "id": "C6",
      "name": "Apertura Pectoral en Marco",
      "repetitions": "30 seg estáticos",
      "material": "Marco de una puerta",
      "pro-version": "Variar la altura de los brazos (más arriba o más abajo) para estirar fibras distintas.",
      "muscles": "Pectoral mayor y menor",
      "img": "Antebrazos apoyados en los laterales de una puerta, dando un paso al frente."
    },
    {
      "id": "C7",
      "name": "Extensión de Cadera de pie",
      "repetitions": "15 reps por lado",
      "material": "Mesa (apoyo manos)",
      "pro-version": "Mantener la pierna extendida atrás 3 segundos apretando glúteo.",
      "muscles": "Glúteo mayor, Isquios",
      "img": "De pie frente a mesa, llevar pierna recta hacia atrás suavemente sin arquear espalda."
    }
  ]
};
