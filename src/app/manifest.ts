import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
   name: "Az Európai Únió Főbb Szervei",
  short_name: "EU",
  background_color: "#003399",
  theme_color: "#003399",
  display: "fullscreen",
  scope: "/",
  start_url: "/",
  icons: [
    {
      "src": "/logo.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]}
}