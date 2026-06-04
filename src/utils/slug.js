/**
 * 路由 URL 片段（slug）的编解码与数据查找。
 * Hash 路由示例：/#/notes/林舟--标题、/#/routes/京都
 */

/** 将任意字符串编码为 URL 安全片段（支持中文） */
export function toSlug(value) {
  return encodeURIComponent(String(value).trim());
}

/** 将 slug 解码回原始字符串 */
export function fromSlug(slug) {
  return decodeURIComponent(slug);
}

/** 根据作者与标题生成笔记的唯一路由 slug */
export function getPostSlug(post) {
  return toSlug(`${post.author}--${post.title}`);
}

/** 在帖子列表中按 slug 查找对应笔记 */
export function findPostBySlug(posts, postSlug) {
  return posts.find((post) => getPostSlug(post) === postSlug);
}

/** 将城市名编码为目的地详情页的路由参数 */
export function getCitySlug(city) {
  return toSlug(city);
}

/** 在目的地列表中按 slug 查找对应项 */
export function findDestinationBySlug(destinations, citySlug) {
  const city = fromSlug(citySlug);
  return destinations.find((item) => item.city === city);
}

/** 将招募标题编码为同伴详情页的路由参数 */
export function getTripSlug(tripTitle) {
  return toSlug(tripTitle);
}

/** 在招募列表中按 slug 查找对应标题 */
export function findTripBySlug(trips, tripSlug) {
  const title = fromSlug(tripSlug);
  return trips.find((trip) => trip === title);
}
