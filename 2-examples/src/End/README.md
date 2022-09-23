# Lý thuyết
1. Có bao nhiêu loại component? Liệt kê các component.
2. Nêu khái niệm của Props và State. So sánh Props và State. 
3. Có bao nhiêu method call API
4. HTTP Request là gì? Liệt kê các phương thức HTTP request.
5. Sự khác biệt giữa Library và Framework là gì? Redux thuộc loại nào?

# Thực hành
Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã nguồn mở tại Chicago, Hoa Kỳ. 
Công ty muốn làm cho sự hiện diện của mình trở nên phổ biến trên toàn thế giới bằng cách tạo ra một trang Web sẽ làm nổi bật các hoạt động được thực hiện bởi tổ chức. 
Tổ chức cũng cung cấp tất cả các phần mềm có sẵn dưới dạng phần mềm miễn phí. 
Bạn với tư cách là nhà phát triển trang Web cho tổ chức đã được yêu cầu tạo trang Web sau cho tổ chức:
- Trang web bao gồm 3 màn hình chính
Login   : Thành viên đăng nhập vào hệ thống. Xuất hiện khi người dùng mới vào sử dụng trang web lần đầu. Bao gồm
- 1 TextInput     : nhập UserName
- 1 PasswordInput : nhập Password
- 1 button "Login": Khi click sẽ xảy ra 2 trường hợp như sau:
+ Nếu UserName = 'admin' và password = 'admin' thì Redirect đến màn hình Projects
+ Trường hợp UserName và password khác : Alert('Thông tin không chính xác. Xin thử lại.')
Home    : Cung cấp giao diện thông tin về trụ sở Solution Anywhere.
Projects: Bao gồm:
- 1 bảng liệt kê thông tin các Projects của tổ chức bao gồm các cột như sau:
+ STT, Tên, Chức năng
+ Côt STT : thể hiện số thứ tự
+ Cột Tên: thể hiện tên của project
+ Cột chức năng: bao gồm 1 button Delete -> Khi click vào button, thông tin Project sẽ bị xóa và đồng thời cập nhật lại bảng danh sách Projects
- 1 Button tạo mới Project -> Click btn tạo mới -> Show form tạo mới Project bao gồm:
+ 1 TextInput: Nhập tên của Project
+ 1 Button "Create":
    . Mặc định sẽ ở trạng thái Disable
    . Khi TextInput đã được nhập thông tin thì trạng thái cập nhật thành Enable
    . CLick : gửi thông tin đến server với:
    - Dữ liệu gửi: { userName : "User Name" , projectName: "<Giá trị người dùng nhập vào TextInput>"}
    - Dữ liệu nhận: thông tin Project đã được tạo.
    . Trường hợp tạo thành công: <Alert('Project đã được tạo thành công.')>
    . Trường hợp tạo thất bại  : <Alert('Project chưa được tạo. Vui lòng thử lại.')>

# Hướng dẫn làm bài
- Ở source bài tập của các bạn sẽ tạo ra:
+ Folder: có tên là END.
+ Trong END: Thực hiện tạo 2 file:
    1. LYTHUYET.md
    2. ThucHanh.js
- NOTE: Phần thực hành phải chạy lên trình duyệt để chấm bài.