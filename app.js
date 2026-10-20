// Dữ liệu chuyên mục mặc định
const defaultCategories = {
  "menu": [
    { "id": "home", "title": "Trang chủ", "url": "https://dantri.com.vn/", "type": "home" },
    { "id": "the-gioi", "title": "Thế giới", "url": "https://dantri.com.vn/the-gioi.htm", "type": "category", "children": [
      { "id": "quan-su", "title": "Quân sự", "url": "https://dantri.com.vn/the-gioi/quan-su.htm" },
      { "id": "phan-tich", "title": "Phân tích - Bình luận", "url": "https://dantri.com.vn/the-gioi/phan-tich-binh-luan.htm" }
    ]},
    { "id": "thoi-su", "title": "Thời sự", "url": "https://dantri.com.vn/thoi-su.htm", "type": "category", "children": [
      { "id": "chinh-tri", "title": "Chính trị", "url": "https://dantri.com.vn/thoi-su/chinh-tri.htm" },
      { "id": "giao-thong", "title": "Giao thông", "url": "https://dantri.com.vn/thoi-su/giao-thong.htm" }
    ]},
    { "id": "bat-dong-san", "title": "Bất động sản", "url": "https://dantri.com.vn/bat-dong-san.htm", "type": "category" }
  ]
};

// Dữ liệu mẫu ban đầu: Đảm bảo mỗi chuyên mục có ít nhất 10 bài viết để test Layout Top Section & List dọc
const samplePosts = [
  // --- CHUYÊN MỤC: Bất động sản (Hơn 10 bài) ---
  {
    id: "dtri-20260928122246655",
    title: "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    slug: "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    excerpt: "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
    content: "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm.",
    author: "Văn Hưng",
    category: "Bất động sản",
    publishedAt: "2026-09-28 12:22",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f8?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm"
  },
  {
    id: "dtri-20260928001",
    title: "Giá chung cư nội đô tiếp tục thiết lập mặt bằng giá mới trong quý III",
    slug: "gia-chung-cu-noi-do-tiep-tuc-thiet-lap-mat-bang-gia-moi",
    excerpt: "Thị trường căn hộ chung cư tại Hà Nội và TPHCM ghi nhận mức tăng trưởng giá mạnh mẽ, nguồn cung căn hộ giá rẻ tiếp tục khan hiếm.",
    content: "Báo cáo thị trường bất động sản quý III cho thấy giá bán chung cư sơ cấp và thứ cấp tại khu vực nội đô vẫn giữ đà tăng ổn định, gây áp lực lớn cho người mua nhà ở thực.",
    author: "Thu Hoài",
    category: "Bất động sản",
    publishedAt: "2026-09-27 10:15",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/gia-chung-cu-noi-do.htm"
  },
  {
    id: "dtri-20260928002",
    title: "Đất nền vùng ven Hà Nội: Thanh khoản chậm lại, nhà đầu tư thận trọng",
    slug: "dat-nen-vung-ven-ha-noi-thanh-khoan-cham-lai",
    excerpt: "Sau giai đoạn sốt nóng cục bộ, thị trường đất nền tại các huyện ven đô đang chứng kiến lượng giao dịch chững lại do nhà đầu tư dè dặt dòng tiền.",
    content: "Khảo sát tại các khu vực Hoài Đức, Đan Phượng, Thạch Thất cho thấy giá đất nền đi ngang, lượng khách hỏi mua giảm đáng kể so với đầu năm.",
    author: "Gia Linh",
    category: "Bất động sản",
    publishedAt: "2026-09-26 09:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/dat-nen-vung-ven.htm"
  },
  {
    id: "dtri-20260928003",
    title: "Gỡ vướng pháp lý cho hàng loạt dự án bất động sản nghỉ dưỡng",
    slug: "go-vuong-phap-ly-cho-hang-loat-du-an-bat-dong-san-nghi-duong",
    excerpt: "Nhiều địa phương đang rà soát và tháo gỡ các vướng mắc về đất đai, quy hoạch để khơi thông nguồn vốn cho phân khúc bất động sản du lịch nghỉ dưỡng.",
    content: "Việc hoàn thiện khung pháp lý được kỳ vọng sẽ vực dậy niềm tin của nhà đầu tư sau thời gian dài trầm lắng.",
    author: "Minh Tuấn",
    category: "Bất động sản",
    publishedAt: "2026-09-25 14:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/go-vuong-phap-ly.htm"
  },
  {
    id: "dtri-20260928004",
    title: "Xu hướng thiết kế căn hộ thông minh tích hợp công nghệ xanh",
    slug: "xu-huong-thiet-ke-can-ho-thong-minh-tich-hop-cong-nghe-xanh",
    excerpt: "Các chủ đầu tư lớn đang chuyển hướng sang mô hình căn hộ thông minh kết hợp vật liệu xây dựng thân thiện với môi trường.",
    content: "Không gian sống xanh và ứng dụng IoT quản lý năng lượng trong căn hộ đang là tiêu chí hàng đầu của người mua nhà trẻ tuổi.",
    author: "Hoàng Nam",
    category: "Bất động sản",
    publishedAt: "2026-09-24 16:45",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/can-ho-thong-minh.htm"
  },
  {
    id: "dtri-20260928005",
    title: "Thị trường cho thuê văn phòng tại trung tâm chịu áp lực cạnh tranh lớn",
    slug: "thi-trường-cho-thue-van-phong-tai-trung-tam-chiu-ap-luc",
    excerpt: "Nguồn cung văn phòng hạng A và B gia tăng khiến các chủ tòa nhà phải tung ra nhiều chính sách ưu đãi hấp dẫn khách thuê.",
    content: "Sự dịch chuyển dòng khách thuê ra các khu vực lân cận trung tâm cũng là xu thế nổi bật trong năm nay.",
    author: "Lan Phương",
    category: "Bất động sản",
    publishedAt: "2026-09-23 08:50",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/van-phong-cho-thue.htm"
  },
  {
    id: "dtri-20260928006",
    title: "Đẩy nhanh tiến độ các dự án nhà ở xã hội cho công nhân khu công nghiệp",
    slug: "day-nhanh-tien-do-cac-du-an-nha-o-xa-hoi",
    excerpt: "Chính quyền các cấp đang quyết liệt thúc đẩy thủ tục đầu tư để sớm hoàn thành hàng nghìn căn nhà ở xã hội.",
    content: "Chính sách tín dụng ưu đãi đang là đòn bẩy quan trọng giúp người lao động thu nhập thấp tiếp cận nhà ở dễ dàng hơn.",
    author: "Đình Trọng",
    category: "Bất động sản",
    publishedAt: "2026-09-22 11:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/nha-o-xa-hoi.htm"
  },
  {
    id: "dtri-20260928007",
    title: "Sức hút từ các đại đô thị thông minh phía Đông thủ đô",
    slug: "suc-hut-tu-cac-dai-do-thi-thong-minh-phia-dong-thu-do",
    excerpt: "Hạ tầng giao thông kết nối đồng bộ giúp các đại đô thị khu vực phía Đông thu hút lượng lớn cư dân về sinh sống.",
    content: "Mô hình 'all-in-one' với hệ sinh thái tiện ích khép kín đang tạo nên sức hút mạnh mẽ trên thị trường nhà ở.",
    author: "Thanh Hằng",
    category: "Bất động sản",
    publishedAt: "2026-09-21 15:10",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/do-thi-thong-minh.htm"
  },
  {
    id: "dtri-20260928008",
    title: "Biệt thự triệu đô ven sông: Phân khúc dành riêng cho giới thượng lưu",
    slug: "biet-thu-trieu-do-ven-song-phan-khuc-thuong-luu",
    excerpt: "Dù nguồn cung hạn chế, các dự án biệt thự sinh thái ven sông vẫn duy trì mức hấp thụ tốt nhờ giá trị độc bản.",
    content: "Yếu tố phong thủy kết hợp không gian nghỉ dưỡng biệt lập là điểm cộng lớn của dòng sản phẩm này.",
    author: "Quốc Bảo",
    category: "Bất động sản",
    publishedAt: "2026-09-20 13:40",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/biet-thu-ven-song.htm"
  },
  {
    id: "dtri-20260928009",
    title: "Cẩn trọng với các chiêu trò lừa đảo mua bán đất nền 'ma'",
    slug: "can-trong-voi-cac-chieu-tro-lua-dao-mua-ban-dat-nen-ma",
    excerpt: "Cơ quan chức năng tiếp tục đưa ra cảnh báo về tình trạng rao bán các dự án đất nền chưa đủ điều kiện pháp lý trên mạng xã hội.",
    content: "Người mua cần kiểm tra kỹ thông tin quy hoạch tại cơ quan quản lý nhà nước trước khi xuống tiền đặt cọc.",
    author: "Hồng Nhung",
    category: "Bất động sản",
    publishedAt: "2026-09-19 09:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/canh-bao-lua-dao.htm"
  },

  // --- CHUYÊN MỤC: Thế giới (Hơn 10 bài) ---
  {
    id: "dtri-20260928101",
    title: "Căn cứ quân sự chiến lược tại Thái Bình Dương được nâng cấp lớn",
    slug: "can-cu-quan-su-chien-luoc-tai-thai-binh-duong",
    excerpt: "Quân đội nước này vừa hoàn thành giai đoạn đầu của dự án mở rộng cơ sở hạ tầng phòng thủ tầm xa.",
    content: "Các chuyên gia phân tích quân sự đánh giá động thái này nhằm củng cố năng lực răn đe và tuần tra hàng hải trong khu vực.",
    author: "Hải Nam",
    category: "Thế giới",
    publishedAt: "2026-09-28 08:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/quan-su/can-cu-chien-luoc.htm"
  },
  {
    id: "dtri-20260928102",
    title: "Hội nghị thượng đỉnh kinh tế toàn cầu bàn về chuỗi cung ứng tương lai",
    slug: "hoi-nghi-thuong-dinh-kinh-te-toan-cau",
    excerpt: "Các nhà lãnh đạo kinh tế thế giới nhóm họp tại châu Âu để thảo luận về các giải pháp chống đứt gãy chuỗi cung ứng công nghệ cao.",
    content: "Thách thức về năng lượng và biến động địa chính trị đặt ra yêu cầu cấp thiết về hợp tác đa phương.",
    author: "Bùi Mai",
    category: "Thế giới",
    publishedAt: "2026-09-27 11:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/phan-tich/hoi-nghi-kinh-te.htm"
  },
  {
    id: "dtri-20260928103",
    title: "Khám phá ngôi làng cổ tích biệt lập giữa dãy Alps Thụy Sĩ",
    slug: "kham-pha-ngoi-lang-co-tich-giua-day-alps",
    excerpt: "Ngôi làng nhỏ quanh năm mây phủ thu hút du khách yêu thích trải nghiệm thiên nhiên nguyên sơ và yên bình.",
    content: "Nơi đây duy trì lối sống truyền thống và hạn chế tối đa phương tiện giao thông động cơ nhằm bảo vệ môi trường.",
    author: "Thùy Dương",
    category: "Thế giới",
    publishedAt: "2026-09-26 15:40",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day/ngoi-lang-alps.htm"
  },
  {
    id: "dtri-20260928104",
    title: "Cộng đồng kiều bào tại Nhật Bản hướng về quê hương với nhiều hoạt động ý nghĩa",
    slug: "cong-dong-kieu-bao-tai-nhat-ban-huong-ve-que-huong",
    excerpt: "Hội sinh viên và kiều bào Việt Nam tại Tokyo vừa tổ chức chương trình gây quỹ hỗ trợ đồng bào vùng lũ lụt.",
    content: "Tinh thần tương thân tương ái luôn được phát huy mạnh mẽ trong cộng đồng người Việt Nam ở nước ngoài.",
    author: "Đức Anh",
    category: "Thế giới",
    publishedAt: "2026-09-25 18:10",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/kieu-bao/kieu-bao-nhat-ban.htm"
  },
  {
    id: "dtri-20260928105",
    title: "Công nghệ AI tạo sinh thay đổi bức tranh giáo dục đại học quốc tế",
    slug: "cong-nghe-ai-tao-sinh-thay-doi-giao-duc-dai-hoc",
    excerpt: "Các trường đại học hàng đầu thế giới đang tích hợp AI vào chương trình giảng dạy và đánh giá năng lực sinh viên.",
    content: "Sự thay đổi này đòi hỏi phương pháp sư phạm cần thích ứng để phát huy tư duy phản biện.",
    author: "John Smith",
    category: "Thế giới",
    publishedAt: "2026-09-24 10:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/phan-tich/ai-giao-duc.htm"
  },
  {
    id: "dtri-20260928106",
    title: "Phát hiện loài sinh vật biển mới ở độ sâu hàng nghìn mét",
    slug: "phat-hien-loai-sinh-vat-bien-moi-o-do-sau-nghin-met",
    excerpt: "Đoàn thám hiểm đại dương công bố hình ảnh về các loài sinh vật độc đáo chưa từng được ghi nhận trước đây.",
    content: "Phát hiện này mở rộng hiểu biết của khoa học về hệ sinh thái dưới đáy đại dương sâu thẳm.",
    author: "Ngọc Lan",
    category: "Thế giới",
    publishedAt: "2026-09-23 12:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day/sinh-vat-bien.htm"
  },
  {
    id: "dtri-20260928107",
    title: "Thế hệ tiêm kích mới thử nghiệm thành công tính năng tác chiến điện tử",
    slug: "the-he-tiem-kich-moi-thu-nghiem-thanh-cong",
    excerpt: "Không quân các cường quốc đang đẩy nhanh việc trang bị dòng máy bay chiến đấu thế hệ thứ sáu.",
    content: "Khả năng tàng hình và kết hợp mạng lưới dữ liệu thời gian thực là cốt lõi của thế hệ tiêm kích này.",
    author: "Hải Nam",
    category: "Thế giới",
    publishedAt: "2026-09-22 09:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1519074069444-1ba4ea16d66c?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/quan-su/tiem-kich-moi.htm"
  },
  {
    id: "dtri-20260928108",
    title: "Kiều bào tại châu Âu thành lập mạng lưới kết nối doanh nhân trẻ",
    slug: "kieu-bao-tai-chau-au-thanh-lap-mang-luoi-doanh-nhan",
    excerpt: "Sự kiện kết nối các doanh nghiệp startup của người Việt tại Pháp, Đức, và Séc nhằm thúc đẩy hợp tác thương mại.",
    content: "Mạng lưới sẽ là cầu nối vững chắc đưa hàng hóa Việt Nam vươn xa hơn tại thị trường châu Âu.",
    author: "Đức Anh",
    category: "Thế giới",
    publishedAt: "2026-09-21 14:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/kieu-bao/doanh-nhan-chau-au.htm"
  },
  {
    id: "dtri-20260928109",
    title: "Thành phố thông minh hàng đầu Bắc Âu áp dụng hoàn toàn xe điện công cộng",
    slug: "thanh-pho-thong-minh-bac-au-ap-dung-xe-dien",
    excerpt: "Hệ thống xe buýt và phà tại thủ đô các nước Bắc Âu đã chuyển đổi 100% sang sử dụng năng lượng sạch.",
    content: "Đây là bước tiến lớn trong lộ trình đạt mục tiêu phát thải ròng bằng 0 vào năm tới.",
    author: "Bùi Mai",
    category: "Thế giới",
    publishedAt: "2026-09-20 10:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day/xe-dien-bac-au.htm"
  },
  {
    id: "dtri-20260928110",
    title: "Xu hướng du lịch bền vững lên ngôi tại các quốc gia Đông Nam Á",
    slug: "xu-huong-du-lich-ben-vung-dong-nam-a",
    excerpt: "Du khách quốc tế ngày càng ưu tiên các tour trải nghiệm văn hóa địa phương kết hợp bảo vệ thiên nhiên.",
    content: "Mô hình du lịch cộng đồng đang mang lại sinh kế ổn định cho người dân bản địa.",
    author: "Thùy Dương",
    category: "Thế giới",
    publishedAt: "2026-09-19 15:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/the-gioi-do-day/du-lich-ben-vung.htm"
  },

  // --- CHUYÊN MỤC: Thời sự (Hơn 10 bài) ---
  {
    id: "dtri-20260928201",
    title: "Quốc hội thảo luận các dự án luật quan trọng trong kỳ họp chuyên đề",
    slug: "quoc-hoi-thao-luan-cac-du-an-luat-quan-trong",
    excerpt: "Các đại biểu tập trung đóng góp ý kiến hoàn thiện hành lang pháp lý thúc đẩy phát triển kinh tế số và đổi mới sáng tạo.",
    content: "Kỳ họp diễn ra với tinh thần khẩn trương, dân chủ và trách nhiệm cao trước cử tri cả nước.",
    author: "Trọng Hải",
    category: "Thời sự",
    publishedAt: "2026-09-28 09:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri/quoc-hoi-thao-luan.htm"
  },
  {
    id: "dtri-20260928202",
    title: "Hoàn thiện hệ thống giao thông vành đai kết nối các tỉnh vùng kinh tế trọng điểm",
    slug: "hoan-thien-he-thong-giao-thong-vanh-dai",
    excerpt: "Công tác thi công các tuyến đường vành đai đang được các nhà thầu đẩy nhanh tiến độ ngày đêm.",
    content: "Khi hoàn thành, các tuyến đường này sẽ giải quyết dứt điểm tình trạng ùn tắc giao thông nội đô.",
    author: "Văn Hưng",
    category: "Thời sự",
    publishedAt: "2026-09-27 14:10",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/giao-thong/duong-vanh-dai.htm"
  },
  {
    id: "dtri-20260928203",
    title: "Triển khai các biện pháp cấp bách ứng phó với biến đổi khí hậu ven biển",
    slug: "trien-khai-bien-phap-ung-pho-bien-doi-khi-hau",
    excerpt: "Bộ Tài nguyên và Môi trường phối hợp cùng các địa phương xây dựng đê kè kiên cố chống sạt lở bờ biển.",
    content: "Đời sống và sinh kế lâu dài của người dân vùng ven biển luôn là ưu tiên hàng đầu trong chiến lược quốc gia.",
    author: "Thanh Mai",
    category: "Thời sự",
    publishedAt: "2026-09-26 10:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/moi-truong/ung-pho-bien-doi-khi-hau.htm"
  },
  {
    id: "dtri-20260928204",
    title: "Cộng đồng mạng sôi nổi chia sẻ câu chuyện đẹp về nghĩa cử cao đẹp mùa bão lũ",
    slug: "cong-dong-mang-chia-se-cau-chuyen-dep-mua-bao-lu",
    excerpt: "Những hình ảnh ấm lòng về sự sẻ chia, đùm bọc lẫn nhau giữa hoạn nạn lan tỏa mạnh mẽ trên các nền tảng mạng xã hội.",
    content: "Sức mạnh đoàn kết dân tộc tiếp tục tỏa sáng trong những thời điểm khó khăn thử thách.",
    author: "Hồng Vân",
    category: "Thời sự",
    publishedAt: "2026-09-25 16:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang/nghia-cu-cao-dep.htm"
  },
  {
    id: "dtri-20260928205",
    title: "Đẩy mạnh cải cách thủ tục hành chính phục vụ người dân và doanh nghiệp",
    slug: "day-manh-cai-cach-thu-tuc-hanh-chinh",
    excerpt: "Các cơ quan nhà nước tiếp tục cắt giảm thời gian và chi phí tuân thủ thủ tục hành chính thông qua dịch vụ công trực tuyến.",
    content: "Chỉ số hài lòng của người dân đối với dịch vụ hành chính công ghi nhận mức tăng tích cực.",
    author: "Trọng Hải",
    category: "Thời sự",
    publishedAt: "2026-09-24 08:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri/cai-cach-hanh-chinh.htm"
  },
  {
    id: "dtri-20260928206",
    title: "Ứng dụng công nghệ thông minh trong quản lý điều tiết giao thông đô thị",
    slug: "ung-dung-cong-nghe-trong-quan-ly-giao-thong",
    excerpt: "Hệ thống camera AI phạt nguội và đèn tín hiệu thông minh giúp tối ưu hóa luồng phương tiện giờ cao điểm.",
    content: "Giải pháp công nghệ đang góp phần nâng cao ý thức chấp hành luật lệ giao thông của người dân.",
    author: "Văn Hưng",
    category: "Thời sự",
    publishedAt: "2026-09-23 11:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/giao-thong/giao-thong-thong-minh.htm"
  },
  {
    id: "dtri-20260928207",
    title: "Hành động thiết thực bảo vệ nguồn nước sạch dòng sông lớn",
    slug: "hanh-dong-thiet-thuc-bao-ve-nguon-nuoc-sach",
    excerpt: "Các chiến dịch ra quân làm sạch môi trường nước sông suối thu hút hàng nghìn đoàn viên thanh niên tham gia.",
    content: "Ý thức bảo vệ môi trường sống đang ngày càng chuyển biến thành hành động cụ thể trong cộng đồng.",
    author: "Thanh Mai",
    category: "Thời sự",
    publishedAt: "2026-09-22 15:45",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/moi-truong/bao-ve-nguon-nuoc.htm"
  },
  {
    id: "dtri-20260928208",
    title: "Lan tỏa những tấm gương sáng người tốt việc tốt trong đời sống",
    slug: "lan-toa-nhung-tam-guong-sang-nguoi-tot-viec-tot",
    excerpt: "Buổi tuyên dương các điển hình tiên tiến vừa được tổ chức trang trọng nhằm tôn vinh những hành động dũng cảm cứu người.",
    content: "Những câu chuyện nhân văn tiếp thêm năng lượng tích cực cho xã hội ngày càng văn minh hơn.",
    author: "Hồng Vân",
    category: "Thời sự",
    publishedAt: "2026-09-21 09:15",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang/tam-guong-sang.htm"
  },
  {
    id: "dtri-20260928209",
    title: "Phát triển nguồn nhân lực chất lượng cao phục vụ chuyển đổi số quốc gia",
    slug: "phat-trien-nguon-nhan-luc-chat-luong-cao",
    excerpt: "Các trường đại học và viện nghiên cứu ký kết hợp tác chiến lược đào tạo chuyên gia công nghệ thông tin.",
    content: "Đầu tư vào giáo dục công nghệ là nền tảng cốt lõi để bứt phá trong kỷ nguyên số.",
    author: "Trọng Hải",
    category: "Thời sự",
    publishedAt: "2026-09-20 16:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri/nhan-luc-so.htm"
  },
  {
    id: "dtri-20260928210",
    title: "Tăng cường kiểm tra an toàn thực phẩm dịp cao điểm cuối năm",
    slug: "tang-cuong-kiem-tra-an-toan-thuc-pham",
    excerpt: "Các đoàn kiểm tra liên ngành ra quân kiểm soát chặt chẽ nguồn gốc xuất xứ hàng hóa tiêu dùng thiết yếu.",
    content: "Đảm bảo sức khỏe cho người tiêu dùng là mục tiêu hàng đầu của lực lượng chức năng.",
    author: "Văn Hưng",
    category: "Thời sự",
    publishedAt: "2026-09-19 13:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/nong-tren-mang/an-toan-thuc-pham.htm"
  }
];

// Khởi tạo LocalStorage khi trang tải lần đầu
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('news_categories')) {
    localStorage.setItem('news_categories', JSON.stringify(defaultCategories));
  }
  if (!localStorage.getItem('news_posts')) {
    localStorage.setItem('news_posts', JSON.stringify(samplePosts));
  }

  renderNavbar();
  
  if (document.getElementById('category-page')) {
    loadCategoryPosts('all');
  }
});

// Render danh sách Navigation Bar từ LocalStorage
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
    // So khớp linh hoạt chuyên mục cha hoặc chuyên mục con
    filteredPosts = allPosts.filter(p => p.category && p.category.toLowerCase().includes(categoryName.toLowerCase()));
  } else {
    titleEl.innerText = "Tin Mới Nhất";
  }

  // Sắp xếp bài viết giảm dần theo thời gian (mới -> cũ)
  filteredPosts.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

  renderArticlesLayout(filteredPosts);
}

// Render Layout: Top Section (1 bài lớn bên trái + 2 bài nhỏ bên phải) và danh sách dọc còn lại
function renderArticlesLayout(posts) {
  const topSection = document.getElementById('top-section');
  const latestList = document.getElementById('latest-list');
  topSection.innerHTML = '';
  latestList.innerHTML = '';

  if (posts.length === 0) {
    topSection.innerHTML = '<p>Chưa có bài viết nổi bật trong chuyên mục này.</p>';
    latestList.innerHTML = '';
    return;
  }

  // 1. Render Top Section: Bắt buộc lấy 3 bài viết mới nhất (1 bài lớn + 2 bài nhỏ)
  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);

  let featuredHtml = `
    <div class="featured-post" onclick="showDetail('${featured.id}')">
      <img src="${featured.imageUrl || 'https://via.placeholder.com/600x400'}" alt="${featured.title}">
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
          <img src="${post.imageUrl || 'https://via.placeholder.com/300x200'}" alt="${post.title}">
          <h4>${post.title}</h4>
        </div>
      `;
    });
  } else {
    sideHtml += `<p style="padding: 10px; color: #666;">Đang cập nhật thêm bài viết nhỏ...</p>`;
  }
  sideHtml += `</div>`;

  topSection.innerHTML = featuredHtml + sideHtml;

  // 2. Render danh sách bài viết còn lại (Từ bài thứ 4 trở đi hiển thị dạng danh sách dọc)
  const remainingPosts = posts.slice(3);
  if (remainingPosts.length > 0) {
    remainingPosts.forEach(post => {
      const item = document.createElement('div');
      item.className = 'article-item';
      item.onclick = () => showDetail(post.id);
      item.innerHTML = `
        <img src="${post.imageUrl || 'https://via.placeholder.com/200x140'}" alt="${post.title}">
        <div class="content-right">
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <small><i class="fa-regular fa-clock"></i> ${post.publishedAt || ''}</small>
        </div>
      `;
      latestList.appendChild(item);
    });
  }
}

// Hiển thị trang chi tiết bài viết
function showDetail(postId) {
  const posts = getPostsFromStorage();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  document.getElementById('category-page').classList.add('hidden');
  document.getElementById('detail-page').classList.remove('hidden');

  document.getElementById('detail-category').innerText = post.category || 'Tin tức';
  document.getElementById('detail-title').innerText = post.title;
  document.getElementById('detail-author').innerText = ` Tác giả: ${post.author || 'Tổng hợp'}`;
  document.getElementById('detail-time').innerText = ` Đăng ngày: ${post.publishedAt || ''}`;
  document.getElementById('detail-excerpt').innerText = post.excerpt;
  
  const imgContainer = document.getElementById('detail-image-container');
  imgContainer.innerHTML = post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}">` : '';

  document.getElementById('detail-content').innerText = post.content;
  const sourceLink = document.getElementById('detail-source-link');
  sourceLink.innerText = post.source || post.url;
  sourceLink.href = post.url;
}

function showCategoryView() {
  document.getElementById('category-page').classList.remove('hidden');
  document.getElementById('detail-page').classList.add('hidden');
}

// Xử lý Crawler
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
