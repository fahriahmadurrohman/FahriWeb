export const playlist = [
  {
    title: 'Graduation Song',
    artist: 'Murphy Radio',
    cover: new URL('../assets/images/music/covergraduationsong.jpg', import.meta.url).href,
    link: new URL('../assets/images/music/Murphy Radio - Graduation Song (Official Music Video).mp3', import.meta.url).href,
  },
  {
    title: 'The Coffeeshop Where We First Met Right at the Corner',
    artist: 'Hermione',
    cover: new URL('../assets/images/music/coverlunaksir.jpg', import.meta.url).href,
    link: new URL('../assets/images/music/The Coffeeshop Where We First Met Right at the Corner.mp3', import.meta.url).href,
  },
  {
    title: 'Night Coding',
    artist: 'Kaira Echo',
    cover: new URL('../assets/images/music/covergraduationsong.jpg', import.meta.url).href,
    link: new URL('../assets/images/music/Murphy Radio - Graduation Song (Official Music Video).mp3', import.meta.url).href,
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

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.preload = 'none';
    audio.src = track.link;

    content.append(meta, title, artist, audio);
    card.append(image, content);
    container.appendChild(card);
  });
}
