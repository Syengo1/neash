import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We add the images config here to allow Unsplash placeholders
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // You can also add your future cloud storage here (like AWS S3, Cloudinary, or Vercel Blob) 
      // once you have the actual product photography.
    ],
  },
};

export default nextConfig;