const API_KEY = 'DEMO-API-KEY';

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': API_KEY
});

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

export async function getCats(page = 0, type = '', breed = '') {
  const url = `https://api.thecatapi.com/v1/images/search?limit=9&page=${page}&mime_types=${type}&breed_ids=${breed}&has_breeds=true`;
  const response = await fetch(url, requestOptions);
  if (!response.ok) throw new Error('Error al obtener gatos');
  return await response.json();
}

export async function getBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', requestOptions);
  if (!response.ok) throw new Error('Error al obtener razas');
  return await response.json();
}
