# CỔNG THÔNG TIN QUẢNG BÁ DU LỊCH & NÔNG SẢN OCOP ĐỊA PHƯƠNG
**Kiến trúc:** Jamstack (Astro + Tailwind CSS + Sanity.io Headless CMS + Vercel / Cloudflare Pages)  
**Chi phí vận hành:** 0 VNĐ vĩnh viễn (Sử dụng 100% Free Tiers ổn định cao của Sanity, Vercel & OpenStreetMap)

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT

1. **Siêu nhẹ & Tốc độ cao:** Sử dụng framework Astro loại bỏ JavaScript dư thừa, đạt điểm Google PageSpeed 95-100, tải trang cực mượt trên mạng 3G/4G di động.
2. **Giao diện Responsive 100%:** Tương thích chuẩn trên cả điện thoại thông minh (Mobile First), máy tính bảng và máy tính bàn (PC).
3. **Cơ sở dữ liệu & CMS chuyên nghiệp (Sanity.io):**
   - Phân quyền tài khoản quản trị viên / biên tập viên độc lập.
   - Trình soạn thảo văn bản phong phú (Rich Text) kèm tải ảnh, chèn caption.
   - Quản lý phân hạng OCOP (3 sao, 4 sao, 5 sao), chứng nhận VietGAP/ATTP.
4. **Bản đồ số du lịch tương tác (Interactive Map):** Sử dụng OpenStreetMap + Leaflet.js miễn phí, tự động hiển thị vị trí các di tích, vườn cây, điểm cắm trại và nút điều hướng sang Google Maps.
5. **Kênh kết nối mua nông sản 1 chạm:** Tích hợp nút đặt hàng trực tiếp qua Zalo của chủ thể HTX/nhà vườn hoặc gọi Hotline hỗ trợ du khách.

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
dulich-ocop-dautien/
├── sanity/                         # Cấu hình Cơ sở dữ liệu & Sanity Studio CMS
│   ├── schemas/
│   │   ├── ocopProduct.js         # Schema Nông sản & OCOP (Hạng sao, chủ thể, Zalo)
│   │   ├── touristSpot.js         # Schema Điểm đến du lịch (GPS, vé, giờ mở cửa)
│   │   ├── post.js                # Schema Tin tức, Lễ hội, Sự kiện
│   │   └── index.js
│   └── sanity.config.js
├── src/
│   ├── components/                # Các thành phần giao diện tái sử dụng
│   │   ├── Header.astro           # Menu điều hướng Mobile/PC & Hotline
│   │   ├── Footer.astro           # Thông tin cơ quan & hỗ trợ du khách
│   │   ├── OcopCard.astro         # Thẻ hiển thị sản phẩm OCOP & nút Zalo
│   │   ├── SpotCard.astro         # Thẻ điểm đến du lịch & liên kết chỉ đường
│   │   ├── InteractiveMap.astro   # Bản đồ số tương tác Leaflet
│   │   └── ZaloButton.astro       # Nút nổi liên hệ Zalo & Hotline cố định
│   ├── layouts/
│   │   └── Layout.astro           # Khung trang chuẩn SEO, OpenGraph Zalo/Facebook
│   ├── lib/
│   │   └── sanity.js              # Thư viện kết nối Sanity Client & GROQ Query
│   ├── pages/                     # Các trang giao diện người dùng
│   │   ├── index.astro            # Trang chủ: Hero Banner, Điểm đến, Bản đồ, OCOP
│   │   ├── du-lich/               # Chuyên mục Du lịch & Bản đồ
│   │   ├── san-pham-ocop/         # Chuyên mục Gian hàng OCOP & Chi tiết sản phẩm
│   │   └── tin-tuc/               # Chuyên mục Tin tức, Lễ hội
│   └── styles/
│       └── global.css             # Tailwind CSS & Font chữ hệ thống
├── astro.config.mjs               # Cấu hình Astro
├── tailwind.config.cjs            # Cấu hình màu sắc thương hiệu địa phương
└── package.json
```

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI CHI TIẾT (TỪ A ĐẾN Z)

### BƯỚC 1: KHỞI TẠO TÀI KHOẢN VÀ DATABASE SANITY (0 ĐỒNG)
1. Truy cập [https://www.sanity.io](https://www.sanity.io) và đăng ký tài khoản (đăng nhập bằng Google hoặc GitHub).
2. Tạo dự án mới (Create Project), đặt tên ví dụ: `Du Lich OCOP Dau Tieng`.
3. Vào phần **Project Settings** -> Lấy **Project ID** (ví dụ: `abc123xyz`).
4. Vào mục **API** -> **CORS Origins** -> Thêm `http://localhost:4321` và `https://*.vercel.app` (tích chọn *Allow credentials*).
5. Vào mục **Members**: Bấm *Invite Members* để thêm email các cán bộ biên tập và gán quyền `Editor` để cùng quản trị viết bài.

### BƯỚC 2: CHẠY THỬ NGHIỆM TRÊN MÁY TÍNH CÁ NHÂN (LOCAL)
1. Tải thư mục mã nguồn về máy tính, mở terminal/cmd tại thư mục dự án.
2. Sao chép file `.env.example` thành `.env` và điền Project ID của Sanity:
   ```bash
   PUBLIC_SANITY_PROJECT_ID=abc123xyz
   PUBLIC_SANITY_DATASET=production
   ```
3. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
4. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
5. Mở trình duyệt truy cập: `http://localhost:4321` để xem giao diện web.

### BƯỚC 3: ĐƯA LÊN GITHUB & DEPLOY LÊN VERCEL (HOÀN TOÀN MIỄN PHÍ)
1. Tạo một Repository mới trên GitHub (ví dụ: `dulich-ocop-dautien`) và đẩy toàn bộ mã nguồn lên.
2. Truy cập [https://vercel.com](https://vercel.com), đăng nhập bằng tài khoản GitHub.
3. Bấm **Add New** -> **Project** -> Chọn repository `dulich-ocop-dautien`.
4. Trong phần **Environment Variables**, thêm biến:
   - Key: `PUBLIC_SANITY_PROJECT_ID`
   - Value: *(Điền Project ID lấy ở Bước 1)*...
5. Bấm nút **Deploy**. Trong vòng 1 phút, Vercel sẽ tự động build và cấp cho anh một đường link website chính thức dạng: `https://dulich-ocop-dautien.vercel.app` với chứng chỉ bảo mật SSL HTTPS miễn phí.

### BƯỚC 4: THIẾT LẬP TỰ ĐỘNG CẬP NHẬT KHI ĐĂNG BÀI (WEBHOOK)
Để mỗi khi cán bộ ấn **Publish** trên Sanity, website trên Vercel tự động build lại:
1. Trên Vercel: Vào **Settings** của dự án -> **Git** -> Cuộn xuống mục **Deploy Hooks** -> Tạo một Hook mới tên `Sanity Update` -> Sao chép URL Webhook được cấp.,
2. Trên Sanity Management Dashboard: Vào dự án -> **API** -> **Webhooks** -> Bấm **Create Webhook**:
   - URL: Dán URL Deploy Hook của Vercel vừa sao chép.
   - Dataset: `production`
   - Trigger on: `Create`, `Update`, `Delete`.
   - Filter: `_type in ["touristSpot", "ocopProduct", "post"]`
3. Bấm **Save**. Từ nay, mỗi khi cán bộ cập nhật bài viết hoặc giá nông sản, website sẽ tự động cập nhật trong vòng 30 giây!
