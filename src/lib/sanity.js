import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'demo';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) {
    return {
      url: () => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
      width: () => ({
        height: () => ({
          url: () => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop'
        })
      })
    };
  }
  return builder.image(source);
}

export function portableTextToHtml(blocks) {
  if (!blocks) return '';
  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }) => `<figure class="my-4"><img src="${urlFor(value).url()}" class="rounded-xl w-full max-h-96 object-cover shadow-sm" alt="" /><figcaption class="text-xs text-gray-500 text-center mt-1">${value.caption || ''}</figcaption></figure>`,
      },
    },
  });
}
