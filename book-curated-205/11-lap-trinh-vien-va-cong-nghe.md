# 11. Lưu ý pháp lý cho lập trình viên và người làm công nghệ

## 1. Kiểm thử bảo mật chỉ trong phạm vi được ủy quyền
Có văn bản xác định hệ thống, tài khoản, thời gian, loại kiểm thử, giới hạn tải và cách báo lỗi. “Tôi chỉ thử cho tốt” hoặc “định báo sau” không thay cho sự cho phép. Không quét, khai thác hay tải dữ liệu của hệ thống bên thứ ba khi chưa có thẩm quyền.

## 2. Bảo vệ dữ liệu cá nhân ngay từ khâu thiết kế
Chỉ thu dữ liệu cần thiết, công bố mục đích, thời hạn lưu, bên nhận và cơ chế xử lý quyền của chủ thể dữ liệu. Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 có hiệu lực 1/1/2026; dự án cần rà soát căn cứ xử lý, bảo vệ, chia sẻ, lưu trữ và chuyển dữ liệu ra nước ngoài cùng văn bản hướng dẫn.

## 3. Kiểm tra giấy phép mã nguồn mở trước khi tích hợp
Ghi lại thư viện, phiên bản, giấy phép và nghĩa vụ thông báo/đính kèm/đưa mã nguồn. GPL, MIT, Apache, AGPL và giấy phép thương mại có điều kiện khác nhau. Không kết luận chỉ cần ghi tên tác giả là đã tuân thủ tất cả.

## 4. Tách tài sản công ty khỏi dự án cá nhân
Đọc hợp đồng lao động, thỏa thuận bảo mật, quyền sở hữu trí tuệ và quy định thiết bị. Dùng thiết bị, tài khoản và thời gian riêng cho dự án cá nhân; không mang mã nguồn, khóa bí mật, danh sách khách hàng hoặc tài liệu nội bộ sang nơi khác nếu không được phép.

## 5. Crawler, scraping, VPN và tự động hóa cần đánh giá theo trường hợp
Không phải mọi crawler đều tự động phạm luật, nhưng truy cập trái phép, vượt biện pháp bảo vệ, thu thập dữ liệu cá nhân, làm gián đoạn dịch vụ, vi phạm hợp đồng hoặc khai thác lỗ hổng có thể phát sinh trách nhiệm. Xem điều khoản, quyền truy cập, dữ liệu thu thập, tải hệ thống và mục đích sử dụng.

## 6. Sản phẩm AI cần kiểm soát rủi ro
Đừng đưa API key, dữ liệu khách hàng hoặc mã nguồn bí mật vào AI trung gian không rõ nguồn. Khi AI có thể chạy lệnh, giới hạn quyền, dùng sandbox, yêu cầu duyệt thao tác nhạy cảm và ghi log. Với dịch vụ công chúng, rà soát quy định về AI, dữ liệu, an ninh mạng, sở hữu trí tuệ và thương mại điện tử đang có hiệu lực.

## Nguồn tham khảo để kiểm tra
Các đường dẫn dưới đây là đầu mối kiểm chứng cho chủ đề của chương, không có nghĩa từng câu trong chương đã được chuyên gia thẩm định.
- [Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=)
- [Luật Thương mại điện tử 122/2025/QH15](https://vanban.chinhphu.vn/?classid=1&docid=216503&pageid=27160&typegroupid=3)
- [Cơ sở dữ liệu quốc gia về văn bản pháp luật](https://vbpl.vn/)

## Checklist pháp lý cho lập trình viên tại Việt Nam

1. Chỉ kiểm thử hệ thống khi có quyền/ủy quyền rõ ràng; lưu phạm vi, thời gian, tài khoản thử nghiệm và cách báo cáo lỗ hổng. Không truy cập trái phép, phá hoại, né xác thực hoặc lấy dữ liệu thật chỉ vì mục tiêu “nghiên cứu”.
2. “Trang công khai” không đồng nghĩa dữ liệu được tự do thu thập, tái sử dụng hoặc bán. Rà dữ liệu cá nhân, điều khoản dịch vụ, quyền sở hữu trí tuệ, bí mật kinh doanh, cơ sở dữ liệu và tác động đến hệ thống.
3. Không dùng dữ liệu khách hàng để huấn luyện/chia sẻ cho bên thứ ba nếu chưa xác định căn cứ xử lý, thông báo, hợp đồng và biện pháp bảo vệ phù hợp. Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP có hiệu lực từ 01/01/2026.
4. Với sản phẩm nền tảng/marketplace/livestream, phân loại theo Luật Thương mại điện tử 122/2025/QH15 (hiệu lực 01/07/2026) và pháp luật chuyên ngành; không áp sơ đồ giấy phép Trung Quốc.
5. Xác định quyền đối với mã nguồn, thư viện, mô hình AI, dữ liệu huấn luyện, hình ảnh, font và nội dung bên thứ ba; giữ file giấy phép và hồ sơ nguồn.

Nguồn: [Luật 91/2025](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=), [Nghị định 356/2025](https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160), [Luật 122/2025](https://vanban.chinhphu.vn/?classid=1&docid=216503&pageid=27160&typegroupid=3), [Luật Công nghiệp công nghệ số 71/2025](https://vanban.chinhphu.vn/?classid=1&docid=214609&pageid=27160).

