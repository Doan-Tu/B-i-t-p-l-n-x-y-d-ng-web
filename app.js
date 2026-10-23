// ================= HỆ THỐNG XỬ LÝ ĐĂNG NHẬP / ĐĂNG KÝ (LOCALSTORAGE) =================

// Khởi tạo trạng thái người dùng khi load trang
document.addEventListener('DOMContentLoaded', () => {
  checkCurrentUser();
});

// Mở và Đóng Modal Auth
function openAuthModal(formType) {
  document.getElementById('auth-modal').classList.remove('hidden');
  switchForm(formType);
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
  document.getElementById('login-error').innerText = '';
  document.getElementById('reg-error').innerText = '';
}

// Chuyển đổi giữa Form Đăng nhập và Đăng ký
function switchForm(formType) {
  if (formType === 'login') {
    document.getElementById('login-form-box').classList.remove('hidden');
    document.getElementById('register-form-box').classList.add('hidden');
  } else {
    document.getElementById('login-form-box').classList.add('hidden');
    document.getElementById('register-form-box').classList.remove('hidden');
  }
}

// Xử lý Đăng ký tài khoản
function handleRegister(e) {
  e.preventDefault();
  const fullname = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();
  const regError = document.getElementById('reg-error');

  let users = JSON.parse(localStorage.getItem('users_list')) || [];

  // Kiểm tra tên đăng nhập đã tồn tại chưa
  if (users.some(user => user.username === username)) {
    regError.innerText = 'Tên đăng nhập này đã được đăng ký!';
    return;
  }

  // Lưu tài khoản mới
  const newUser = { fullname, username, password };
  users.push(newUser);
  localStorage.setItem('users_list', JSON.stringify(users));

  alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');
  switchForm('login');
}

// Xử lý Đăng nhập
function handleLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();
  const loginError = document.getElementById('login-error');

  let users = JSON.parse(localStorage.getItem('users_list')) || [];

  // Tìm kiếm tài khoản trùng khớp
  const foundUser = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (foundUser) {
    // Lưu phiên đăng nhập
    localStorage.setItem('current_user', JSON.stringify(foundUser));
    closeAuthModal();
    checkCurrentUser();
    alert(`Xin chào, ${foundUser.fullname}! Bạn đã đăng nhập thành công.`);
  } else {
    loginError.innerText = 'Sai tên đăng nhập hoặc mật khẩu!';
  }
}

// Kiểm tra và hiển thị trạng thái đã đăng nhập trên Header
function checkCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  const accountBox = document.getElementById('user-account-box');

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

// Xử lý Đăng xuất
function handleLogout() {
  if (confirm('Bạn có chắc chắn muốn đăng xuất tài khoản?')) {
    localStorage.removeItem('current_user');
    checkCurrentUser();
  }
}
