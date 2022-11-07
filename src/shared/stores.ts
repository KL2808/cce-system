import { writable, derived, readable } from "svelte/store";
import type { CCTVItem } from "../classes/CCTVItem";
import { Camera } from "../classes/Camera";
import { Codec } from "../classes/Codec";
import { to_number } from "svelte/internal";

export const cameras = readable<Camera[]>([
  // SAMPLE DATA
  // Real data can be fetched through HTTP or loaded from local JSON file
  new Camera(0, 0, 0),
  new Camera(596, 1020, 24),
  new Camera(720, 1280, 24),
  new Camera(1080, 1920, 24),
  new Camera(1440, 2560, 24),
  new Camera(1520, 2688, 24),
  new Camera(1728, 3072, 24),
  new Camera(2160, 3840, 24),
]);

export const codecs = readable<Codec[]>([
  // SAMPLE DATA
  // Real data can be fetched through HTTP or loaded from local JSON file
  new Codec("-", 0),
  new Codec("H264 - Innen ruhig", 0.006439),
  new Codec("H264 - Innen bewegeung", 0.01236),
  new Codec("H264 - Außen ruhig", 0.01679),
  new Codec("H264 - Außen bewegeung", 0.023384),
]);

export const cctvItems = writable<CCTVItem[]>([]);

export const capacityTB = derived(cctvItems, ($cctvItems) => {
  let sum = 0;
  $cctvItems.forEach((element) => {
    element.updateUsage();
    sum = sum + element.capacityTB;
  });
  sum = to_number(sum.toFixed(3));
  return sum;
});

export const helpModal = writable<boolean>(false);
