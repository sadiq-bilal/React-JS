// How many photos we show on one page
export const PHOTOS_PER_PAGE = 8;

// Big banner image used in the hero section
export const heroImage =
  "https://images.unsplash.com/photo-1704799191531-085f46e6221c?auto=format&fit=crop&w=1400&q=80";

// The API only gives placeholder images, so every photo gets
// its own real image from picsum (same id = same image always)
export function getImageUrl(id) {
  return `https://picsum.photos/seed/photohub-${id}/800/600`;
}

// Total number of pages for a list
export function getTotalPages(list) {
  return Math.ceil(list.length / PHOTOS_PER_PAGE);
}

// Only the items that belong to the given page
export function getPageItems(list, page) {
  const start = (page - 1) * PHOTOS_PER_PAGE;
  return list.slice(start, start + PHOTOS_PER_PAGE);
}
