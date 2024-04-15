const servicios = {
  instagram: {
    seguidores: {
      '🔴 7626 😍 Premium Instagram Followers | Max 5M | Lifetime Refill ♻️ | 20K Per Day': {
        '500 seguidores': 760,
        '1000 seguidores': 1530,
        '2000 seguidores': 3060,
        '4000 seguidores': 4890,
        '5000 seguidores': 6120,
        '10000 seguidores': 12240,
        '15000 seguidores': 18350
      },
      '🔴 7679 😍 Instagram Followers + Likes %15+Story views %20+Profile views %20 | Lifetime Refill': {
        '500 seguidores': 740,
        '1000 seguidores': 1480,
        '2000 seguidores': 2960,
        '4000 seguidores': 4730,
        '5000 seguidores': 5910,
        '10000 seguidores': 11820,
        '15000 seguidores': 17730
      },
      '🔵 ID 368 - Seguidores reales de Instagram - Max 100k (SEGUIDORESLATINO.COM) USAR ESTE - YA LO PUSE EN EL FLYER': {
        '500 seguidores': 900,
        '1000 seguidores': 1790,
        '2000 seguidores': 3580,
        '4000 seguidores': 7170,
        '5000 seguidores': 8960,
        '10000 seguidores': 17920,
        '15000 seguidores': 26880
      },
      '🔵 ID 3149 - Instagram - Seguidores con apariencia real - R365 - Max. 200K': {
        '500 seguidores': 470,
        '1000 seguidores': 930,
        '2000 seguidores': 1870,
        '4000 seguidores': 3730,
        '5000 seguidores': 4670,
        '10000 seguidores': 9330,
        '15000 seguidores': 14000
      }
    },
    'likes-post': {
      '🔴 7631 - 🥰 Instagram Likes | Max 500K | No Refill ⛔️ | 30K Per Day': {
        '500 likes': 170,
        '1000 likes': 340,
        '2000 likes': 680,
        '4000 likes': 1370,
        '5000 likes': 1710,
        '10000 likes': 3420,
        '15000 likes': 5130
      },
      '🔴 7680 - ❤️ Instagram Likes | Max 500K | Mix Users | 30K Per Hours': {
        '500 likes': 130,
        '1000 likes': 270,
        '2000 likes': 540,
        '4000 likes': 1080,
        '5000 likes': 1350,
        '10000 likes': 2700,
        '15000 likes': 4040
      },
      '🔴 7423 ❤️ 💃 Instagram Likes LatinoAmerica | R30 | %100 Usuario Reales | 2K Por Hora': {
        '500 likes': 580,
        '1000 likes': 1150,
        '2000 likes': 2310,
        '4000 likes': 2390,
        '5000 likes': 3990,
        '10000 likes': 7980,
        '15000 likes': 11970
      },
      '🔵 ID 277 - Instagram - Me gusta 100% Reales - Baratos - Calidad Media': {
        '500 likes': 580,
        '1000 likes': 1150,
        '2000 likes': 2310,
        '4000 likes': 2390,
        '5000 likes': 3990,
        '10000 likes': 7980,
        '15000 likes': 11970
      }
    },
    'likes-reels': {
      '🔴 6823 - ▶ Me gusta en Instagram Reels | Usuarios reales | Alta calidad | Máximo 20K | Rápido - $0.44 por 1000': {
        '500 likes': 550,
        '1000 likes': 1100,
        '2000 likes': 2190,
        '3000 likes': 3290,
        '5000 likes': 5480,
        '10000 likes': 10950,
        '20000 likes': 21900
      }
    },
    'likes-historias': {
      // Definir precios para likes en historias de Instagram
    }
  },
  Facebook: {
    seguidores: {
      '🔵 ID 2085 - Facebook - Seguidores de Perfil, Página clásica/Nueva version - Max 5k': {
        '500 seguidores': 840,
        '1000 seguidores': 1680,
        '2000 seguidores': 3360,
        '4000 seguidores': 5600,
        '5000 seguidores': 7000,
        '10000 seguidores': 11200,
        '15000 seguidores': 16800,
        '20000 seguidores': 22400,
        '50000 seguidores': 56000
      }
    }
  }
};

const plataformaSelect = document.getElementById('plataforma');
const metricaSelect = document.getElementById('metrica');
const tipoServicioSelect = document.getElementById('tipo-servicio');
const preciosDiv = document.getElementById('precios');

function actualizarPrecios() {
  // Limpiar precios anteriores
  preciosDiv.innerHTML = '';

  const plataforma = plataformaSelect.value;
  const metrica = metricaSelect.value;
  const tipoServicio = tipoServicioSelect.value;

  // Mostrar precios solo si se selecciona un tipo de servicio
  if (tipoServicio !== '') {
    const precios = servicios[plataforma][metrica][tipoServicio];
    const listaPrecios = document.createElement('ul'); // Crear lista ordenada
    Object.entries(precios).forEach(([tipo, precio]) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${tipo} - $${precio}`;
      listaPrecios.appendChild(listItem); // Agregar cada precio como un ítem de la lista
    });
    preciosDiv.appendChild(listaPrecios); // Agregar la lista de precios al contenedor
  }
}

function limpiarPrecios() {
  // Limpiar precios
  preciosDiv.innerHTML = '';
}

function actualizarTiposServicio() {
  // Limpiar tipos de servicio anteriores
  tipoServicioSelect.innerHTML = '';

  const plataforma = plataformaSelect.value;
  const metrica = metricaSelect.value;

  // Mostrar tipos de servicio correspondientes a la métrica seleccionada
  if (servicios[plataforma][metrica]) {
    const tiposServicio = servicios[plataforma][metrica];
    Object.keys(tiposServicio).forEach(tipo => {
      const option = document.createElement('option');
      option.value = tipo;
      option.textContent = tipo;
      tipoServicioSelect.appendChild(option);
    });
  }
}

// Agregar eventos "change" a los selectores para actualizar automáticamente los precios
plataformaSelect.addEventListener('change', () => {
  // Limpiar precios al cambiar la plataforma
  limpiarPrecios();
  // Actualizar tipos de servicio al cambiar la plataforma
  actualizarTiposServicio();
  // Actualizar precios al cambiar la plataforma
  actualizarPrecios();
});
metricaSelect.addEventListener('change', () => {
  // Actualizar tipos de servicio al cambiar la métrica
  actualizarTiposServicio();
  // Limpiar precios al cambiar la métrica
  actualizarPrecios();
});
tipoServicioSelect.addEventListener('change', actualizarPrecios);

// Inicializar los tipos de servicio y precios al cargar la página
actualizarTiposServicio();
actualizarPrecios();
