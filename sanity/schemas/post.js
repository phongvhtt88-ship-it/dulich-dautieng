export default {
  name: 'post',
  title: 'Tin tức & Lễ hội',
  type: 'document',
  fields: [
    { name: 'title', title: 'Tiêu đề bài viết', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Đường dẫn tĩnh', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'publishedAt', title: 'Ngày đăng bài', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'mainImage', title: 'Ảnh đại diện bài viết', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
    { name: 'excerpt', title: 'Tóm tắt bài viết (ngắn gọn 2-3 câu)', type: 'text', rows: 3 },
    { name: 'body', title: 'Nội dung chi tiết bài viết', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'featured', title: 'Tin nổi bật', type: 'boolean', initialValue: false }
  ]
};
