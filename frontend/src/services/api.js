export const apiBaseUrl = 'https://api.example.com';

export async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  return response.json();
}
