$(document).ready(function() {
    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    // Hàm kiểm tra password
    function validatePassword(password) {
      // Password yêu cầu: Ít nhất 6 ký tự, bao gồm số và ký tự đặc biệt
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
      return passwordPattern.test(password);
    }

    // Xử lý khi nhấn nút Log In
    $('.login-button').on('click', function(event) {
      event.preventDefault();  // Ngăn chặn hành vi mặc định (submit)

      const email = $('#email').val();
      const password = $('#password').val();

      let isValid = true;

      // Kiểm tra email
      if (!validateEmail(email)) {
        $('#email').addClass('input--error');  // Thêm lớp 'input--error' nếu không hợp lệ
        isValid = false;
      } else {
        $('#email').removeClass('input--error');  // Xóa lớp 'input--error' nếu hợp lệ
      }

      // Kiểm tra password
      if (!validatePassword(password)) {
        $('#password').addClass('input--error');  // Thêm lớp 'input--error' nếu không hợp lệ
        isValid = false;
      } else {
        $('#password').removeClass('input--error');  // Xóa lớp 'input--error' nếu hợp lệ
      }

      // Nếu form hợp lệ
     
    });
  });

  $(document).ready(function() {
    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Hàm kiểm tra password
    function validatePassword(password) {
        // Password yêu cầu: Ít nhất 6 ký tự, bao gồm số và ký tự đặc biệt
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return passwordPattern.test(password);
    }

    // Hàm kiểm tra xác nhận mật khẩu
    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Xử lý khi nhấn nút Create Account
    $('.create-button').on('click', function(event) {
        event.preventDefault();  // Ngăn chặn hành vi mặc định (submit)

        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();

        let isValid = true;

        // Kiểm tra email
        if (!validateEmail(email)) {
            $('#email').addClass('input--error');  // Thêm lớp 'input--error' nếu không hợp lệ
            isValid = false;
        } else {
            $('#email').removeClass('input--error');  // Xóa lớp 'input--error' nếu hợp lệ
        }

        // Kiểm tra password
        if (!validatePassword(password)) {
            $('#password').addClass('input--error');  // Thêm lớp 'input--error' nếu không hợp lệ
            isValid = false;
        } else {
            $('#password').removeClass('input--error');  // Xóa lớp 'input--error' nếu hợp lệ
        }

        // Kiểm tra xác nhận mật khẩu
        if (!validateConfirmPassword(password, confirmPassword)) {
            $('#confirm-password').addClass('input--error');  // Thêm lớp 'input--error' nếu xác nhận không khớp
            isValid = false;
        } else {
            $('#confirm-password').removeClass('input--error');  // Xóa lớp 'input--error' nếu hợp lệ
        }

        // Nếu form hợp lệ, có thể xử lý logic tiếp theo (submit form, gọi API, v.v.)
       
    });
});
$(document).ready(function() {
  // Hàm kiểm tra định dạng email
  function kiemTraEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

  // Hàm kiểm tra mật khẩu
  function kiemTraMatKhau(password) {
      const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
      return passwordPattern.test(password);
  }

  // Hàm kiểm tra xác nhận mật khẩu
  function kiemTraXacNhanMatKhau(password, confirmPassword) {
      return password === confirmPassword;
  }

  // Xử lý khi nhấn nút Tạo Tài Khoản
  $('.create-button').on('click', function(event) {
      event.preventDefault();  // Ngăn chặn hành vi mặc định (submit form)

      const email = $('#email').val();
      const password = $('#password').val();
      const confirmPassword = $('#confirm-password').val();

      let hopLe = true;

      // Kiểm tra email
      if (!kiemTraEmail(email)) {
          $('#email').addClass('input--error');
          hopLe = false;
      } else {
          $('#email').removeClass('input--error');
      }

      // Kiểm tra mật khẩu
      if (!kiemTraMatKhau(password)) {
          $('#password').addClass('input--error');
          hopLe = false;
      } else {
          $('#password').removeClass('input--error');
      }

      // Kiểm tra xác nhận mật khẩu
      if (!kiemTraXacNhanMatKhau(password, confirmPassword)) {
          $('#confirm-password').addClass('input--error');
          hopLe = false;
      } else {
          $('#confirm-password').removeClass('input--error');
      }

      // Nếu form hợp lệ, lưu dữ liệu vào localStorage
      if (hopLe) {
          const duLieuNguoiDung = {
              email: email,
              password: password
          };
          localStorage.setItem(email, JSON.stringify(duLieuNguoiDung));  // Lưu dữ liệu với email làm key
          alert('Đăng ký thành công! Tài khoản của bạn đã được tạo.');
      }
  });

  // Xử lý khi nhấn nút Đăng Nhập
  $('.login-button').on('click', function(event) {
      event.preventDefault();  // Ngăn chặn hành vi mặc định (submit form)

      const email = $('#email').val();
      const password = $('#password').val();

      let hopLe = true;

      // Kiểm tra email
      if (!kiemTraEmail(email)) {
          $('#email').addClass('input--error');
          hopLe = false;
      } else {
          $('#email').removeClass('input--error');
      }

      // Kiểm tra mật khẩu
      if (!kiemTraMatKhau(password)) {
          $('#password').addClass('input--error');
          hopLe = false;
      } else {
          $('#password').removeClass('input--error');
      }

      if (hopLe) {
          // Lấy thông tin từ localStorage
          const duLieuLuuTru = localStorage.getItem(email);
          if (duLieuLuuTru) {
              const duLieuNguoiDung = JSON.parse(duLieuLuuTru);
              // So sánh mật khẩu
              if (duLieuNguoiDung.password === password) {
                  alert('Đăng nhập thành công!');
              } else {
                  alert('Lỗi: Sai mật khẩu.');
              }
          } else {
              alert('Lỗi: Không tìm thấy email.');
          }
      }
  });
});
