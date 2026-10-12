export const playlist = [
  {
    title: 'Morning Light',
    artist: 'Ari Nova',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/lagu-1',
  },
  {
    title: 'City Pulse',
    artist: 'Luna Terrace',
    cover: 'https://images.unsplash.com/photo-1493225457124-cac648726d0a?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/lagu-2',
  },
  {
    title: 'Night Coding',
    artist: 'Kaira Echo',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    link: 'https://example.com/lagu-3',
  },
];

export function initPlaylist({ containerSelector }) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  container.innerHTML = '';

  playlist.forEach((track) => {
    const card = document.createElement('article');
    card.className = 'music-card';

    const image = document.createElement('img');
    image.className = 'music-card__cover';
    image.src = track.cover;
    image.alt = `Cover lagu ${track.title}`;

    const content = document.createElement('div');
    content.className = 'music-card__content';

    const meta = document.createElement('p');
    meta.className = 'music-card__meta';
    meta.textContent = 'Favorite Track';

    const title = document.createElement('h3');
    title.textContent = track.title;

    const artist = document.createElement('p');
    artist.textContent = track.artist;

    const link = document.createElement('a');
    link.className = 'music-card__link';
    link.href = track.link;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'Dengar lagu';

    content.append(meta, title, artist, link);
    card.append(image, content);
    container.appendChild(card);
  });
}
