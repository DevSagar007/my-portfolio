/**
 * Minimal typings for Swiper 5, which is the version the original template
 * bundled and whose stylesheet the site still uses. The package ships no
 * declaration files, so only the surface this project touches is declared.
 */
declare module 'swiper' {
  export interface SwiperOptions {
    spaceBetween?: number;
    speed?: number;
    pagination?: { el: string; clickable?: boolean };
    navigation?: { nextEl: string; prevEl: string };
    breakpoints?: Record<number, { slidesPerView?: number }>;
  }

  export default class Swiper {
    constructor(element: HTMLElement | string, options?: SwiperOptions);
    destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  }
}
