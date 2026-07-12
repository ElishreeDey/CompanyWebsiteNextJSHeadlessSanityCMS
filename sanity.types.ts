
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: schema.json
export type ContactMessage = {
  _id: string;
  _type: "contactMessage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  email: string;
  message: string;
};

export type SanityImageAssetReference = {
  _ref: string;
  _type: "reference";
  _weak?: boolean;
  [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  author: string;
  publishedAt: string;
  excerpt: string;
  image: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x: number;
  y: number;
  height: number;
  width: number;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type TeamMember = {
  _id: string;
  _type: "teamMember";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  photo: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  designation: string;
  bio: string;
};

export type Service = {
  _id: string;
  _type: "service";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  companyName: string;
  bannerTitle: string;
  subtitle?: string;
  logo?: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  vision: string;
  footerText?: string;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height: number;
  width: number;
  aspectRatio: number;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  thumbHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash: string;
  extension: string;
  mimeType: string;
  size: number;
  assetId: string;
  uploadId?: string;
  path: string;
  url: string;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash: string;
  extension: string;
  mimeType: string;
  size: number;
  assetId: string;
  uploadId?: string;
  path: string;
  url: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type AllSanitySchemaTypes =
  | ContactMessage
  | SanityImageAssetReference
  | Post
  | SanityImageCrop
  | SanityImageHotspot
  | Slug
  | TeamMember
  | Service
  | SiteSettings
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageMetadata
  | SanityFileAsset
  | SanityAssetSourceData
  | SanityImageAsset
  | Geopoint;

// Source: sanity/lib/queries/post.ts
export type POSTS_QUERY_RESULT = Array<{
  _id: string;
  title: string;
  slug: Slug;
  author: string;
  publishedAt: string;
  excerpt: string;
  image: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
}>;

// Source: sanity/lib/queries/post.ts
export type POST_QUERY_RESULT = {
  _id: string;
  title: string;
  slug: Slug;
  author: string;
  publishedAt: string;
  excerpt: string;
  image: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
} | null;

// Source: sanity/lib/queries/teamMember.ts
export type TEAM_MEMBERS_QUERY_RESULT = Array<{
  _id: string;
  name: string;
  photo: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  designation: string;
  bio: string;
}>;

// Source: sanity/lib/queries/teamMember.ts
export type TEAM_MEMBER_QUERY_RESULT = {
  _id: string;
  name: string;
  photo: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  designation: string;
  bio: string;
} | null;

// Query
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '\n  *[_type == "post"] | order(publishedAt desc) {\n    _id,\n    title,\n    slug,\n    author,\n    publishedAt,\n    excerpt,\n    image\n  }\n': POSTS_QUERY_RESULT;
    '\n  *[_type == "post" && slug.current == $slug][0] {\n    _id,\n    title,\n    slug,\n    author,\n    publishedAt,\n    excerpt,\n    image,\n    content\n  }\n': POST_QUERY_RESULT;
    '\n  *[_type == "teamMember"] | order(name asc) {\n    _id,\n    name,\n    photo,\n    designation,\n    bio\n  }\n': TEAM_MEMBERS_QUERY_RESULT;
    '\n  *[_type == "teamMember" && _id == $id][0] {\n    _id,\n    name,\n    photo,\n    designation,\n    bio\n  }\n': TEAM_MEMBER_QUERY_RESULT;
  }
}
