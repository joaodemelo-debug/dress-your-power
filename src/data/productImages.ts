/**
 * Just Minimal — product image catalogue.
 *
 * Upload each photo to the matching folder under public/images/products/.
 * Keep the filename exactly as shown below. The website can then reference
 * these paths without using external image URLs.
 */
export const productImages = {
  baggySweatpants: {
    grey: "/images/products/baggy-sweatpants/grey.jpg",
    navy: "/images/products/baggy-sweatpants/navy.jpg",
  },
  cropped: {
    black: "/images/products/cropped/black.jpg",
  },
  sweatpants: {
    black: "/images/products/sweatpants/black.jpg",
    grey: "/images/products/sweatpants/grey.jpg",
  },
  cropTee: {
    black: "/images/products/crop-tee/black.jpg",
    white: "/images/products/crop-tee/white.jpg",
  },
} as const;

export type ProductImageCategory = keyof typeof productImages;
