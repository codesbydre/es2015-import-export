// This file should export two array helper functions:

// *choice(items)*: returns a randomly selected item from array of items
// *remove(items, item)*: removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

export function choice(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

export function remove(items, item) {
  const itemIdx = items.indexOf(item);
  if (itemIdx === -1) return undefined;

  return items.splice(itemIdx, 1)[0];
}
