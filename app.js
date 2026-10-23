// Dữ liệu cây chuyên mục
const defaultCategories = {
  "menu": [
    { "id": "home", "title": "Trang chủ", "url": "https://dantri.com.vn/", "type": "home" },
    { 
      "id": "the-gioi", 
      "title": "Thế giới", 
      "url": "https://dantri.com.vn/the-gioi.htm", 
      "type": "category", 
      "children": [
        { "id": "quan-su", "title": "Quân sự", "url": "https://dantri.com.vn/the-gioi/quan-su.htm" },
        { "id": "phan-tich", "title": "Phân tích - Bình luận", "url": "https://dantri.com.vn/the-gioi/phan-tich-binh-luan.htm" },
        { "id": "the-gioi-do-day", "title": "Thế giới đó đây", "url": "https://dantri.com.vn/the-gioi/the-gioi-do-day.htm" },
        { "id": "kieu-bao", "title": "Kiều bào", "url": "https://dantri.com.vn/the-gioi/kieu-bao.htm" }
      ]
    },
    { 
      "id": "thoi-su", 
      "title": "Thời sự", 
      "url": "https://dantri.com.vn/thoi-su.htm", 
      "type": "category", 
      "children": [
        { "id": "chinh-tri", "title": "Chính trị", "url": "https://dantri.com.vn/thoi-su/chinh-tri.htm" },
        { "id": "giao-thong", "title": "Giao thông", "url": "https://dantri.com.vn/thoi-su/giao-thong.htm" },
        { "id": "moi-truong", "title": "Môi trường", "url": "https://dantri.com.vn/thoi-su/moi-truong.htm" },
        { "id": "nong-tren-mang", "title": "Nóng trên mạng", "url": "https://dantri.com.vn/thoi-su/nong-tren-mang.htm" }
      ]
    },
    { "id": "bat-dong-san", "title": "Bất động sản", "url": "https://dantri.com.vn/bat-dong-san.htm", "type": "category" }
  ]
};

// Dữ liệu mẫu bài viết phong phú cho mọi chuyên mục
const samplePosts = [
  // ================= THỜI SỰ & CÁC CHUYÊN MỤC CON =================
  {
    id: "dtri-20260928201",
    title: "Quốc hội thảo luận các dự án luật quan trọng trong kỳ họp chuyên đề",
    slug: "quoc-hoi-thao-luan-cac-du-an-luat-quan-trong",
    excerpt: "Các đại biểu tập trung đóng góp ý kiến hoàn thiện hành lang pháp lý thúc đẩy phát triển kinh tế số.",
    content: "Kỳ họp diễn ra với tinh thần khẩn trương, dân chủ và trách nhiệm cao trước cử tri cả nước.",
    author: "Trọng Hải",
    category: "Thời sự",
    publishedAt: "2026-09-28 09:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su.htm"
  },
  {
    id: "dtri-20260928202",
    title: "Đẩy mạnh triển khai các nghị quyết của Đảng vào cuộc sống",
    slug: "dua-nghi-quyet-cua-dang-vao-cuoc-song",
    excerpt: "Các cấp ủy đảng từ trung ương đến địa phương đang quyết liệt đưa nghị quyết đi vào thực tiễn đời sống.",
    content: "Việc quán triệt và thực hiện nghiêm túc các nghị quyết giúp tạo chuyển biến mạnh mẽ trong phát triển kinh tế - xã hội.",
    author: "Văn Hưng",
    category: "Chính trị",
    publishedAt: "2026-09-28 07:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri.htm"
  },
  {
    id: "dtri-20260928203",
    title: "Tăng cường công tác chuẩn bị bầu cử đại biểu quốc hội khóa mới",
    slug: "bau-cu-dai-bieu-quoc-hoi",
    excerpt: "Ủy ban Thường vụ Quốc hội yêu cầu rà soát kỹ lưỡng các khâu chuẩn bị để ngày hội bầu cử diễn ra thành công.",
    content: "Công tác hiệp thương, giới thiệu người ứng cử được thực hiện đúng luật, dân chủ và minh bạch.",
    author: "Trọng Hải",
    category: "Chính trị",
    publishedAt: "2026-09-27 10:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri.htm"
  },
  {
    id: "dtri-20260928204",
    title: "Chương trình 'Học tập Bác' lan tỏa sâu rộng trong thế hệ trẻ",
    slug: "hoc-tap-bac",
    excerpt: "Nhiều mô hình hay, cách làm sáng tạo trong việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
    content: "Đoàn thanh niên các cấp tiếp tục duy trì các phong trào hành động cách mạng thiết thực.",
    author: "Hồng Vân",
    category: "Chính trị",
    publishedAt: "2026-09-26 14:15",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri.htm"
  },
  {
    id: "dtri-20260928205",
    title: "Hoàn thiện hệ thống giao thông vành đai kết nối vùng kinh tế trọng điểm",
    slug: "hoan-thien-he-thong-giao-thong-vanh-dai",
    excerpt: "Công tác thi công các tuyến đường vành đai đang được các nhà thầu đẩy nhanh tiến độ ngày đêm.",
    content: "Khi hoàn thành, các tuyến đường này sẽ giải quyết dứt điểm tình trạng ùn tắc giao thông nội đô.",
    author: "Văn Hưng",
    category: "Giao thông",
    publishedAt: "2026-09-27 14:10",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/giao-thong.htm"
  },
  {
    id: "dtri-20260928206",
    title: "Ứng dụng công nghệ thông minh trong quản lý điều tiết giao thông đô thị",
    slug: "ung-dung-cong-nghe-trong-quan-ly-giao-thong",
    excerpt: "Hệ thống camera AI phạt nguội và đèn tín hiệu thông minh giúp tối ưu hóa luồng phương tiện giờ cao điểm.",
    content: "Giải pháp công nghệ đang góp phần nâng cao ý thức chấp hành luật lệ giao thông.",
    author: "Văn Hưng",
    category: "Giao thông",
    publishedAt: "2026-09-23 11:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/giao-thong.htm"
  },
  {
    id: "dtri-20260928207",
    title: "Triển khai các biện pháp cấp bách ứng phó với biến đổi khí hậu ven biển",
    slug: "trien-khai-bien-phap-ung-pho-bien-doi-khi-hau",
    excerpt: "Bộ Tài nguyên và Môi trường phối hợp cùng các địa phương xây dựng đê kè kiên cố chống sạt lở.",
    content: "Đời sống và sinh kế lâu dài của người dân vùng ven biển luôn là ưu tiên hàng đầu.",
    author: "Thanh Mai",
    category: "Môi trường",
    publishedAt: "2026-09-26 10:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/moi-truong.htm"
  },
  {
    id: "dtri-20260928208",
    title: "Hành động thiết thực bảo vệ nguồn nước sạch dòng sông lớn",
    slug: "hanh-dong-thiet-thuc-bao-ve-nguon-nuoc-sach",
    excerpt: "Các chiến dịch ra quân làm sạch môi trường nước thu hút hàng nghìn đoàn viên thanh niên.",
    content: "Ý thức bảo vệ môi trường sống đang ngày càng chuyển biến thành hành động cụ thể.",
    author: "Thanh Mai",
    category: "Môi trường",
    publishedAt: "2026-09-22 15:45",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/moi-truong.htm"
  },
  {
    id: "dtri-20260928209",
    title: "Cộng đồng mạng sôi nổi chia sẻ câu chuyện đẹp về nghĩa cử mùa bão lũ",
    slug: "cong-dong-mang-chia-se-cau-chuyen-dep",
    excerpt: "Những hình ảnh ấm lòng về sự sẻ chia, đùm bọc lẫn nhau giữa hoạn nạn lan tỏa mạnh mẽ.",
    content: "Sức mạnh đoàn kết dân tộc tiếp tục tỏa sáng trong những thời điểm khó khăn thử thách.",
    author: "Hồng Vân",
    category: "Nóng trên mạng",
    publishedAt: "2026-09-25 16:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang.htm"
  },
  {
    id: "dtri-20260928210",
    title: "Lan tỏa những tấm gương sáng người tốt việc tốt trong đời sống",
    slug: "lan-toa-nhung-tam-guong-sang",
    excerpt: "Buổi tuyên dương các điển hình tiên tiến vừa được tổ chức trang trọng nhằm tôn vinh nghĩa cử cao đẹp.",
    content: "Những câu chuyện nhân văn tiếp thêm năng lượng tích cực cho xã hội ngày càng văn minh.",
    author: "Hồng Vân",
    category: "Nóng trên mạng",
    publishedAt: "2026-09-21 09:15",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang.htm"
  },

  // ================= THẾ GIỚI & CÁC CHUYÊN MỤC CON =================
  {
    id: "dtri-20260928101",
    title: "Căn cứ quân sự chiến lược tại Thái Bình Dương được nâng cấp lớn",
    slug: "can-cu-quan-su-chien-luoc-tai-thai-binh-duong",
    excerpt: "Quân đội nước này vừa hoàn thành giai đoạn đầu của dự án mở rộng cơ sở hạ tầng phòng thủ.",
    content: "Các chuyên gia phân tích quân sự đánh giá động thái này nhằm củng cố năng lực răn đe.",
    author: "Hải Nam",
    category: "Quân sự",
    publishedAt: "2026-09-28 08:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/quan-su.htm"
  },
  {
    id: "dtri-20260928102",
    title: "Thế hệ tiêm kích mới thử nghiệm thành công tính năng tác chiến điện tử",
    slug: "the-he-tiem-kich-moi-thu-nghiem-thanh-cong",
    excerpt: "Không quân các cường quốc đang đẩy nhanh việc trang bị dòng máy bay chiến đấu thế hệ mới.",
    content: "Khả năng tàng hình và kết hợp mạng lưới dữ liệu thời gian thực là cốt lõi.",
    author: "Hải Nam",
    category: "Quân sự",
    publishedAt: "2026-09-22 09:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4ea16d66c?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/quan-su.htm"
  },
  {
    id: "dtri-20260928103",
    title: "Hội nghị thượng đỉnh kinh tế toàn cầu bàn về chuỗi cung ứng tương lai",
    slug: "hoi-nghi-thuong-dinh-kinh-te-toan-cau",
    excerpt: "Các nhà lãnh đạo kinh tế thế giới nhóm họp tại châu Âu thảo luận giải pháp chống đứt gãy.",
    content: "Thách thức về năng lượng và biến động địa chính trị đặt ra yêu cầu cấp thiết về hợp tác.",
    author: "Bùi Mai",
    category: "Phân tích - Bình luận",
    publishedAt: "2026-09-27 11:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/phan-tich-binh-luan.htm"
  },
  {
    id: "dtri-20260928104",
    title: "Công nghệ AI tạo sinh thay đổi bức tranh giáo dục đại học quốc tế",
    slug: "cong-nghe-ai-tao-sinh-thay-doi-giao-duc-dai-hoc",
    excerpt: "Các trường đại học hàng đầu thế giới đang tích hợp AI vào chương trình giảng dạy.",
    content: "Sự thay đổi này đòi hỏi phương pháp sư phạm cần thích ứng để phát huy tư duy phản biện.",
    author: "John Smith",
    category: "Phân tích - Bình luận",
    publishedAt: "2026-09-24 10:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/phan-tich-binh-luan.htm"
  },
  {
    id: "dtri-20260928105",
    title: "Khám phá ngôi làng cổ tích biệt lập giữa dãy Alps Thụy Sĩ",
    slug: "kham-pha-ngoi-lang-co-tich-giua-day-alps",
    excerpt: "Ngôi làng nhỏ quanh năm mây phủ thu hút du khách yêu thích trải nghiệm thiên nhiên nguyên sơ.",
    content: "Nơi đây duy trì lối sống truyền thống và hạn chế tối đa phương tiện cơ giới.",
    author: "Thùy Dương",
    category: "Thế giới đó đây",
    publishedAt: "2026-09-26 15:40",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day.htm"
  },
  {
    id: "dtri-20260928106",
    title: "Phát hiện loài sinh vật biển mới ở độ sâu hàng nghìn mét đại dương",
    slug: "phat-hien-loai-sinh-vat-bien-moi",
    excerpt: "Đoàn thám hiểm đại dương công bố hình ảnh về các loài sinh vật độc đáo chưa từng ghi nhận.",
    content: "Phát hiện này mở rộng hiểu biết của khoa học về hệ sinh thái dưới đáy đại dương.",
    author: "Ngọc Lan",
    category: "Thế giới đó đây",
    publishedAt: "2026-09-23 12:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day.htm"
  },
  {
    id: "dtri-20260928107",
    title: "Cộng đồng kiều bào tại Nhật Bản hướng về quê hương với nhiều hoạt động ý nghĩa",
    slug: "cong-dong-kieu-bao-tai-nhat-ban",
    excerpt: "Hội sinh viên và kiều bào Việt Nam tại Tokyo tổ chức chương trình gây quỹ ủng hộ.",
    content: "Tinh thần tương thân tương ái luôn được phát huy mạnh mẽ trong cộng đồng người Việt.",
    author: "Đức Anh",
    category: "Kiều bào",
    publishedAt: "2026-09-25 18:10",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/kieu-bao.htm"
  },
  {
    id: "dtri-20260928108",
    title: "Kiều bào tại châu Âu thành lập mạng lưới kết nối doanh nhân trẻ",
    slug: "kieu-bao-tai-chau-au-thanh-lap-mang-luoi",
    excerpt: "Sự kiện kết nối các doanh nghiệp startup của người Việt tại Pháp, Đức, và Séc.",
    content: "Mạng lưới sẽ là cầu nối vững chắc đưa hàng hóa Việt Nam vươn xa tại châu Âu.",
    author: "Đức Anh",
    category: "Kiều bào",
    publishedAt: "2026-09-21 14:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/kieu-bao.htm"
  },

  // ================= BẤT ĐỘNG SẢN =================
  {
    id: "dtri-20260928122246655",
    title: "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    slug: "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    excerpt: "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt.",
    content: "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng trong việc phát triển mạng lưới vận tải công cộng và giảm ùn tắc đô thị.",
    author: "Văn Hưng",
    category: "Bất động sản",
    publishedAt: "2026-09-28 12:22",
    source: "dantri.com.vn",
    imageUrl: "https://cdnphoto.dantri.com.vn/Ur-sSuXRZE7M3hpXU7cD9cM7RCM=/thumb_w/1020/2026/09/28/cat-linh-1749476352928-1790572938865.jpg",
    url: "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm"
  },
  {
    id: "dtri-20260928001",
    title: "Giá chung cư nội đô tiếp tục thiết lập mặt bằng giá mới trong quý III",
    slug: "gia-chung-cu-noi-do-tiep-tuc-thiet-lap-mat-bang-gia-moi",
    excerpt: "Thị trường căn hộ chung cư tại Hà Nội và TPHCM ghi nhận mức tăng trưởng giá mạnh mẽ.",
    content: "Báo cáo thị trường bất động sản quý III cho thấy giá bán chung cư sơ cấp và thứ cấp vẫn giữ đà tăng ổn định.",
    author: "Thu Hoài",
    category: "Bất động sản",
    publishedAt: "2026-09-27 10:15",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san.htm"
  },
  {
    id: "dtri-20260928002",
    title: "Đất nền vùng ven Hà Nội: Thanh khoản chậm lại, nhà đầu tư thận trọng",
    slug: "dat-nen-vung-ven-ha-noi-thanh-khoan-cham-lai",
    excerpt: "Sau giai đoạn sốt nóng, thị trường đất nền ven đô chứng kiến lượng giao dịch chững lại.",
    content: "Khảo sát tại các khu vực Hoài Đức, Đan Phượng cho thấy giá đất nền đi ngang.",
    author: "Gia Linh",
    category: "Bất động sản",
    publishedAt: "2026-09-26 09:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san.htm"
  }
];

// Khởi tạo và ghi đè LocalStorage để cập nhật dữ liệu mới tự động
document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('news_categories', JSON.stringify(defaultCategories));
  localStorage.setItem('news_posts', JSON.stringify(samplePosts));

  renderNavbar();
  checkCurrentUser();
  
  if (document.getElementById('category-page')) {
    loadCategoryPosts('all');
  }
});

// Render Navigation Bar từ LocalStorage
function renderNavbar() {
  const categoriesData = JSON.parse(localStorage.getItem('news_categories'));
  const menuContainer = document.getElementById('menu-tree');
  if (!menuContainer) return;

  menuContainer.innerHTML = '';
  
  categoriesData.menu.forEach(item => {
    const li = document.createElement('li');
    
    if (item.children && item.children.length > 0) {
      let subMenuHtml = `<a href="#" onclick="loadCategoryPosts('${item.title}')">${item.title} <i class="fa-solid fa-chevron-down"></i></a><ul class="dropdown">`;
      item.children.forEach(child => {
        subMenuHtml += `<li><a href="#" onclick="loadCategoryPosts('${child.title}')">${child.title}</a></li>`;
      });
      subMenuHtml += `</ul>`;
      li.innerHTML = subMenuHtml;
    } else {
      li.innerHTML = `<a href="#" onclick="loadCategoryPosts('${item.id === 'home' ? 'all' : item.title}')">${item.title}</a>`;
    }
    menuContainer.appendChild(li);
  });
}

function getPostsFromStorage() {
  return JSON.parse(localStorage.getItem('news_posts')) || [];
}

// Lọc bài viết theo chuyên mục
function loadCategoryPosts(categoryName) {
  showCategoryView();
  const allPosts = getPostsFromStorage();
  const titleEl = document.getElementById('category-title');
  
  let filteredPosts = allPosts;
  if (categoryName !== 'all') {
    titleEl.innerText = `Chuyên mục: ${categoryName}`;
    filteredPosts = allPosts.filter(p => p.category && p.category.toLowerCase().includes(categoryName.toLowerCase()));
  } else {
    titleEl.innerText = "Tin Mới Nhất";
  }

  // Sắp xếp bài viết giảm dần theo thời gian (mới nhất -> cũ nhất)
  filteredPosts.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

  renderArticlesLayout(filteredPosts);
}

// Render Layout Top Section (1 bài lớn + 2 bài nhỏ) và danh sách dọc
function renderArticlesLayout(posts) {
  const topSection = document.getElementById('top-section');
  const latestList = document.getElementById('latest-list');
  topSection.innerHTML = '';
  latestList.innerHTML = '';

  if (posts.length === 0) {
    topSection.innerHTML = '<p style="padding: 20px;">Chưa có bài viết nào trong chuyên mục này.</p>';
    return;
  }

  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);

  let featuredHtml = `
    <div class="featured-post" onclick="showDetail('${featured.id}')">
      <img src="${featured.imageUrl}" onerror="this.src='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80'" alt="${featured.title}">
      <div class="info">
        <h3>${featured.title}</h3>
        <p>${featured.excerpt}</p>
      </div>
    </div>
  `;

  let sideHtml = `<div class="side-posts">`;
  if (sidePosts.length > 0) {
    sidePosts.forEach(post => {
      sideHtml += `
        <div class="side-post" onclick="showDetail('${post.id}')">
          <img src="${post.imageUrl}" onerror="this.src='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=300&q=80'" alt="${post.title}">
          <h4>${post.title}</h4>
        </div>
      `;
    });
  } else {
    sideHtml += `<div style="background:white; padding:20px; border-radius:8px;"><p style="color:#666;">Đang cập nhật thêm bài viết phụ...</p></div>`;
  }
  sideHtml += `</div>`;

  topSection.innerHTML = featuredHtml + sideHtml;

  const remainingPosts = posts.slice(3);
  remainingPosts.forEach(post => {
    const item = document.createElement('div');
    item.className = 'article-item';
    item.onclick = () => showDetail(post.id);
    item.innerHTML = `
      <img src="${post.imageUrl}" onerror="this.src='https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=200&q=80'" alt="${post.title}">
      <div class="content-right">
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <small><i class="fa-regular fa-clock"></i> ${post.publishedAt || ''}</small>
      </div>
    `;
    latestList.appendChild(item);
  });
}

// Hiển thị chi tiết bài viết
function showDetail(postId) {
  const posts = getPostsFromStorage();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  document.getElementById('category-page').classList.add('hidden');
  document.getElementById('detail-page').classList.remove('hidden');

  document.getElementById('detail-category').innerText = post.category || 'Tin tức';
  document.getElementById('detail-title').innerText = post.title;
  document.getElementById('detail-author').innerText = post.author || 'Tổng hợp';
  document.getElementById('detail-time').innerText = post.publishedAt || '';
  document.getElementById('detail-excerpt').innerText = post.excerpt || '';
  
  const imgContainer = document.getElementById('detail-image-container');
  if (post.imageUrl) {
    imgContainer.innerHTML = `<img src="${post.imageUrl}" onerror="this.style.display='none'" alt="${post.title}">`;
  } else {
    imgContainer.innerHTML = '';
  }

  document.getElementById('detail-content').innerText = post.content || '';
  const sourceLink = document.getElementById('detail-source-link');
  sourceLink.innerText = post.source || post.url;
  sourceLink.href = post.url;
}

function showCategoryView() {
  document.getElementById('category-page').classList.remove('hidden');
  document.getElementById('detail-page').classList.add('hidden');
}

// Xử lý Crawler dữ liệu bài viết
async function handleCrawl() {
  const urlInput = document.getElementById('crawl-url').value.trim();
  const statusMsg = document.getElementById('status-message');
  const jsonBox = document.getElementById('json-result-box');
  const jsonOutput = document.getElementById('json-output');

  if (!urlInput) {
    statusMsg.innerText = 'Vui lòng nhập URL bài viết Dân trí!';
    statusMsg.style.color = 'red';
    return;
  }

  statusMsg.innerText = 'Đang crawl dữ liệu... Vui lòng đợi trong giây lát.';
  statusMsg.style.color = 'blue';

  try {
    const postData = await crawlNewsArticle(urlInput);

    const posts = getPostsFromStorage();
    const updatedPosts = posts.filter(p => p.id !== postData.id);
    updatedPosts.unshift(postData);
    localStorage.setItem('news_posts', JSON.stringify(updatedPosts));

    statusMsg.innerText = 'Crawl thành công và đã lưu vào LocalStorage!';
    statusMsg.style.color = 'green';

    jsonOutput.innerText = JSON.stringify(postData, null, 2);
    jsonBox.classList.remove('hidden');
  } catch (err) {
    statusMsg.innerText = 'Đã xảy ra lỗi khi crawl bài viết. Kiểm tra lại đường dẫn!';
    statusMsg.style.color = 'red';
  }
}

// ================= HỆ THỐNG XỬ LÝ ĐĂNG NHẬP / ĐĂNG KÝ =================
function openAuthModal(formType) {
  document.getElementById('auth-modal').classList.remove('hidden');
  switchForm(formType);
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
  document.getElementById('login-error').innerText = '';
  document.getElementById('reg-error').innerText = '';
}

function switchForm(formType) {
  if (formType === 'login') {
    document.getElementById('login-form-box').classList.remove('hidden');
    document.getElementById('register-form-box').classList.add('hidden');
  } else {
    document.getElementById('login-form-box').classList.add('hidden');
    document.getElementById('register-form-box').classList.remove('hidden');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const fullname = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();
  const regError = document.getElementById('reg-error');

  let users = JSON.parse(localStorage.getItem('users_list')) || [];

  if (users.some(user => user.username === username)) {
    regError.innerText = 'Tên đăng nhập này đã được đăng ký!';
    return;
  }

  const newUser = { fullname, username, password };
  users.push(newUser);
  localStorage.setItem('users_list', JSON.stringify(users));

  alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');
  switchForm('login');
}

function handleLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();
  const loginError = document.getElementById('login-error');

  let users = JSON.parse(localStorage.getItem('users_list')) || [];
  const foundUser = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (foundUser) {
    localStorage.setItem('current_user', JSON.stringify(foundUser));
    closeAuthModal();
    checkCurrentUser();
    alert(`Xin chào, ${foundUser.fullname}! Bạn đã đăng nhập thành công.`);
  } else {
    loginError.innerText = 'Sai tên đăng nhập hoặc mật khẩu!';
  }
}

function checkCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  const accountBox = document.getElementById('user-account-box');
  if (!accountBox) return;

  if (currentUser) {
    accountBox.innerHTML = `
      <div class="user-welcome-info">
        <i class="fa-solid fa-circle-user"></i> <span>${currentUser.fullname}</span>
        <button class="btn-logout" onclick="handleLogout()"><i class="fa-solid fa-right-from-bracket"></i> Thoát</button>
      </div>
    `;
  } else {
    accountBox.innerHTML = `
      <button class="btn-auth" onclick="openAuthModal('login')"><i class="fa-solid fa-user"></i> Đăng nhập</button>
      <button class="btn-auth btn-signup" onclick="openAuthModal('register')">Đăng ký</button>
    `;
  }
}

function handleLogout() {
  if (confirm('Bạn có chắc chắn muốn đăng xuất tài khoản?')) {
    localStorage.removeItem('current_user');
    checkCurrentUser();
  }
}
