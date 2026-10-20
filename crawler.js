/**
 * Hàm crawl và chuẩn hóa dữ liệu từ URL bài viết Dân trí
 * @param {string} url - Đường dẫn bài viết
 * @returns {Promise<Object>} - Object bài viết chuẩn hóa
 */
async function crawlNewsArticle(url) {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Không thể tải bài viết');
    
    const data = await response.json();
    const htmlString = data.contents;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const idMatch = url.match(/-(\d+)\.htm/);
    const id = idMatch ? `dtri-${idMatch[1]}` : `dtri-${Date.now()}`;

    const title = doc.querySelector('h1.title-page')?.innerText?.trim() || 
                  doc.querySelector('h1')?.innerText?.trim() || '';

    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    const slug = lastPart.replace(/-\d+\.htm$/, '');

    const excerpt = doc.querySelector('h2.singular-sapo')?.innerText?.trim() || 
                    doc.querySelector('.sapo')?.innerText?.trim() || '';

    const contentEl = doc.querySelector('.singular-content');
    const content = contentEl ? contentEl.innerText.trim() : '';

    // Cải tiến trích xuất ảnh chống lỗi link hỏng
    let imageEl = doc.querySelector('.singular-content img, .singular-sapo img, figure img, .dt-news-detail img');
    let imageUrl = '';
    
    if (imageEl) {
      imageUrl = imageEl.getAttribute('src') || 
                 imageEl.getAttribute('data-src') || 
                 imageEl.getAttribute('data-original') || '';
    }

    if (!imageUrl || imageUrl.startsWith('data:')) {
      imageUrl = "https://cdnphoto.dantri.com.vn/Ur-sSuXRZE7M3hpXU7cD9cM7RCM=/thumb_w/1020/2026/09/28/cat-linh-1749476352928-1790572938865.jpg";
    }

    const author = doc.querySelector('.author-name')?.innerText?.trim() || 
                   doc.querySelector('.singular-author')?.innerText?.trim() || 'Tổng hợp';

    const category = doc.querySelector('.breadcrumb-item:nth-last-child(1), .breadcrumb a:last-child')?.innerText?.trim() || 'Thời sự';

    const publishedAt = doc.querySelector('.author-time')?.innerText?.trim() || 
                        doc.querySelector('.singular-time')?.innerText?.trim() || new Date().toLocaleString('vi-VN');

    return {
      id, title, slug, excerpt, content, imageUrl, author, category, publishedAt,
      source: "dantri.com.vn",
      url: url
    };
  } catch (error) {
    console.error('Lỗi khi crawl dữ liệu:', error);
    throw error;
  }
}
