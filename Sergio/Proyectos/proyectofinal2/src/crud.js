import { getCats, getBreeds } from './api.js';

let page = 0;
const galeria = document.getElementById('galeria');
const botonCargarMas = document.getElementById('botonCargarMas');

export async function initGallery() {
  await loadBreeds();
  fetchAndRenderCats();

  botonCargarMas.addEventListener('click', () => {
    page++;
    fetchAndRenderCats();
  });

  const filtersForm = document.getElementById('filters');
  filtersForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 0;
    galeria.innerHTML = '';
    fetchAndRenderCats();
  });
}

async function loadBreeds() {
  const breeds = await getBreeds();
  const breedSelect = document.getElementById('breed');
  breedSelect.innerHTML = '<option value="">Todas</option>';
  breeds.forEach(b => {
    const option = document.createElement('option');
    option.value = b.id;
    option.textContent = b.name;
    breedSelect.appendChild(option);
  });
}

async function fetchAndRenderCats() {
  const loading = document.getElementById('loading');
  const type = document.getElementById('type').value;
  const breed = document.getElementById('breed').value;

  loading.style.display = 'block';
  try {
    const cats = await getCats(page, type, breed);
    renderCats(cats);
  } catch (error) {
    alert('Error al cargar las imágenes de gatos 😿');
  } finally {
    loading.style.display = 'none';
  }
}

function renderCats(cats) {
  cats.forEach(cat => {
    const breedInfo = cat.breeds?.[0];
    const card = document.createElement('div');
    card.classList.add('cat-card');
    card.innerHTML = `
      <img src="${cat.url}" alt="Gato">
      <button class="favorite-btn">❤️</button>
      ${breedInfo ? `
        <div class="info">
          <p><strong>${breedInfo.name}</strong></p>
          <p>${breedInfo.origin}</p>
          <p>${breedInfo.temperament}</p>
        </div>` : ''}
    `;
    galeria.appendChild(card);

    card.querySelector('.favorite-btn').addEventListener('click', () => {
      toggleFavorite(cat);
      renderFavorites();
    });
  });
}

export function toggleFavorite(cat) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const existe = favoritos.some(f => f.id === cat.id);

  if (existe) {
    favoritos = favoritos.filter(f => f.id !== cat.id);
  } else {
    favoritos.push({ id: cat.id, url: cat.url });
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

export function renderFavorites() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const contenedor = document.getElementById('favoritos');
  contenedor.innerHTML = '';

  favoritos.forEach(cat => {
    const card = document.createElement('div');
    card.classList.add('cat-card');
    card.innerHTML = `
      <img src="${cat.url}" alt="Gato favorito">
      <button class="favorite-btn">🗑️</button>
    `;
    contenedor.appendChild(card);

    card.querySelector('.favorite-btn').addEventListener('click', () => {
      removeFavorite(cat.id);
      renderFavorites();
    });
  });
}

function removeFavorite(id) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos = favoritos.filter(f => f.id !== id);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
