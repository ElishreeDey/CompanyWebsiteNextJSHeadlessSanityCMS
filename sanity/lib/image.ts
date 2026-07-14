//Sanity stores the image as an asset reference, image.ts converts it into a real URL
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

//urlFor() — turns a Sanity image asset reference into an actual URL.
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
