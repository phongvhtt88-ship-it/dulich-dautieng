export default {
  name: 'ocopProduct',
  title: 'Sản phẩm OCOP & Nông sản',
  type: 'document',
  fields: [
    { name: 'name', title: 'Tên sản phẩm', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Đường dẫn tĩnh (Slug)', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: Rule => Rule.required() },
    {
      name: 'starRating',
      title: 'Phân hạng OCOP',
      type: 'string',
      options: {
        list: [
          { title: 'Chưa xếp hạng / Đặc sản tiềm năng', value: '0' },
          { title: 'OCOP 3 Sao', value: '3' },
          { title: 'OCOP 4 Sao', value: '4' },
          { title: 'OCOP 5 Sao', value: '5' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    { name: 'mainImage', title: 'Ảnh đại diện', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
    { name: 'gallery', title: 'Thư viện ảnh sản phẩm', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'producer', title: 'Chủ thể sản xuất (HTX / Hộ kinh doanh / Doanh nghiệp)', type: 'string', validation: Rule => Rule.required() },
    { name: 'address', title: 'Địa chỉ cơ sở sản xuất', type: 'string' },
    { name: 'phoneContact', title: 'Hotline / Số điện thoại liên hệ', type: 'string' },
    { name: 'zaloPhone', title: 'Số điện thoại Zalo (nhận đơn hàng)', type: 'string' },
    { name: 'priceRange', title: 'Mức giá tham khảo (ví dụ: 65.000đ - 120.000đ/kg)', type: 'string' },
    { name: 'standards', title: 'Chứng nhận đạt được (VietGAP, HACCP, ATTP, ISO...)', type: 'array', of: [{ type: 'string' }] },
    { name: 'story', title: 'Câu chuyện sản phẩm & Giới thiệu chi tiết', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'featured', title: 'Ghim lên mục Nổi bật ở Trang chủ', type: 'boolean', initialValue: false }
  ]
};
