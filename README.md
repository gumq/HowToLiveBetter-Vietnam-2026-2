# HowToLiveBetter Vietnam — Full Edition 767

**Ấn bản đầy đủ 34 chương, 767 mục có mã truy vết HTLB-001 đến HTLB-767.**

Đây là bản biên tập Việt hóa dựa trên 767 mục nguyên tác của HowToLiveBetter. Không phải bản dịch nguyên văn và không áp dụng máy móc quy định, hotline, số liệu, mức giá hoặc liều y khoa của Trung Quốc. Mỗi mục có tiêu đề tiếng Việt, khuyến nghị, bước áp dụng, bối cảnh Việt Nam, lưu ý rủi ro và trạng thái kiểm chứng. Bản V3 đã sửa thêm các trường hợp gán nhầm hướng dẫn phát hiện khi rà soát chéo tiêu đề, hành động và bối cảnh.

## Phạm vi

- **34 chương, 767/767 lời khuyên** được đưa vào thư viện tiếng Việt, mỗi mục giữ mã gốc HTLB-001 đến HTLB-767.
- Mục có yếu tố luật Trung Quốc được viết lại ở mức nguyên tắc và chỉ rõ phải đối chiếu pháp luật Việt Nam; không bê số điều, mức phạt hoặc thời hạn.
- Mục y tế/thuốc không áp dụng máy móc liều, lịch sàng lọc, độ tuổi hoặc ngưỡng nghiên cứu nước ngoài; khuyến nghị xác nhận với bác sĩ/dược sĩ.
- Mục tài chính không phải khuyến nghị mua/bán sản phẩm; cần kiểm tra giấy phép, hợp đồng, phí và khả năng chịu lỗ.
- Bộ lọc P1/P2/P3 phân loại mức độ cần thẩm định, không phải chứng nhận tính đúng của nội dung.
- Bản 205 mục được chọn lọc trước đây được lưu riêng tại `book-curated-205/` để đối chiếu; website mặc định hiển thị 767 mục.

## Cách chạy

Yêu cầu Python 3:

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000`. Không cần Node.js, npm hoặc database.

## Cấu trúc quan trọng

- `book/` — 34 chương tiếng Việt, tổng 767 lời khuyên.
- `book-curated-205/` — bản chọn lọc 205 mục cũ, lưu để đối chiếu.
- `audit/MA_TRAN_VIET_HOA_767.csv` — ma trận tiếng Việt 767 mục, nội dung nguyên tác, mã truy vết, hướng xử lý, nguồn và trạng thái.
- `audit/MA_TRAN_767_TOAN_VAN_VA_THAM_DINH.csv` — ma trận toàn văn nguyên tác và phân loại ban đầu.
- `upstream-book/` — 34 chương tiếng Trung để truy nguyên.
- `sources/` — nguồn Việt Nam cần đối chiếu.
- `skills/life-decision-guide/` — hướng dẫn AI tra cứu cẩm nang.

## Cách hiểu trạng thái

- **P1:** Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
- **P2:** Cần cập nhật nguồn, số liệu hoặc điều kiện áp dụng.
- **P3:** Chủ yếu là nguyên tắc phổ quát nhưng vẫn cần xem điều kiện.

Việc đủ 767 mục có nghĩa là không bỏ sót mục gốc trong thư viện, **không có nghĩa 767 kết luận đã được bác sĩ, luật sư, dược sĩ hoặc chuyên gia tài chính xác nhận độc lập**. Các số liệu và quy định thay đổi theo thời gian; khi cần quyết định y tế, pháp lý hoặc tài chính quan trọng, hãy kiểm tra văn bản/hướng dẫn gốc và hỏi người có chuyên môn.

## Nguồn chính thức khởi điểm tại Việt Nam

- [Cơ sở dữ liệu quốc gia về văn bản pháp luật](https://vbpl.vn/)
- [Cổng văn bản Chính phủ](https://vanban.chinhphu.vn/)
- [Cổng Thông tin điện tử Chính phủ](https://chinhphu.vn/)
- [Bộ Y tế](https://moh.gov.vn/)
- [Bảo hiểm xã hội Việt Nam](https://baohiemxahoi.gov.vn/)
- [Cục Thống kê](https://www.nso.gov.vn/)

## Nguyên tắc cập nhật

1. Ghi ngày kiểm tra, văn bản/nguồn gốc, phạm vi đối tượng và tình trạng hiệu lực.
2. Không dùng luật nước ngoài làm luật Việt Nam.
3. Không biến nhãn A/B/C của tác giả gốc thành chuẩn GRADE hay phân hạng của Bộ Y tế.
4. Không đưa liều thuốc, lịch tầm soát hoặc ngưỡng xét nghiệm thành lời khuyên phổ quát nếu chưa xác minh chuyên môn.
5. Khi chưa chắc, giữ cảnh báo và ghi rõ cần thẩm định; không tự điền một con số cho đủ nội dung.

**Ngày xây dựng ấn bản đầy đủ:** 02/11/2026.

Báo cáo bổ sung nội dung: `audit/BAO_CAO_BO_SUNG_NOI_DUNG_767_V2.md`. Ma trận có thêm `Boi_canh_Viet_Nam` và `Che_do_bien_tap`.












## Full Edition V3 — kiểm tra chất lượng bổ sung

Bản V3 giữ đủ 767 mục, bổ sung nguồn khởi điểm Việt Nam cho từng mục và sửa các trường hợp gán nhầm hướng dẫn được phát hiện khi kiểm tra chéo giữa tiêu đề, hành động và bối cảnh. Xem `audit/BAO_CAO_KIEM_TRA_CHAT_LUONG_V3.md`. Nguồn gắn ở từng mục là điểm bắt đầu tra cứu, không phải xác minh độc lập từng khẳng định.


Báo cáo kiểm tra chất lượng mới nhất: `audit/BAO_CAO_KIEM_TRA_CHAT_LUONG_V3.md`.
