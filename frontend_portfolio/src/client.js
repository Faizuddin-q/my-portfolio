import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-05-15',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_STUDIO_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor= (source)=> builder.image(source);

