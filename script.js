/* ==========================================================================
   1. CONFIGURACIÓN GENERAL Y ENLACE DE GITHUB PAGES
   ========================================================================== */
const URL_PUBLICADA_GITHUB = "";
const CARPETA_FOTOS = ""; 
const EXTENSION_FOTOS = ".jpg";

// Reloj Acelerado: 2 horas teóricas (7200s) = 30 minutos reales (1800s) -> Factor 4x
const MINUTOS_REALES_OBJETIVO = 30;
const SEGUNDOS_TEORICOS_LIMITE = 2 * 3600; 
const FACTOR_VELOCIDAD_RELOJ = SEGUNDOS_TEORICOS_LIMITE / (MINUTOS_REALES_OBJETIVO * 60);

/* ==========================================================================
   2. PLAYLISTS POR PISO CON MEMORIA DE POSICIÓN (NO REINICIAN AL CAMBIAR)
   ========================================================================== */
const PLAYLISTS = {
    planta1: [
        { src: "audio/musica-planta1.mp3", titulo: "Instantané – Paradis" },
        { src: "audio/musica-planta12.mp3", titulo: "Les mots bleus - Johan Papaconstantino" },
        { src: "audio/musica-planta13.mp3", titulo: "Universalis - Bleu Toucan" }
    ],
    planta2: [
        { src: "audio/musica-planta2.mp3", titulo: "Chacun Pour Soi – Paradis" },
        { src: "audio/musica-planta22.mp3", titulo: "La ritournelle - Sébastien Tellier" },
        { src: "audio/musica-planta23.mp3", titulo: "Shuggie - Foxygen" }
    ]
};

let estadoAudioPisos = {
    planta1: { indice: 0, inicializado: false },
    planta2: { indice: 0, inicializado: false }
};

/* ==========================================================================
   3. DEFINICIÓN DE LOS 5 CROMOS
   ========================================================================== */
const definicionCromos = [
    {
        id: 1,
        nombre: "Cromo 01 — El Umbral y la Fachada",
        archivo: "cromos/cromo1.png",
        descripcion: "Sector de ingreso y despachos frontales de primera línea.",
        espacios: ["Ingreso", "Recepcion", "Rick", "Hulk"]
    },
    {
        id: 2,
        nombre: "Cromo 02 — Tránsito y Espera",
        archivo: "cromos/cromo2.png",
        descripcion: "Áreas de circulación, cuadros, salas de clientes y patios.",
        espacios: ["Corredores", "SalaClientes", "Conferencias", "Patios"]
    },
    {
        id: 3,
        nombre: "Cromo 03 — Retaguardia y Oficios",
        archivo: "cromos/cromo3.png",
        descripcion: "Anexos de secretarías, cocineta y baños de la planta baja.",
        espacios: ["Sonia", "Cocina", "Daños", "Sophia"]
    },
    {
        id: 4,
        nombre: "Cromo 04 — La Cúpula del Buffet",
        archivo: "cromos/cromo4.png",
        descripcion: "Grandes despachos del fondo y galería hacia la segunda planta.",
        espacios: ["Harold", "Patrik", "Tom", "Corredores 3"]
    },
    {
        id: 5,
        nombre: "Cromo 05 — Planta Alta y Asimetrías",
        archivo: "cromos/cromo5.png",
        descripcion: "El ala de las abogadas, oficinas compartidas y segundo nivel.",
        espacios: ["Julia", "Helda", "Madelein", "Kim", "Rebeka", "Christa", "Gustav", "Karol", "Juniors", "Daños 2"]
    }
];

/* ==========================================================================
   4. BASE DE DATOS DE ESPACIOS Y TEXTOS LITERARIOS EDITABLES
   ========================================================================== */
const baseDeDatosEspacios = {
    // GRUPO CROMO 1
    "Ingreso": {
        idZona: "zona-Ingreso", grupoCromo: 1,
        categoria: "ACCESO PRINCIPAL // PLANTA 01", titulo: "Ingreso y puerta principal",
        archivos: ["Corredores"],
        textos: [`Las fechas me son imposibles, pero sé que comencé un día de marzo de 2025; todavía hacía frío. Desde afuera, lucía como otra casa del sector: grande, cuadrada, tres pisos, sobria y repelente a desafiar el paisaje. Quise decirle que no era mi culpa, que la demora se explicaba con ver que la señora de al lado salía a pasear su perro de una puerta que tenía tanta apariencia jurídica como esta en la que ahora me esperaba, una puerta que bien podría ser cualquier puerta del barrio, de la ciudad, incluso del país. Pensé en... “¿De dónde vienes? Conozco un par de chilenos. Son buenos amigos. Javier y Lucy. ¿Has hablado con ellos?”, pero el tiempo aquí es valioso, y no importa si soy colombiano, nepalí o sirio, si él también habla español, si mi nombre es Andrés y el de él Gabriel, todos nos terminamos moviendo al ritmo de la vida. Impaciente, lacónico, me entregó unos guantes de cirugía, bolsas, un trapo y un balde.

—Mojas el paño en esta agua con limpiapiso, y sacas el polvo. Que quede oliendo bien. Así. La basura orgánica en esta; los papeles en esta otra porque hay que botarlos en un basurero especial. Eso sería.
—¿Y si hay cosas encima?
—No tocas nada. Solo la tierra de lo que está despejado.
—¿Así de rápido?
—Son muchas oficinas. Yo voy a pasar la aspiradora, baños, cocina. Ahí cachamos cómo te va.
—¿Dónde dejo la basura?
—...

Solo en el lugar, pensé que todo estaba muy bonito. Me hubiera gustado sentarme, quedarme a ver; pero luego de un par de años aquí sabía lo suficiente para advertirme que el lento pierde. Comencé a moverme con prisa.`]
    },
    "Recepcion": {
        idZona: "zona-Recepcion", grupoCromo: 1,
        categoria: "FILTRO CENTRAL // PLANTA 01", titulo: "Recepción Principal",
        archivos: ["Corredores 2"],
        textos: ["Texto Recepción — (Reemplaza este texto por tu fragmento literario de la recepción)."]
    },
    "Rick": {
        idZona: "zona-Rick", grupoCromo: 1,
        categoria: "DESPACHO SOCIO // PLANTA 01", titulo: "Oficina de Rick",
        archivos: ["Rick", "Rick 2"],
        textos: [
            "Texto oficina Rick (Imagen 1) — (Escribe aquí el texto que acompaña a la primera foto de Rick).",
            "Texto oficina Rick (Imagen 2) — (Escribe aquí el texto que acompaña a la segunda foto de Rick)."
        ]
    },
    "Hulk": {
        idZona: "zona-Hulk", grupoCromo: 1,
        categoria: "DESPACHO ABOGADO // PLANTA 01", titulo: "Oficina de Hulk",
        archivos: ["Hulk"],
        textos: ["Texto oficina Hulk — (Escribe aquí el texto literario para la oficina de Hulk)."]
    },

    // GRUPO CROMO 2
    "Corredores": {
        idZona: "zona-Corredores", grupoCromo: 2,
        categoria: "CIRCULACIÓN Y CUADROS // PLANTA 01", titulo: "Corredor Principal",
        archivos: ["Corredores", "Corredores 2", "Corredores 3"],
        textos: [
            "Texto Corredores (Imagen 1) — (Escribe aquí el texto para la primera imagen de los corredores).",
            "Texto Corredores (Imagen 2) — (Escribe aquí el texto para la segunda imagen de los corredores).",
            "Texto Corredores (Imagen 3) — (Escribe aquí el texto para la tercera imagen de los corredores)."
        ]
    },
    "SalaClientes": {
        idZona: "zona-SalaClientes", grupoCromo: 2,
        categoria: "ÁREA COMÚN // PLANTA 01", titulo: "Sala de Clientes",
        archivos: ["Corredores 3"],
        textos: ["Texto Sala de Clientes — (Escribe aquí el texto literario de la sala de espera de clientes)."]
    },
    "Conferencias": {
        idZona: "zona-Conferencias", grupoCromo: 2,
        categoria: "SALA DE JUNTAS // PLANTA 01", titulo: "Sala de Conferencias",
        archivos: ["Corredores 2"],
        textos: ["Texto Sala de Conferencias — (Escribe aquí el texto literario para la sala de conferencias)."]
    },
    "Patios": {
        idZona: "zona-Patios", grupoCromo: 2,
        categoria: "EXTERIOR INTERNO // PLANTA 01", titulo: "Salida a Patios",
        archivos: ["Corredores"],
        textos: ["Texto Patios — (Escribe aquí el texto literario para la salida a los patios interiores)."]
    },

    // GRUPO CROMO 3
    "Sonia": {
        idZona: "zona-Sonia", grupoCromo: 3,
        categoria: "ANEXO SECRETARÍA // PLANTA 01", titulo: "Anexo Secretaria Sonia",
        archivos: ["Sonia", "Sonia 2"],
        textos: [
            "Texto secretaria Sonia (Imagen 1) — (Escribe aquí el texto para la primera foto de Sonia).",
            "Texto secretaria Sonia (Imagen 2) — (Escribe aquí el texto para la segunda foto de Sonia)."
        ]
    },
    "Cocina": {
        idZona: "zona-Cocina", grupoCromo: 3,
        categoria: "SERVICIOS // PLANTA 01", titulo: "Cocineta",
        archivos: ["Corredores"],
        textos: ["Texto Cocina — (Escribe aquí el texto literario para la cocineta del buffet)."]
    },
    "Daños": {
        idZona: "zona-Danos", grupoCromo: 3,
        categoria: "BAÑOS PLANTA BAJA // PLANTA 01", titulo: "Baños Planta Baja",
        archivos: ["Daños", "Daños 2"],
        textos: [
            "Texto Baños / Daños (Imagen 1) — (Escribe aquí el texto para la primera foto de los baños).",
            "Texto Baños / Daños (Imagen 2) — (Escribe aquí el texto para la segunda foto de los baños)."
        ]
    },
    "Sophia": {
        idZona: "zona-Sophia", grupoCromo: 3,
        categoria: "ANEXO SECRETARÍA // PLANTA 01", titulo: "Anexo Secretaria Sophia",
        archivos: ["Sophia", "Sophia 2"],
        textos: [
            "Texto secretaria Sophia (Imagen 1) — (Escribe aquí el texto para la primera foto de Sophia).",
            "Texto secretaria Sophia (Imagen 2) — (Escribe aquí el texto para la segunda foto de Sophia)."
        ]
    },

    // GRUPO CROMO 4
    "Harold": {
        idZona: "zona-Harold", grupoCromo: 4,
        categoria: "DESPACHO ABOGADO // PLANTA 01", titulo: "Oficina de Harold",
        archivos: ["Harold"],
        textos: ["Texto oficina Harold — (Escribe aquí el texto literario para la oficina de Harold)."]
    },
    "Patrik": {
        idZona: "zona-Patrik", grupoCromo: 4,
        categoria: "DESPACHO SOCIO // PLANTA 01", titulo: "Oficina de Patrik",
        archivos: ["Patrik", "Patrik 2", "Patrik 3"],
        textos: [
            "Texto oficina Patrik (Imagen 1) — (Escribe aquí el texto para la primera foto de Patrik).",
            "Texto oficina Patrik (Imagen 2) — (Escribe aquí el texto para la segunda foto de Patrik).",
            "Texto oficina Patrik (Imagen 3) — (Escribe aquí el texto para la tercera foto de Patrik)."
        ]
    },
    "Tom": {
        idZona: "zona-Tom", grupoCromo: 4,
        categoria: "SOCIO PRINCIPAL // PLANTA 01", titulo: "Oficina de Tom",
        archivos: ["Tom", "Tom 2", "Tom 3", "Tom 4", "Tom 5"],
        textos: [
            "Texto oficina Tom (Imagen 1) — (Escribe aquí el texto para la primera foto de Tom).",
            "Texto oficina Tom (Imagen 2) — (Escribe aquí el texto para la segunda foto de Tom).",
            "Texto oficina Tom (Imagen 3) — (Escribe aquí el texto para la tercera foto de Tom).",
            "Texto oficina Tom (Imagen 4) — (Escribe aquí el texto para la cuarta foto de Tom).",
            "Texto oficina Tom (Imagen 5) — (Escribe aquí el texto para la quinta foto de Tom)."
        ]
    },
    "Corredores 3": {
        idZona: "zona-Corredores3", grupoCromo: 4,
        categoria: "CIRCULACIÓN SUPERIOR // PLANTA 02", titulo: "Galería y Corredores Planta Alta",
        archivos: ["Corredores 3", "Corredores 2", "Corredores"],
        textos: [
            "Texto Corredores Planta Alta (Imagen 1) — (Escribe aquí el texto para el corredor del segundo piso).",
            "Texto Corredores Planta Alta (Imagen 2) — (Vista complementaria del corredor).",
            "Texto Corredores Planta Alta (Imagen 3) — (Tercera vista del corredor)."
        ]
    },

    // GRUPO CROMO 5
    "Julia": {
        idZona: "zona-Julia", grupoCromo: 5,
        categoria: "DESPACHO ABOGADA // PLANTA 02", titulo: "Oficina de Julia",
        archivos: ["Julia", "Julia 2", "Julia 3", "Julia 4"],
        textos: [
            "Texto oficina Julia (Imagen 1) — (Escribe aquí el texto para la primera foto de Julia).",
            "Texto oficina Julia (Imagen 2) — (Escribe aquí el texto para la segunda foto de Julia).",
            "Texto oficina Julia (Imagen 3) — (Escribe aquí el texto para la tercera foto de Julia).",
            "Texto oficina Julia (Imagen 4) — (Escribe aquí el texto para la cuarta foto de Julia)."
        ]
    },
    "Helda": {
        idZona: "zona-Helda", grupoCromo: 5,
        categoria: "DESPACHO ABOGADA // PLANTA 02", titulo: "Oficina de Helda",
        archivos: ["Helda", "Helda 2", "Helda 3"],
        textos: [
            "Texto oficina Helda (Imagen 1) — (Escribe aquí el texto para la primera foto de Helda).",
            "Texto oficina Helda (Imagen 2) — (Escribe aquí el texto para la segunda foto de Helda).",
            "Texto oficina Helda (Imagen 3) — (Escribe aquí el texto para la tercera foto de Helda)."
        ]
    },
    "Madelein": {
        idZona: "zona-Madelein", grupoCromo: 5,
        categoria: "DESPACHO ABOGADA // PLANTA 02", titulo: "Oficina de Madelein",
        archivos: ["Madelein", "Madelein 2", "Madelein 3"],
        textos: [
            "Texto oficina Madelein (Imagen 1) — (Escribe aquí el texto para la primera foto de Madelein).",
            "Texto oficina Madelein (Imagen 2) — (Escribe aquí el texto para la segunda foto de Madelein).",
            "Texto oficina Madelein (Imagen 3) — (Escribe aquí el texto para la tercera foto de Madelein)."
        ]
    },
    "Kim": {
        idZona: "zona-Kim", grupoCromo: 5,
        categoria: "DESPACHO ABOGADA // PLANTA 02", titulo: "Oficina de Kim",
        archivos: ["Kim", "Kim 2"],
        textos: [
            "Texto oficina Kim (Imagen 1) — (Escribe aquí el texto para la primera foto de Kim).",
            "Texto oficina Kim (Imagen 2) — (Escribe aquí el texto para la segunda foto de Kim)."
        ]
    },
    "Rebeka": {
        idZona: "zona-Rebeka", grupoCromo: 5,
        categoria: "DESPACHO ABOGADA // PLANTA 02", titulo: "Oficina de Rebeka",
        archivos: ["Rebeka", "Rebeka 2"],
        textos: [
            "Texto oficina Rebeka (Imagen 1) — (Escribe aquí el texto para la primera foto de Rebeka).",
            "Texto oficina Rebeka (Imagen 2) — (Escribe aquí el texto para la segunda foto de Rebeka)."
        ]
    },
    "Christa": {
        idZona: "zona-Christa", grupoCromo: 5,
        categoria: "ABOGADA SENIOR // PLANTA 02", titulo: "Oficina de Christa",
        archivos: ["Christa"],
        textos: ["Texto oficina Christa — (Escribe aquí el texto literario para la oficina de Christa)."]
    },
    "Gustav": {
        idZona: "zona-Gustav", grupoCromo: 5,
        categoria: "DESPACHO SOCIO // PLANTA 02", titulo: "Oficina de Gustav",
        archivos: ["Gustav"],
        textos: ["Texto oficina Gustav — (Escribe aquí el texto literario para la oficina de Gustav)."]
    },
    "Karol": {
        idZona: "zona-Karol", grupoCromo: 5,
        categoria: "ANEXO SECRETARÍA // PLANTA 02", titulo: "Anexo Secretaria Karol",
        archivos: ["Karol"],
        textos: ["Texto secretaria Karol — (Escribe aquí el texto literario para el anexo de Karol)."]
    },
    "Juniors": {
        idZona: "zona-Juniors", grupoCromo: 5,
        categoria: "OFICINA COMÚN // PLANTA 02", titulo: "Oficina Compartida Juniors",
        archivos: ["Juniors", "Juniors 2", "Juniors 3"],
        textos: [
            "Texto oficina Juniors (Imagen 1) — (Escribe aquí el texto para la primera foto de Juniors).",
            "Texto oficina Juniors (Imagen 2) — (Escribe aquí el texto para la segunda foto de Juniors).",
            "Texto oficina Juniors (Imagen 3) — (Escribe aquí el texto para la tercera foto de Juniors)."
        ]
    },
    "Daños 2": {
        idZona: "zona-Danos2", grupoCromo: 5,
        categoria: "BAÑOS PLANTA ALTA // PLANTA 02", titulo: "Baños Segundo Piso",
        archivos: ["Daños 2", "Daños"],
        textos: [
            "Texto Baños Planta Alta (Imagen 1) — (Escribe aquí el texto para los baños de la planta alta).",
            "Texto Baños Planta Alta (Imagen 2) — (Segunda imagen de apoyo)."
        ]
    }
};

const TEXTO_REFLEXION_FINAL_EDITABLE = `
    <p><strong>Texto Reflexión Final —</strong> (Reemplaza estos párrafos con tu reflexión conclusiva sobre la invisibilidad en Países Bajos y en tu lugar de origen).</p>
    <p>Has recorrido cada despacho, vaciado cada papelera y apagado la última lámpara del edificio. Los cinco cromos están completos en tu bitácora. Afuera, la ciudad duerme ajena a quienes sostienen el orden nocturno de sus instituciones.</p>
`;

/* ==========================================================================
   5. VARIABLES DE ESTADO E INICIALIZACIÓN (CON AUTO-DETECTOR DE VIDEO)
   ========================================================================== */
const ClavesTotalesEspacios = Object.keys(baseDeDatosEspacios);
const TOTAL_ESPACIOS_MAPA = ClavesTotalesEspacios.length;

let espaciosVisitados = new Set();
let espaciosLimpios = new Set();
let cromosDesbloqueados = new Set();

let espacioActualKey = null;
let indiceFotoActual = 0;
let plantaActual = "pb";

let segundosFicticiosTranscurridos = 0;
let intervaloReloj = null;
let musicaActiva = true;
let canalSonoroActivo = "intro"; // "intro", "planta1", "planta2"
let reflexionMostradaAutomaticamente = false;

window.addEventListener("DOMContentLoaded", () => {
    renderizarGrillaCromos();
    actualizarEstadisticasMenu();
    configurarPlaylistsConMemoria();
    inicializarVideoDeFondo();

    const cajaReflexion = document.getElementById("texto-reflexion-final");
    if (cajaReflexion) cajaReflexion.innerHTML = TEXTO_REFLEXION_FINAL_EDITABLE;
});

// Detector automático para asegurar que intro.mp4 cargue sin importar la ruta
function inicializarVideoDeFondo() {
    const video = document.getElementById("video-fondo");
    if (!video) return;

    const rutasPosibles = [
        "media/intro.mp4",
        "./media/intro.mp4",
        "intro.mp4",
        "media/Intro.mp4",
        "media/intro.mp4.mp4"
    ];
    let intento = 0;

    function probarRuta(idx) {
        if (idx >= rutasPosibles.length) {
            console.warn("No se pudo reproducir intro.mp4. Verifica que esté en la carpeta 'media/' y codificado en MP4 H.264.");
            return;
        }
        video.src = rutasPosibles[idx];
        video.muted = true;
        video.playsInline = true;
        video.load();
        const promesa = video.play();
        if (promesa !== undefined) {
            promesa.catch(() => {});
        }
    }

    video.addEventListener("error", () => {
        intento++;
        probarRuta(intento);
    });

    probarRuta(0);
}

/* ==========================================================================
   6. MOTOR DE AUDIO CON MEMORIA EXACTA DE MINUTO/SEGUNDO Y PLAYLISTS
   ========================================================================== */
function configurarPlaylistsConMemoria() {
    ["planta1", "planta2"].forEach(clavePiso => {
        const elAudio = document.getElementById(`audio-${clavePiso}`);
        if (!elAudio) return;

        // Cuando termina una canción del piso, pasa a la siguiente en orden (en bucle de 3)
        elAudio.addEventListener("ended", () => {
            const lista = PLAYLISTS[clavePiso];
            estadoAudioPisos[clavePiso].indice = (estadoAudioPisos[clavePiso].indice + 1) % lista.length;
            const nuevaCancion = lista[estadoAudioPisos[clavePiso].indice];
            elAudio.src = nuevaCancion.src;
            actualizarEtiquetaCancion();
            if (musicaActiva && canalSonoroActivo === clavePiso) {
                elAudio.play().catch(() => {});
            }
        });
    });
}

function cambiarCanalMusical(nuevoCanal) {
    canalSonoroActivo = nuevoCanal;

    const audioIntro = document.getElementById("audio-intro");
    const audioP1 = document.getElementById("audio-planta1");
    const audioP2 = document.getElementById("audio-planta2");

    // IMPORTANTE: Solo pausamos los canales inactivos SIN tocar currentTime.
    // Así se conserva exactamente el minuto y segundo donde quedó cada piso.
    if (nuevoCanal !== "intro" && audioIntro) {
        try { audioIntro.pause(); } catch (e) {}
    }
    if (nuevoCanal !== "planta1" && audioP1) {
        try { audioP1.pause(); } catch (e) {}
    }
    if (nuevoCanal !== "planta2" && audioP2) {
        try { audioP2.pause(); } catch (e) {}
    }

    // Cargar el primer archivo del piso solo la primera vez que entra
    if (nuevoCanal === "planta1" || nuevoCanal === "planta2") {
        const elAudioPiso = document.getElementById(`audio-${nuevoCanal}`);
        const estado = estadoAudioPisos[nuevoCanal];
        if (elAudioPiso && !estado.inicializado) {
            elAudioPiso.src = PLAYLISTS[nuevoCanal][estado.indice].src;
            estado.inicializado = true;
        }
    }

    actualizarEtiquetaCancion();

    if (!musicaActiva) return;

    const mapa = { "intro": audioIntro, "planta1": audioP1, "planta2": audioP2 };
    const activo = mapa[nuevoCanal];
    if (activo) {
        activo.volume = 0.65;
        const p = activo.play();
        if (p !== undefined) p.catch(() => {});
    }
}

function actualizarEtiquetaCancion() {
    const infoEl = document.getElementById("info-pista-actual");
    if (!infoEl) return;

    if (canalSonoroActivo === "planta1" || canalSonoroActivo === "planta2") {
        const idx = estadoAudioPisos[canalSonoroActivo].indice;
        const cancion = PLAYLISTS[canalSonoroActivo][idx];
        infoEl.textContent = `♫ ${cancion.titulo}`;
    } else {
        infoEl.textContent = "♫ Epsilon - Kangding Ray";
    }
}

function toggleMusica() {
    musicaActiva = !musicaActiva;
    const btn = document.getElementById("btn-toggle-musica");
    if (!btn) return;

    const mapa = {
        "intro": document.getElementById("audio-intro"),
        "planta1": document.getElementById("audio-planta1"),
        "planta2": document.getElementById("audio-planta2")
    };
    const activo = mapa[canalSonoroActivo];

    if (musicaActiva) {
        btn.textContent = "🔊 MÚSICA: ENCENDIDA";
        if (activo) activo.play().catch(() => {});
    } else {
        btn.textContent = "🔇 MÚSICA: APAGADA";
        if (activo) activo.pause();
    }
}

/* ==========================================================================
   7. NAVEGACIÓN ENTRE PANTALLAS INICIALES Y REINICIO DE TURNO
   ========================================================================== */
function irAPantalla2() {
    document.getElementById("pantalla-1").classList.remove("activa");
    document.getElementById("pantalla-2").classList.add("activa");
    cambiarCanalMusical("intro");

    const video = document.getElementById("video-fondo");
    if (video && video.paused) video.play().catch(() => {});
}

function volverAPantalla1() {
    document.getElementById("pantalla-2").classList.remove("activa");
    document.getElementById("pantalla-1").classList.add("activa");
}

function empezarTurno() {
    const introWrapper = document.getElementById("intro-wrapper");
    const layout = document.getElementById("experiencia-layout");
    const video = document.getElementById("video-fondo");

    if (introWrapper) {
        introWrapper.style.opacity = "0";
        introWrapper.style.transition = "opacity 0.6s ease";
    }
    setTimeout(() => {
        if (video) { try { video.pause(); } catch (e) {} }
        if (introWrapper) introWrapper.style.display = "none";
        if (layout) layout.style.display = "flex";
        cambiarCanalMusical(plantaActual === "pb" ? "planta1" : "planta2");
        iniciarRelojTurno();
    }, 600);
}

// Botón "Reiniciar turno" del panel lateral y "Volver al inicio" de créditos
function reiniciarTurnoCompleto() {
    if (intervaloReloj) clearInterval(intervaloReloj);
    segundosFicticiosTranscurridos = 0;
    espaciosVisitados.clear();
    espaciosLimpios.clear();
    cromosDesbloqueados.clear();
    reflexionMostradaAutomaticamente = false;

    // Limpiar colores en el SVG
    document.querySelectorAll(".zona").forEach(z => {
        z.classList.remove("visitado", "limpio");
    });

    // Reiniciar indicadores visuales del reloj
    const elReloj = document.getElementById("reloj-turno");
    const elBarra = document.getElementById("barra-tiempo");
    const elBadge = document.getElementById("estado-tarifa");
    if (elReloj) elReloj.classList.remove("tiempo-excedido");
    if (elBarra) {
        elBarra.style.width = "0%";
        elBarra.style.backgroundColor = "var(--bp-gold)";
    }
    if (elBadge) {
        elBadge.textContent = "TARIFA ACTIVA";
        elBadge.classList.remove("vencida");
    }
    document.getElementById("btn-abrir-reflexion").style.display = "none";

    actualizarVistaReloj();
    renderizarGrillaCromos();
    actualizarEstadisticasMenu();

    // Volver a la Planta 1 por defecto y abrir la Pantalla 1 de portada
    cambiarPlanta("pb", true);
    document.getElementById("pantalla-creditos").style.display = "none";
    document.getElementById("modal-reflexion").style.display = "none";
    document.getElementById("modal-oficina").style.display = "none";
    document.getElementById("experiencia-layout").style.display = "none";

    const introWrapper = document.getElementById("intro-wrapper");
    introWrapper.style.display = "flex";
    introWrapper.style.opacity = "1";
    volverAPantalla1();

    const video = document.getElementById("video-fondo");
    if (video) video.play().catch(() => {});
    cambiarCanalMusical("intro");
}

function volverAlInicioDesdeCreditos() {
    reiniciarTurnoCompleto();
}

/* ==========================================================================
   8. RELOJ ACELERADO Y CAMBIO DE PLANTA
   ========================================================================== */
function iniciarRelojTurno() {
    if (intervaloReloj) clearInterval(intervaloReloj);
    intervaloReloj = setInterval(() => {
        segundosFicticiosTranscurridos += FACTOR_VELOCIDAD_RELOJ;
        actualizarVistaReloj();
    }, 1000);
}

function actualizarVistaReloj() {
    const totalSeg = Math.floor(segundosFicticiosTranscurridos);
    const h = String(Math.floor(totalSeg / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeg % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeg % 60).padStart(2, "0");

    const elReloj = document.getElementById("reloj-turno");
    const elRelojMini = document.getElementById("reloj-mini");
    const elBarra = document.getElementById("barra-tiempo");
    const elBadge = document.getElementById("estado-tarifa");
    const elBitacora = document.getElementById("nota-bitacora");

    if (elReloj) elReloj.textContent = `${h}:${m}:${s}`;
    if (elRelojMini) elRelojMini.textContent = `${h}:${m} / 02:00`;

    const pct = Math.min((segundosFicticiosTranscurridos / SEGUNDOS_TEORICOS_LIMITE) * 100, 100);
    if (elBarra) elBarra.style.width = `${pct}%`;

    if (elBitacora) {
        if (segundosFicticiosTranscurridos < 2400) {
            elBitacora.textContent = '"El edificio acaba de quedar vacío. Las cafeteras aún están tibias."';
        } else if (segundosFicticiosTranscurridos < 4800) {
            elBitacora.textContent = '"Llevas casi una hora. El zumbido de la aspiradora parece hablar en otro idioma."';
        } else if (segundosFicticiosTranscurridos < SEGUNDOS_TEORICOS_LIMITE) {
            elBitacora.textContent = '"Se agota el tiempo pagado. Recuerda: importa más que parezca limpio a que lo esté."';
        } else {
            elBitacora.textContent = '"Pasaste las dos horas. A partir de este minuto trabajas gratis en suelo europeo."';
        }
    }

    if (segundosFicticiosTranscurridos >= SEGUNDOS_TEORICOS_LIMITE) {
        if (elReloj) elReloj.classList.add("tiempo-excedido");
        if (elBarra) elBarra.style.backgroundColor = "var(--bp-danger)";
        if (elBadge) {
            elBadge.textContent = "TIEMPO NO PAGADO";
            elBadge.classList.add("vencida");
        }
    }
}

function cambiarPlanta(planta, silencioso = false) {
    plantaActual = planta;
    const esPB = (planta === "pb");

    document.getElementById("capa-pb").style.display = esPB ? "block" : "none";
    document.getElementById("capa-pa").style.display = esPB ? "none" : "block";

    document.body.classList.toggle("ambiente-planta1", esPB);
    document.body.classList.toggle("ambiente-planta2", !esPB);

    document.getElementById("btn-pb").classList.toggle("activo", esPB);
    document.getElementById("btn-pa").classList.toggle("activo", !esPB);
    document.getElementById("chip-pb").classList.toggle("activo", esPB);
    document.getElementById("chip-pa").classList.toggle("activo", !esPB);

    document.getElementById("texto-planta-activa").textContent = esPB ? "PLANTA 01 — NIVEL DE INGRESO" : "PLANTA 02 — NIVEL SUPERIOR";
    document.getElementById("rotulo-planta").textContent = esPB ? "PLANTA 01" : "PLANTA 02";
    document.getElementById("rotulo-numero").textContent = esPB ? "01 / 02" : "02 / 02";

    if (!silencioso) {
        cambiarCanalMusical(esPB ? "planta1" : "planta2");
    }
    document.getElementById("menu-lateral").classList.remove("abierto");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenuLateral() {
    document.getElementById("menu-lateral").classList.toggle("abierto");
}

/* ==========================================================================
   9. MODAL DE OFICINA, AUTO-MARCADO AL SALIR Y BOTÓN TITILANTE
   ========================================================================== */
function actualizarTextoGrupoCromo(idGrupo) {
    const info = definicionCromos.find(c => c.id === idGrupo);
    const nota = document.getElementById("nota-cromo-grupo");
    if (info && nota) {
        const listos = info.espacios.filter(e => espaciosLimpios.has(e)).length;
        nota.textContent = `Aporta al ${info.nombre} (${listos}/${info.espacios.length} espacios listos en este sector).`;
    }
}

function abrirEspacio(clave) {
    const datos = baseDeDatosEspacios[clave];
    if (!datos) return;

    espacioActualKey = clave;
    indiceFotoActual = 0;
    espaciosVisitados.add(clave);

    const yaEstabaLimpio = espaciosLimpios.has(clave);
    document.getElementById("modal-categoria").textContent = datos.categoria;
    document.getElementById("modal-titulo").textContent = datos.titulo;
    document.getElementById("check-limpio").checked = yaEstabaLimpio;

    // Mostrar u ocultar el botón titilante "Continuar la jornada"
    const btnContinuar = document.getElementById("btn-continuar-jornada");
    if (btnContinuar) {
        btnContinuar.style.display = yaEstabaLimpio ? "block" : "none";
    }

    actualizarTextoGrupoCromo(datos.grupoCromo);
    renderizarContenidoModalOficina();

    const scrollEl = document.getElementById("scroll-lectura");
    if (scrollEl) scrollEl.scrollTop = 0;

    document.getElementById("modal-oficina").style.display = "flex";
}

function renderizarContenidoModalOficina() {
    const datos = baseDeDatosEspacios[espacioActualKey];
    const contenedorImg = document.getElementById("contenedor-imagen");
    const paginacion = document.getElementById("indicador-paginacion");
    const barraControles = document.getElementById("barra-controles-foto");
    const contenedorTexto = document.getElementById("modal-texto");

    const textoActual = datos.textos[indiceFotoActual] || datos.textos[0];
    contenedorTexto.innerHTML = `<p>${textoActual}</p>`;

    if (datos.archivos && datos.archivos.length > 0) {
        const nombreArchivo = datos.archivos[indiceFotoActual];
        const rutaImagen = `${CARPETA_FOTOS}${nombreArchivo}${EXTENSION_FOTOS}`;

        // Sin nombre de archivo: solo puntos discretos si hay varias fotos
        if (datos.archivos.length > 1) {
            barraControles.style.display = "flex";
            paginacion.textContent = datos.archivos.map((_, i) => i === indiceFotoActual ? "●" : "○").join(" ");
        } else {
            barraControles.style.display = "none";
        }

        contenedorImg.innerHTML = `
            <img src="${rutaImagen}" alt="${datos.titulo}"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display:none; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; color:var(--bp-dim);">
                <span style="color:var(--bp-gold); font-size:12px; letter-spacing:2px;">[ REGISTRO VISUAL ]</span>
            </div>
        `;
        document.getElementById("btn-ant").disabled = (indiceFotoActual === 0);
        document.getElementById("btn-sig").disabled = (indiceFotoActual === datos.archivos.length - 1);
    }
}

function cambiarFoto(direccion) {
    const datos = baseDeDatosEspacios[espacioActualKey];
    if (!datos || !datos.archivos) return;
    const nuevo = indiceFotoActual + direccion;
    if (nuevo >= 0 && nuevo < datos.archivos.length) {
        indiceFotoActual = nuevo;
        renderizarContenidoModalOficina();
    }
}

// Cuando el usuario marca/desmarca manualmente la casilla dentro del modal
function marcarEspacioLimpioManual(estaMarcado) {
    if (!espacioActualKey) return;
    const btnContinuar = document.getElementById("btn-continuar-jornada");

    if (estaMarcado) {
        registrarLimpiezaDeEspacio(espacioActualKey);
        if (btnContinuar) btnContinuar.style.display = "block";
    } else {
        espaciosLimpios.delete(espacioActualKey);
        const datos = baseDeDatosEspacios[espacioActualKey];
        const zonaSVG = document.getElementById(datos.idZona);
        if (zonaSVG) {
            zonaSVG.classList.remove("limpio");
            zonaSVG.classList.add("visitado");
        }
        if (btnContinuar) btnContinuar.style.display = "none";
        verificarDesbloqueoDeCromos(datos.grupoCromo);
        actualizarTextoGrupoCromo(datos.grupoCromo);
        actualizarEstadisticasMenu();
    }
}

// Registra un espacio como limpio, pinta el mapa y verifica cromos
function registrarLimpiezaDeEspacio(clave) {
    const datos = baseDeDatosEspacios[clave];
    if (!datos) return;

    espaciosLimpios.add(clave);
    const zonaSVG = document.getElementById(datos.idZona);
    if (zonaSVG) {
        zonaSVG.classList.remove("visitado");
        zonaSVG.classList.add("limpio");
    }

    verificarDesbloqueoDeCromos(datos.grupoCromo);
    actualizarTextoGrupoCromo(datos.grupoCromo);
    actualizarEstadisticasMenu();
}

// REGLA SOLICITADA: Si el usuario sale de una sala sin marcar la casilla,
// se marca automáticamente como completada (y suma para los cromos).
function cerrarModalOficina() {
    if (espacioActualKey && !espaciosLimpios.has(espacioActualKey)) {
        const checkEl = document.getElementById("check-limpio");
        if (checkEl) checkEl.checked = true;
        registrarLimpiezaDeEspacio(espacioActualKey);
    }

    document.getElementById("modal-oficina").style.display = "none";

    // Si con esta sala se completaron todos los espacios del buffet, abrir reflexión final
    if (espaciosLimpios.size === TOTAL_ESPACIOS_MAPA && !reflexionMostradaAutomaticamente) {
        reflexionMostradaAutomaticamente = true;
        setTimeout(() => {
            abrirModalReflexionFinal();
        }, 650);
    }
}

function verificarDesbloqueoDeCromos(idGrupo) {
    const cromo = definicionCromos.find(c => c.id === idGrupo);
    if (!cromo) return;
    const completo = cromo.espacios.every(k => espaciosLimpios.has(k));

    if (completo && !cromosDesbloqueados.has(cromo.id)) {
        cromosDesbloqueados.add(cromo.id);
        renderizarGrillaCromos();
        mostrarToastCromo(cromo);
    } else if (!completo && cromosDesbloqueados.has(cromo.id)) {
        cromosDesbloqueados.delete(cromo.id);
        renderizarGrillaCromos();
    }
}

function renderizarGrillaCromos() {
    const contenedor = document.getElementById("contenedor-cromos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    definicionCromos.forEach(cromo => {
        const obtenido = cromosDesbloqueados.has(cromo.id);
        const div = document.createElement("div");
        div.className = `slot-cromo ${obtenido ? "desbloqueado" : ""}`;
        div.title = obtenido ? cromo.nombre : cromo.descripcion;

        if (obtenido) {
            div.innerHTML = `
                <img src="${cromo.archivo}" alt="${cromo.nombre}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span style="display:none; font-weight:bold; font-size:11px;">CROMO ${cromo.id} ★</span>
            `;
        } else {
            const limpios = cromo.espacios.filter(e => espaciosLimpios.has(e)).length;
            div.innerHTML = `<span>#${cromo.id}<br><small>${limpios}/${cromo.espacios.length}</small></span>`;
        }
        contenedor.appendChild(div);
    });

    document.getElementById("contador-cromos").textContent = `${cromosDesbloqueados.size} / 5`;
    document.getElementById("cromos-mini").textContent = `Cromos: ${cromosDesbloqueados.size}/5`;
}

function mostrarToastCromo(cromo) {
    const toast = document.getElementById("toast-cromo");
    document.getElementById("toast-titulo").textContent = cromo.nombre;
    document.getElementById("toast-img").innerHTML = `
        <img src="${cromo.archivo}" alt="${cromo.nombre}"
             onerror="this.style.display='none'; this.parentElement.textContent='★';">
    `;
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 4000);
}

function actualizarEstadisticasMenu() {
    const limpios = espaciosLimpios.size;
    document.getElementById("num-limpios").textContent = limpios;
    document.getElementById("num-pendientes").textContent = TOTAL_ESPACIOS_MAPA - limpios;

    const btnRef = document.getElementById("btn-abrir-reflexion");
    if (btnRef && limpios === TOTAL_ESPACIOS_MAPA) {
        btnRef.style.display = "block";
    }
}

/* ==========================================================================
   10. REFLEXIÓN FINAL, CRÉDITOS Y PORTAPAPELES
   ========================================================================== */
function abrirModalReflexionFinal() {
    cambiarCanalMusical("intro");
    document.getElementById("modal-reflexion").style.display = "flex";
}

function irACreditos() {
    document.getElementById("modal-reflexion").style.display = "none";
    document.getElementById("pantalla-creditos").style.display = "flex";
}

function volverAlPlanoDesdeCreditos() {
    document.getElementById("pantalla-creditos").style.display = "none";
    cambiarCanalMusical(plantaActual === "pb" ? "planta1" : "planta2");
}

function compartirExperiencia() {
    const url = URL_PUBLICADA_GITHUB !== "" ? URL_PUBLICADA_GITHUB : window.location.href;
    const msg = document.getElementById("mensaje-copiado");

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => mostrarConfirmacion(msg)).catch(() => copiarFallback(url, msg));
    } else {
        copiarFallback(url, msg);
    }
}

function copiarFallback(texto, msg) {
    const inp = document.createElement("input");
    inp.value = texto;
    document.body.appendChild(inp);
    inp.select();
    document.execCommand("copy");
    document.body.removeChild(inp);
    mostrarConfirmacion(msg);
}

function mostrarConfirmacion(el) {
    if (!el) return;
    el.style.display = "block";
    setTimeout(() => { el.style.display = "none"; }, 4000);
}

window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("modal-oficina");
    if (!modal || modal.style.display !== "flex") return;
    if (e.key === "Escape") cerrarModalOficina();
    if (e.key === "ArrowRight") cambiarFoto(1);
    if (e.key === "ArrowLeft") cambiarFoto(-1);
});

document.getElementById("modal-oficina").addEventListener("click", (e) => {
    if (e.target.id === "modal-oficina") cerrarModalOficina();
});
// === FIN DEL ARCHIVO SCRIPT.JS ===