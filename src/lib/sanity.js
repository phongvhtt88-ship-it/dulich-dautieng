import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'iyronxf9';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  const defaultFallback = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop';
  
  if (!source) {
    return {
      url: () => defaultFallback,
      width: () => ({ height: () => ({ url: () => defaultFallback }) })
    };
  }

  // Nếu source là link trực tiếp (http hoặc /)
  if (typeof source === 'string' && (source.startsWith('http') || source.startsWith('/'))) {
    return {
      url: () => source,
      width: () => ({ height: () => ({ url: () => source }) })
    };
  }

  // Nếu source chứa asset.url trực tiếp
  if (source.asset && typeof source.asset.url === 'string') {
    return {
      url: () => source.asset.url,
      width: () => ({ height: () => ({ url: () => source.asset.url }) })
    };
  }

  // Nếu source là Sanity asset reference chuẩn (_ref)
  try {
    return builder.image(source);
  } catch (err) {
    return {
      url: () => defaultFallback,
      width: () => ({ height: () => ({ url: () => defaultFallback }) })
    };
  }
}

export function portableTextToHtml(blocks) {
  if (!blocks) return '';
  try {
    return toHTML(blocks, {
      components: {
        types: {
          image: ({ value }) => `<figure class="my-4"><img src="${urlFor(value).url()}" class="rounded-xl w-full max-h-96 object-cover shadow-sm" alt="" /><figcaption class="text-xs text-gray-500 text-center mt-1">${value.caption || ''}</figcaption></figure>`,
        },
      },
    });
  } catch (e) {
    return '';
  }
}
