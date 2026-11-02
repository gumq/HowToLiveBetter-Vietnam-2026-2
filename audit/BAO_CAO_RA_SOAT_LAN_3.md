# Báo cáo rà soát lần 3 và kiểm thử giao diện — HowToLiveBetter Vietnam 1.0 RC2

**Mốc rà soát:** 02/11/2026  
**Đầu vào:** `HowToLiveBetter-Vietnam-1.0-RC1(1).zip` do người dùng tải lên.  
**Phạm vi:** rà soát pháp lý/sức khỏe/số liệu có rủi ro cao; kiểm tra liên kết và cấu trúc nội bộ; sửa giao diện web; kiểm thử tương tác và responsive.  
**Kết luận:** có một số lỗi tham chiếu quan trọng cần sửa ở RC1; đã sửa trong RC2. Tuy nhiên, đây vẫn là desk review, không phải chứng nhận chuyên môn cho toàn bộ nội dung.

## 1. Những sai lệch cụ thể đã phát hiện và sửa

### 1.1. Dòng thời gian xử phạt thuốc lá điện tử

RC1 có chỗ chỉ viện dẫn Nghị định 371/2025/NĐ-CP. Nghị định này ban hành ngày 31/12/2025 và có hiệu lực cùng ngày, là mốc xử phạt ban đầu. Tuy nhiên, **Nghị định 90/2026/NĐ-CP** được ban hành ngày 30/03/2026 và có hiệu lực từ **15/05/2026**; Điều 26 quy định hành vi sử dụng/chứa chấp thuốc lá điện tử, thuốc lá nung nóng và mức phạt tại thời điểm rà soát 02/11/2026.

RC2 đã:
- Ghi Nghị định 371 là mốc lịch sử ban đầu.
- Dùng Điều 26 Nghị định 90/2026 làm căn cứ xử phạt tại mốc 02/11/2026.
- Nêu mức phạt trong bối cảnh cụ thể, gồm cả ngoại lệ được nêu ở khoản 2, không suy rộng thành mọi trường hợp chứa chấp.
- Thêm ngày hiệu lực và đường dẫn văn bản gốc.

**Đính chính trách nhiệm biên tập:** một ghi chú kiểm tra trung gian trước đây đã kết luận Nghị định 90/2026 là sai số hiệu và thay bằng Nghị định 371/2025. Kết luận trung gian này không chính xác khi áp dụng tại 02/11/2026 vì đã bỏ qua văn bản ban hành sau và có hiệu lực từ 15/05/2026. RC2 đã sửa nội dung sách, danh mục nguồn, phụ lục và báo cáo vòng 2 để thể hiện đúng trình tự. Không nên dùng ghi chú trung gian đó.

Nguồn:
- Cổng văn bản Chính phủ — Nghị định 90/2026/NĐ-CP, ngày ban hành 30/03/2026, hiệu lực 15/05/2026: https://vanban.chinhphu.vn/?docid=217386&orggroupid=2&pageid=27160
- Toàn văn Nghị định 90/2026/NĐ-CP: https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/90-ndcp.signed.pdf
- Điều 26 Nghị định 90/2026 — thông tin giải thích của Cổng Chính phủ: https://xaydungchinhsach.chinhphu.vn/hanh-vi-su-dung-chua-chap-thuoc-la-dien-tu-thuoc-la-nung-nong-bi-phat-bao-nhieu-tien-119260406120632868.htm
- Cổng văn bản Chính phủ — Nghị định 371/2025/NĐ-CP: https://vanban.chinhphu.vn/?docid=216397&pageid=27160

### 1.2. Ngày hiệu lực Quyết định 3898/QĐ-BYT

RC1 ghi hướng dẫn sàng lọc ung thư vú theo Quyết định 3898/QĐ-BYT có hiệu lực 12/02/2026. Khi đọc văn bản quyết định, Điều 3 quy định quyết định có hiệu lực kể từ ngày ký, ban hành. Quyết định được ký ngày **18/12/2025**. Ngày xuất hiện trên trang dữ liệu/danh mục không nên được diễn giải thay cho điều khoản hiệu lực của văn bản gốc.

RC2 đã sửa phần mô tả ở chương 01, phụ lục nguồn và link tham khảo:
- Ghi ngày quyết định là 18/12/2025.
- Dẫn chiếu trực tiếp Điều 3.
- Tách link trang quyết định và link tài liệu hướng dẫn.
- Nhấn mạnh hướng dẫn này là về sàng lọc ung thư vú; không suy rộng thành lịch tầm soát mọi ung thư hay cho mọi nhóm tuổi.

Nguồn:
- Trang quyết định của Bộ Y tế: https://mch.moh.gov.vn/cong-tac-cham-soc-suc-khoe-sinh-san/quyet-dinh-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-sang-loc-phat-hien-som-ung-thu-vu.html
- Trang hướng dẫn của Bộ Y tế: https://mch.moh.gov.vn/cong-tac-cham-soc-suc-khoe-sinh-san/huong-dan-sang-loc-phat-hien-som-ung-thu-vu.html
- Toàn văn quyết định (Điều 3): https://bvdkbaclieu.gov.vn/upload/1000079/20251231/672_Quyet-dinh-3898-QD-BYT_aeaffcb355.pdf

### 1.3. Lỗi hiển thị và khả năng tìm thấy thông tin

Rà soát mã giao diện RC1 cho thấy parser ưu tiên các tiêu đề mục lời khuyên có đánh số. Các phần tiêu đề cấp 2 không đánh số như “Cập nhật”, “Nguồn tham khảo” và ghi chú bổ sung có thể không xuất hiện đầy đủ trong thẻ tra cứu. Đây là rủi ro trải nghiệm và khả năng tiếp cận nguồn, vì người đọc có thể chỉ nhìn thấy lời khuyên mà không thấy bối cảnh, ngoại lệ hoặc tài liệu đi kèm.

RC2 đã:
- Mở rộng parser để đọc cả phần lời khuyên và các phần bổ sung/ghi chú/nguồn.
- Cho phép tìm kiếm cả phần ghi chú và cập nhật trong từng chương.
- Hiển thị liên kết nguồn thành link bấm được.
- Bổ sung chỉ báo nội dung, trạng thái không có kết quả, bộ lọc chủ đề/chương, sắp xếp và chuyển kiểu xem.
- Bổ sung mục lục 34 chương có thể chọn nhanh.

## 2. Các nhóm pháp luật và dữ liệu đã đối chiếu lại

Bảng dưới đây là các mốc có ảnh hưởng trực tiếp đến những chương đang có; không phải danh sách mọi văn bản pháp luật có thể liên quan.

| Chủ đề | Kết quả rà soát tại 02/11/2026 | Ghi chú biên tập |
|---|---|---|
| Dữ liệu cá nhân | Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP có hiệu lực từ 01/01/2026 | Không mô tả quyền đồng ý/rút lại/xóa dữ liệu như quyền tuyệt đối; phải xét căn cứ và ngoại lệ. |
| Việc làm và BHTN | Luật Việc làm 74/2025/QH15 và Nghị định 374/2025/NĐ-CP | Không dùng điều kiện và thời hạn của Trung Quốc hoặc quy định cũ trước 2026. |
| Lương tối thiểu | Nghị định 293/2025/NĐ-CP có hiệu lực 01/01/2026; mức theo vùng I–IV là 5,31; 4,73; 4,14; 3,70 triệu đồng/tháng | Phải xác định đúng địa bàn trong phụ lục sau sắp xếp địa giới; không đoán vùng theo tên tỉnh cũ. |
| Thuế TNCN | Nghị quyết 110/2025/UBTVQH15 quy định giảm trừ gia cảnh 15,5 triệu đồng/tháng cho người nộp thuế và 6,2 triệu/người phụ thuộc từ kỳ tính thuế 2026; Luật 109/2025/QH15 và văn bản hướng dẫn có hiệu lực theo mốc riêng | Cần xét thu nhập chịu thuế, bảo hiểm, hồ sơ người phụ thuộc, biểu thuế và quy định chuyển tiếp; không dùng một con số giảm trừ để thay toàn bộ công thức. |
| Thương mại điện tử | Luật 122/2025/QH15 và Nghị định 248/2026/NĐ-CP có hiệu lực 01/07/2026 | Phân loại đúng loại nền tảng và vai trò. Thông báo Cục TMĐT nêu mốc 01/01/2027 về xác thực điện tử người bán/livestream trong phạm vi áp dụng. |
| Trẻ em đi ô tô | Luật 118/2025/QH15 điều chỉnh quy tắc từ 01/07/2026; Nghị định 238/2026/NĐ-CP có hiệu lực 15/08/2026 | Tách yêu cầu sử dụng thiết bị, đối tượng/ngoại lệ và chế tài; không dùng các mức phạt trong bài cũ trước ngày hiệu lực. |
| Dữ liệu lao động | Cục Thống kê công bố quý III/2026: thu nhập bình quân người lao động 9,2 triệu đồng/tháng; tỷ lệ thất nghiệp trong độ tuổi lao động 2,22% | Đây là bình quân/thống kê toàn quốc, không phải lương trung vị, lương sau thuế hoặc mức đảm bảo sống của từng hộ/ngành/địa phương. |

Nguồn tra cứu chính thức:
- Luật và văn bản quy phạm: https://vanban.chinhphu.vn/ và https://vbpl.vn/
- Bảo hiểm xã hội Việt Nam: https://baohiemxahoi.gov.vn/
- Cục Thống kê — tình hình lao động, việc làm quý III và 9 tháng năm 2026: https://www.nso.gov.vn/tin-tuc-thong-ke/2026/10/thong-cao-bao-chi-ve-tinh-hinh-lao-dong-viec-lam-quy-iii-va-9-thang-nam-2026/
- Cổng Cục Thương mại điện tử và Kinh tế số: https://www.idea.gov.vn/

## 3. Thay đổi giao diện và chức năng

### Hệ thống thiết kế
- Bố cục editorial: tiêu đề nổi bật, khoảng trắng rõ, nền sáng dịu, màu xanh rừng và điểm nhấn xanh non.
- Phần hero nêu rõ mục đích, số lời khuyên và tìm kiếm nhanh.
- Các khu vực khám phá chủ đề, thư viện lời khuyên, hướng dẫn sử dụng và chân trang có phân cấp rõ.
- Thẻ lời khuyên phân biệt tiêu đề, nội dung, bối cảnh và nguồn.
- Liên kết và trạng thái focus có cách hiển thị riêng.

### Responsive
- Desktop: điều hướng đầy đủ, hero hai cột, thư viện và bộ lọc theo lưới.
- Tablet: chuyển bố cục linh hoạt, thu gọn vùng nội dung và bộ lọc.
- Mobile: hero một cột, bộ lọc xếp dọc, menu điều hướng dạng disclosure, CTA rõ ràng, thẻ co về một cột khi cần.
- Có điểm ngắt riêng cho màn hình nhỏ, không đặt chiều rộng tối thiểu lớn khiến trang tràn ngang.

### Tìm kiếm và thao tác
- Đồng bộ nội dung giữa ô tìm kiếm trên đầu trang và trong thư viện.
- Lọc theo nhóm chủ đề và chương; sắp xếp theo chương hoặc chữ cái.
- Chuyển giữa lưới thẻ và danh sách.
- Tải thêm kết quả theo lô; mục lục chương cho phép chuyển nhanh đến nội dung.
- Tìm kiếm cả phần bổ sung, cập nhật và nguồn tham khảo.

### Khả năng tiếp cận và tối ưu
- Có skip link, nhãn truy cập cho điều khiển, trạng thái `aria-pressed`, focus-visible và hỗ trợ `prefers-reduced-motion`.
- Phím `/` đưa focus tới tìm kiếm; `Esc` xóa truy vấn khi focus đang ở ô tìm kiếm.
- Không thêm framework hoặc font bên thứ ba; dùng HTML/CSS/JavaScript tĩnh.
- Các nội dung và tài sản chính được lưu trong repository, không cần API/backend để tra cứu.

## 4. Kết quả kiểm thử trình duyệt

Đã kiểm thử bằng Chromium với file HTML/CSS/JS thực tế và nội dung Markdown cục bộ:

| Hạng mục | Kết quả |
|---|---:|
| Chương hiển thị trong mục lục | 34 |
| Lời khuyên ban đầu | 24 (phân trang) |
| Lời khuyên sau khi tải hết | 205 |
| Nhóm chương được render khi tải hết | 34 |
| Panel ghi chú/nguồn được render | 34 |
| Tìm kiếm mã `3898` trong nội dung bổ sung | 6 kết quả phù hợp |
| Lọc nhóm chủ đề | Đạt |
| Chuyển kiểu thẻ/danh sách | Đạt |
| Menu mobile mở và tự đóng khi chọn liên kết | Đạt |
| Nút thiếu accessible name sau khi bổ sung aria-label | 0 |
| Input/select thiếu nhãn | 0 |
| Lỗi console và lỗi JavaScript runtime | 0 |

Các chiều rộng viewport được thử: **320, 360, 375, 390, 430, 768, 820, 1024, 1440 px**. Ở tất cả các kích thước thử, `documentElement.scrollWidth` và `body.scrollWidth` không lớn hơn chiều rộng viewport, tức không phát hiện tràn ngang trong bộ test này.

**Giới hạn test:** nội dung Markdown được nạp từ dữ liệu cục bộ qua fetch shim trong trình duyệt để cô lập việc kiểm tra UI. Đây là kiểm thử giao diện và logic client, không phải đo tốc độ tải trên hosting production, kiểm thử trên mọi trình duyệt/thiết bị vật lý hoặc kiểm thử mạng yếu.

Ngoài ra, đã quét **46 liên kết tương đối nội bộ** trong các file Markdown/HTML dành cho bản Việt Nam và không phát hiện đường dẫn nội bộ bị gãy. Phép kiểm tra này không bao gồm xác minh phản hồi của toàn bộ URL bên ngoài.

## 5. Còn những gì chưa thể kết luận

1. **Không phải 767 mục đã được thẩm định từng kết luận:** toàn văn đã được trích xuất và khớp ma trận, song P1/P2/P3 là mức ưu tiên kiểm toán, không phải số lượng mục sai/đúng hoặc kết luận của bác sĩ/luật sư.
2. **Chưa xác minh độc lập toàn bộ 2.531 URL:** báo cáo và ma trận phân loại giúp tìm rủi ro, nhưng chưa có kiểm tra từng nguồn, từng nghiên cứu gốc, trạng thái rút bài/đính chính và chất lượng phương pháp.
3. **Chưa có phản biện chuyên gia:** các nội dung liều thuốc, chẩn đoán, sàng lọc, sơ cứu, sức khỏe tâm thần, quyền lợi tranh chấp, thuế, đầu tư và bất động sản cần bác sĩ/dược sĩ/luật sư/chuyên gia tương ứng thẩm định trước khi xuất bản như tài liệu tư vấn.
4. **Thông tin biến động cần cập nhật liên tục:** luật, thuế, phí, lương, số liệu thị trường và dịch vụ công cần ngày hiệu lực/kỳ dữ liệu; mốc 02/11/2026 không phải lời khẳng định cho các năm sau.
5. **Gói RC2 là bản phát hành ứng viên:** cần thử trên hosting thật, thiết bị iOS/Android, trình duyệt Safari/Firefox và kiểm tra tiếp đường dẫn ngoài trước khi gọi là bản ổn định.

## 6. Danh sách file đã cập nhật trong RC2

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `book/01-suc-khoe-va-phong-ngua.md`
- `book/02-loi-song-va-benh-man-tinh.md`
- `sources/NGUON_VIET_NAM_2026.md`
- `PHU_LUC_THUC_HANH_VIET_NAM_2026.md`
- `audit/BAO_CAO_KIEM_TOAN_CHI_TIET.md`
- `audit/BAO_CAO_THAM_DINH_VONG_2.md`
- `skills/life-decision-guide/SKILL.md`
- `QUY_TAC_BIEN_TAP.md`
- `README.md`
- `CHANGELOG.md`

**Trạng thái:** HowToLiveBetter Vietnam 1.0 RC2 — nội dung đã sửa các sai lệch được phát hiện trong vòng rà soát này; giao diện và logic client đã qua bộ kiểm thử responsive nêu trên; chưa phải bản thẩm định chuyên môn độc lập.
