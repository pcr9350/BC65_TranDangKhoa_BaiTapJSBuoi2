/*-----------------BÀI TẬP 1---------------------*/
/* B1: Xác định đầu vào
- Số ngày làm
- Số lương 1 ngày
- Số tiền lương dựa theo só ngày làm
B2: các bước xử lý
- Công thức tính tiền lương = Số ngày làm * số lương 1 ngày
B3: Xuất kết quả ra html
*/

function tinhLuong() {
    var ngayLam = +document.getElementById("ngayLam").value;
    var tienLuong = ngayLam * 100000;
    tienLuong = tienLuong.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById("result1").innerText = tienLuong;

}

/*-----------------BÀI TẬP 2---------------------*/
/* B1: Xác định đầu vào
- 5 số thực
- Giá trị trung bình của 5 số thực
B2: các bước xử lý
- Công thức tính giá trị trung bình của 5 số thực = tổng 5 số / 5
B3: Xuất kết quả ra html
*/

function tinhTrungBinh() {
    var so1 = +document.getElementById("soThuc1").value;
    var so2 = +document.getElementById("soThuc2").value;
    var so3 = +document.getElementById("soThuc3").value;
    var so4 = +document.getElementById("soThuc4").value;
    var so5 = +document.getElementById("soThuc5").value;
    
    var soTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById("result2").innerText = soTrungBinh;
}

/*-----------------BÀI TẬP 3---------------------*/
/* B1: Xác định đầu vào
- Số tiền Đô cần đổi
- Giá trị 1 đô - 23.500đ
- Số tiền Việt qui đổi được
B2: các bước xử lý
- Công thức tính tiền Việt = tiền Đô cần đổi * 23500
B3: Xuất kết quả ra html
*/

function doiTien() {
    var tienDo = +document.getElementById("tienDo").value;
    var tienViet = tienDo * 23500;
    tienViet = tienViet.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById("result3").innerText = tienViet;
}

/*-----------------BÀI TẬP 4---------------------*/
/* B1: Xác định đầu vào
- Chiều dài hình chữ nhựt
- Chiều rộng hình chữ nhựt
- Diện tích hình chữ nhựt
- Chu vi hình chữ nhựt
B2: các bước xử lý
- Công thức tính tiền Việt = tiền Đô cần đổi * 23500
B3: Xuất kết quả ra html
*/

function tinhDienTichChuVi() {
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("resultDienTich").innerText = dienTich;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("resultChuVi").innerText = chuVi;
}

/*-----------------BÀI TẬP 5---------------------*/
/* B1: Xác định đầu vào
- Số có 2 ký số.
- Số hàng chục
- Số hàng đơn vị
- Tổng 2 ký số
B2: các bước xử lý
- Công thức tính số hàng chục = Math.floor(số 2 ký số / 10)
- Công thức tính số hàng đơn vị = số 2 ký số % 10
= Tổng 2 ký số = số hàng chục + số hàng đơn vị
B3: Xuất kết quả ra html
*/

function tinhTongHaiKySo() {
    var soHaiKySo = +document.getElementById("soHaiKySo").value;
    var soHangChuc = Math.floor(soHaiKySo / 10);
    var soHangDonVi = soHaiKySo % 10;
    var tongHaiKySo = soHangChuc + soHangDonVi;
    document.getElementById("result5").innerText = tongHaiKySo;
}