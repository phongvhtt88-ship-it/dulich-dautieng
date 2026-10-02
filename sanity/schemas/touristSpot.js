export default {
  name: 'touristSpot',
  title: 'Điểm đến Du lịch',
  type: 'document',
  fields: [
    { name: 'title', title: 'Tên điểm đến', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Đường dẫn tĩnh (Slug)', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
    {
      name: 'category',
      title: 'Phân loại du lịch',
      type: 'string',
      options: {
        list: [
          { title: 'Di tích lịch sử - Văn hóa', value: 'heritage' },
          { title: 'Du lịch sinh thái / Vườn cây', value: 'ecotourism' },
          { title: 'Điểm check-in / Cắm trại', value: 'checkin' },
          { title: 'Ẩm thực / Đặc sản địa phương', value: 'food' },
          { title: 'Lưu trú (Homestay/Khách sạn)', value: 'stay' }
        ]
      },
      validation: Rule => Rule.required()
    },
    { name: 'thumbnail', title: 'Ảnh đại diện', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
    { name: 'gallery', title: 'Bộ sưu tập hình ảnh', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'address', title: 'Địa chỉ cụ thể', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'gpsLocation',
      title: 'Tọa độ GPS (hiển thị trên Bản đồ tương tác)',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Vĩ độ (Latitude, ví dụ: 11.3125)', type: 'number' },
        { name: 'lng', title: 'Kinh độ (Longitude, ví dụ: 106.3682)', type: 'number' }
      ]
    },
    { name: 'googleMapsUrl', title: 'Link định vị Google Maps', type: 'url' },
    { name: 'ticketPrice', title: 'Giá vé tham quan (hoặc ghi Miễn phí)', type: 'string', initialValue: 'Miễn phí' },
    { name: 'openHours', title: 'Thời gian mở cửa đón khách', type: 'string', initialValue: '07:30 - 17:30 hàng ngày' },
    { name: 'phone', title: 'Số điện thoại hỗ trợ du khách', type: 'string' },
    { name: 'description', title: 'Bài viết thuyết minh & Hướng dẫn trải nghiệm', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'featured', title: 'Ghim lên mục Nổi bật ở Trang chủ', type: 'boolean', initialValue: false }
  ]
};
