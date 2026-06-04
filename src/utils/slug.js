export function toSlug(value) {
  return encodeURIComponent(String(value).trim());
}

export function fromSlug(slug) {
  return decodeURIComponent(slug);
}

export function getPostSlug(post) {
  return toSlug(`${post.author}--${post.title}`);
}

export function findPostBySlug(posts, postSlug) {
  return posts.find((post) => getPostSlug(post) === postSlug);
}

export function getCitySlug(city) {
  return toSlug(city);
}

export function findDestinationBySlug(destinations, citySlug) {
  const city = fromSlug(citySlug);
  return destinations.find((item) => item.city === city);
}

export function getTripSlug(tripTitle) {
  return toSlug(tripTitle);
}

export function findTripBySlug(trips, tripSlug) {
  const title = fromSlug(tripSlug);
  return trips.find((trip) => trip === title);
}
