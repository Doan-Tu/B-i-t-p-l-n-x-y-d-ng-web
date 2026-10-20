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

const samplePosts = [
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
    content: "Báo cáo thị trường bất động sản quý III cho thấy giá bán chung cư sơ cấp và thứ cấp tại khu vực nội đô vẫn giữ đà tăng ổn định.",
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
    content: "Khảo sát tại các khu vực Hoài Đức, Đan Phượng cho thấy giá đất nền đi ngang, lượng khách hỏi mua giảm đáng kể.",
    author: "Gia Linh",
    category: "Bất động sản",
    publishedAt: "2026-09-26 09:30",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/bat-dong-san/dat-nen-vung-ven.htm"
  },
  {
    id: "dtri-20260928101",
    title: "Căn cứ quân sự chiến lược tại Thái Bình Dương được nâng cấp lớn",
    slug: "can-cu-quan-su-chien-luoc-tai-thai-binh-duong",
    excerpt: "Quân đội nước này vừa hoàn thành giai đoạn đầu của dự án mở rộng cơ sở hạ tầng phòng thủ tầm xa.",
    content: "Các chuyên gia phân tích quân sự đánh giá động thái này nhằm củng cố năng lực răn đe.",
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
    excerpt: "Các nhà lãnh đạo kinh tế thế giới nhóm họp tại châu Âu để thảo luận về các giải pháp chống đứt gãy chuỗi cung ứng.",
    content: "Thách thức về năng lượng và biến động địa chính trị đặt ra yêu cầu cấp thiết.",
    author: "Bùi Mai",
    category: "Thế giới",
    publishedAt: "2026-09-27 11:20",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/the-gioi/phan-tich/hoi-nghi-kinh-te.htm"
  },
  {
    id: "dtri-20260928201",
    title: "Quốc hội thảo luận các dự án luật quan trọng trong kỳ họp chuyên đề",
    slug: "quoc-hoi-thao-luan-cac-du-an-luat-quan-trong",
    excerpt: "Các đại biểu tập trung đóng góp ý kiến hoàn thiện hành lang pháp lý thúc đẩy phát triển kinh tế số.",
    content: "Kỳ họp diễn ra với tinh thần khẩn trương, dân chủ và trách nhiệm cao.",
    author: "Trọng Hải",
    category: "Thời sự",
    publishedAt: "2026-09-28 09:00",
    source: "dantri.com.vn",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    url: "https://dantri.com.vn/thoi-su/chinh-tri/quoc-hoi-thao-luan.htm"
  }
];

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

  // Sắp xếp thời gian giảm dần (mới nhất -> cũ nhất)
  filteredPosts.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

  renderArticlesLayout(filteredPosts);
}

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
