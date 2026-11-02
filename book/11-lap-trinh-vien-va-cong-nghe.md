# 11. Lưu ý pháp lý cho lập trình viên và người làm công nghệ

> Ấn bản đầy đủ: 21 mục. Mỗi mục giữ mã truy vết; nội dung được biên tập theo bối cảnh Việt Nam. Trạng thái P1/P2 cho biết cần xác minh, không đồng nghĩa đã được chuyên gia thẩm định.

## 1. Trước khi viết phần mềm có rủi ro, kiểm tra quyền được phép và mục đích sử dụng

**Mã lời khuyên:** `HTLB-348`  
**Khuyến nghị:** Trước khi viết phần mềm có rủi ro, kiểm tra quyền được phép và mục đích sử dụng
**Cách áp dụng:** Chỉ kiểm thử hệ thống khi có ủy quyền bằng văn bản; quản lý quyền truy cập, log, dữ liệu cá nhân và bản quyền thư viện; có quy trình xử lý lỗ hổng trước khi phát hành.
**Bối cảnh Việt Nam:** Với sản phẩm tại Việt Nam, lập danh sách hoạt động: lưu trữ/xử lý dữ liệu, thanh toán, nội dung người dùng, quảng cáo, giao dịch và nghĩa vụ thuế.
**Lưu ý:** Không dùng luật Trung Quốc hoặc mặc định mọi website đều cần cùng một giấy phép. Kiểm tra văn bản Việt Nam theo mô hình và chức năng cụ thể.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 2. Không phát triển hoặc phân phối công cụ gian lận, can thiệp trái phép hay vượt cơ chế bảo vệ

**Mã lời khuyên:** `HTLB-349`  
**Khuyến nghị:** Không phát triển hoặc phân phối công cụ gian lận, can thiệp trái phép hay vượt cơ chế bảo vệ
**Cách áp dụng:** Chỉ nghiên cứu bảo mật trong môi trường thử nghiệm hoặc theo hợp đồng ủy quyền rõ phạm vi; báo cáo lỗ hổng có trách nhiệm và không khai thác dữ liệu thật.
**Bối cảnh Việt Nam:** Phân biệt kiểm thử hợp pháp với truy cập trái phép vào hệ thống/dữ liệu của người khác.
**Lưu ý:** Không phát triển/phân phối mã độc, công cụ đánh cắp dữ liệu hoặc dịch vụ gây hại; xác minh pháp luật Việt Nam và điều khoản nền tảng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 3. Không tạo bot gây thao túng vé, đơn hàng, lượt xem hoặc chương trình khuyến mại

**Mã lời khuyên:** `HTLB-350`  
**Khuyến nghị:** Không tạo bot gây thao túng vé, đơn hàng, lượt xem hoặc chương trình khuyến mại
**Cách áp dụng:** Không tạo bot giả người dùng để thao túng giao dịch, vé, khuyến mại hoặc chỉ số; nếu tự động hóa hợp pháp, dùng API được phép và giới hạn tần suất.
**Bối cảnh Việt Nam:** Tuân thủ điều khoản nền tảng, bảo vệ người tiêu dùng và quy định về giao dịch điện tử.
**Lưu ý:** Không dùng tài khoản giả, vượt CAPTCHA hoặc lấy dữ liệu trái phép.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 4. Thu thập dữ liệu web trong phạm vi cho phép; tôn trọng điều khoản, dữ liệu cá nhân và biện pháp bảo vệ hợp pháp

**Mã lời khuyên:** `HTLB-351`  
**Khuyến nghị:** Thu thập dữ liệu web trong phạm vi cho phép; tôn trọng điều khoản, dữ liệu cá nhân và biện pháp bảo vệ hợp pháp
**Cách áp dụng:** Lên thực đơn tuần với rau, trái cây, đậu, cá/trứng/thịt nạc và ngũ cốc phù hợp ngân sách; thay từng phần thay vì kiêng cực đoan. Đọc nhãn muối, đường và chất béo.
**Bối cảnh Việt Nam:** Ưu tiên thực phẩm theo mùa, chợ/siêu thị tin cậy và cách chế biến ít muối; cân đối khẩu phần theo bệnh nền.
**Lưu ý:** Không có một thực đơn tối ưu cho mọi người. Người có bệnh thận, dị ứng, rối loạn ăn uống hoặc đang mang thai cần hướng dẫn riêng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 5. Từ chối dự án liên quan lừa đảo, cờ bạc trái phép hoặc nội dung xâm hại

**Mã lời khuyên:** `HTLB-352`  
**Khuyến nghị:** Từ chối dự án liên quan lừa đảo, cờ bạc trái phép hoặc nội dung xâm hại
**Cách áp dụng:** Chặn ứng dụng/trang cá cược, tự giới hạn quyền truy cập tiền, nhờ người tin cậy hỗ trợ và lập danh sách nợ/chi phí thiết yếu. Tìm tư vấn tâm lý hoặc hỗ trợ điều trị khi mất kiểm soát.
**Bối cảnh Việt Nam:** Cờ bạc trực tuyến có thể kéo theo lừa đảo, vay nặng lãi và rủi ro pháp lý tại Việt Nam.
**Lưu ý:** Không vay thêm để gỡ, không giao OTP/tài khoản ngân hàng cho người khác. Hành vi cá cược cụ thể cần đối chiếu pháp luật Việt Nam.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 6. Khi nghỉ việc, bàn giao tài khoản và mã nguồn theo hợp đồng; không xóa dữ liệu hoặc cài cửa hậu

**Mã lời khuyên:** `HTLB-353`  
**Khuyến nghị:** Khi nghỉ việc, bàn giao tài khoản và mã nguồn theo hợp đồng; không xóa dữ liệu hoặc cài cửa hậu
**Cách áp dụng:** Lưu hợp đồng, hóa đơn, email/tin nhắn, ảnh và mốc thời gian; lập bản tường trình trung tính, yêu cầu phản hồi bằng văn bản và dùng đúng cơ quan/kênh tiếp nhận.
**Bối cảnh Việt Nam:** Áp dụng theo pháp luật Việt Nam, địa bàn và loại quan hệ; có thể tìm trợ giúp pháp lý hoặc luật sư khi số tiền/rủi ro lớn.
**Lưu ý:** Không dùng số điều, thời hạn, mức phạt hoặc cơ quan của Trung Quốc. Không xóa chứng cứ, đe dọa hay đăng dữ liệu cá nhân lên mạng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 7. Không mang mã nguồn, dữ liệu khách hàng hoặc tài liệu mật của công ty sang nơi khác

**Mã lời khuyên:** `HTLB-354`  
**Khuyến nghị:** Không mang mã nguồn, dữ liệu khách hàng hoặc tài liệu mật của công ty sang nơi khác
**Cách áp dụng:** Chỉ kiểm thử hệ thống khi có ủy quyền bằng văn bản; quản lý quyền truy cập, log, dữ liệu cá nhân và bản quyền thư viện; có quy trình xử lý lỗ hổng trước khi phát hành.
**Bối cảnh Việt Nam:** Với sản phẩm tại Việt Nam, lập danh sách hoạt động: lưu trữ/xử lý dữ liệu, thanh toán, nội dung người dùng, quảng cáo, giao dịch và nghĩa vụ thuế.
**Lưu ý:** Không dùng luật Trung Quốc hoặc mặc định mọi website đều cần cùng một giấy phép. Kiểm tra văn bản Việt Nam theo mô hình và chức năng cụ thể.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 8. Không chạy phần mềm trên máy chủ, camera hoặc máy tính của người khác khi chưa được phép

**Mã lời khuyên:** `HTLB-355`  
**Khuyến nghị:** Không chạy phần mềm trên máy chủ, camera hoặc máy tính của người khác khi chưa được phép
**Cách áp dụng:** Chỉ kiểm thử hệ thống khi có ủy quyền bằng văn bản; quản lý quyền truy cập, log, dữ liệu cá nhân và bản quyền thư viện; có quy trình xử lý lỗ hổng trước khi phát hành.
**Bối cảnh Việt Nam:** Với sản phẩm tại Việt Nam, lập danh sách hoạt động: lưu trữ/xử lý dữ liệu, thanh toán, nội dung người dùng, quảng cáo, giao dịch và nghĩa vụ thuế.
**Lưu ý:** Không dùng luật Trung Quốc hoặc mặc định mọi website đều cần cùng một giấy phép. Kiểm tra văn bản Việt Nam theo mô hình và chức năng cụ thể.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 9. Chỉ kiểm thử bảo mật khi có văn bản ủy quyền và phạm vi rõ ràng

**Mã lời khuyên:** `HTLB-356`  
**Khuyến nghị:** Chỉ kiểm thử bảo mật khi có văn bản ủy quyền và phạm vi rõ ràng
**Cách áp dụng:** Chỉ kiểm thử hệ thống khi có ủy quyền bằng văn bản; quản lý quyền truy cập, log, dữ liệu cá nhân và bản quyền thư viện; có quy trình xử lý lỗ hổng trước khi phát hành.
**Bối cảnh Việt Nam:** Với sản phẩm tại Việt Nam, lập danh sách hoạt động: lưu trữ/xử lý dữ liệu, thanh toán, nội dung người dùng, quảng cáo, giao dịch và nghĩa vụ thuế.
**Lưu ý:** Không dùng luật Trung Quốc hoặc mặc định mọi website đều cần cùng một giấy phép. Kiểm tra văn bản Việt Nam theo mô hình và chức năng cụ thể.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 10. Báo cáo lỗ hổng có trách nhiệm; không công khai cách khai thác trước khi phối hợp xử lý

**Mã lời khuyên:** `HTLB-357`  
**Khuyến nghị:** Báo cáo lỗ hổng có trách nhiệm; không công khai cách khai thác trước khi phối hợp xử lý
**Cách áp dụng:** Tìm chính sách tiếp nhận lỗ hổng/địa chỉ security contact, gửi mô tả tối thiểu có thể tái hiện và bằng chứng không chứa dữ liệu thật; cho tổ chức thời gian khắc phục.
**Bối cảnh Việt Nam:** Chỉ thử trên hệ thống thuộc phạm vi cho phép; lưu email/ủy quyền và phạm vi báo cáo.
**Lưu ý:** Không công khai exploit, dữ liệu cá nhân hoặc truy cập sâu hơn sau khi phát hiện; không đòi tiền chuộc.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 11. Kiểm tra pháp luật và điều kiện cung cấp dịch vụ VPN, proxy hoặc công cụ vượt hạn chế mạng

**Mã lời khuyên:** `HTLB-358`  
**Khuyến nghị:** Kiểm tra pháp luật và điều kiện cung cấp dịch vụ VPN, proxy hoặc công cụ vượt hạn chế mạng
**Cách áp dụng:** Xác định mục đích sử dụng, chính sách nơi làm việc/nền tảng và quy định tại Việt Nam; chọn nhà cung cấp minh bạch về lưu log, bảo mật và pháp nhân.
**Bối cảnh Việt Nam:** VPN có thể phục vụ bảo mật kết nối nhưng không làm hợp pháp hành vi trái phép.
**Lưu ý:** Không dùng để xâm nhập hệ thống, che giấu gian lận hoặc vi phạm quyền riêng tư; xác minh quy định hiện hành.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 12. Đọc điều khoản không cạnh tranh, phạm vi bí mật và nghĩa vụ bồi thường trước khi ký

**Mã lời khuyên:** `HTLB-359`  
**Khuyến nghị:** Đọc điều khoản không cạnh tranh, phạm vi bí mật và nghĩa vụ bồi thường trước khi ký
**Cách áp dụng:** Đọc phạm vi thông tin mật, thời hạn, đối tượng cạnh tranh, nghĩa vụ sau nghỉ việc và khoản bồi thường; yêu cầu điều khoản cụ thể, cân xứng và tư vấn trước khi ký.
**Bối cảnh Việt Nam:** Quan hệ lao động và bảo vệ bí mật kinh doanh tại Việt Nam có quy định riêng; không dùng mẫu Trung Quốc.
**Lưu ý:** Không tự kết luận mọi điều khoản không cạnh tranh đều có hiệu lực hoặc vô hiệu; cần đánh giá nội dung và luật áp dụng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 13. Tách biệt dự án cá nhân với tài sản, thời gian và mã nguồn của người sử dụng lao động

**Mã lời khuyên:** `HTLB-360`  
**Khuyến nghị:** Tách biệt dự án cá nhân với tài sản, thời gian và mã nguồn của người sử dụng lao động
**Cách áp dụng:** Lên thực đơn tuần với rau, trái cây, đậu, cá/trứng/thịt nạc và ngũ cốc phù hợp ngân sách; thay từng phần thay vì kiêng cực đoan. Đọc nhãn muối, đường và chất béo.
**Bối cảnh Việt Nam:** Ưu tiên thực phẩm theo mùa, chợ/siêu thị tin cậy và cách chế biến ít muối; cân đối khẩu phần theo bệnh nền.
**Lưu ý:** Không có một thực đơn tối ưu cho mọi người. Người có bệnh thận, dị ứng, rối loạn ăn uống hoặc đang mang thai cần hướng dẫn riêng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 14. Tuân thủ giấy phép phần mềm nguồn mở và lưu lại nghĩa vụ thông báo/ghi công

**Mã lời khuyên:** `HTLB-361`  
**Khuyến nghị:** Tuân thủ giấy phép phần mềm nguồn mở và lưu lại nghĩa vụ thông báo/ghi công
**Cách áp dụng:** Tắt thông báo không thiết yếu, đặt điện thoại ngoài tầm tay và dành một khung 25–50 phút cho một việc; ghi việc cần kiểm tra sau phiên tập trung.
**Bối cảnh Việt Nam:** Điều chỉnh cho phù hợp công việc có yêu cầu trực điện thoại, chăm sóc gia đình hoặc xử lý sự cố.
**Lưu ý:** Không tắt thông báo an toàn/cấp cứu hoặc kênh liên lạc bắt buộc của công việc.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 15. Chỉ thu thập dữ liệu cá nhân cần thiết; giải thích mục đích và cơ sở xử lý

**Mã lời khuyên:** `HTLB-362`  
**Khuyến nghị:** Chỉ thu thập dữ liệu cá nhân cần thiết; giải thích mục đích và cơ sở xử lý
**Cách áp dụng:** Lên thực đơn tuần với rau, trái cây, đậu, cá/trứng/thịt nạc và ngũ cốc phù hợp ngân sách; thay từng phần thay vì kiêng cực đoan. Đọc nhãn muối, đường và chất béo.
**Bối cảnh Việt Nam:** Ưu tiên thực phẩm theo mùa, chợ/siêu thị tin cậy và cách chế biến ít muối; cân đối khẩu phần theo bệnh nền.
**Lưu ý:** Không có một thực đơn tối ưu cho mọi người. Người có bệnh thận, dị ứng, rối loạn ăn uống hoặc đang mang thai cần hướng dẫn riêng.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 16. Trước khi đưa website/app vào hoạt động, kiểm tra nghĩa vụ thông báo, đăng ký, giấy phép và an toàn thông tin

**Mã lời khuyên:** `HTLB-363`  
**Khuyến nghị:** Trước khi đưa website/app vào hoạt động, kiểm tra nghĩa vụ thông báo, đăng ký, giấy phép và an toàn thông tin
**Cách áp dụng:** Tắt thông báo không thiết yếu, đặt điện thoại ngoài tầm tay và dành một khung 25–50 phút cho một việc; ghi việc cần kiểm tra sau phiên tập trung.
**Bối cảnh Việt Nam:** Điều chỉnh cho phù hợp công việc có yêu cầu trực điện thoại, chăm sóc gia đình hoặc xử lý sự cố.
**Lưu ý:** Không tắt thông báo an toàn/cấp cứu hoặc kênh liên lạc bắt buộc của công việc.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 17. Nếu cung cấp dịch vụ AI cho công chúng, kiểm tra nghĩa vụ hiện hành về dữ liệu, nội dung, an toàn và minh bạch

**Mã lời khuyên:** `HTLB-364`  
**Khuyến nghị:** Nếu cung cấp dịch vụ AI cho công chúng, kiểm tra nghĩa vụ hiện hành về dữ liệu, nội dung, an toàn và minh bạch
**Cách áp dụng:** Lập sơ đồ dữ liệu đầu vào/đầu ra, cách xử lý khiếu nại, nội dung rủi ro, người dùng trẻ em và thông tin AI tạo ra; công bố giới hạn và kênh hỗ trợ.
**Bối cảnh Việt Nam:** Rà soát quy định Việt Nam về dữ liệu, bảo vệ người tiêu dùng, sở hữu trí tuệ và nội dung số theo sản phẩm.
**Lưu ý:** Không giả mạo chuyên gia/người thật, không đưa dữ liệu cá nhân trái căn cứ; AI output cần kiểm soát.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 18. Không phát triển công cụ can thiệp trái phép vào quảng cáo hoặc hoạt động kinh doanh của nền tảng khác

**Mã lời khuyên:** `HTLB-365`  
**Khuyến nghị:** Không phát triển công cụ can thiệp trái phép vào quảng cáo hoặc hoạt động kinh doanh của nền tảng khác
**Cách áp dụng:** Kiểm tra hoạt chất, công bố/đăng ký, nhà sản xuất, hạn dùng và bằng chứng cho đúng công dụng; so sánh tổng chi phí và hỏi người có chuyên môn trước khi dùng.
**Bối cảnh Việt Nam:** Không mua chỉ qua livestream/tin nhắn; tìm thông tin từ cơ quan quản lý và nhà thuốc/cơ sở có phép.
**Lưu ý:** Quảng cáo “chữa khỏi”, “cam kết”, “không tác dụng phụ” là dấu hiệu cần cảnh giác. Sản phẩm bổ sung có thể tương tác thuốc.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 19. Khi cung cấp dịch vụ AI qua trung gian, kiểm tra quyền sử dụng API, điều khoản nhà cung cấp và nghĩa vụ kinh doanh

**Mã lời khuyên:** `HTLB-366`  
**Khuyến nghị:** Khi cung cấp dịch vụ AI qua trung gian, kiểm tra quyền sử dụng API, điều khoản nhà cung cấp và nghĩa vụ kinh doanh
**Cách áp dụng:** Thử nghiệm nhu cầu và dòng tiền trước khi mở rộng; xác định loại hình, ngành nghề có điều kiện, hóa đơn, thuế, hợp đồng lao động, bảo hiểm và trách nhiệm sản phẩm.
**Bối cảnh Việt Nam:** Làm việc với cơ quan đăng ký kinh doanh/thuế tại Việt Nam, kế toán và đơn vị tư vấn được cấp phép khi cần.
**Lưu ý:** Không dùng ngưỡng doanh thu, thủ tục, thuế hoặc ưu đãi của Trung Quốc. Xác minh văn bản và mốc hiệu lực 2026 trước khi triển khai.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 20. Không viết hoặc phân phối bản crack, keygen hay bản sao phần mềm trái phép

**Mã lời khuyên:** `HTLB-367`  
**Khuyến nghị:** Không viết hoặc phân phối bản crack, keygen hay bản sao phần mềm trái phép
**Cách áp dụng:** Chỉ kiểm thử hệ thống khi có ủy quyền bằng văn bản; quản lý quyền truy cập, log, dữ liệu cá nhân và bản quyền thư viện; có quy trình xử lý lỗ hổng trước khi phát hành.
**Bối cảnh Việt Nam:** Với sản phẩm tại Việt Nam, lập danh sách hoạt động: lưu trữ/xử lý dữ liệu, thanh toán, nội dung người dùng, quảng cáo, giao dịch và nghĩa vụ thuế.
**Lưu ý:** Không dùng luật Trung Quốc hoặc mặc định mọi website đều cần cùng một giấy phép. Kiểm tra văn bản Việt Nam theo mô hình và chức năng cụ thể.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## 21. Không thực hiện hoặc cho thuê hạ tầng tấn công từ chối dịch vụ; chỉ thử tải trong môi trường được phép

**Mã lời khuyên:** `HTLB-368`  
**Khuyến nghị:** Không thực hiện hoặc cho thuê hạ tầng tấn công từ chối dịch vụ; chỉ thử tải trong môi trường được phép
**Cách áp dụng:** Chỉ thử tải trên hệ thống do mình sở hữu hoặc có ủy quyền; đặt giới hạn, thời gian và liên hệ đầu mối kỹ thuật trước khi chạy kiểm thử.
**Bối cảnh Việt Nam:** Lưu văn bản phạm vi thử nghiệm và địa chỉ IP/tên miền được phép.
**Lưu ý:** Không cho thuê hạ tầng, botnet hoặc chạy DDoS vào hệ thống bên thứ ba.
**Mức kiểm chứng:** P1 — Cần thẩm định chuyên môn/pháp lý trước khi coi là hướng dẫn chắc chắn.
**Nguồn khởi điểm để kiểm tra:** [Nguồn 1](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) · [Nguồn 2](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160). Cần mở và xác minh tài liệu cụ thể; đường dẫn cơ quan không tự chứng minh khuyến nghị.

## Ghi chú về phạm vi

Mã gốc được giữ để truy vết. Nội dung Trung Quốc không được dùng làm chuẩn pháp lý/chính sách tại Việt Nam. Nguồn ghi ở từng mục là điểm bắt đầu tra cứu, không nhất thiết là tài liệu chứng minh trực tiếp toàn bộ khuyến nghị. Các mục P1/P2 cần xác minh trước khi được xem là kết luận chắc chắn.

Nguồn khởi điểm: [Cổng văn bản Chính phủ](https://vanban.chinhphu.vn/) · [Cơ sở dữ liệu quốc gia về văn bản pháp luật](https://vbpl.vn/) · [Bộ Y tế](https://moh.gov.vn/).
