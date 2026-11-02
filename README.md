# HowToLiveBetter Vietnam

**Cẩm nang thực hành dành cho người sống tại Việt Nam — bản 1.0 RC2, chốt rà soát 02/11/2026.**

> Không phải bản dịch nguyên văn. Bản này giữ tinh thần lời khuyên có giá trị của dự án gốc, đồng thời viết lại những nội dung phụ thuộc pháp luật, chính sách, y tế, thị trường và đời sống Việt Nam. Không áp dụng máy móc luật hoặc dữ liệu Trung Quốc.

## Bản Việt Nam gồm những gì?

- **34 chương, 205 lời khuyên chọn lọc**, diễn đạt bằng tiếng Việt tự nhiên.
- **Ma trận kiểm toán 767 mục gốc**: có thêm quyết định biên tập từng hàng, lý do, độ ưu tiên, dấu hiệu rủi ro và nguồn Việt Nam cần đối chiếu.
- **Báo cáo thẩm định vòng 2**: phân tích rủi ro và các sai lệch dễ gây hại khi áp dụng tại Việt Nam.
- **Phụ lục thực hành 2026**: các bước hành động và mốc pháp lý cần cập nhật.
- **Danh mục nguồn Việt Nam**: đường dẫn pháp luật, cơ quan nhà nước, y tế và thống kê.
- **AI skill** để hướng dẫn trợ lý tra cứu nội dung của cẩm nang, nêu nguồn và giới hạn của tài liệu.

## Giao diện và trải nghiệm sử dụng (RC2)

- Thiết kế lại theo hướng editorial: bố cục thoáng, phân cấp chữ rõ, màu nền dịu và điểm nhấn xanh đậm/xanh sáng.
- Responsive cho desktop, tablet và điện thoại; đã kiểm tra các viewport 320, 360, 375, 390, 430, 768, 820, 1024 và 1440 px, không phát hiện tràn ngang trong các kích thước kiểm thử.
- Tìm kiếm đồng bộ ở hero và thư viện; lọc chủ đề/chương, sắp xếp và đổi kiểu thẻ/danh sách.
- Hiển thị ghi chú cập nhật, nguồn tham khảo và các phần bổ sung không đánh số trong từng chương; phiên bản trước chỉ hiển thị các mục lời khuyên và có thể bỏ sót phần ghi chú.
- Hỗ trợ bàn phím: phím `/` đưa con trỏ vào ô tìm kiếm, `Esc` xóa truy vấn; có liên kết bỏ qua điều hướng và trạng thái reduced-motion.
- Không sử dụng framework hoặc dịch vụ font bên ngoài; nội dung và tài sản tĩnh được tải từ chính repository.

## Nhật ký kiểm tra lần 3

Xem [báo cáo rà soát nội dung và QA giao diện RC2](audit/BAO_CAO_RA_SOAT_LAN_3.md). Báo cáo ghi rõ những sai lệch đã sửa, các phép thử giao diện và phần việc chưa thể coi là thẩm định chuyên gia.

## Bắt đầu

- [Mở website tra cứu](index.html) — giao diện mới, responsive cho màn hình rộng, tablet và điện thoại; chạy qua HTTP server, không mở trực tiếp bằng `file://`.
- [Báo cáo kiểm toán chi tiết](audit/BAO_CAO_KIEM_TOAN_CHI_TIET.md)
- [Ma trận gốc 767 mục (CSV)](audit/ma_tran_kiem_toan_767_muc.csv)
- [Ma trận thẩm định từng mục 767 (CSV)](audit/MA_TRAN_THAM_DINH_TUNG_MUC_767.csv)
- [Ma trận 767 mục có toàn văn nguyên tác (CSV)](audit/MA_TRAN_767_TOAN_VAN_VA_THAM_DINH.csv)
- [Báo cáo quét toàn văn 767 mục](audit/BAO_CAO_QUET_TOAN_VAN_767.md)
- [Báo cáo thẩm định vòng 2](audit/BAO_CAO_THAM_DINH_VONG_2.md)
- [Phụ lục thực hành Việt Nam 2026](PHU_LUC_THUC_HANH_VIET_NAM_2026.md)
- [Nguồn Việt Nam 2026](sources/NGUON_VIET_NAM_2026.md)
- [Quy tắc biên tập và cập nhật](QUY_TAC_BIEN_TAP.md)

## Danh mục 34 chương

| Chương | Nội dung | Lời khuyên |
|---:|---|---:|
| 01 | [Bảo vệ tính mạng và phòng bệnh](book/01-suc-khoe-va-phong-ngua.md) | 6 |
| 02 | [Lối sống giúp giảm nguy cơ bệnh mạn tính](book/02-loi-song-va-benh-man-tinh.md) | 6 |
| 03 | [Quản lý năng lượng và sự tập trung](book/03-quan-ly-nang-luong-va-tap-trung.md) | 6 |
| 04 | [Quản lý thời gian và ra quyết định](book/04-quan-ly-thoi-gian-va-quyet-dinh.md) | 6 |
| 05 | [Quản lý tiền và tránh mất tiền](book/05-tai-chinh-ca-nhan.md) | 7 |
| 06 | [Những khoản không nên mua chỉ vì quảng cáo](book/06-nhung-khoan-khong-nen-mua.md) | 6 |
| 07 | [Khi mất việc, thiếu tiền hoặc gặp biến cố](book/07-khi-thieu-tien-va-mat-viec.md) | 6 |
| 08 | [Tránh rủi ro pháp lý và bảo vệ quyền lợi](book/08-tranh-chap-va-bao-ve-ban-than.md) | 6 |
| 09 | [Những rủi ro pháp lý thường gặp trong đời sống Việt Nam](book/09-cac-rui-ro-phap-ly-thuong-gap.md) | 6 |
| 10 | [Tình yêu, hôn nhân và gia đình](book/10-tinh-yeu-hon-nhan-va-gia-dinh.md) | 6 |
| 11 | [Lưu ý pháp lý cho lập trình viên và người làm công nghệ](book/11-lap-trinh-vien-va-cong-nghe.md) | 6 |
| 12 | [Khởi nghiệp và kinh doanh tại Việt Nam](book/12-khoi-nghiep-va-kinh-doanh.md) | 7 |
| 13 | [Sơ cứu và tình huống khẩn cấp](book/13-so-cuu-va-khan-cap.md) | 6 |
| 14 | [An toàn tài khoản và dữ liệu](book/14-an-toan-tai-khoan-va-du-lieu.md) | 6 |
| 15 | [Thuê nhà và mua nhà](book/15-thue-nha-va-mua-nha.md) | 6 |
| 16 | [Sống cùng bệnh mạn tính](book/16-song-voi-benh-man-tinh.md) | 6 |
| 17 | [Chăm sóc người cao tuổi](book/17-cham-soc-nguoi-cao-tuoi.md) | 6 |
| 18 | [Quyết định sinh con và nuôi con](book/18-quyet-dinh-sinh-con-va-nuoi-con.md) | 5 |
| 19 | [Quyền lợi khi đi làm, nghỉ việc và tai nạn lao động](book/19-quyen-loi-lao-dong-va-nghi-viec.md) | 7 |
| 20 | [Chăm sóc trẻ sơ sinh](book/20-cham-soc-tre-so-sinh.md) | 6 |
| 21 | [Du lịch nước ngoài an toàn](book/21-du-lich-nuoc-ngoai.md) | 6 |
| 22 | [Giải trí và nghỉ ngơi an toàn](book/22-giai-tri-va-thu-gian.md) | 6 |
| 23 | [Học kỹ năng và phát triển nghề nghiệp](book/23-hoc-ky-nang-va-nghe-nghiep.md) | 6 |
| 24 | [Khám chữa bệnh và sử dụng bảo hiểm y tế](book/24-kham-chua-benh-va-bhyt.md) | 6 |
| 25 | [Những việc cần làm khi người thân qua đời](book/25-thu-tuc-sau-khi-nguoi-than-qua-doi.md) | 6 |
| 26 | [Xây dựng website, ứng dụng và nền tảng số](book/26-xay-dung-website-va-nen-tang-so.md) | 6 |
| 27 | [Mang thai và sinh nở](book/27-mang-thai-va-sinh-no.md) | 6 |
| 28 | [Chăm sóc ngoại hình mà không làm hại sức khỏe](book/28-ngoai-hinh-va-tham-my-an-toan.md) | 5 |
| 29 | [Vượt qua mất mát, thất nghiệp và biến cố lớn](book/29-vuot-qua-bien-co-va-khung-hoang.md) | 6 |
| 30 | [Sức khỏe và an toàn của trẻ đi học](book/30-suc-khoe-va-an-toan-tre-di-hoc.md) | 6 |
| 31 | [Những lựa chọn sau tuổi 18](book/31-lua-chon-sau-tuoi-18.md) | 6 |
| 32 | [Du học và học tập ở nước ngoài](book/32-du-hoc-va-hoc-tap-o-nuoc-ngoai.md) | 5 |
| 33 | [Sống với khuyết tật và chăm sóc dài hạn](book/33-song-voi-khuyet-tat-va-cham-soc-dai-han.md) | 6 |
| 34 | [Dùng thuốc an toàn tại nhà](book/34-su-dung-thuoc-an-toan-tai-nha.md) | 7 |

## Chạy website trên máy Mac / Windows / Linux

Yêu cầu Python 3 để mở máy chủ web tĩnh:

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000` trong trình duyệt. Website chỉ dùng HTML/CSS/JavaScript thuần, không cần cài package hoặc backend.

## Cách đọc cẩm nang

- Chọn việc có thể làm và có lợi trong hoàn cảnh của bạn; đây không phải danh sách nhiệm vụ bắt buộc.
- Lời khuyên sức khỏe không thay cho chẩn đoán/điều trị. Thuốc, liều, tầm soát và lịch tiêm phải dựa vào người bệnh, tiền sử và hướng dẫn chuyên môn.
- Lời khuyên pháp lý chỉ là thông tin phổ thông. Đọc văn bản hiện hành và hỏi luật sư/cơ quan có thẩm quyền khi có tranh chấp hoặc quyết định lớn.
- Dữ liệu kinh tế, lương, giá, thuế, trợ cấp và thủ tục thay đổi theo thời gian; phải xem ngày cập nhật.
- Không phải mọi nghiên cứu nước ngoài đều áp dụng trực tiếp cho Việt Nam. Ma trận gốc giữ lại nhãn A/B/C của tác giả chỉ để truy vết, không xem đó là chuẩn GRADE hoặc cấp khuyến cáo của Bộ Y tế.

## Quy tắc bảo trì

1. Khi sửa một lời khuyên, ghi lại lý do, nguồn mới, ngày kiểm tra trong `CHANGELOG.md`.
2. Nội dung pháp luật phải ghi số hiệu văn bản, điều khoản (nếu đã xác minh), ngày hiệu lực và đường dẫn văn bản gốc.
3. Nội dung y khoa phải phân biệt nghiên cứu quan sát, thử nghiệm, tổng quan và hướng dẫn thực hành; không biến tương quan thành nhân quả.
4. Khi chưa xác minh, ghi `[CẦN KIỂM CHỨNG]` hoặc bỏ con số/khẳng định, không phỏng đoán.
5. Rà soát định kỳ ít nhất 6–12 tháng; chủ đề pháp luật, thuế, bảo hiểm, thuốc và cấp cứu phải cập nhật sớm hơn khi có thay đổi.

## Quan hệ với dự án gốc

Đây là bản phái sinh/biên tập từ [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter). Thư mục `upstream-book/` lưu 34 chương tiếng Trung của gói nguồn để đối chiếu. Nội dung gốc và mã nguồn gốc có giấy phép riêng; xem `LICENSE`, `LICENSE-CODE` và `ATTRIBUTION.md`. Không giả định rằng mọi nội dung trong dự án gốc đã được chuyên gia Việt Nam thẩm định.

## Phạm vi và giới hạn của bản này

Bản Việt Nam hiện là một **ấn bản biên tập chọn lọc**: 205 lời khuyên đã được viết lại/địa phương hóa trên nền 34 chương. Không phải 767 mục đều đã được dịch và thẩm định y khoa/pháp lý riêng lẻ. 767 mục đã được lập ma trận để có thể tiếp tục xử lý, và báo cáo ghi rõ nội dung phải viết lại. Trước khi xuất bản thương mại hoặc dùng làm tài liệu tư vấn chuyên môn, cần có phản biện độc lập từ bác sĩ, luật sư và chuyên gia ở các lĩnh vực liên quan.

**Ngày chốt rà soát:** 02/11/2026. Luật và số liệu có thể thay đổi sau ngày này.

## Trạng thái phát hành 1.0 RC1

Đây là bản phát hành ứng viên với nội dung chọn lọc và ma trận toàn văn 767 mục. Toàn văn đã được trích xuất/khớp và phân luồng biên tập; các mệnh đề khoa học, pháp lý và các URL nguồn chưa được xác minh độc lập toàn bộ. Các mục P1 cần thẩm định chuyên ngành trước khi xuất bản như tài liệu tư vấn. Xem `audit/BAO_CAO_THAM_DINH_VONG_2.md` để biết giới hạn và cách hiểu trạng thái.

## Tài liệu nguyên tác được lưu trữ

Các bản chương Trung Quốc nằm trong `upstream-book/`; tài liệu nghiên cứu và công cụ gốc nằm trong `upstream-reference/` (xem `upstream-reference/README_GHI_CHU.md`). Chúng chỉ phục vụ đối chiếu, không phải nội dung đã Việt hóa hoặc đã xác minh cho Việt Nam.
