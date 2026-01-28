# 💪 Stronger - Tu Entrenadora de Fuerza Personal

Una aplicación web progresiva (PWA) diseñada para guiarte en tus rutinas de entrenamiento de fuerza. Con ejercicios detallados, temporizadores de descanso y rutinas adaptadas para diferentes necesidades.

## 🌟 Características

- **3 Rutinas Completas**:
  - **Rutina A**: Tren Inferior y Estabilidad Pélvica (30-35 min)
  - **Rutina B**: Tren Superior, Postura y Anti-rotación (30-35 min)
  - **Rutina C**: Pausas Activas Laborales (5-10 min) - Ejercicios aleatorios para hacer en la oficina

- **Guía Paso a Paso**: Cada ejercicio incluye:
  - Imagen ilustrativa
  - Repeticiones y tiempo
  - Material necesario
  - Músculos trabajados
  - Descripción detallada
  - Versión Pro (expandible)

- **Temporizadores Inteligentes**:
  - Descanso entre ejercicios (30 segundos)
  - Descanso entre ciclos (60 segundos)
  - Pausar/Reanudar
  - Opción de saltar descansos

- **Progreso Visual**: Barra de progreso que muestra tu avance en tiempo real

- **PWA Ready**: Instalable en dispositivos móviles y escritorio

## 🚀 Demo

Visita la aplicación en: [https://BbeatrizSI.github.io/stronger/](https://BbeatrizSI.github.io/stronger/)

## 📱 Instalación como PWA

### En Android/Chrome:
1. Abre la aplicación en Chrome
2. Toca el menú (3 puntos)
3. Selecciona "Instalar aplicación" o "Añadir a pantalla de inicio"

### En iOS/Safari:
1. Abre la aplicación en Safari
2. Toca el botón de compartir
3. Selecciona "Añadir a pantalla de inicio"

### En Escritorio:
1. Abre la aplicación en Chrome/Edge
2. Haz clic en el icono de instalación en la barra de direcciones
3. Confirma la instalación

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Estilos utilitarios
- **PWA** - Progressive Web App

## 📦 Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/BbeatrizSI/stronger.git
cd stronger
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 📂 Estructura del Proyecto

```
stronger/
├── public/
│   ├── exercises/      # Imágenes de ejercicios
│   ├── icons/          # Iconos para PWA
│   └── manifest.json    # Configuración PWA
├── src/
│   ├── components/      # Componentes React
│   │   ├── ExerciseCard.tsx
│   │   ├── RoutineSelector.tsx
│   │   ├── WorkoutGuide.tsx
│   │   ├── OfficeRoutineGuide.tsx
│   │   ├── RestTimer.tsx
│   │   └── CycleRestTimer.tsx
│   ├── data/
│   │   └── routines.ts  # Datos de las rutinas
│   ├── App.tsx
│   └── main.tsx
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions para deploy
```

## 🎯 Rutinas Disponibles

### Rutina A: Tren Inferior y Estabilidad Pélvica
- Hip Thrust con Goma
- Sentadilla Búlgara
- Presiones de Abductores con Aro
- Monster Walk
- Plancha sobre Fitball

**Duración**: 30-35 minutos  
**Ciclos**: 3 a 4 vueltas (descanso de 60s entre vueltas)

### Rutina B: Tren Superior, Postura y Anti-rotación
- Remo Bilateral con Goma
- Pájaro (Vuelos posteriores)
- Press Pallof
- Fondos en Pared (Push-ups)
- Dead Bug (Bicho Muerto) con Fitball

**Duración**: 30-35 minutos  
**Ciclos**: 3 a 4 vueltas (descanso de 60s entre vueltas)

### Rutina C: Pausas Activas Laborales
- Activación de Glúteo Invisible
- Elevación de Talones (Bombeo venoso)
- Retroversión Pélvica en Lavabo
- Estiramiento de Psoas de pie
- Sentadilla Isométrica (Wall Sit)
- Apertura Pectoral en Marco
- Extensión de Cadera de pie

**Duración**: 5-10 minutos (discontinuo)  
**Frecuencia**: Cada 90-120 minutos durante la jornada laboral  
**Característica especial**: Ejercicios en orden aleatorio

## 🔄 Deploy Automático

El proyecto está configurado con GitHub Actions para hacer deploy automático a GitHub Pages cada vez que se hace push a la rama `main`.

## 📝 Licencia

Este proyecto es privado y personal.

## 👤 Autor

**BbeatrizSI**

- GitHub: [@BbeatrizSI](https://github.com/BbeatrizSI)

## 🙏 Agradecimientos

Aplicación diseñada para facilitar el entrenamiento de fuerza en casa con rutinas guiadas y ejercicios adaptados.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
