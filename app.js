/**
 * ================================================================
 * SIMULADOR MESA ELECTORAL 2026 — ONPE PERÚ
 * Archivo: app.js
 * Autor: Eduardo Ch. — Coordinador de Mesa
 * ================================================================
 */

'use strict';

/* ================================================================
   1. DATOS DEL SIMULADOR
   ================================================================ */

const SECCIONES = [
  {
    id: 1,
    emoji: '📦',
    titulo: 'Instalación de Mesa',
    horario: '6:00 – 7:00 a.m.',
    resumen: 'Preparación del espacio y verificación de materiales antes de recibir al primer elector. Esta etapa es fundamental para garantizar el correcto funcionamiento de la jornada electoral.',
    pasos: [
      {
        titulo: 'Recepción de la Caja ONPE',
        subtitulo: 'Abrir la caja con todos los miembros presentes',
        descripcion: 'Al llegar al local de votación, recibirás la caja oficial de la ONPE. Esta caja contiene todo el material necesario para la jornada. Es indispensable que los 3 miembros de mesa estén presentes durante la apertura.',
        checklist: [
          { id: 'c1_1', texto: 'Llegar al local de votación puntualmente', requerido: true },
          { id: 'c1_2', texto: 'Confirmar que los 3 miembros de mesa están presentes', requerido: true },
          { id: 'c1_3', texto: 'Recibir la caja oficial de la ONPE', requerido: true },
          { id: 'c1_4', texto: 'Abrir la caja en presencia de todos los miembros', requerido: true },
          { id: 'c1_5', texto: 'Verificar Paquete de Útiles', requerido: true },
          { id: 'c1_6', texto: 'Verificar Paquete de Instalación y Sufragio', requerido: true },
          { id: 'c1_7', texto: 'Verificar Paquete de Escrutinio (NO abrir todavía)', requerido: true },
        ],
        validacion: 'El personero puede acompañar la verificación de los paquetes, pero no puede interferir con el proceso.',
        noHacer: 'NO abrir el Paquete de Escrutinio hasta que finalice la votación.',
        alerta: {
          tipo: 'critica',
          titulo: '⚠️ Alerta Crítica — Miembros Faltantes',
          texto: 'Si a las 7:00 a.m. no están presentes los 3 miembros de mesa, el Presidente debe llamar a personas de la fila de espera de esa misma mesa para completar los cargos faltantes.',
        },
        tieneEjemplo: false, tipoEjemplo: 'caja_onpe',
        tituloEjemplo: 'Contenido de la Caja ONPE',
        captionEjemplo: 'La caja contiene tres paquetes diferenciados. Identifícalos y verifica que estén sellados antes de abrirlos.',
        alertaAlEntrar: false,
        mediaReal: {
          tipo:      'imagen',
          src:       'images/miembros-no-sorteados.jpg',
          alt:       'Fotografía real de la Caja ONPE con sus tres paquetes',
          titulo:    'Miembros NO SORTEADOS — Fotografía Real',
          subtitulo: 'Módulo 1 · Paso 1 de 5 — Recepción de la Caja ONPE',
        },
      },
      {
        titulo: 'Verificación del Local',
        subtitulo: 'Preparar el espacio físico para la votación',
        descripcion: 'Una vez abierta la caja, prepara el local colocando la documentación visible para los electores y asegurando que la cabina de votación esté correctamente ubicada.',
        checklist: [
          { id: 'c1_8', texto: 'Verificar la relación de electores en el exterior del Aula', requerido: true },
          { id: 'c1_9', texto: 'Verificar el cartel de candidatos en la cabina de votación', requerido: true },
          { id: 'c1_10', texto: 'Verificar que la cabina esté correctamente instalada', requerido: true },
          { id: 'c1_11', texto: 'Asegurar que el ánfora esté vacía y en su lugar', requerido: true },
        ],
        validacion: 'El personero puede acompañar esta verificación. Si encuentra alguna irregularidad, puede anotarla en su acta personal.',
        noHacer: null,
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'local_votacion',
        tituloEjemplo: 'Distribución del Local de Votación',
        captionEjemplo: 'La cabina garantiza la privacidad del votante. El ánfora permanece visible para todos durante la votación.',
        alertaAlEntrar: false,
      },
      {
        titulo: 'Firma de las Cédulas de Votación',
        subtitulo: 'Contar y firmar el reverso de todas las cédulas',
        descripcion: 'El Presidente de Mesa debe contar todas las cédulas de votación y firmar el reverso de cada una. Este paso es esencial para garantizar la autenticidad de los votos.',
        checklist: [
          { id: 'c1_12', texto: 'Verificar cédulas de sufragio en el rótulo', requerido: true },
          { id: 'c1_13', texto: 'Verificar que la cantidad cédulas de sufragio coincida con el total de electores hábiles', requerido: true },
          { id: 'c1_14', texto: 'Firmar el reverso de TODAS las cédulas por los tres miembros', requerido: true },
          { id: 'c1_15', texto: 'Invitar al personero a firmar también (es opcional)', requerido: false },
        ],
        validacion: 'La cantidad de cédulas firmadas debe ser EXACTAMENTE igual al total de electores hábiles. Si hay diferencia, anotar en observaciones del Acta.',
        noHacer: 'NO entregar cédulas sin la firma del Presidente. Una cédula sin firma será considerada nula durante el escrutinio.',
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'cedula_votacion',
        tituloEjemplo: 'Cédula de Votación — Vista Frontal y Reverso',
        captionEjemplo: 'El Presidente firma en el reverso de la cédula. La firma debe ser legible. El personero puede agregar su rúbrica opcionalmente.',
        alertaAlEntrar: false,
      mediaReal: {
tipo: 'video',
src: 'images/CEDULAS_FIRMADAS.mp4',
alt: 'Fotografía de la Cédula de Votación',
titulo: 'Cédula de Votación — Documento Real',
subtitulo: 'Módulo 1 · Paso 3 de 5 — Vista Frontal y Reverso',
poster: 'images/acta-instalacion.jpg',
fuentes: [
{ src: 'images/CEDULAS_FIRMADAS.mp4', mime: 'video/mp4' },
],
},
      },
      {
        titulo: 'Control de Asistencia de Miembros',
        subtitulo: 'Registrar la asistencia de los 3 miembros',
        descripcion: 'Antes de abrir la votación, completa la Hoja de Control de Asistencia. Este documento es parte del Paquete de Instalación y tiene valor legal.',
        checklist: [
          { id: 'c1_16', texto: 'Abrir la Hoja de Control de Asistencia', requerido: true },
          { id: 'c1_17', texto: 'Firmar y colocar la huella dactilar en el espacio correspondiente', requerido: true },
          { id: 'c1_18', texto: 'Escribir "FALTÓ" para quienes no asistieron', requerido: true },
          { id: 'c1_19', texto: 'Todos los miembros presentes firman la hoja', requerido: true },
        ],
        validacion: 'Si algún miembro fue reemplazado por persona de la fila, registrar su nombre completo y DNI en el campo correspondiente.',
        noHacer: null, alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'control_asistencia',
        tituloEjemplo: 'Hoja de Control de Asistencia',
        captionEjemplo: 'Modelo de la hoja de asistencia. Todos los presentes deben firmar. Los ausentes se registran como "FALTÓ".',
        alertaAlEntrar: false,
        mediaReal: {
          tipo: 'video',
          src: 'images/asistencia_llenado.mp4',
          alt: 'Fotografía de la Hoja de Control de Asistencia de Miembros de Mesa',
          titulo: 'Hoja de Control de Asistencia — Documento Real',
          subtitulo: 'Módulo 1 · Paso 4 de 5 — Control de Asistencia de Miembros',
          poster: 'images/acta-instalacion.jpg',
          fuentes: [
          { src: 'images/asistencia_llenado.mp4', mime: 'video/mp4' },
          ],
          },
      },
      {
        titulo: 'Acta de Instalación — Sección A',
        subtitulo: 'Completar el Acta oficial de apertura',
        descripcion: 'El último paso antes de abrir la votación es completar la Sección A del Acta Electoral. Este documento certifica que la mesa fue instalada correctamente.',
        checklist: [
          { id: 'c1_20', texto: 'Completar todos los campos de la Sección A del Acta', requerido: true },
          { id: 'c1_21', texto: 'Registrar la hora exacta de inicio (no antes de las 6:00 a.m.)', requerido: true },
          { id: 'c1_22', texto: 'Marcar si se recibieron refrigerios de la ONPE', requerido: true },
          { id: 'c1_23', texto: 'Marcar si se recibió material de RENIEC', requerido: true },
          { id: 'c1_24', texto: 'Los 3 miembros firman el Acta de Instalación', requerido: true },
        ],
        validacion: 'El Acta tiene 4 copias idénticas. Los números deben escribirse siguiendo el modelo oficial para evitar confusiones.',
        noHacer: null,
        alerta: {
          tipo: 'exito',
          titulo: '🎯 ¡Mesa lista para la votación!',
          texto: 'Una vez firmada el Acta de Instalación, la mesa está lista para recibir electores. La votación comienza EXACTAMENTE a las 7:00 a.m. sin excepciones.',
        },
        tieneEjemplo: false, tipoEjemplo: 'acta_instalacion',
        tituloEjemplo: 'Modelo — Acta de Instalación (Sección A)',
        captionEjemplo: 'Ejemplo de la Sección A correctamente completada. Observa los campos obligatorios y el formato de escritura de números.',
        alertaAlEntrar: false,
       
        mediaReal: {
          tipo:      'video',
          src:       'images/10_instala.mp4',
          alt:       'Video del Acta de Instalación Sección A correctamente llenada',
          titulo:    'Acta de Instalación — Sección A (documento real)',
          subtitulo: 'Módulo 1 · Paso 5 de 5 — Instalación de Mesa',
          poster:    'images/acta-instalacion.jpg',
          fuentes: [
            { src: 'images/10_instala.mp4', mime: 'video/mp4' },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    emoji: '🗳️',
    titulo: 'Sufragio',
    horario: '7:00 a.m. – 5:00 p.m.',
    resumen: 'Gestión del proceso de votación durante las 10 horas de sufragio. Cada elector debe ser atendido con respeto y siguiendo el procedimiento establecido.',
    pasos: [
      {
        titulo: 'Trato Preferencial',
        subtitulo: 'Grupos que votan primero sin hacer cola',
        descripcion: 'Antes de iniciar el flujo normal, debes tener claro quiénes tienen derecho a trato preferencial y pueden votar sin esperar en la fila regular.',
        checklist: [
          { id: 'c2_1', texto: 'Identificar y atender primero a adultos mayores (60+ años)', requerido: true },
          { id: 'c2_2', texto: 'Dar prioridad a mujeres embarazadas visiblemente', requerido: true },
          { id: 'c2_3', texto: 'Dar prioridad a personas con discapacidad visible', requerido: true },
          { id: 'c2_4', texto: 'Respetar identidad de electores trans — no impedir el voto por apariencia', requerido: true },
        ],
        validacion: 'El derecho al voto es universal. Ningún elector puede ser impedido de votar por razón de apariencia física, identidad de género u otra condición personal.',
        noHacer: 'NO impedir el voto a personas trans. Si el DNI corresponde al elector en la lista, el voto es válido independientemente de su apariencia.',
        alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Identificación del Elector',
        subtitulo: 'Verificar identidad y ubicar al elector en la lista',
        descripcion: 'El primer paso en el proceso de votación es identificar correctamente al elector usando su DNI y ubicarlo en la lista oficial de electores.',
        checklist: [
          { id: 'c2_5', texto: 'Solicitar el DNI al elector', requerido: true },
          { id: 'c2_6', texto: 'Buscar al elector en la lista por su número de orden', requerido: true },
          { id: 'c2_7', texto: 'Verificar que los datos del DNI coincidan con la lista', requerido: true },
          { id: 'c2_8', texto: 'Confirmar que el elector no haya votado ya (sin firma ni huella previas)', requerido: true },
        ],
        validacion: 'Solo pueden votar en esta mesa los electores que aparecen en la lista de esa mesa específica. Si un elector no aparece, indicarle que consulte su local de votación.',
        noHacer: null,
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'relacion_electores',
        tituloEjemplo: 'Lista de Electores — Formato de Búsqueda',
        captionEjemplo: 'La lista está ordenada por número de orden. Cada fila contiene: N° de orden, DNI, apellidos, nombres, firma y huella.',
        alertaAlEntrar: false,
        mediaReal: {
          tipo:      'imagen',
          src:       'images/lista_elector.jpg',
          alt:       'Fotografía de la Lista de Electores oficial',
          titulo:    'Lista de Electores — Documento Real',
          subtitulo: 'Módulo 2 · Paso 2 de 5 — Identificación del Elector',
        },
      },
      {
        titulo: 'Entrega de Cédula y Votación',
        subtitulo: 'El elector recibe la cédula firmada y vota en cabina',
        descripcion: 'Una vez verificada la identidad, se entrega la cédula firmada al elector para que vote en privado dentro de la cabina.',
        checklist: [
          { id: 'c2_9', texto: 'Entregar la cédula firmada por los tres Miembros', requerido: true },
          { id: 'c2_10', texto: 'Entregar un lapicero al elector', requerido: true },
          { id: 'c2_11', texto: 'Indicar al elector que pase a la cabina de votación', requerido: true },
          { id: 'c2_12', texto: 'Asegurar que nadie observe al elector dentro de la cabina', requerido: true },
        ],
        validacion: 'La cédula DEBE tener la firma del Presidente en el reverso. Si el elector recibe una cédula sin firma, su voto será nulo en el escrutinio.',
        noHacer: 'NO acompañar al elector a la cabina ni observar su voto. La privacidad del sufragio es un derecho constitucional.',
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'cedula_voto_valido',
        tituloEjemplo: 'Cédula: Voto Válido vs. Voto Nulo',
        captionEjemplo: 'Un voto válido tiene la marca (X o +) con la intersección DENTRO del recuadro del candidato. Si la marca sale, el voto es nulo.',
        alertaAlEntrar: false,
      },
      {
        titulo: 'Depósito en Ánfora y Registro',
        subtitulo: 'El elector deposita su voto y firma la lista',
        descripcion: 'Después de votar, el elector dobla su cédula, la deposita en el ánfora y firma con huella digital en la lista de electores.',
        checklist: [
          { id: 'c2_13', texto: 'El elector dobla la cédula antes de salir de la cabina', requerido: true },
          { id: 'c2_14', texto: 'El elector deposita la cédula doblada en el ánfora', requerido: true },
          { id: 'c2_15', texto: 'El elector firma en su fila de la Lista de Electores', requerido: true },
          { id: 'c2_16', texto: 'El elector estampa su huella digital junto a la firma', requerido: true },
          { id: 'c2_17', texto: 'Devolver el DNI al elector', requerido: true },
        ],
        validacion: 'Si un elector firma en la fila equivocada por error, pedirle que firme también en la correcta y anotar el error en Observaciones del Acta.',
        noHacer: null, alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'lista_firma',
        tituloEjemplo: 'Lista de Electores — Registro de Firma y Huella',
        captionEjemplo: 'Cada elector firma Y pone su huella digital. Ambos registros son obligatorios. Si falta uno, anotar la razón.',
        alertaAlEntrar: false,
        mediaReal: {
          tipo:      'video',
          src:       'images/10_sufragando.mp4',
          alt:       'Video del proceso de registro de firma y huella del elector',
          titulo:    'Depósito en Ánfora y Registro — Video completo',
          subtitulo: 'Módulo 2 · Paso 4 de 5 — Sufragio',
          poster:    'images/lista_elector.jpg',
          fuentes: [
            { src: 'images/10_sufragando.mp4', mime: 'video/mp4' },
          ],
        },
      },
      {
        titulo: 'Cierre de Votación — 5:00 p.m.',
        subtitulo: 'Cerrar el proceso y preparar el escrutinio',
        descripcion: 'A las 5:00 p.m. se cierra la votación. Solo los electores que ya están en la fila antes de ese momento tienen derecho a votar.',
        checklist: [
          { id: 'c2_18', texto: 'Verificar la hora 5:00 p.m para anunciar cierre de votación.', requerido: true },
         /* { id: 'c2_19', texto: 'Anunciar el cierre de la votación en voz alta', requerido: true },*/
          { id: 'c2_20', texto: 'Permitir votar a quienes ya estaban en la fila al cierre', requerido: true },
          { id: 'c2_21', texto: 'Marcar "NO VOTÓ" en la lista de electores', requerido: true },
          { id: 'c2_22', texto: 'Sumar firmas y huellas por página (subtotal)', requerido: true },
          { id: 'c2_23', texto: 'Contar el TOTAL GENERAL de ciudadanos que votaron', requerido: true },
          { id: 'c2_24', texto: 'El Presidente firma al reverso de la última hoja', requerido: true },
        ],
        validacion: 'El total de votantes es la suma de todas las firmas/huellas válidas en la Lista. Este número se comparará con el conteo de cédulas en el escrutinio.',
        noHacer: 'NO impedir votar a quienes ya estaban en la fila antes de las 5:00 p.m. Tienen derecho reconocido a sufragar.',
        alerta: {
          tipo: 'critica',
          titulo: '⏰ Inicio del Escrutinio',
          texto: 'Inmediatamente después del cierre de votación, sin interrupciones, se procede al escrutinio. No está permitido suspender ni aplazar el conteo de votos.',
        },
        tieneEjemplo: false, alertaAlEntrar: false,
        mediaReal: {
          tipo:      'video',
          src:       'images/10_sufragio.mp4',
          alt:       'Video del proceso de cierre de votación y conteo de electores',
          titulo:    'Cierre de Votación — Procedimiento completo',
          subtitulo: 'Módulo 2 · Paso 5 de 5 — Sufragio',
          poster:    'images/hoja-asistencia.jpg',
          fuentes: [
            { src: 'images/10_sufragio.mp4', mime: 'video/mp4' },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    emoji: '🔍',
    titulo: 'Escrutinio',
    horario: 'Inmediatamente después del cierre',
    resumen: 'Conteo oficial de los votos. El escrutinio debe realizarse de forma transparente, ininterrumpida y con la presencia de todos los miembros y personeros.',
    pasos: [
      {
        titulo: 'Preparación para el Escrutinio',
        subtitulo: 'Guardar materiales y preparar el espacio',
        descripcion: 'Antes de abrir el ánfora, guarda todos los materiales del sufragio y prepara el espacio solo con lo necesario para el conteo.',
        checklist: [
          { id: 'c3_1', texto: 'Guardar todos los materiales del sufragio', requerido: true },
          { id: 'c3_2', texto: 'Dejar solo el ánfora visible sobre la mesa', requerido: true },
          { id: 'c3_3', texto: 'Abrir el Paquete de Escrutinio (ahora sí está permitido)', requerido: true },
          { id: 'c3_4', texto: 'Tener lista la Hoja Borrador para registrar votos', requerido: true },
          { id: 'c3_5', texto: 'Invitar a los personeros a presenciar el escrutinio', requerido: true },
        ],
        validacion: 'El escrutinio es un acto público. Cualquier persona presente puede observarlo desde distancia prudencial, sin interferir.',
        noHacer: null,
        alerta: null,
        tieneEjemplo: false,
        alertaAlEntrar: true,
        alertaEntrada: {
          tipo: 'info',
          titulo: '🔓 Abrir el Paquete de Escrutinio',
          texto: 'Recién ahora puedes abrir el Paquete de Escrutinio que estuvo sellado todo el día. Contiene los materiales para el conteo oficial de votos.',
        },
      },
      {
        titulo: 'Conteo de Cédulas',
        subtitulo: 'Contar cédulas sin abrirlas y comparar totales',
        descripcion: 'El primer paso del escrutinio es contar las cédulas en el ánfora sin abrirlas, para verificar que coincidan con el número de personas que votaron.',
        checklist: [
          { id: 'c3_6', texto: 'Abrir el ánfora frente a todos los presentes', requerido: true },
          { id: 'c3_7', texto: 'Contar las cédulas sin abrirlas', requerido: true },
          { id: 'c3_8', texto: 'Comparar el total con el número de ciudadanos que votaron', requerido: true },
        ],
        validacion: 'El número de cédulas en el ánfora DEBE coincidir con el total de ciudadanos que votaron según la Lista de Electores.',
        noHacer: null,
        alerta: {
          tipo: 'critica',
          titulo: '🔢 Si los totales no coinciden',
          texto: 'Si el número de cédulas NO coincide con el total de votantes, NO se detiene el proceso. Se continúa el escrutinio y la diferencia se anota OBLIGATORIAMENTE en el campo de Observaciones del Acta.',
        },
        tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Separación de Cédulas No Válidas',
        subtitulo: 'Identificar y separar las cédulas no firmadas',
        descripcion: 'Las cédulas sin la firma del Presidente en el reverso son automáticamente nulas. Deben separarse antes del conteo de votos.',
        checklist: [
          { id: 'c3_9', texto: 'Verificar que el reverso de cada cédula cuente con la firma de los tres miembros', requerido: true },
          { id: 'c3_10', texto: 'Separar las cédulas sin firma (son votos nulos automáticamente)', requerido: true },
          { id: 'c3_11', texto: 'Mantener separadas las cédulas válidas para el conteo', requerido: true },
        ],
        validacion: 'Una cédula sin firma del Presidente es inválida aunque tenga una marca de voto correcta. Por eso firmar TODAS las cédulas en la instalación es tan crítico.',
        noHacer: null, alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Hoja Borrador — Registro de Votos',
        subtitulo: 'Cantar los votos y registrar con palotes',
        descripcion: 'Con la Hoja Borrador, se "canta" cada voto en voz alta y se registra usando el método de palotes (grupos de 5). Esto permite contar con rapidez y transparencia.',
        checklist: [
          { id: 'c3_12', texto: 'Usar la Hoja Borrador para el registro de votos', requerido: true },
          { id: 'c3_13', texto: 'Abrir cada cédula y cantar el voto en voz alta', requerido: true },
          { id: 'c3_14', texto: 'Registrar con palotes de 5 en 5 para cada candidato', requerido: true },
          { id: 'c3_15', texto: 'Separar y clasificar: Válidos, Nulos, Blancos e Impugnados', requerido: true },
          { id: 'c3_16', texto: 'Contar el total de palotes al finalizar', requerido: true },
        ],
        validacion: 'Voto VÁLIDO: la marca (+ o X) tiene su intersección dentro del recuadro del candidato. Si la marca sale, es NULO. Las cédulas sin marca son votos BLANCOS.',
        noHacer: 'NO escribir resultados directamente en el Acta durante este paso. La Hoja Borrador es el documento de trabajo. El Acta se llena una vez que los totales son definitivos.',
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'hoja_borrador',
        tituloEjemplo: 'Hoja Borrador — Método de Palotes',
        captionEjemplo: 'Registro con palotes: cada 4 líneas verticales se cruzan con una diagonal al llegar al 5. Facilita el conteo rápido y la verificación.',
        alertaAlEntrar: false,
       mediaReal: {
          tipo:      'video',
          src:       'images/HB_llenado.mp4',
          alt:       'Video del proceso de escrutinio y conteo de votos en palotes usando la Hoja Borrador',
          titulo:    'Escrutinio — Conteo en la Hoja Borrador',
          subtitulo: 'Módulo 3 · Paso 4 de 5 — Hoja Borrador y registro de votos',
          poster:    'images/hoja-borrador.jpg',
          fuentes: [
            { src: 'images/HB_llenado.mp4', mime: 'video/mp4' },
          ],
        },
      },
      {
        titulo: 'Resultados Finales del Escrutinio',
        subtitulo: 'Verificar y totalizar los resultados',
        descripcion: 'Una vez terminado el conteo con la Hoja Borrador, se verifican los totales y se comprueba que la suma cuadre correctamente antes de pasar a las actas.',
        checklist: [
          { id: 'c3_17', texto: 'Sumar votos válidos de todos los candidatos', requerido: true },
          { id: 'c3_18', texto: 'Sumar votos nulos (incluyendo los no firmados)', requerido: true },
          { id: 'c3_19', texto: 'Sumar votos blancos', requerido: true },
          { id: 'c3_20', texto: 'Verificar: Válidos + Nulos + Blancos + Impugnados= Total cédulas escrutadas', requerido: true },
          { id: 'c3_21', texto: 'Confirmar resultados definitivos antes de pasar al Acta', requerido: true },
        ],
        validacion: 'La suma total (Válidos + Nulos + Blancos + Impugnados) debe igualar el número de cédulas contadas al abrir el ánfora. Cualquier diferencia se anota en Observaciones.',
        noHacer: null, alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
        mediaReal: {
          tipo:      'video',
          src:       'images/10_escrutinio.mp4',
          alt:       'Video del proceso de escrutinio y conteo de votos',
          titulo:    'Escrutinio — Conteo final de votos',
          subtitulo: 'Módulo 3 · Paso 5 de 5 — Escrutinio',
          poster:    'images/hoja-borrador.jpg',
          fuentes: [
            { src: 'images/10_escrutinio.mp4', mime: 'video/mp4' },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    emoji: '📋',
    titulo: 'Llenado de Actas',
    horario: 'Después del Escrutinio',
    resumen: 'Traslado de los resultados de la Hoja Borrador a las 4 Actas Electorales definitivas. Es la etapa más delicada: los errores aquí tienen consecuencias legales.',
    pasos: [
      {
        titulo: 'Copiar Resultados al Acta',
        subtitulo: 'Trasladar los datos de la Hoja Borrador a la Sección C',
        descripcion: 'Con los resultados definitivos de la Hoja Borrador, se copian cuidadosamente a las 4 copias del Acta Electoral. Cada copia debe ser idéntica.',
        checklist: [
          { id: 'c4_1', texto: 'Tener la Hoja Borrador con todos los resultados a la vista', requerido: true },
          { id: 'c4_2', texto: 'Completar la Sección C de la primera Acta', requerido: true },
          { id: 'c4_3', texto: 'Copiar los resultados a las 4 Actas de Escrutinio', requerido: true },
          { id: 'c4_4', texto: 'Verificar que los 4 juegos sean idénticos', requerido: true },
        ],
        validacion: 'Las 4 Actas deben tener EXACTAMENTE los mismos datos. Cualquier diferencia puede invalidar el resultado.',
        noHacer: 'NO completar las Actas con tachones ni correcciones. Si hay un error en una cifra, registrar la corrección en Observaciones con la firma de los 3 miembros.',
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'acta_escrutinio',
        tituloEjemplo: 'Modelo — Acta de Escrutinio (Sección C)',
        captionEjemplo: 'Ejemplo de Sección C correctamente completada. Observa el uso de los números modelo para evitar confusiones en la lectura.',
        alertaAlEntrar: false,
        mediaReal: {
          tipo:      'video',
          src:       'images/A_B_C_LLE.mp4',
          alt:       'Video del proceso de escrutinio y conteo de votos',
          titulo:    'Escrutinio — Llenado de Actas (documento real)',
          subtitulo: 'Módulo 4 · Paso 1 de 4 — Escrutinio',
          poster:    'images/hoja-borrador.jpg',
          fuentes: [
            { src: 'images/A_B_C_LLE.mp4', mime: 'video/mp4' },
          ],
        },
      },
      {
        titulo: 'Uso de Números Modelo',
        subtitulo: 'Escribir los números de forma clara y sin ambigüedad',
        descripcion: 'La ONPE establece un modelo específico de escritura numérica para evitar confusiones entre números como el 1 y el 7, o el 4 y el 9.',
        checklist: [
          { id: 'c4_5', texto: 'Usar los números modelo ONPE', requerido: true },
          /*{ id: 'c4_6', texto: 'El "1" debe tener la barra vertical sin adornos adicionales', requerido: true },*/
          /*{ id: 'c4_7', texto: 'El "7" debe llevar el trazo horizontal superior', requerido: true },*/
          { id: 'c4_8', texto: 'Verificar la legibilidad de cada número escrito', requerido: true },
        ],
        validacion: 'Los números ambiguos son una de las principales causas de impugnación de actas. Tomarse el tiempo necesario para escribir con claridad evita problemas serios.',
        noHacer: null, alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'numeros_modelo',
        tituloEjemplo: 'Números Modelo ONPE',
        captionEjemplo: 'Modelo oficial de escritura de dígitos para actas electorales. Presta especial atención al 1, 4, 7 y 9 que suelen confundirse.',
        alertaAlEntrar: false,
        mediaReal: {
          tipo:      'imagen',
          src:       'images/numeros_modelo.jpg',
          alt:       'Fotografía de Números Modelos para Actas Electorales',
          titulo:    'Numeros Modelo ONPE',
          subtitulo: 'Módulo 4 · Paso 2 de 4 — Legibilidad',
          poster:    'images/hoja-borrador.jpg',
          fuentes: [
            { src: 'images/numeros_modelo.jpg', mime: 'image/jpeg' },
          ],
        },
        
     
      },
      {
        titulo: 'Láminas de Protección',
        subtitulo: 'Sellar los resultados con las láminas protectoras',
        descripcion: 'Las láminas adhesivas de protección se colocan sobre los campos de resultados y observaciones para evitar alteraciones posteriores al llenado.',
        checklist: [
          { id: 'c4_9', texto: 'Colocar la lámina de seguridad sobre la sección de resultados', requerido: true },
          { id: 'c4_10', texto: 'Asegurarse de que NO queden burbujas de aire bajo la lámina', requerido: true },
          { id: 'c4_11', texto: 'Cubrir también el campo de Observaciones, exista o no alguna', requerido: true },
          { id: 'c4_12', texto: 'Verificar que la lámina adhiera completamente en los bordes', requerido: true },
        ],
        validacion: 'Una lámina mal colocada con burbujas puede interpretarse como intento de manipulación. Aplicar lentamente, presionando desde el centro hacia los bordes.',
        noHacer: 'NO colocar las láminas antes de que los 3 miembros hayan verificado que los datos son correctos. Una vez selladas, el acta es definitiva.',
        alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Firmas de los 3 Miembros',
        subtitulo: 'Todos los miembros firman obligatoriamente las 4 actas',
        descripcion: 'El paso final de las actas es la firma de todos los miembros de mesa en las 4 copias. Esta es una obligación legal. Sin las firmas, el acta no tiene valor.',
        checklist: [
          { id: 'c4_13', texto: 'Los 3 miembros firman en el espacio designado de cada acta', requerido: true },
          { id: 'c4_14', texto: 'Firmar las 4 copias (no solo una)', requerido: true },
          { id: 'c4_15', texto: 'Verificar que las firmas sean las mismas en cada copia', requerido: true },
          { id: 'c4_16', texto: 'El personero puede firmar también como testigo (opcional)', requerido: false },
        ],
        validacion: 'La firma de los 3 miembros en las 4 actas es obligatoria. Un miembro que se niegue a firmar sin justificación puede ser sancionado por la ONPE.',
        noHacer: null,
        alerta: {
          tipo: 'critica',
          titulo: '✅ Actas firmadas = paso irreversible',
          texto: 'Una vez que las actas están firmadas y selladas con láminas, el proceso es IRREVERSIBLE.',
        },
        tieneEjemplo: false, alertaAlEntrar: false,
      },
    ],
  },
  {
    id: 5,
    emoji: '📬',
    titulo: 'Entrega de Material',
    horario: 'Al finalizar las Actas',
    resumen: 'Empaque ordenado de todos los documentos y materiales en los sobres correspondientes para su entrega oficial al personal de la ONPE.',
    pasos: [
      {
        titulo: 'Actas en Sobres de Colores',
        subtitulo: 'Cada acta va en un sobre de color específico',
        descripcion: 'Las 4 copias del Acta Electoral se colocan en sobres de colores distintos. Cada color tiene un destino específico. Es fundamental respetar esta clasificación.',
        checklist: [
          { id: 'c5_1', texto: 'Sobre PLOMO', requerido: true },
          { id: 'c5_2', texto: 'Sobre CELESTE', requerido: true },
          { id: 'c5_3', texto: 'Sobre ROJO', requerido: true },
          { id: 'c5_4', texto: 'Sobre VERDE', requerido: true },
          { id: 'c5_5', texto: 'Sellar cada sobre con la cinta de seguridad provista', requerido: true },
        ],
        validacion: 'El sobre plomo es el que se procesa para el cómputo oficial. Verificar que el acta dentro sea completamente legible antes de sellarlo.',
        noHacer: 'NO confundir los colores de los sobres. Revisa el rótulo impreso en cada uno antes de introducir el acta.',
        alerta: null,
        tieneEjemplo: false, tipoEjemplo: 'sobres_colores',
        tituloEjemplo: 'Sobres de Colores — Distribución Oficial',
        captionEjemplo: 'Los 4 sobres con sus destinos. Cada uno tiene el nombre del destinatario impreso. Siempre verificar antes de sellar.',
        alertaAlEntrar: false,
          mediaReal: {
           tipo:      'imagen',
           src:       'images/sobres_4.jpg',
           titulo:    'Sobre de Colores para Actas Electorales',
           subtitulo: 'Sobre verde, rojo, celeste y plomo para cada una de las 4 copias del Acta Electoral',
           alt:       'Sobre de Colores para cada Acta Electoral',
        },
      },
      {
        titulo: 'Lista de Electores y Cédulas',
        subtitulo: 'Empacar la lista y clasificar las cédulas escrutadas',
        descripcion: 'La Lista de Electores y las cédulas usadas se empaquen en sobres específicos. Las cédulas no utilizadas deben destruirse antes de guardarse.',
        checklist: [
          { id: 'c5_6', texto: 'Verificar que la lista tiene todos los "NO VOTÓ" marcados', requerido: true },
          { id: 'c5_7', texto: 'Colocar la Lista de Electores en el sobre ANARANJADO', requerido: true },
          { id: 'c5_8', texto: 'Colocar cédulas NO impugnadas en el sobre de plástico', requerido: true },
          { id: 'c5_9', texto: 'Colocar cédulas IMPUGNADAS en el sobre especial de impugnaciones', requerido: true },
          { id: 'c5_10', texto: 'Destruir las cédulas no utilizadas', requerido: true },
          { id: 'c5_11', texto: 'Guardar cédulas destruidas, lapiceros y tampones en la Caja de Restos Electorales', requerido: true },
        ],
        validacion: 'Las cédulas no utilizadas DEBEN ser destruidas antes de guardarse. Esto previene cualquier posibilidad de fraude posterior.',
        noHacer: 'NO mezclar cédulas impugnadas con las no impugnadas. Van en sobres completamente separados.',
        alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Cargo de Entrega — Paso Final',
        subtitulo: 'El Presidente firma el Cargo y recibe su comprobante',
        descripcion: 'El último paso de toda la jornada electoral es la entrega del material al personal de la ONPE y la firma del Cargo de Entrega que certifica que el proceso fue completado.',
        checklist: [
          { id: 'c5_12', texto: 'Entregar todos los sobres al personal de la ONPE', requerido: true },
          { id: 'c5_13', texto: 'Verificar que el personal recibe el material completo', requerido: true },
          { id: 'c5_14', texto: 'El Presidente de Mesa firma el Cargo de Entrega', requerido: true },
          { id: 'c5_15', texto: 'Recorte y entregue el cargo de Entrega al Coordinador de la ONPE', requerido: true },
        ],
        validacion: 'El Cargo de Entrega es el comprobante legal de que el Presidente de Mesa cumplió con su función.',
        noHacer: null,
        alerta: {
          tipo: 'exito',
          titulo: '🎉 ¡Jornada completada con éxito!',
          texto: 'Al firmar el Cargo de Entrega, el Presidente de Mesa concluye oficialmente su función en la Segunda Elección General 2026. ¡Gracias por su contribución a la democracia!',
        },
        tieneEjemplo: false, alertaAlEntrar: false,
      },
    ],
  },
  {
    id: 6,
    emoji: '⚠️',
    titulo: 'Casos Especiales',
    horario: 'Durante toda la jornada',
    resumen: 'Situaciones extraordinarias que pueden presentarse y cómo resolverlas correctamente. Conocerlas con anticipación reduce el estrés y los errores el día de las elecciones.',
    pasos: [
      {
        titulo: 'Miembros de Mesa Faltantes',
        subtitulo: '¿Qué hacer si no se presentan los 3 miembros?',
        descripcion: 'Puede ocurrir que uno o más miembros de mesa no se presenten. Existe un procedimiento específico para resolver esta situación sin impedir la apertura de la mesa.',
        checklist: [
          { id: 'c6_1', texto: 'Esperar hasta las 7:00 a.m. para confirmar ausencia definitiva', requerido: true },
          { id: 'c6_2', texto: 'Si faltan miembros: llamar a personas de la fila de esa mesa', requerido: true },
          { id: 'c6_3', texto: 'Registrar el DNI y nombre completo del reemplazante en el Acta', requerido: true },
          { id: 'c6_4', texto: 'A las 7:15 a.m. sin reemplazo el Presidente de mesa designa de la fila que pertenecen a la mesa votación', requerido: true },
        ],
        validacion: 'Los reemplazantes tomados de la fila tienen los mismos derechos y obligaciones que los miembros originales.',
        noHacer: 'NO abrir la mesa con solo 2 miembros sin agotar primero el procedimiento de incorporar personas de la fila.',
        alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Error en la Firma del Elector',
        subtitulo: 'El elector firma en el lugar incorrecto',
        descripcion: 'Si un elector firma en la fila de otro elector por error, existe un procedimiento para corregirlo sin anular el voto.',
        checklist: [
          { id: 'c6_5', texto: 'Detectar el error antes de que el elector se retire', requerido: true },
          { id: 'c6_6', texto: 'Pedir al elector que firme TAMBIÉN en su fila correcta', requerido: true },
          { id: 'c6_7', texto: 'Anotar el error en el campo Observaciones del Acta', requerido: true },
          { id: 'c6_8', texto: 'Escribir claramente lo ocurrido en la anotación', requerido: true },
        ],
        validacion: 'El voto del elector NO se invalida por un error de firma. Lo importante es que quede constancia clara en el Acta.',
        noHacer: null, alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Electores con Necesidades Especiales',
        subtitulo: 'Personas que requieren asistencia para votar',
        descripcion: 'Algunos electores pueden necesitar asistencia para ejercer su derecho al voto. Conocer cómo asistirlos es parte de tus responsabilidades.',
        checklist: [
          { id: 'c6_9', texto: 'Personas invidentes: puede ingresar un acompañante de su elección', requerido: true },
          { id: 'c6_10', texto: 'Personas analfabetas: pueden ser asistidas por quien elijan', requerido: true },
          { id: 'c6_11', texto: 'Personas con movilidad reducida: acercar la mesa de votación temporal', requerido: true },
          { id: 'c6_12', texto: 'Solo si es necesario registrar el tipo de asistencia brindada en Observaciones del Acta', requerido: true },
        ],
        validacion: 'El acompañante no puede influir en el voto. Si hay sospecha de coacción, el Miembro de Mesa puede pedir que el elector exprese libremente su decisión.',
        noHacer: null, alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
      {
        titulo: 'Impugnación de Votos',
        subtitulo: 'Cuando un personero objeta la validez de un voto',
        descripcion: 'Durante el escrutinio, un personero puede impugnar (objetar) la validez de un voto. Existe un procedimiento claro para resolver esto democráticamente.',
        checklist: [
          { id: 'c6_13', texto: 'Escuchar la razón de la impugnación del personero', requerido: true },
          { id: 'c6_14', texto: 'Los 3 miembros deliberan y deciden por mayoría (2 de 3)', requerido: true },
          { id: 'c6_15', texto: 'Si se admite el voto: clasificar normalmente', requerido: true },
          { id: 'c6_16', texto: 'Si el personero apela: guardar la cédula en sobre de impugnaciones', requerido: true },
          { id: 'c6_17', texto: 'Anotar la impugnación y el resultado en el Acta', requerido: true },
        ],
        validacion: 'La decisión de la mesa es por MAYORÍA (2 de 3 miembros). El personero puede apelar guardando la cédula en el sobre especial, pero no puede paralizar el proceso.',
        noHacer: 'NO permitir que las impugnaciones paralicen el escrutinio. El proceso continúa mientras el voto impugnado queda en resguardo.',
        alerta: null, tieneEjemplo: false, alertaAlEntrar: false,
      },
    ],
  },
];


/* ================================================================
   2. EJEMPLOS VISUALES (SVG)
   ================================================================ */

const EJEMPLOS = {

  caja_onpe: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="320" fill="#F4F5F7" rx="12"/>
    <text x="280" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Contenido de la Caja Oficial ONPE</text>
    <rect x="40" y="52" width="480" height="230" rx="12" fill="#fff" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="40" y="52" width="480" height="42" rx="12" fill="#A31621"/>
    <rect x="40" y="80" width="480" height="14" fill="#A31621"/>
    <text x="280" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="white">ONPE — CAJA ELECTORAL OFICIAL 2026</text>
    <!-- Paquete Útiles -->
    <rect x="68" y="114" width="128" height="144" rx="10" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5"/>
    <rect x="68" y="114" width="128" height="34" rx="10" fill="#3B82F6"/>
    <rect x="68" y="134" width="128" height="14" fill="#3B82F6"/>
    <text x="132" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="white">PAQUETE 1 — ÚTILES</text>
    <text x="132" y="168" text-anchor="middle" font-size="12" font-weight="600" fill="#1E3A5F">Lapiceros</text>
    <text x="132" y="185" text-anchor="middle" font-size="12" font-weight="600" fill="#1E3A5F">Tampón</text>
    <text x="132" y="202" text-anchor="middle" font-size="12" font-weight="600" fill="#1E3A5F">Material de mesa</text>
    <!-- Paquete Instalación -->
    <rect x="216" y="114" width="128" height="144" rx="10" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
    <rect x="216" y="114" width="128" height="34" rx="10" fill="#22C55E"/>
    <rect x="216" y="134" width="128" height="14" fill="#22C55E"/>
    <text x="280" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="white">PAQUETE 2 — INSTALACIÓN</text>
    <text x="280" y="168" text-anchor="middle" font-size="12" font-weight="600" fill="#14532D">Acta electoral</text>
    <text x="280" y="185" text-anchor="middle" font-size="12" font-weight="600" fill="#14532D">Lista de electores</text>
    <text x="280" y="202" text-anchor="middle" font-size="12" font-weight="600" fill="#14532D">Cédulas</text>
    <!-- Paquete Escrutinio -->
    <rect x="364" y="114" width="128" height="144" rx="10" fill="#FFF0F1" stroke="#FBCDD0" stroke-width="1.5"/>
    <rect x="364" y="114" width="128" height="34" rx="10" fill="#A31621"/>
    <rect x="364" y="134" width="128" height="14" fill="#A31621"/>
    <text x="428" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="white">PAQUETE 3 — ESCRUTINIO</text>
    <text x="428" y="165" text-anchor="middle" font-size="18">🔒</text>
    <text x="428" y="185" text-anchor="middle" font-size="12" font-weight="700" fill="#A31621">NO ABRIR</text>
    <text x="428" y="200" text-anchor="middle" font-size="11" fill="#7E1019">Hasta finalizar</text>
    <text x="428" y="214" text-anchor="middle" font-size="11" fill="#7E1019">la votación</text>
    <!-- Nota -->
    <rect x="40" y="292" width="480" height="22" rx="6" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1"/>
    <text x="280" y="307" text-anchor="middle" font-size="11" font-weight="600" fill="#78350F">⚠️ El Paquete de Escrutinio solo se abre al terminar la votación a las 5:00 p.m.</text>
  </svg>`,

  local_votacion: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="320" fill="#F4F5F7" rx="12"/>
    <text x="280" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Distribución Correcta del Local de Votación</text>
    <rect x="30" y="44" width="360" height="120" rx="8" fill="#fff" stroke="#E4E6EB" stroke-width="1.5"/>
    <text x="210" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#111827">🪑 MESA DE VOTACIÓN</text>
    <text x="210" y="88" text-anchor="middle" font-size="10" fill="#6B7280">Presidente · Secretario · Tercer Miembro</text>
    <ellipse cx="210" cy="136" rx="26" ry="20" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
    <text x="210" y="141" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A5F">ÁNFORA</text>
    <rect x="410" y="44" width="120" height="140" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
    <rect x="410" y="44" width="120" height="30" rx="8" fill="#22C55E"/>
    <rect x="410" y="60" width="120" height="14" fill="#22C55E"/>
    <text x="470" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="white">CABINA PRIVADA</text>
    <text x="470" y="104" text-anchor="middle" font-size="28">🗳️</text>
    <text x="470" y="128" text-anchor="middle" font-size="10" fill="#14532D">Privacidad total</text>
    <text x="470" y="142" text-anchor="middle" font-size="10" fill="#14532D">Cartel candidatos</text>
    <text x="470" y="156" text-anchor="middle" font-size="10" fill="#14532D">visible aquí</text>
    <rect x="30" y="182" width="500" height="48" rx="8" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>
    <text x="280" y="203" text-anchor="middle" font-size="12" font-weight="700" fill="#78350F">📋 RELACIÓN DE ELECTORES</text>
    <text x="280" y="220" text-anchor="middle" font-size="10" fill="#92400E">Pegar en el EXTERIOR de la mesa — visible para todos los ciudadanos</text>
    <rect x="30" y="246" width="500" height="56" rx="8" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
    <text x="280" y="265" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">✅ Lista de verificación del local antes de abrir</text>
    <text x="90" y="284" font-size="10" fill="#166534">✓ Cabina ubicada con privacidad</text>
    <text x="90" y="296" font-size="10" fill="#166534">✓ Ánfora vacía y visible</text>
    <text x="310" y="284" font-size="10" fill="#166534">✓ Cartel de candidatos en cabina</text>
    <text x="310" y="296" font-size="10" fill="#166534">✓ Lista de electores afuera</text>
  </svg>`,

  cedula_votacion: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="340" fill="#F4F5F7" rx="12"/>
    <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Cédula de Votación — Frente y Reverso</text>
    <!-- FRENTE -->
    <rect x="24" y="42" width="240" height="280" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <text x="144" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#9CA3AF">ANVERSO (FRENTE)</text>
    <rect x="36" y="68" width="216" height="28" rx="4" fill="#A31621"/>
    <text x="144" y="86" text-anchor="middle" font-size="9" font-weight="700" fill="white">SEGUNDA ELECCIÓN PRESIDENCIAL 2026</text>
    <rect x="44" y="108" width="96" height="88" rx="6" fill="#F7F8FA" stroke="#E4E6EB" stroke-width="1"/>
    <text x="92" y="145" text-anchor="middle" font-size="20">👤</text>
    <text x="92" y="163" text-anchor="middle" font-size="9" fill="#6B7280">Candidato</text>
    <text x="92" y="174" text-anchor="middle" font-size="9" font-weight="700" fill="#111827">PARTIDO A</text>
    <rect x="44" y="203" width="96" height="18" rx="3" fill="#F7F8FA" stroke="#E4E6EB" stroke-width="1"/>
    <text x="92" y="216" text-anchor="middle" font-size="9" fill="#9CA3AF">[ Marcar aquí ]</text>
    <rect x="152" y="108" width="96" height="88" rx="6" fill="#F7F8FA" stroke="#E4E6EB" stroke-width="1"/>
    <text x="200" y="145" text-anchor="middle" font-size="20">👤</text>
    <text x="200" y="163" text-anchor="middle" font-size="9" fill="#6B7280">Candidato</text>
    <text x="200" y="174" text-anchor="middle" font-size="9" font-weight="700" fill="#111827">PARTIDO B</text>
    <rect x="152" y="203" width="96" height="18" rx="3" fill="#F7F8FA" stroke="#E4E6EB" stroke-width="1"/>
    <text x="200" y="216" text-anchor="middle" font-size="9" fill="#9CA3AF">[ Marcar aquí ]</text>
    <text x="144" y="244" text-anchor="middle" font-size="9" fill="#9CA3AF">[ VOTO BLANCO: no marcar ]</text>
    <line x1="44" y1="254" x2="248" y2="254" stroke="#E4E6EB" stroke-width="1"/>
    <text x="144" y="270" text-anchor="middle" font-size="8" fill="#9CA3AF">Mesa N° XXXX · ONPE 2026</text>
    <!-- REVERSO -->
    <rect x="296" y="42" width="240" height="280" rx="10" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>
    <text x="416" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#9CA3AF">REVERSO</text>
    <rect x="308" y="68" width="216" height="28" rx="4" fill="#F59E0B"/>
    <text x="416" y="86" text-anchor="middle" font-size="10" font-weight="700" fill="white">FIRMA OBLIGATORIA DEL PRESIDENTE</text>
    <rect x="318" y="110" width="180" height="76" rx="6" fill="white" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="6,3"/>
    <text x="408" y="148" text-anchor="middle" font-size="11" fill="#9CA3AF">Firma aquí</text>
    <text x="408" y="166" text-anchor="middle" font-size="22">✍️</text>
    <text x="416" y="210" text-anchor="middle" font-size="10" font-weight="700" fill="#A31621">⛔ Sin esta firma = Voto NULO</text>
    <text x="416" y="232" text-anchor="middle" font-size="9" fill="#6B7280">El personero puede firmar</text>
    <text x="416" y="245" text-anchor="middle" font-size="9" fill="#6B7280">opcionalmente abajo</text>
    <rect x="318" y="258" width="180" height="28" rx="4" fill="white" stroke="#E4E6EB" stroke-width="1" stroke-dasharray="4,2"/>
    <text x="408" y="276" text-anchor="middle" font-size="9" fill="#9CA3AF">Firma Personero (opcional)</text>
  </svg>`,

  cedula_voto_valido: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="300" fill="#F4F5F7" rx="12"/>
    <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Voto Válido vs. Voto Nulo — Diferencia clave</text>
    <!-- VÁLIDO -->
    <rect x="24" y="44" width="244" height="232" rx="10" fill="white" stroke="#BBF7D0" stroke-width="2"/>
    <rect x="24" y="44" width="244" height="34" rx="10" fill="#22C55E"/>
    <rect x="24" y="64" width="244" height="14" fill="#22C55E"/>
    <text x="146" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="white">✓ VOTO VÁLIDO</text>
    <rect x="54" y="92" width="90" height="90" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
    <text x="99" y="122" text-anchor="middle" font-size="9" fill="#14532D">CANDIDATO A</text>
    <rect x="62" y="134" width="74" height="36" rx="4" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>
    <line x1="70" y1="140" x2="128" y2="164" stroke="#166534" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="128" y1="140" x2="70" y2="164" stroke="#166534" stroke-width="3.5" stroke-linecap="round"/>
    <text x="146" y="205" text-anchor="middle" font-size="11" fill="#166534" font-weight="600">La X está dentro del</text>
    <text x="146" y="219" text-anchor="middle" font-size="11" fill="#166534" font-weight="600">recuadro del candidato</text>
    <text x="146" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#22C55E">✓ También acepta signo +</text>
    <text x="146" y="258" text-anchor="middle" font-size="10" fill="#6B7280">con intersección dentro</text>
    <!-- NULO -->
    <rect x="292" y="44" width="244" height="232" rx="10" fill="white" stroke="#FBCDD0" stroke-width="2"/>
    <rect x="292" y="44" width="244" height="34" rx="10" fill="#A31621"/>
    <rect x="292" y="64" width="244" height="14" fill="#A31621"/>
    <text x="414" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="white">✗ VOTO NULO</text>
    <rect x="322" y="92" width="90" height="90" rx="6" fill="#FFF0F1" stroke="#FBCDD0" stroke-width="1.5"/>
    <text x="367" y="122" text-anchor="middle" font-size="9" fill="#7E1019">CANDIDATO A</text>
    <rect x="330" y="134" width="74" height="36" rx="4" fill="#FFF0F1" stroke="#FBCDD0" stroke-width="2"/>
    <line x1="406" y1="110" x2="436" y2="134" stroke="#A31621" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="436" y1="110" x2="406" y2="134" stroke="#A31621" stroke-width="3.5" stroke-linecap="round"/>
    <text x="414" y="205" text-anchor="middle" font-size="11" fill="#7E1019" font-weight="600">La X está FUERA del</text>
    <text x="414" y="219" text-anchor="middle" font-size="11" fill="#7E1019" font-weight="600">recuadro del candidato</text>
    <text x="414" y="243" text-anchor="middle" font-size="11" font-weight="700" fill="#A31621">✗ Sin firma = también nulo</text>
    <text x="414" y="258" text-anchor="middle" font-size="10" fill="#6B7280">aunque la marca sea correcta</text>
  </svg>`,

  relacion_electores: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="290" fill="#F4F5F7" rx="12"/>
    <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Lista de Electores — Estructura y Uso</text>
    <rect x="20" y="40" width="520" height="236" rx="8" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="20" y="40" width="520" height="32" rx="8" fill="#A31621"/>
    <rect x="20" y="60" width="520" height="12" fill="#A31621"/>
    <text x="280" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="white">LISTA DE ELECTORES — MESA N° XXXX · SEGUNDA ELECCIÓN GENERAL 2026</text>
    <rect x="20" y="72" width="520" height="24" fill="#F7F8FA"/>
    <text x="52" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">N°</text>
    <text x="108" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">DNI</text>
    <text x="248" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">APELLIDOS Y NOMBRES</text>
    <text x="382" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">FIRMA</text>
    <text x="472" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">HUELLA</text>
    <line x1="78" y1="40" x2="78" y2="276" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="152" y1="40" x2="152" y2="276" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="342" y1="40" x2="342" y2="276" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="430" y1="40" x2="430" y2="276" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="20" y="96" width="520" height="36" fill="#F0FDF4"/>
    <text x="52" y="119" text-anchor="middle" font-size="11" fill="#111827">001</text>
    <text x="112" y="119" text-anchor="middle" font-size="11" fill="#111827">12345678</text>
    <text x="247" y="119" text-anchor="middle" font-size="11" fill="#111827">QUISPE MAMANI, Juan</text>
    <text x="385" y="119" text-anchor="middle" font-size="14" fill="#22C55E">✓</text>
    <text x="472" y="119" text-anchor="middle" font-size="14" fill="#22C55E">⬛</text>
    <line x1="20" y1="132" x2="540" y2="132" stroke="#E4E6EB" stroke-width="1"/>
    <text x="52" y="155" text-anchor="middle" font-size="11" fill="#111827">002</text>
    <text x="112" y="155" text-anchor="middle" font-size="11" fill="#111827">87654321</text>
    <text x="247" y="155" text-anchor="middle" font-size="11" fill="#111827">FLORES CCAMA, María</text>
    <text x="385" y="155" text-anchor="middle" font-size="14" fill="#22C55E">✓</text>
    <text x="472" y="155" text-anchor="middle" font-size="14" fill="#22C55E">⬛</text>
    <line x1="20" y1="168" x2="540" y2="168" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="20" y="168" width="520" height="36" fill="#FFF0F1"/>
    <text x="52" y="191" text-anchor="middle" font-size="11" fill="#111827">003</text>
    <text x="112" y="191" text-anchor="middle" font-size="11" fill="#111827">11223344</text>
    <text x="247" y="191" text-anchor="middle" font-size="11" fill="#111827">TORRES LEON, Carlos</text>
    <text x="385" y="191" text-anchor="middle" font-size="9" font-weight="700" fill="#A31621">NO VOTÓ</text>
    <text x="472" y="191" text-anchor="middle" font-size="9" font-weight="700" fill="#A31621">—</text>
    <line x1="20" y1="204" x2="540" y2="204" stroke="#E4E6EB" stroke-width="1"/>
    <text x="52" y="227" text-anchor="middle" font-size="11" fill="#111827">004</text>
    <text x="112" y="227" text-anchor="middle" font-size="11" fill="#111827">55667788</text>
    <text x="247" y="227" text-anchor="middle" font-size="11" fill="#111827">HUANCA APAZA, Rosa</text>
    <text x="385" y="227" text-anchor="middle" font-size="14" fill="#22C55E">✓</text>
    <text x="472" y="227" text-anchor="middle" font-size="14" fill="#22C55E">⬛</text>
    <line x1="20" y1="240" x2="540" y2="240" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="20" y="248" width="520" height="28" fill="#FFFBEB"/>
    <text x="280" y="264" text-anchor="middle" font-size="10" font-weight="700" fill="#92400E">SUBTOTAL PÁGINA: Votaron 3 · No votaron 1 · Total firmas: 3 · Huellas: 3</text>
  </svg>`,

  lista_firma: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="260" fill="#F4F5F7" rx="12"/>
    <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Flujo Completo de Registro del Elector</text>
    <rect x="18" y="46" width="102" height="150" rx="10" fill="white" stroke="#BFDBFE" stroke-width="1.5"/>
    <rect x="18" y="46" width="102" height="34" rx="10" fill="#3B82F6"/>
    <rect x="18" y="67" width="102" height="13" fill="#3B82F6"/>
    <text x="69" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="white">PASO 1</text>
    <text x="69" y="105" text-anchor="middle" font-size="22">🪪</text>
    <text x="69" y="127" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Mostrar DNI</text>
    <text x="69" y="143" text-anchor="middle" font-size="9" fill="#6B7280">El elector</text>
    <text x="69" y="155" text-anchor="middle" font-size="9" fill="#6B7280">presenta doc.</text>
    <text x="128" y="125" text-anchor="middle" font-size="18" fill="#9CA3AF">›</text>
    <rect x="140" y="46" width="102" height="150" rx="10" fill="white" stroke="#DDD6FE" stroke-width="1.5"/>
    <rect x="140" y="46" width="102" height="34" rx="10" fill="#8B5CF6"/>
    <rect x="140" y="67" width="102" height="13" fill="#8B5CF6"/>
    <text x="191" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="white">PASO 2</text>
    <text x="191" y="105" text-anchor="middle" font-size="22">📋</text>
    <text x="191" y="127" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Buscar en lista</text>
    <text x="191" y="143" text-anchor="middle" font-size="9" fill="#6B7280">Por número</text>
    <text x="191" y="155" text-anchor="middle" font-size="9" fill="#6B7280">de orden</text>
    <text x="250" y="125" text-anchor="middle" font-size="18" fill="#9CA3AF">›</text>
    <rect x="262" y="46" width="102" height="150" rx="10" fill="white" stroke="#BBF7D0" stroke-width="1.5"/>
    <rect x="262" y="46" width="102" height="34" rx="10" fill="#22C55E"/>
    <rect x="262" y="67" width="102" height="13" fill="#22C55E"/>
    <text x="313" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="white">PASO 3</text>
    <text x="313" y="105" text-anchor="middle" font-size="22">🗳️</text>
    <text x="313" y="127" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Votar en cabina</text>
    <text x="313" y="143" text-anchor="middle" font-size="9" fill="#6B7280">Cédula firmada</text>
    <text x="313" y="155" text-anchor="middle" font-size="9" fill="#6B7280">+ lapicero</text>
    <text x="372" y="125" text-anchor="middle" font-size="18" fill="#9CA3AF">›</text>
    <rect x="384" y="46" width="102" height="150" rx="10" fill="white" stroke="#FDE68A" stroke-width="1.5"/>
    <rect x="384" y="46" width="102" height="34" rx="10" fill="#F59E0B"/>
    <rect x="384" y="67" width="102" height="13" fill="#F59E0B"/>
    <text x="435" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="white">PASO 4</text>
    <text x="435" y="105" text-anchor="middle" font-size="22">✍️</text>
    <text x="435" y="127" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Firmar + Huella</text>
    <text x="435" y="143" text-anchor="middle" font-size="9" fill="#6B7280">En la lista +</text>
    <text x="435" y="155" text-anchor="middle" font-size="9" fill="#6B7280">devolver DNI</text>
    <rect x="18" y="210" width="524" height="36" rx="8" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1"/>
    <text x="280" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">✅ Ambos registros son OBLIGATORIOS: FIRMA + HUELLA DIGITAL</text>
    <text x="280" y="239" text-anchor="middle" font-size="9" fill="#166534">Si el elector no puede firmar o poner huella por impedimento físico, registrar la causa en Observaciones del Acta</text>
  </svg>`,

  control_asistencia: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="280" fill="#F4F5F7" rx="12"/>
    <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#111827">Hoja de Control de Asistencia — Modelo</text>
    <rect x="24" y="36" width="512" height="232" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="24" y="36" width="512" height="38" rx="10" fill="#A31621"/>
    <rect x="24" y="60" width="512" height="14" fill="#A31621"/>
    <text x="280" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="white">HOJA DE CONTROL DE ASISTENCIA DE MIEMBROS DE MESA</text>
    <text x="280" y="68" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.75)">Segunda Elección General 2026 — Mesa N° XXXX</text>
    <rect x="36" y="82" width="488" height="22" fill="#F7F8FA" rx="3"/>
    <text x="95" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">CARGO</text>
    <text x="234" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">NOMBRE COMPLETO</text>
    <text x="398" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">DNI</text>
    <text x="492" y="97" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">FIRMA</text>
    <line x1="36" y1="104" x2="524" y2="104" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="154" y1="82" x2="154" y2="268" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="322" y1="82" x2="322" y2="268" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="458" y1="82" x2="458" y2="268" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="24" y="104" width="512" height="36" fill="#F0FDF4"/>
    <text x="95" y="126" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">PRESIDENTE</text>
    <text x="238" y="126" text-anchor="middle" font-size="10" fill="#111827">García Quispe, Luis</text>
    <text x="390" y="126" text-anchor="middle" font-size="10" fill="#111827">45678901</text>
    <text x="491" y="128" text-anchor="middle" font-size="14" fill="#22C55E">✓</text>
    <line x1="24" y1="140" x2="536" y2="140" stroke="#E4E6EB" stroke-width="1"/>
    <text x="95" y="162" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">SECRETARIO</text>
    <text x="238" y="162" text-anchor="middle" font-size="10" fill="#111827">Mamani Torres, Ana</text>
    <text x="390" y="162" text-anchor="middle" font-size="10" fill="#111827">76543210</text>
    <text x="491" y="164" text-anchor="middle" font-size="14" fill="#22C55E">✓</text>
    <line x1="24" y1="176" x2="536" y2="176" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="24" y="176" width="512" height="40" fill="#FFF0F1"/>
    <text x="95" y="200" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">TERCER MIEMBRO</text>
    <text x="238" y="193" text-anchor="middle" font-size="9" font-weight="700" fill="#A31621">FALTÓ</text>
    <text x="238" y="207" text-anchor="middle" font-size="9" fill="#6B7280">Reemplazante: R. Flores</text>
    <text x="390" y="200" text-anchor="middle" font-size="10" fill="#6B7280">—</text>
    <text x="491" y="200" text-anchor="middle" font-size="9" fill="#A31621">FALTÓ</text>
    <line x1="24" y1="216" x2="536" y2="216" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="24" y="224" width="512" height="44" fill="#FFFBEB" rx="0"/>
    <text x="280" y="241" text-anchor="middle" font-size="9" font-weight="700" fill="#92400E">Hora de instalación: 6:15 a.m.  ·  Firma Presidente: _______________</text>
    <text x="280" y="257" text-anchor="middle" font-size="8" fill="#92400E">Los reemplazantes de fila deben registrar su DNI y nombre completo en el espacio de la persona que reemplazan</text>
  </svg>`,

  hoja_borrador: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="320" fill="#F4F5F7" rx="12"/>
    <text x="280" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Hoja Borrador — Método de Palotes</text>
    <rect x="20" y="36" width="520" height="272" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="20" y="36" width="520" height="32" rx="10" fill="#111827"/>
    <rect x="20" y="56" width="520" height="12" fill="#111827"/>
    <text x="280" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="white">HOJA BORRADOR — ESCRUTINIO · SEGUNDA ELECCIÓN GENERAL 2026</text>
    <rect x="20" y="68" width="520" height="22" fill="#F7F8FA"/>
    <text x="170" y="83" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">CANDIDATO / OPCIÓN</text>
    <text x="350" y="83" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">PALOTES (grupos de 5)</text>
    <text x="496" y="83" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">TOTAL</text>
    <line x1="278" y1="36" x2="278" y2="308" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="454" y1="36" x2="454" y2="308" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="20" y1="90" x2="540" y2="90" stroke="#E4E6EB" stroke-width="1"/>
    <!-- Candidato A -->
    <text x="149" y="116" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">CANDIDATO A</text>
    <g stroke="#111827" stroke-width="2" stroke-linecap="round">
      <line x1="295" y1="100" x2="295" y2="126"/>
      <line x1="307" y1="100" x2="307" y2="126"/>
      <line x1="319" y1="100" x2="319" y2="126"/>
      <line x1="331" y1="100" x2="331" y2="126"/>
      <line x1="289" y1="113" x2="337" y2="113" transform="rotate(-15,313,113)"/>
      <line x1="350" y1="100" x2="350" y2="126"/>
      <line x1="362" y1="100" x2="362" y2="126"/>
      <line x1="374" y1="100" x2="374" y2="126"/>
      <line x1="386" y1="100" x2="386" y2="126"/>
      <line x1="344" y1="113" x2="392" y2="113" transform="rotate(-15,368,113)"/>
      <line x1="405" y1="100" x2="405" y2="126"/>
      <line x1="417" y1="100" x2="417" y2="126"/>
      <line x1="429" y1="100" x2="429" y2="126"/>
      <line x1="441" y1="100" x2="441" y2="126"/>
      <line x1="399" y1="113" x2="447" y2="113" transform="rotate(-15,423,113)"/>
    </g>
    <text x="496" y="117" text-anchor="middle" font-size="15" font-weight="800" fill="#166534">15</text>
    <line x1="20" y1="132" x2="540" y2="132" stroke="#E4E6EB" stroke-width="1"/>
    <!-- Candidato B -->
    <rect x="20" y="132" width="520" height="42" fill="#F7F8FA"/>
    <text x="149" y="158" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">CANDIDATO B</text>
    <g stroke="#111827" stroke-width="2" stroke-linecap="round">
      <line x1="295" y1="142" x2="295" y2="168"/>
      <line x1="307" y1="142" x2="307" y2="168"/>
      <line x1="319" y1="142" x2="319" y2="168"/>
      <line x1="331" y1="142" x2="331" y2="168"/>
      <line x1="289" y1="155" x2="337" y2="155" transform="rotate(-15,313,155)"/>
      <line x1="350" y1="142" x2="350" y2="168"/>
      <line x1="362" y1="142" x2="362" y2="168"/>
      <line x1="374" y1="142" x2="374" y2="168"/>
      <line x1="386" y1="142" x2="386" y2="168"/>
      <line x1="344" y1="155" x2="392" y2="155" transform="rotate(-15,368,155)"/>
      <line x1="405" y1="142" x2="405" y2="168"/>
      <line x1="417" y1="142" x2="417" y2="168"/>
    </g>
    <text x="496" y="158" text-anchor="middle" font-size="15" font-weight="800" fill="#166534">12</text>
    <line x1="20" y1="174" x2="540" y2="174" stroke="#E4E6EB" stroke-width="1"/>
    <!-- Blancos -->
    <text x="149" y="196" text-anchor="middle" font-size="11" fill="#6B7280">VOTOS EN BLANCO</text>
    <g stroke="#9CA3AF" stroke-width="2" stroke-linecap="round">
      <line x1="295" y1="182" x2="295" y2="206"/>
      <line x1="307" y1="182" x2="307" y2="206"/>
      <line x1="319" y1="182" x2="319" y2="206"/>
    </g>
    <text x="496" y="197" text-anchor="middle" font-size="15" font-weight="800" fill="#6B7280">3</text>
    <line x1="20" y1="212" x2="540" y2="212" stroke="#E4E6EB" stroke-width="1"/>
    <!-- Nulos -->
    <rect x="20" y="212" width="520" height="42" fill="#FFF0F1"/>
    <text x="149" y="237" text-anchor="middle" font-size="11" fill="#A31621" font-weight="600">VOTOS NULOS</text>
    <g stroke="#A31621" stroke-width="2" stroke-linecap="round">
      <line x1="295" y1="222" x2="295" y2="248"/>
      <line x1="307" y1="222" x2="307" y2="248"/>
      <line x1="319" y1="222" x2="319" y2="248"/>
      <line x1="331" y1="222" x2="331" y2="248"/>
      <line x1="289" y1="235" x2="337" y2="235" transform="rotate(-15,313,235)"/>
      <line x1="350" y1="222" x2="350" y2="248"/>
      <line x1="362" y1="222" x2="362" y2="248"/>
      <line x1="374" y1="222" x2="374" y2="248"/>
    </g>
    <text x="496" y="237" text-anchor="middle" font-size="15" font-weight="800" fill="#A31621">8</text>
    <line x1="20" y1="254" x2="540" y2="254" stroke="#E4E6EB" stroke-width="1"/>
    <!-- Total -->
    <rect x="20" y="262" width="520" height="46" fill="#F0FDF4" rx="0"/>
    <text x="200" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">TOTAL ESCRUTADO:</text>
    <text x="496" y="280" text-anchor="middle" font-size="16" font-weight="800" fill="#166534">38</text>
    <text x="280" y="298" text-anchor="middle" font-size="10" fill="#14532D">15 + 12 + 3 + 8 = 38 · Debe coincidir con el conteo del ánfora ✓</text>
  </svg>`,

  acta_instalacion: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="320" fill="#F4F5F7" rx="12"/>
    <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#111827">Acta Electoral — Sección A (Instalación)</text>
    <rect x="16" y="32" width="528" height="276" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="16" y="32" width="528" height="40" rx="10" fill="#A31621"/>
    <rect x="16" y="58" width="528" height="14" fill="#A31621"/>
    <text x="280" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="white">ACTA ELECTORAL — SEGUNDA ELECCIÓN GENERAL 2026</text>
    <text x="280" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.8)">SECCIÓN A: INSTALACIÓN DE LA MESA DE SUFRAGIO</text>
    <rect x="28" y="80" width="512" height="24" fill="#F7F8FA" rx="4"/>
    <text x="40" y="96" font-size="9" fill="#6B7280">MESA N°:</text>
    <rect x="90" y="82" width="70" height="18" rx="3" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="125" y="95" text-anchor="middle" font-size="10" fill="#111827">1234</text>
    <text x="172" y="96" font-size="9" fill="#6B7280">DISTRITO:</text>
    <rect x="218" y="82" width="110" height="18" rx="3" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="273" y="95" text-anchor="middle" font-size="10" fill="#111827">Miraflores</text>
    <text x="342" y="96" font-size="9" fill="#6B7280">HORA:</text>
    <rect x="378" y="82" width="80" height="18" rx="3" fill="white" stroke="#FDE68A" stroke-width="1.5"/>
    <text x="418" y="95" text-anchor="middle" font-size="10" font-weight="700" fill="#A31621">6:15 a.m.</text>
    <text x="38" y="120" font-size="10" font-weight="700" fill="#111827">MIEMBROS PRESENTES:</text>
    <rect x="28" y="126" width="512" height="22" fill="#F0FDF4" rx="2"/>
    <text x="40" y="141" font-size="9" fill="#6B7280">PRESIDENTE:</text>
    <text x="150" y="141" font-size="9" fill="#111827">García Quispe, Luis Alberto</text>
    <text x="360" y="141" font-size="9" fill="#6B7280">DNI: 45678901</text>
    <text x="492" y="143" text-anchor="middle" font-size="12" fill="#22C55E">✓</text>
    <line x1="28" y1="148" x2="540" y2="148" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="28" y="148" width="512" height="22" fill="white"/>
    <text x="40" y="163" font-size="9" fill="#6B7280">SECRETARIO:</text>
    <text x="150" y="163" font-size="9" fill="#111827">Mamani Torres, Ana Rosa</text>
    <text x="360" y="163" font-size="9" fill="#6B7280">DNI: 76543210</text>
    <text x="492" y="165" text-anchor="middle" font-size="12" fill="#22C55E">✓</text>
    <line x1="28" y1="170" x2="540" y2="170" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="28" y="170" width="512" height="22" fill="#FFF0F1"/>
    <text x="40" y="185" font-size="9" fill="#6B7280">TERCER M.:</text>
    <text x="150" y="185" font-size="9" font-weight="700" fill="#A31621">FALTÓ — Reemplazante: Flores Ramos, R. · DNI: 44556677</text>
    <text x="492" y="185" text-anchor="middle" font-size="9" fill="#A31621">REE</text>
    <text x="38" y="212" font-size="10" font-weight="700" fill="#111827">MATERIAL RECIBIDO:</text>
    <rect x="28" y="218" width="512" height="36" fill="#F7F8FA" rx="4"/>
    <text x="56" y="234" font-size="9" fill="#6B7280">¿Refrigerios ONPE?</text>
    <rect x="168" y="220" width="44" height="16" rx="8" fill="#22C55E"/>
    <text x="190" y="232" text-anchor="middle" font-size="9" font-weight="700" fill="white">SÍ</text>
    <text x="250" y="234" font-size="9" fill="#6B7280">¿Material RENIEC?</text>
    <rect x="348" y="220" width="44" height="16" rx="8" fill="#E4E6EB"/>
    <text x="370" y="232" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">NO</text>
    <rect x="28" y="262" width="512" height="20" rx="3" fill="white" stroke="#E4E6EB" stroke-width="1" stroke-dasharray="4,2"/>
    <text x="280" y="276" text-anchor="middle" font-size="9" fill="#9CA3AF">Observaciones: Ninguna novedad al momento de la instalación.</text>
    <line x1="28" y1="288" x2="540" y2="288" stroke="#E4E6EB" stroke-width="1"/>
    <text x="120" y="302" text-anchor="middle" font-size="8" fill="#9CA3AF">Firma Presidente</text>
    <text x="280" y="302" text-anchor="middle" font-size="8" fill="#9CA3AF">Firma Secretario</text>
    <text x="440" y="302" text-anchor="middle" font-size="8" fill="#9CA3AF">Firma Tercer Miembro</text>
  </svg>`,

  acta_escrutinio: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="320" fill="#F4F5F7" rx="12"/>
    <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#111827">Acta Electoral — Sección C (Escrutinio)</text>
    <rect x="16" y="32" width="528" height="278" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <rect x="16" y="32" width="528" height="34" rx="10" fill="#111827"/>
    <rect x="16" y="52" width="528" height="14" fill="#111827"/>
    <text x="280" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="white">SECCIÓN C — RESULTADOS DEL ESCRUTINIO</text>
    <text x="280" y="65" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.65)">Mesa N° 1234 · Segunda Elección General 2026</text>
    <rect x="28" y="74" width="512" height="22" fill="#F7F8FA" rx="3"/>
    <text x="165" y="89" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">CANDIDATO / OPCIÓN</text>
    <text x="365" y="89" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">VOTOS (número)</text>
    <text x="490" y="89" text-anchor="middle" font-size="9" font-weight="700" fill="#6B7280">EN LETRAS</text>
    <line x1="276" y1="74" x2="276" y2="310" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="446" y1="74" x2="446" y2="310" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="28" y1="96" x2="540" y2="96" stroke="#E4E6EB" stroke-width="1"/>
    <text x="152" y="116" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">CANDIDATO A — Partido X</text>
    <text x="361" y="118" text-anchor="middle" font-size="18" font-weight="800" fill="#111827">15</text>
    <text x="493" y="116" text-anchor="middle" font-size="10" fill="#111827">QUINCE</text>
    <line x1="28" y1="126" x2="540" y2="126" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="16" y="126" width="528" height="36" fill="#F7F8FA"/>
    <text x="152" y="148" text-anchor="middle" font-size="11" font-weight="600" fill="#111827">CANDIDATO B — Partido Y</text>
    <text x="361" y="150" text-anchor="middle" font-size="18" font-weight="800" fill="#111827">12</text>
    <text x="493" y="148" text-anchor="middle" font-size="10" fill="#111827">DOCE</text>
    <line x1="28" y1="162" x2="540" y2="162" stroke="#E4E6EB" stroke-width="1"/>
    <text x="152" y="180" text-anchor="middle" font-size="11" fill="#6B7280">VOTOS EN BLANCO</text>
    <text x="361" y="182" text-anchor="middle" font-size="18" font-weight="800" fill="#6B7280">3</text>
    <text x="493" y="180" text-anchor="middle" font-size="10" fill="#6B7280">TRES</text>
    <line x1="28" y1="192" x2="540" y2="192" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="16" y="192" width="528" height="36" fill="#FFF0F1"/>
    <text x="152" y="214" text-anchor="middle" font-size="11" fill="#A31621" font-weight="600">VOTOS NULOS</text>
    <text x="361" y="216" text-anchor="middle" font-size="18" font-weight="800" fill="#A31621">8</text>
    <text x="493" y="214" text-anchor="middle" font-size="10" fill="#A31621">OCHO</text>
    <line x1="28" y1="228" x2="540" y2="228" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="16" y="236" width="528" height="36" fill="#F0FDF4"/>
    <text x="152" y="258" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">TOTAL VOTOS ESCRUTADOS</text>
    <text x="361" y="260" text-anchor="middle" font-size="18" font-weight="800" fill="#166534">38</text>
    <text x="493" y="258" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">TREINTA Y OCHO</text>
    <line x1="28" y1="272" x2="540" y2="272" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="16" y="280" width="528" height="30" fill="#EFF6FF" rx="0"/>
    <text x="155" y="292" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A5F">🔒 LÁMINA PROTECTORA</text>
    <text x="155" y="303" text-anchor="middle" font-size="8" fill="#3B82F6">sobre resultados</text>
    <text x="390" y="294" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">✓ Cuadra: 15+12+3+8=38</text>
    <text x="390" y="305" text-anchor="middle" font-size="8" fill="#14532D">Mismo que conteo del ánfora</text>
  </svg>`,

  numeros_modelo: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="280" fill="#F4F5F7" rx="12"/>
    <text x="280" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="#111827">Números Modelo ONPE — Escritura en Actas</text>
    <rect x="20" y="36" width="520" height="128" rx="10" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <text x="280" y="57" text-anchor="middle" font-size="11" fill="#6B7280">Escribe los números EXACTAMENTE como se muestra a continuación:</text>
    <text x="54"  y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">0</text>
    <text x="106" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">1</text>
    <text x="158" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">2</text>
    <text x="210" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">3</text>
    <text x="262" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">4</text>
    <text x="314" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">5</text>
    <text x="366" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">6</text>
    <text x="418" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">7</text>
    <text x="470" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">8</text>
    <text x="522" y="122" text-anchor="middle" font-size="58" font-weight="800" fill="#111827" font-family="Courier New,monospace">9</text>
    <line x1="80"  y1="36" x2="80"  y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="132" y1="36" x2="132" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="184" y1="36" x2="184" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="236" y1="36" x2="236" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="288" y1="36" x2="288" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="340" y1="36" x2="340" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="392" y1="36" x2="392" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="444" y1="36" x2="444" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <line x1="496" y1="36" x2="496" y2="164" stroke="#E4E6EB" stroke-width="1"/>
    <rect x="20" y="178" width="520" height="92" rx="10" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>
    <text x="280" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#78350F">⚠️ Pares que se confunden con más frecuencia</text>
    <text x="90"  y="222" text-anchor="middle" font-size="14" font-weight="800" fill="#A31621">1 ≠ 7</text>
    <text x="90"  y="236" text-anchor="middle" font-size="9" fill="#92400E">1 sin sombrero</text>
    <text x="90"  y="248" text-anchor="middle" font-size="9" fill="#92400E">7 lleva trazo —</text>
    <line x1="170" y1="200" x2="170" y2="262" stroke="#FDE68A" stroke-width="1"/>
    <text x="225" y="222" text-anchor="middle" font-size="14" font-weight="800" fill="#A31621">4 ≠ 9</text>
    <text x="225" y="236" text-anchor="middle" font-size="9" fill="#92400E">4 ángulo abierto</text>
    <text x="225" y="248" text-anchor="middle" font-size="9" fill="#92400E">9 círculo cerrado</text>
    <line x1="305" y1="200" x2="305" y2="262" stroke="#FDE68A" stroke-width="1"/>
    <text x="368" y="222" text-anchor="middle" font-size="14" font-weight="800" fill="#A31621">0 ≠ 6 ≠ 8</text>
    <text x="368" y="236" text-anchor="middle" font-size="9" fill="#92400E">0 ovalado y cerrado</text>
    <text x="368" y="248" text-anchor="middle" font-size="9" fill="#92400E">6 y 8 tienen interior</text>
    <line x1="440" y1="200" x2="440" y2="262" stroke="#FDE68A" stroke-width="1"/>
    <text x="490" y="220" text-anchor="middle" font-size="10" fill="#78350F" font-weight="700">Usar siempre</text>
    <text x="490" y="234" text-anchor="middle" font-size="10" fill="#78350F" font-weight="700">lapicero</text>
    <text x="490" y="248" text-anchor="middle" font-size="13" fill="#A31621" font-weight="800">✍️ NEGRO</text>
  </svg>`,

  sobres_colores: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-family="Outfit,sans-serif">
    <rect width="560" height="290" fill="#F4F5F7" rx="12"/>
    <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#111827">Sobres de Colores — Destino de cada Acta</text>
    <!-- PLOMO -->
    <rect x="16" y="40" width="118" height="86" rx="8" fill="#6B7280" stroke="#4B5563" stroke-width="1.5"/>
    <polygon points="16,40 75,82 134,40" fill="#9CA3AF"/>
    <text x="75" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="white">PLOMO</text>
    <text x="75" y="117" text-anchor="middle" font-size="9" fill="#E5E7EB">Acta N° 1</text>
    <rect x="16" y="140" width="118" height="42" rx="6" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="75" y="157" text-anchor="middle" font-size="10" font-weight="700" fill="#111827">ONPE</text>
    <text x="75" y="170" text-anchor="middle" font-size="9" fill="#6B7280">Local Cómputo</text>
    <rect x="16" y="190" width="118" height="20" rx="4" fill="#FFF0F1" stroke="#FBCDD0" stroke-width="1"/>
    <text x="75" y="204" text-anchor="middle" font-size="9" font-weight="800" fill="#A31621">★ PRINCIPAL</text>
    <!-- CELESTE -->
    <rect x="152" y="40" width="118" height="86" rx="8" fill="#38BDF8" stroke="#0284C7" stroke-width="1.5"/>
    <polygon points="152,40 211,82 270,40" fill="#7DD3FC"/>
    <text x="211" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="white">CELESTE</text>
    <text x="211" y="117" text-anchor="middle" font-size="9" fill="#E0F2FE">Acta N° 2</text>
    <rect x="152" y="140" width="118" height="42" rx="6" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="211" y="157" text-anchor="middle" font-size="10" font-weight="700" fill="#111827">JEE</text>
    <text x="211" y="170" text-anchor="middle" font-size="9" fill="#6B7280">Jurado Electoral</text>
    <!-- ROJO -->
    <rect x="288" y="40" width="118" height="86" rx="8" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5"/>
    <polygon points="288,40 347,82 406,40" fill="#FCA5A5"/>
    <text x="347" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="white">ROJO</text>
    <text x="347" y="117" text-anchor="middle" font-size="9" fill="#FEE2E2">Acta N° 3</text>
    <rect x="288" y="140" width="118" height="42" rx="6" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="347" y="157" text-anchor="middle" font-size="10" font-weight="700" fill="#111827">PERSONERO</text>
    <text x="347" y="170" text-anchor="middle" font-size="9" fill="#6B7280">O queda en caja</text>
    <!-- VERDE -->
    <rect x="424" y="40" width="118" height="86" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="1.5"/>
    <polygon points="424,40 483,82 542,40" fill="#86EFAC"/>
    <text x="483" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="white">VERDE</text>
    <text x="483" y="117" text-anchor="middle" font-size="9" fill="#DCFCE7">Acta N° 4</text>
    <rect x="424" y="140" width="118" height="42" rx="6" fill="white" stroke="#E4E6EB" stroke-width="1"/>
    <text x="483" y="157" text-anchor="middle" font-size="10" font-weight="700" fill="#111827">ONPE</text>
    <text x="483" y="170" text-anchor="middle" font-size="9" fill="#6B7280">Custodia</text>
    <!-- Info adicional -->
    <rect x="16" y="198" width="528" height="78" rx="8" fill="white" stroke="#E4E6EB" stroke-width="1.5"/>
    <text x="280" y="216" text-anchor="middle" font-size="11" font-weight="700" fill="#111827">📋 Otros materiales a entregar:</text>
    <text x="90"  y="236" text-anchor="middle" font-size="10" fill="#6B7280">Sobre ANARANJADO</text>
    <text x="90"  y="250" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Lista de Electores</text>
    <line x1="182" y1="218" x2="182" y2="264" stroke="#E4E6EB" stroke-width="1"/>
    <text x="278" y="236" text-anchor="middle" font-size="10" fill="#6B7280">Sobre PLÁSTICO</text>
    <text x="278" y="250" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Cédulas escrutadas</text>
    <line x1="376" y1="218" x2="376" y2="264" stroke="#E4E6EB" stroke-width="1"/>
    <text x="456" y="236" text-anchor="middle" font-size="10" fill="#6B7280">CAJA DE RESTOS</text>
    <text x="456" y="250" text-anchor="middle" font-size="10" font-weight="600" fill="#111827">Útiles y sobrantes</text>
  </svg>`,
};


/* ================================================================
   3. ESTADO DE LA APLICACIÓN
   ================================================================ */

const estado = {
  vista: 'bienvenida',
  seccionActual: -1,
  pasoActual: 0,
  seccionesCompletadas: new Set(),
  itemsMarcados: {},
};

function keyPaso(si, pi) { return `s${si}_p${pi}`; }
function totalPasos() { return SECCIONES.reduce((a, s) => a + s.pasos.length, 0); }

function totalPasosCompletados() {
  let t = 0;
  SECCIONES.forEach((sec, si) => {
    sec.pasos.forEach((paso, pi) => {
      const req = paso.checklist.filter(i => i.requerido);
      if (req.length === 0) { t++; return; }
      const marc = estado.itemsMarcados[keyPaso(si, pi)] || new Set();
      if (req.every(i => marc.has(i.id))) t++;
    });
  });
  return t;
}

function porcentajeGeneral() {
  const total = totalPasos();
  return total === 0 ? 0 : Math.round((totalPasosCompletados() / total) * 100);
}

function esPasoListo(si, pi) {
  const paso = SECCIONES[si].pasos[pi];
  const req = paso.checklist.filter(i => i.requerido);
  if (req.length === 0) return true;
  const marc = estado.itemsMarcados[keyPaso(si, pi)] || new Set();
  return req.every(i => marc.has(i.id));
}

function esSeccionCompletada(si) {
  return estado.seccionesCompletadas.has(si);
}


/* ================================================================
   4. RENDERIZADO DE SIDEBAR Y PROGRESO
   ================================================================ */

function renderizarSidebar() {
  const nav = document.getElementById('sidebarNav');
  if (!nav) return;
  nav.innerHTML = SECCIONES.map((sec, si) => {
    const completada = esSeccionCompletada(si);
    const enProgreso = estado.seccionActual === si && !['bienvenida'].includes(estado.vista);
    let cls = 'nav-item';
    if (completada) cls += ' completado';
    else if (enProgreso) cls += ' activo en-progreso';
    const status = completada
      ? '<span class="nav-status">✓</span>'
      : enProgreso
        ? '<span class="nav-status">›</span>'
        : `<span class="nav-status">${si + 1}</span>`;
    return `<div class="${cls}" data-si="${si}" role="button" tabindex="0" aria-label="Módulo ${si + 1}: ${sec.titulo}">
      <span class="nav-emoji" aria-hidden="true">${sec.emoji}</span>
      <div class="nav-text">
        <div class="nav-title">${sec.titulo}</div>
        <div class="nav-subtitle">${sec.horario}</div>
      </div>${status}
    </div>`;
  }).join('');

  nav.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => { irASeccion(parseInt(el.dataset.si)); cerrarSidebar(); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { irASeccion(parseInt(el.dataset.si)); cerrarSidebar(); } });
  });
}

function renderizarProgreso() {
  const pct = porcentajeGeneral();
  const fill = document.getElementById('pwFill');
  const text = document.getElementById('sidebarPct');
  const track = document.getElementById('pwTrack');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

function actualizarBreadcrumb() {
  const el = document.getElementById('topbarBreadcrumb');
  if (!el) return;
  if (estado.seccionActual < 0) {
    el.innerHTML = '<span class="tb-root">Inicio</span>';
    return;
  }
  const sec = SECCIONES[estado.seccionActual];
  let html = `<span class="tb-root">Inicio</span><span class="tb-sep" aria-hidden="true"> › </span><span class="tb-section">${sec.titulo}</span>`;
  if (estado.vista === 'paso') {
    const paso = sec.pasos[estado.pasoActual];
    html += `<span class="tb-sep" aria-hidden="true"> › </span><span class="tb-step">${paso.titulo}</span>`;
  }
  el.innerHTML = html;
}

function actualizarBarraPasos() {
  const wrap = document.getElementById('stepProgressWrap');
  const fill = document.getElementById('spFill');
  const label = document.getElementById('spLabel');
  if (!wrap) return;
  if (estado.vista === 'paso' && estado.seccionActual >= 0) {
    const sec = SECCIONES[estado.seccionActual];
    const total = sec.pasos.length;
    const actual = estado.pasoActual + 1;
    const pct = Math.round((actual / total) * 100);
    wrap.style.display = 'flex';
    wrap.removeAttribute('aria-hidden');
    fill.style.width = pct + '%';
    label.textContent = `Paso ${actual} de ${total}`;
  } else {
    wrap.style.display = 'none';
    wrap.setAttribute('aria-hidden', 'true');
  }
}


/* ================================================================
   5. PANTALLA BIENVENIDA
   ================================================================ */

function renderizarBienvenida() {
  estado.vista = 'bienvenida';
  estado.seccionActual = -1;
  actualizarBreadcrumb();
  actualizarBarraPasos();
  renderizarSidebar();
  renderizarProgreso();

  const pct = porcentajeGeneral();

  const grid = SECCIONES.map((sec, si) => {
    const completada = esSeccionCompletada(si);
    const badge = completada
      ? '<span style="font-size:10px;font-weight:700;color:#166534;background:#F0FDF4;border:1px solid #BBF7D0;padding:2px 8px;border-radius:99px;">✓ Completado</span>'
      : `<span style="font-size:10px;font-weight:600;color:#9CA3AF;">${sec.pasos.length} pasos</span>`;
    return `<div class="module-card" data-si="${si}" role="button" tabindex="0" aria-label="Módulo ${si + 1}: ${sec.titulo}">
      <div class="mc-top">
        <div class="mc-emoji" aria-hidden="true">${sec.emoji}</div>
        <span class="mc-num">MÓDULO ${si + 1}</span>
      </div>
      <div class="mc-title">${sec.titulo}</div>
      <div class="mc-time">⏱ ${sec.horario}</div>
      <div class="mc-desc">${sec.resumen}</div>
      <div class="mc-footer">${badge}<span class="mc-arrow" aria-hidden="true">→</span></div>
    </div>`;
  }).join('');

  const html = `
    <div class="welcome-hero">
      <div class="welcome-badge">🗳️ SIMULADOR ELECTORAL 2026 · PERÚ</div>
      <h1 class="welcome-title">Capacitación para<br><span>Miembros de Mesa</span></h1>
      <p class="welcome-subtitle">Aprende paso a paso el procedimiento completo de un Miembro de Mesa para la Segunda Elección General 2026.</p>
      <div class="welcome-stats">
        <div class="stat-item"><span class="stat-num">${SECCIONES.length}</span><span class="stat-label">Módulos</span></div>
        <div class="stat-item"><span class="stat-num">${totalPasos()}</span><span class="stat-label">Pasos</span></div>
        <div class="stat-item"><span class="stat-num">${pct}%</span><span class="stat-label">Avance</span></div>
      </div>
    </div>
    <div class="modules-grid">${grid}</div>
    <div class="welcome-cta">
      <button class="btn-primary-lg" id="btnEmpezar" aria-label="Comenzar desde el módulo 1">
        <span>Comenzar Capacitación</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>`;

  document.getElementById('mainContent').innerHTML = html;

  document.querySelectorAll('.module-card').forEach(el => {
    el.addEventListener('click', () => irASeccion(parseInt(el.dataset.si)));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') irASeccion(parseInt(el.dataset.si)); });
  });

  const btnEmp = document.getElementById('btnEmpezar');
  if (btnEmp) btnEmp.addEventListener('click', () => irASeccion(0));
}


/* ================================================================
   6. PANTALLA INTRO DE SECCIÓN
   ================================================================ */

function renderizarIntroSeccion(si) {
  estado.vista = 'intro-seccion';
  estado.seccionActual = si;
  estado.pasoActual = 0;
  actualizarBreadcrumb();
  actualizarBarraPasos();
  renderizarSidebar();
  renderizarProgreso();

  const sec = SECCIONES[si];
  const completada = esSeccionCompletada(si);

  const pasosList = sec.pasos.map((p, pi) => {
    const listo = esPasoListo(si, pi);
    return `<div class="si-step-row">
      <div class="si-step-num" style="${listo ? 'background:#F0FDF4;color:#166534;' : ''}">${listo ? '✓' : pi + 1}</div>
      <span class="si-step-text">${p.titulo}</span>
    </div>`;
  }).join('');

  const html = `
    <div class="section-intro">
      <div class="section-intro-header">
        <div class="si-emoji-wrap" aria-hidden="true">${sec.emoji}</div>
        <div class="si-meta">
          <div class="si-label">MÓDULO ${si + 1} DE ${SECCIONES.length}</div>
          <h2 class="si-title">${sec.titulo}</h2>
          <span class="si-time-tag">⏱ ${sec.horario}</span>
        </div>
      </div>
      <div class="si-summary">${sec.resumen}</div>
      <div class="card">
        <div class="card-heading">PASOS DE ESTE MÓDULO</div>
        <div class="si-steps-preview">${pasosList}</div>
      </div>
      <div class="si-actions">
        <button class="btn-primary" id="btnIniciarModulo">${completada ? '🔁 Repasar módulo' : '▶ Iniciar módulo'}</button>
        <button class="btn-secondary" id="btnVolverInicio">← Volver al inicio</button>
      </div>
    </div>`;

  document.getElementById('mainContent').innerHTML = html;
  document.getElementById('btnIniciarModulo').addEventListener('click', () => renderizarPaso(si, 0));
  document.getElementById('btnVolverInicio').addEventListener('click', renderizarBienvenida);
}


/* ================================================================
   7. PANTALLA DE PASO
   ================================================================ */

function renderizarPaso(si, pi) {
  estado.vista = 'paso';
  estado.seccionActual = si;
  estado.pasoActual = pi;
  actualizarBreadcrumb();
  actualizarBarraPasos();
  renderizarSidebar();
  renderizarProgreso();

  const sec = SECCIONES[si];
  const paso = sec.pasos[pi];
  const key = keyPaso(si, pi);
  if (!estado.itemsMarcados[key]) estado.itemsMarcados[key] = new Set();
  const marc = estado.itemsMarcados[key];

  const checklistHTML = paso.checklist.map(item => {
    const checked = marc.has(item.id);
    return `<div class="check-item${checked ? ' checked' : ''}" data-id="${item.id}" role="checkbox" aria-checked="${checked}" tabindex="0">
      <div class="check-box" aria-hidden="true"></div>
      <span class="check-label">${item.texto}</span>
      ${item.requerido ? '<span class="check-req">REQUERIDO</span>' : ''}
    </div>`;
  }).join('');

  const validacionHTML = paso.validacion
    ? `<div class="validation-box"><span class="vb-icon" aria-hidden="true">ℹ️</span><span class="vb-text"><strong>Validación importante:</strong> ${paso.validacion}</span></div>`
    : '';

  const noHacerHTML = paso.noHacer
    ? `<div class="donot-box"><span class="db-icon" aria-hidden="true">🚫</span><div><div class="db-title">QUÉ NO HACER</div><div class="db-text">${paso.noHacer}</div></div></div>`
    : '';

  const alertaHTML = paso.alerta
    ? buildAlertaInline(paso.alerta)
    : '';

  const btnEjemploHTML = paso.tieneEjemplo
    ? `<button class="btn-example" id="btnEjemplo" aria-label="Ver ejemplo visual de ${paso.titulo}">🔎 Ver ejemplo</button>`
    : '';

  // Botón media real (imagen O video) — card flotante
  const mediaReal = paso.mediaReal || null;
  const btnMediaRealHTML = mediaReal ? (() => {
    const esVideo  = mediaReal.tipo === 'video';
    const icono    = esVideo ? '🎬' : '📄';
    const badge    = esVideo
      ? '<span class="bmr-badge bmr-badge-vid">VIDEO</span>'
      : '<span class="bmr-badge bmr-badge-img">IMAGEN</span>';
    const subtext  = esVideo
      ? 'Video en bucle — toca para reproducir'
      : 'Toca para abrir en pantalla completa con zoom';
    return `<button class="btn-media-real" id="btnMediaReal"
              aria-label="${esVideo ? 'Ver video' : 'Ver imagen'}: ${mediaReal.titulo}">
        <div class="bmr-icon" aria-hidden="true">${icono}</div>
        <div class="bmr-body">
          <span class="bmr-label">${esVideo ? 'VIDEO DE DEMOSTRACIÓN' : 'IMAGEN DE REFERENCIA REAL'}</span>
          <span class="bmr-title">${mediaReal.titulo}</span>
          <span class="bmr-sub">${subtext}</span>
        </div>
        ${badge}
        <div class="bmr-arrow" aria-hidden="true">↗</div>
      </button>`;
  })() : '';

  const esPrimerPaso = pi === 0;
  const esUltimoPaso = pi === sec.pasos.length - 1;
  const listo = esPasoListo(si, pi);

  const btnSigLabel = esUltimoPaso ? `Finalizar módulo →` : `Siguiente paso →`;

  const html = `
    <div class="step-screen">
      <div class="step-screen-header">
        <div class="step-chip">${sec.emoji} ${sec.titulo} · Paso ${pi + 1} de ${sec.pasos.length}</div>
        <h2 class="step-title">${paso.titulo}</h2>
        <p class="step-subtitle">${paso.subtitulo}</p>
      </div>

      <div class="card">
        <div class="card-heading">DESCRIPCIÓN</div>
        <p class="step-description">${paso.descripcion}</p>
      </div>

      <div class="card">
        <div class="card-heading">LISTA DE VERIFICACIÓN</div>
        <div class="checklist" id="checklist" role="group" aria-label="Lista de verificación">${checklistHTML}</div>
      </div>

      ${validacionHTML}
      ${noHacerHTML}
      ${alertaHTML}
      ${btnMediaRealHTML}

      <div class="step-actions">
        <div class="step-actions-left">
          ${esPrimerPaso
            ? `<button class="btn-secondary" id="btnAtras">← Inicio módulo</button>`
            : `<button class="btn-secondary" id="btnAtras">← Paso anterior</button>`
          }
          ${btnEjemploHTML}
          ${paso.checklist.filter(i => i.requerido).length > 0 ? `
          <button class="btn-skip" id="btnSkip" title="Marcar todos los ítems y continuar"
            aria-label="Completar todos los ítems de este paso automáticamente">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="4" x2="14" y2="4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            Completar todo
          </button>` : ''}
        </div>
        <div class="step-actions-right">
          <button class="btn-primary" id="btnSiguiente" ${listo ? '' : 'disabled'} aria-label="${btnSigLabel}">${btnSigLabel}</button>
        </div>
      </div>
    </div>`;

  document.getElementById('mainContent').innerHTML = html;

  // Checklist interactivo
  document.querySelectorAll('.check-item').forEach(el => {
    el.addEventListener('click', () => toggleCheck(el, si, pi));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggleCheck(el, si, pi); });
  });

  // Botón "Completar todo" (skip)
  const btnSkip = document.getElementById('btnSkip');
  if (btnSkip) {
    btnSkip.addEventListener('click', () => completarTodoPaso(si, pi));
  }

  // Botón atrás
  const btnAtras = document.getElementById('btnAtras');
  if (btnAtras) {
    btnAtras.addEventListener('click', () => {
      if (esPrimerPaso) renderizarIntroSeccion(si);
      else renderizarPaso(si, pi - 1);
    });
  }

  // Botón siguiente
  const btnSig = document.getElementById('btnSiguiente');
  if (btnSig) {
    btnSig.addEventListener('click', () => {
      if (!esPasoListo(si, pi)) {
        showToast('Completa todos los ítems requeridos para continuar.', 'warning');
        return;
      }
      if (esUltimoPaso) {
        estado.seccionesCompletadas.add(si);
        renderizarSeccionCompletada(si);
      } else {
        renderizarPaso(si, pi + 1);
      }
    });
  }

  // Botón ejemplo SVG
  const btnEj = document.getElementById('btnEjemplo');
  if (btnEj) {
    btnEj.addEventListener('click', () => abrirEjemplo(paso.tipoEjemplo, paso.tituloEjemplo, paso.captionEjemplo));
  }

  // Botón media real (imagen o video)
  const btnMR = document.getElementById('btnMediaReal');
  if (btnMR && paso.mediaReal) {
    btnMR.addEventListener('click', () => abrirVisor(paso.mediaReal));
  }

  // Alerta al entrar al paso (si aplica)
  if (paso.alertaAlEntrar && paso.alertaEntrada) {
    setTimeout(() => mostrarAlerta(paso.alertaEntrada.titulo, paso.alertaEntrada.texto, getIconoAlerta('info')), 400);
  }
}

function toggleCheck(el, si, pi) {
  const id = el.dataset.id;
  const key = keyPaso(si, pi);
  const marc = estado.itemsMarcados[key];
  if (marc.has(id)) {
    marc.delete(id);
    el.classList.remove('checked');
    el.setAttribute('aria-checked', 'false');
  } else {
    marc.add(id);
    el.classList.add('checked');
    el.setAttribute('aria-checked', 'true');
    showToast('✓ Marcado', 'success');
  }
  // Actualizar botón siguiente
  const btnSig = document.getElementById('btnSiguiente');
  if (btnSig) {
    const listo = esPasoListo(si, pi);
    btnSig.disabled = !listo;
    if (listo) {
      showToast('¡Todos los ítems requeridos completados!', 'success');
    }
  }
  renderizarProgreso();
  renderizarSidebar();
}

function buildAlertaInline(alerta) {
  const esExito = alerta.tipo === 'exito';
  if (esExito) {
    return `<div class="tip-box"><span class="tip-icon" aria-hidden="true">✅</span><div><strong style="display:block;margin-bottom:4px;color:#14532D;">${alerta.titulo}</strong><span class="tip-text">${alerta.texto}</span></div></div>`;
  }
  return `<div class="alert-inline"><span class="ai-icon" aria-hidden="true">🚨</span><div><div class="ai-title">${alerta.titulo}</div><div class="ai-text">${alerta.texto}</div></div></div>`;
}


/* ================================================================
   8. PANTALLA DE SECCIÓN COMPLETADA
   ================================================================ */

function renderizarSeccionCompletada(si) {
  estado.vista = 'completado-seccion';
  actualizarBreadcrumb();
  actualizarBarraPasos();
  renderizarSidebar();
  renderizarProgreso();

  const sec = SECCIONES[si];
  const siguienteIdx = si + 1;
  const haySiguiente = siguienteIdx < SECCIONES.length;

  // Verificar si completamos todo
  if (!haySiguiente && estado.seccionesCompletadas.size === SECCIONES.length) {
    renderizarFinCompleto();
    return;
  }

  const siguienteCard = haySiguiente ? `
    <div class="sc-next-card" id="btnIrSiguiente" role="button" tabindex="0" aria-label="Ir al siguiente módulo: ${SECCIONES[siguienteIdx].titulo}">
      <div class="sc-next-emoji" aria-hidden="true">${SECCIONES[siguienteIdx].emoji}</div>
      <div>
        <div class="sc-next-label">SIGUIENTE MÓDULO</div>
        <div class="sc-next-title">${SECCIONES[siguienteIdx].titulo}</div>
      </div>
      <span class="sc-next-arrow" aria-hidden="true">→</span>
    </div>` : '';

  const html = `
    <div class="section-complete">
      <div class="sc-checkmark" aria-hidden="true">✓</div>
      <h2 class="sc-title">¡Módulo completado!</h2>
      <p class="sc-message">Has completado el módulo <strong>${sec.titulo}</strong>. ¡Excelente trabajo! Cada paso que completas te acerca más a estar listo para el día de las elecciones.</p>
      ${siguienteCard}
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-secondary" id="btnRepasarSeccion">↩ Repasar módulo</button>
        <button class="btn-secondary" id="btnIrInicio">🏠 Ir al inicio</button>
        ${haySiguiente ? `<button class="btn-primary" id="btnContinuarSig">Continuar →</button>` : ''}
      </div>
    </div>`;

  document.getElementById('mainContent').innerHTML = html;

  const nextCard = document.getElementById('btnIrSiguiente');
  if (nextCard) {
    nextCard.addEventListener('click', () => irASeccion(siguienteIdx));
    nextCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') irASeccion(siguienteIdx); });
  }

  const btnRep = document.getElementById('btnRepasarSeccion');
  if (btnRep) btnRep.addEventListener('click', () => renderizarIntroSeccion(si));

  const btnIni = document.getElementById('btnIrInicio');
  if (btnIni) btnIni.addEventListener('click', renderizarBienvenida);

  const btnCont = document.getElementById('btnContinuarSig');
  if (btnCont) btnCont.addEventListener('click', () => irASeccion(siguienteIdx));

  // Mostrar alerta del paso final si la tiene
  const ultimoPaso = sec.pasos[sec.pasos.length - 1];
  if (ultimoPaso.alerta) {
    setTimeout(() => mostrarAlerta(ultimoPaso.alerta.titulo, ultimoPaso.alerta.texto, getIconoAlerta(ultimoPaso.alerta.tipo)), 500);
  }
}


/* ================================================================
   9. PANTALLA FINAL (TODOS LOS MÓDULOS COMPLETADOS)
   ================================================================ */

function renderizarFinCompleto() {
  estado.vista = 'fin';
  actualizarBreadcrumb();
  actualizarBarraPasos();
  renderizarSidebar();
  renderizarProgreso();

  const modulosDone = SECCIONES.map(sec =>
    `<div class="fmd-item"><span aria-hidden="true">${sec.emoji}</span> ${sec.titulo}</div>`
  ).join('');

  const html = `
    <div class="final-complete">
      <span class="fc-trophy" aria-hidden="true">🏆</span>
      <h2 class="fc-title">¡Capacitación Completada!</h2>
      <p class="fc-subtitle">Has finalizado todos los módulos del simulador. Estás preparado para desempeñar tu función como Miembro de Mesa con confianza y profesionalismo.</p>
      <div class="fc-modules-done">${modulosDone}</div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary-lg" id="btnReiniciarFinal">
          <span>🔁 Repasar todo de nuevo</span>
        </button>
      </div>
      <p style="font-size:13px;color:#9CA3AF;margin-top:24px;">Segunda Elección General 2026 · Perú</p>
    </div>`;

  document.getElementById('mainContent').innerHTML = html;

  const btnRef = document.getElementById('btnReiniciarFinal');
  if (btnRef) btnRef.addEventListener('click', renderizarBienvenida);
}


/* ================================================================
   10. NAVEGACIÓN
   ================================================================ */

function irASeccion(si) {
  if (si < 0 || si >= SECCIONES.length) return;
  renderizarIntroSeccion(si);
}

function reiniciarSimulador() {
  mostrarAlerta(
    '🔄 ¿Reiniciar el simulador?',
    'Se borrará todo tu progreso actual y volverás al inicio. ¿Deseas continuar?',
    '⚠️',
    () => {
      estado.vista = 'bienvenida';
      estado.seccionActual = -1;
      estado.pasoActual = 0;
      estado.seccionesCompletadas = new Set();
      estado.itemsMarcados = {};
      renderizarBienvenida();
      showToast('Simulador reiniciado.', 'success');
    }
  );
}


/* ================================================================
   11. MODAL DE EJEMPLO VISUAL
   ================================================================ */

function abrirEjemplo(tipo, titulo, caption) {
  const svgHTML = EJEMPLOS[tipo];
  if (!svgHTML) return;
  document.getElementById('exampleModalTitle').textContent = titulo || 'Ejemplo Visual';
  document.getElementById('exampleBody').innerHTML = svgHTML;
  document.getElementById('exampleCaption').textContent = caption || '';
  abrirModal('exampleBackdrop');
}

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Foco al primer botón del modal
  const firstBtn = modal.querySelector('button');
  if (firstBtn) setTimeout(() => firstBtn.focus(), 100);
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


/* ================================================================
   12. MODAL DE ALERTA
   ================================================================ */

let alertConfirmCallback = null;

function getIconoAlerta(tipo) {
  const iconos = { critica: '🚨', exito: '✅', info: '🔔', warning: '⚠️' };
  return iconos[tipo] || '💬';
}

function mostrarAlerta(titulo, mensaje, icono, onConfirm) {
  document.getElementById('alertTitle').textContent = titulo;
  document.getElementById('alertMessage').textContent = mensaje;
  document.getElementById('alertIcon').textContent = icono || '💬';
  alertConfirmCallback = onConfirm || null;
  abrirModal('alertBackdrop');
}


/* ================================================================
   13. TOAST
   ================================================================ */

let toastTimer = null;

function showToast(msg, tipo) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.className = 'toast show' + (tipo ? ` ${tipo}` : '');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}


/* ================================================================
   14. SIDEBAR MÓVIL
   ================================================================ */

function abrirSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebarOverlay');
  const hb = document.getElementById('hamburger');
  sb.classList.add('open');
  ov.style.display = 'block';
  // Forzar reflow antes de agregar clase visible
  ov.offsetHeight;
  ov.classList.add('visible');
  hb.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function cerrarSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebarOverlay');
  const hb = document.getElementById('hamburger');
  sb.classList.remove('open');
  ov.classList.remove('visible');
  hb.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  setTimeout(() => { 
    if (!sb.classList.contains('open')) {
      ov.style.display = 'none';
    }
  }, 300);
}


/* ================================================================
   15. BOTÓN SCROLL AL INICIO
   ================================================================ */

function inicializarScrollTop() {
  const btn = document.getElementById('btnScrollTop');
  if (!btn) return;

  // Mostrar/ocultar botón según scroll
  let scrollTimer = null;
  const toggleButton = () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, 100);
  };

  // Escuchar scroll
  window.addEventListener('scroll', toggleButton, { passive: true });

  // Click en el botón: scroll suave al inicio
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Verificar posición inicial
  toggleButton();
}


/* ================================================================
   16. EVENTOS GLOBALES
   ================================================================ */

function inicializar() {

  // Botón hamburger
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    sb.classList.contains('open') ? cerrarSidebar() : abrirSidebar();
  });

  // Cerrar sidebar con botón X
  const sbClose = document.getElementById('sidebarClose');
  if (sbClose) sbClose.addEventListener('click', cerrarSidebar);

  // Overlay cierra sidebar
  const ov = document.getElementById('sidebarOverlay');
  if (ov) ov.addEventListener('click', cerrarSidebar);

  // Botón reiniciar
  const btnRst = document.getElementById('btnRestart');
  if (btnRst) btnRst.addEventListener('click', reiniciarSimulador);

  // Modal ejemplo — cerrar
  const exClose = document.getElementById('exampleClose');
  if (exClose) exClose.addEventListener('click', () => cerrarModal('exampleBackdrop'));
  const exClosePri = document.getElementById('exampleClosePrimary');
  if (exClosePri) exClosePri.addEventListener('click', () => cerrarModal('exampleBackdrop'));

  // Modal alerta — confirmar
  const alertConf = document.getElementById('alertConfirm');
  if (alertConf) alertConf.addEventListener('click', () => {
    cerrarModal('alertBackdrop');
    if (typeof alertConfirmCallback === 'function') alertConfirmCallback();
    alertConfirmCallback = null;
  });

  // Cerrar modales con click en backdrop
  document.getElementById('exampleBackdrop').addEventListener('click', e => {
    if (e.target.id === 'exampleBackdrop') cerrarModal('exampleBackdrop');
  });
  document.getElementById('alertBackdrop').addEventListener('click', e => {
    if (e.target.id === 'alertBackdrop') cerrarModal('alertBackdrop');
  });

  // Cerrar modales y visor con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const iv = document.getElementById('ivBackdrop');
      if (iv && iv.classList.contains('open')) { cerrarVisor(); return; }
      if (document.getElementById('exampleBackdrop').classList.contains('open')) cerrarModal('exampleBackdrop');
      if (document.getElementById('alertBackdrop').classList.contains('open'))   cerrarModal('alertBackdrop');
    }
  });

  // Inicializar el visor de imagen
  inicializarVisor();

  // Botón scroll al inicio
  inicializarScrollTop();

  // Render inicial
  renderizarBienvenida();
}

/* ================================================================
   16. COMPLETAR TODO (SKIP) — marca todos los ítems requeridos
   ================================================================ */

function completarTodoPaso(si, pi) {
  const paso = SECCIONES[si].pasos[pi];
  const key  = keyPaso(si, pi);
  if (!estado.itemsMarcados[key]) estado.itemsMarcados[key] = new Set();
  const marc = estado.itemsMarcados[key];

  // Marcar todos los ítems requeridos
  const requeridos = paso.checklist.filter(i => i.requerido);
  requeridos.forEach(item => marc.add(item.id));

  // Reflejar en el DOM
  document.querySelectorAll('.check-item').forEach(el => {
    const id = el.dataset.id;
    const itemData = paso.checklist.find(i => i.id === id);
    if (itemData && itemData.requerido) {
      el.classList.add('checked');
      el.setAttribute('aria-checked', 'true');
    }
  });

  // Habilitar botón siguiente
  const btnSig = document.getElementById('btnSiguiente');
  if (btnSig) btnSig.disabled = false;

  // Ocultar el botón de skip
  const btnSkip = document.getElementById('btnSkip');
  if (btnSkip) {
    btnSkip.disabled   = true;
    btnSkip.style.opacity = '0.4';
    btnSkip.textContent = '✓ Completado';
  }

  renderizarProgreso();
  renderizarSidebar();
  showToast('✓ Todos los ítems completados', 'success');
}


/* ================================================================
   17. VISOR MULTIMEDIA — IMAGEN Y VIDEO
   ================================================================ */

// Estado del visor
const _visor = {
  escala:   1,
  minZ:     0.25,
  maxZ:     5,
  paso:     0.3,
  ox: 0, oy: 0,              // offset actual (translate)
  drag: { on: false, sx: 0, sy: 0, ox0: 0, oy0: 0 },
  pinch: { on: false, d0: 0, z0: 1 },
  lastTap: 0,
  progTimer: null,
};

/**
 * Abre el visor para una imagen o video.
 * @param {object} media  — objeto mediaReal del paso
 */
function abrirVisor(media) {
  if (!media) return;
  const esVideo = media.tipo === 'video';

  const backdrop = document.getElementById('ivBackdrop');
  const img      = document.getElementById('ivImg');
  const vid      = document.getElementById('ivVideo');
  const loading  = document.getElementById('ivLoading');
  const errDiv   = document.getElementById('ivError');
  const errMsg   = document.getElementById('ivErrMsg');

  if (!backdrop) return;

  // Rellenar cabecera
  document.getElementById('ivTitle').textContent    = media.titulo    || 'Referencia';
  document.getElementById('ivSubtitle').textContent = media.subtitulo || '';
  document.getElementById('ivTopbarIcon').textContent = esVideo ? '🎬' : '🖼️';

  // Mostrar/ocultar controles de zoom según tipo
  const zoomGrp = document.getElementById('ivZoomGroup');
  const divider  = backdrop.querySelector('.iv-divider');
  if (zoomGrp) zoomGrp.style.display = esVideo ? 'none' : 'flex';
  if (divider)  divider.style.display = esVideo ? 'none' : 'block';

  // Hints
  document.getElementById('ivHintImg').style.display = esVideo ? 'none' : '';
  document.getElementById('ivHintVid').style.display = esVideo ? ''     : 'none';

  // Resetear zoom y estado
  _visorResetState();

  // Mostrar spinner, ocultar todo lo demás
  img.style.display  = 'none';
  vid.style.display  = 'none';
  loading.style.display = 'flex';
  errDiv.style.display  = 'none';

  // Abrir backdrop
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('ivClose').focus(), 150);

  if (esVideo) {
    _cargarVideo(media, vid, loading, errDiv, errMsg);
  } else {
    _cargarImagen(media, img, loading, errDiv, errMsg);
  }
}

function _cargarImagen(media, img, loading, errDiv, errMsg) {
  const tmp = new Image();
  tmp.onload = () => {
    img.src       = media.src;
    img.alt       = media.alt || media.titulo || '';
    img.style.display   = 'block';
    img.style.opacity   = '0';
    loading.style.display = 'none';
    // Fade in
    requestAnimationFrame(() => { img.style.opacity = '1'; });
    _visorAplicarTransform(1, 0, 0);
  };
  tmp.onerror = () => {
    loading.style.display = 'none';
    errMsg.textContent    = media.src;
    errDiv.style.display  = 'flex';
  };
  tmp.src = media.src;
}

function _cargarVideo(media, vid, loading, errDiv, errMsg) {
  console.log('=== INICIANDO CARGA DE VIDEO ===');
  console.log('Media object:', media);
  
  // Limpiar fuentes anteriores
  while (vid.firstChild) vid.removeChild(vid.firstChild);
  vid.src = '';
  vid.removeAttribute('src');

  // Configurar atributos del video
  vid.muted    = true;
  vid.loop     = true;
  vid.autoplay = true;
  vid.playsInline = true;
  vid.setAttribute('playsinline', '');
  vid.setAttribute('webkit-playsinline', '');
  vid.setAttribute('x-webkit-airplay', 'allow');
  vid.preload  = 'auto';

  if (media.poster) {
    vid.poster = media.poster;
    console.log('Poster configurado:', media.poster);
  }

  // Agregar fuentes
  let fuentesAgregadas = 0;
  
  if (media.fuentes && media.fuentes.length > 0) {
    console.log('Usando array de fuentes:', media.fuentes.length);
    media.fuentes.forEach((f, index) => {
      const s = document.createElement('source');
      s.src  = f.src;
      s.type = f.mime || 'video/mp4';
      vid.appendChild(s);
      fuentesAgregadas++;
      console.log(`Fuente ${index + 1} agregada:`, f.src, '|', s.type);
    });
  } else if (media.src) {
    console.log('Usando fuente única:', media.src);
    const s = document.createElement('source');
    s.src  = media.src;
    // Detectar mime por extensión
    const ext = (media.src.split('.').pop() || '').toLowerCase();
    const mimes = { 
      mp4: 'video/mp4', 
      webm: 'video/webm', 
      ogg: 'video/ogg', 
      mov: 'video/quicktime' 
    };
    s.type = mimes[ext] || 'video/mp4';
    vid.appendChild(s);
    fuentesAgregadas++;
    console.log('Fuente agregada:', s.src, '|', s.type);
  } else {
    console.error('ERROR: No hay fuentes de video disponibles');
    loading.style.display = 'none';
    errMsg.innerHTML = '<strong>Error de configuración:</strong> No se especificó ninguna fuente de video';
    errDiv.style.display = 'flex';
    return;
  }

  console.log('Total de fuentes agregadas:', fuentesAgregadas);

  let cargado = false;
  let intentoReproduccion = false;
  
  // Timeout de 15 segundos
  const timeoutId = setTimeout(() => {
    if (!cargado) {
      console.error('TIMEOUT: Video no cargó en 15 segundos');
      loading.style.display = 'none';
      errMsg.innerHTML = '<strong>Timeout:</strong> El video tardó demasiado en cargar<br>' +
                         '<small>Ruta: ' + (media.src || media.fuentes[0].src) + '</small><br>' +
                         '<small>Intenta recargar la página o verifica tu conexión</small>';
      errDiv.style.display = 'flex';
    }
  }, 15000);

  // Evento: Datos suficientes para reproducir
  const onLoadedData = () => {
    console.log('✅ loadeddata: Datos del video cargados');
    console.log('Dimensiones:', vid.videoWidth, 'x', vid.videoHeight);
    console.log('Duración:', vid.duration, 'segundos');
  };

  // Evento: Puede empezar a reproducir
  const onCanPlay = () => {
    console.log('✅ canplay: Video listo para reproducir');
    cargado = true;
    clearTimeout(timeoutId);
    loading.style.display = 'none';
    vid.style.display     = 'block';
    vid.style.opacity     = '0';
    
    requestAnimationFrame(() => { 
      vid.style.opacity = '1';
    });
    
    // Intentar reproducir
    if (!intentoReproduccion) {
      intentoReproduccion = true;
      console.log('Intentando reproducir...');
      
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('✅ Video reproduciendo correctamente');
          _iniciarProgresoBarra();
        }).catch(err => {
          console.warn('⚠️ Autoplay bloqueado por el navegador:', err.message);
          // Mostrar controles para reproducción manual
          vid.controls = true;
          showToast('Toca el video para reproducir', 'info');
        });
      }
    }
    
    vid.removeEventListener('canplay', onCanPlay);
  };
  
  // Evento: Error al cargar
  const onError = (e) => {
    console.error('❌ Error cargando video');
    console.error('Event:', e);
    console.error('Video.error:', vid.error);
    
    cargado = true;
    clearTimeout(timeoutId);
    loading.style.display = 'none';
    
    const errorCode = vid.error ? vid.error.code : 0;
    const errorMsg = vid.error ? vid.error.message : 'Desconocido';
    
    const errorTypes = {
      1: 'MEDIA_ERR_ABORTED - Carga abortada por el usuario',
      2: 'MEDIA_ERR_NETWORK - Error de red al descargar',
      3: 'MEDIA_ERR_DECODE - Error al decodificar el video',
      4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - Formato no soportado o archivo no encontrado'
    };
    
    const errorDescription = errorTypes[errorCode] || errorMsg;
    const rutaMostrar = media.src || (media.fuentes && media.fuentes[0] ? media.fuentes[0].src : 'desconocida');
    
    errMsg.innerHTML = '<strong>Error ' + errorCode + ':</strong> ' + errorDescription + 
                       '<br><br><small><strong>Ruta:</strong> ' + rutaMostrar + '</small>' +
                       '<br><small><strong>Solución:</strong> Verifica que el archivo existe en la carpeta images/</small>' +
                       '<br><small><strong>Tip:</strong> Abre test-video.html para verificar que el video funciona</small>';
    errDiv.style.display = 'flex';
  };

  // Registrar eventos
  vid.addEventListener('loadstart', () => {
    console.log('🔄 loadstart: Iniciando carga del video');
  });
  
  vid.addEventListener('progress', () => {
    console.log('📥 progress: Descargando video...');
  });
  
  vid.addEventListener('loadedmetadata', () => {
    console.log('📊 loadedmetadata: Metadatos cargados');
  });
  
  vid.addEventListener('loadeddata', onLoadedData);
  vid.addEventListener('canplay', onCanPlay);
  vid.addEventListener('error', onError);
  
  // Iniciar carga
  console.log('🚀 Llamando a video.load()...');
  vid.load();
  console.log('=== FIN INICIALIZACIÓN ===');
}

/** Barra de progreso del video (sincronizada con timeupdate) */
function _iniciarProgresoBarra() {
  const vid  = document.getElementById('ivVideo');
  const bar  = document.getElementById('ivVideoProgress');
  const fill = document.getElementById('ivVideoProgressFill');
  if (!vid || !fill || !bar) return;

  bar.style.display = 'block';

  const update = () => {
    if (!vid.duration || isNaN(vid.duration)) return;
    fill.style.width = ((vid.currentTime / vid.duration) * 100) + '%';
  };

  vid.addEventListener('timeupdate', update);
  vid.addEventListener('ended', () => { fill.style.width = '0%'; });
}

/** Cierra el visor y detiene el video */
function cerrarVisor() {
  const backdrop = document.getElementById('ivBackdrop');
  if (!backdrop) return;

  // Detener video
  const vid = document.getElementById('ivVideo');
  if (vid) { vid.pause(); vid.src = ''; while (vid.firstChild) vid.removeChild(vid.firstChild); }
  const bar = document.getElementById('ivVideoProgress');
  if (bar) bar.style.display = 'none';
  const fill = document.getElementById('ivVideoProgressFill');
  if (fill) fill.style.width = '0%';

  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  clearInterval(_visor.progTimer);
}

// ── Transformaciones (solo para imagen) ────────────────────────
function _visorResetState() {
  _visorAplicarTransform(1, 0, 0, false);
}

function _visorAplicarTransform(z, ox, oy, animate) {
  z  = Math.max(_visor.minZ, Math.min(_visor.maxZ, z));
  ox = typeof ox === 'number' ? ox : _visor.ox;
  oy = typeof oy === 'number' ? oy : _visor.oy;

  _visor.escala = z;
  _visor.ox = ox;
  _visor.oy = oy;

  const canvas = document.getElementById('ivCanvas');
  if (!canvas) return;

  if (animate === false) {
    canvas.style.transition = 'none';
    canvas.getBoundingClientRect(); // reflow
  } else {
    canvas.style.transition = 'transform .18s ease';
  }
  canvas.style.transform = `translate(${ox}px,${oy}px) scale(${z})`;

  // Cursor
  const stage = document.getElementById('ivStage');
  if (stage) {
    stage.classList.toggle('can-drag', z > 1.05);
  }

  // Label %
  const lbl = document.getElementById('ivZoomPct');
  if (lbl) lbl.textContent = Math.round(z * 100) + '%';
}

function _visorZoom(delta) {
  _visorAplicarTransform(_visor.escala + delta, _visor.ox, _visor.oy, true);
}

function _pinchDist(t1, t2) {
  return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
}

/** Registra todos los eventos del visor */
function inicializarVisor() {
  const backdrop = document.getElementById('ivBackdrop');
  const stage    = document.getElementById('ivStage');
  if (!backdrop || !stage) return;

  // ── Cerrar ──────────────────────────────────────────────────
  document.getElementById('ivClose').addEventListener('click', cerrarVisor);

  // Clic en el fondo (backdrop) → cerrar SOLO si es exactamente el backdrop
  backdrop.addEventListener('click', e => {
    // Solo cerrar si el clic es directamente en el backdrop (fondo negro)
    if (e.target === backdrop) {
      cerrarVisor();
    }
  });

  // ── Zoom botones ────────────────────────────────────────────
  document.getElementById('ivZoomIn') .addEventListener('click', e => { e.stopPropagation(); _visorZoom(+_visor.paso); });
  document.getElementById('ivZoomOut').addEventListener('click', e => { e.stopPropagation(); _visorZoom(-_visor.paso); });
  document.getElementById('ivReset')  .addEventListener('click', e => { e.stopPropagation(); _visorAplicarTransform(1, 0, 0, true); });

  // ── Rueda del ratón ─────────────────────────────────────────
  stage.addEventListener('wheel', e => {
    e.preventDefault();
    _visorZoom(e.deltaY < 0 ? _visor.paso : -_visor.paso);
  }, { passive: false });

  // ── Arrastre con ratón ──────────────────────────────────────
  stage.addEventListener('mousedown', e => {
    if (_visor.escala <= 1.05) return;
    e.preventDefault();
    e.stopPropagation(); // Evitar que el clic llegue al backdrop
    _visor.drag.on  = true;
    _visor.drag.sx  = e.clientX - _visor.ox;
    _visor.drag.sy  = e.clientY - _visor.oy;
    stage.classList.add('dragging');
  });
  // mousemove y mouseup en window para no perder el drag
  window.addEventListener('mousemove', e => {
    if (!_visor.drag.on) return;
    _visorAplicarTransform(_visor.escala, e.clientX - _visor.drag.sx, e.clientY - _visor.drag.sy, false);
  });
  window.addEventListener('mouseup', () => {
    if (!_visor.drag.on) return;
    _visor.drag.on = false;
    const stage = document.getElementById('ivStage');
    if (stage) stage.classList.remove('dragging');
  });

  // Doble clic → toggle zoom
  stage.addEventListener('dblclick', e => {
    e.preventDefault();
    e.stopPropagation();
    _visor.escala > 1.5 ? _visorAplicarTransform(1, 0, 0, true) : _visorZoom(1.5);
  });

  // Clic simple en stage/canvas → NO cerrar (solo prevenir propagación)
  stage.addEventListener('click', e => {
    e.stopPropagation();
  });

  // ── Touch: pinch + pan ──────────────────────────────────────
  stage.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      e.preventDefault();
      e.stopPropagation();
      _visor.pinch.on = true;
      _visor.pinch.d0 = _pinchDist(e.touches[0], e.touches[1]);
      _visor.pinch.z0 = _visor.escala;
    } else if (e.touches.length === 1 && _visor.escala > 1.05) {
      // Solo iniciar drag si hay zoom
      e.preventDefault();
      e.stopPropagation();
      _visor.drag.on = true;
      _visor.drag.sx = e.touches[0].clientX - _visor.ox;
      _visor.drag.sy = e.touches[0].clientY - _visor.oy;
    }
    // Si escala <= 1 y 1 dedo → no prevenir (scroll nativo)
  }, { passive: false });

  stage.addEventListener('touchmove', e => {
    if (_visor.pinch.on && e.touches.length === 2) {
      e.preventDefault();
      e.stopPropagation();
      const d  = _pinchDist(e.touches[0], e.touches[1]);
      _visorAplicarTransform(_visor.pinch.z0 * (d / _visor.pinch.d0), _visor.ox, _visor.oy, false);
    } else if (_visor.drag.on && e.touches.length === 1) {
      e.preventDefault();
      e.stopPropagation();
      _visorAplicarTransform(_visor.escala,
        e.touches[0].clientX - _visor.drag.sx,
        e.touches[0].clientY - _visor.drag.sy, false);
    }
  }, { passive: false });

  stage.addEventListener('touchend', e => {
    if (e.touches.length < 2) _visor.pinch.on = false;
    if (e.touches.length === 0) {
      _visor.drag.on = false;
      // Doble tap
      const now = Date.now();
      if (now - _visor.lastTap < 280 && e.changedTouches.length === 1) {
        e.preventDefault();
        e.stopPropagation();
        _visor.escala > 1.5 ? _visorAplicarTransform(1, 0, 0, true) : _visorZoom(1.5);
      }
      _visor.lastTap = now;
    }
  });

}

// Arrancar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializar);
} else {
  inicializar();
}
