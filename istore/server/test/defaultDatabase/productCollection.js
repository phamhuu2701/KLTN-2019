const Product = require("../../models/product.model");
const ProductDao = require("../../dao/product.dao");

const imageUrls = [
    "./images/download1.jpg",
    "./images/download2.jpg",
    "./images/download3.jpg",
    "./images/download4.jpg",
    "./images/download5.jpg",
    "./images/download6.jpg",
    "./images/download7.jpg",
    "./images/download8.jpg",
    "./images/download9.jpg",
    "./images/download10.jpg",
    "./images/download11.jpg",
    "./images/download12.jpg",
    "./images/download13.jpg",
    "./images/download14.jpg",
    "./images/download15.jpg",
    "./images/download16.jpg",
    "./images/download17.jpg",
    "./images/download18.jpg",
    "./images/download19.jpg",
    "./images/download20.jpg"
];

const products = [
    {
        name: `Bóng đèn led Comet chính hãng siêu bền`,
        description: `Bóng đèn LED hiệu Comet đuôi xoáy E27 thông dụng nhất, công suất đa dạng, dùng chiếu sáng trong nhà, ngoài trời thay bóng đèn compact cũ...
            Đèn Comet là thương hiệu đèn nổi tiếng về uy tín và chất lượng trên thị trường đèn chiếu sáng hiện nay. 
            Sản phẩm này ứng dụng công nghệ chiếu sáng chip LED tiên tiến nhất với tính năng ưu việt, vô cùng tiết kiệm điện, không chứa chất độc hại và giá cả phải chăng.
            Bóng đèn được sản xuất bởi thương hiệu uy tín, đủ công suất, độ sáng luôn bảo đảm sau nhiều năm sữ dụng, an toàn điện chống cháy nổ theo tiêu chuẩn cao nhất
            * Công suất: 7W - 9W - 15W - 18W - 28W:
                    * 7W ánh sáng vàng ấm áp: phù hợp làm đèn cầu thang, thay bóng đèn bàn học, bóng đèn âm trần.
                    * 9W - 15W: là loại bóng đèn thông dụng nhất trong nhà, phù hợp thay thế bóng đèn compact đang dùng trong bếp nấu, phòng khách, hành lang, phòng ngủ, nhà vệ sinh,...vv
                    * 18W - 28W: bóng đèn siêu sáng dùng cho buôn bán ngoài trời, quán ăn lề đường, chiếu sáng vĩa hè, nhà xưởng sản xuất
            -----------------------------
            DNTN MY TRẦN là đại lý bán buôn, bán lẻ các sản phẩm điện dân dụng và thiết bị chiếu sáng công nghệ LED.
            Nguồn hàng Cty phân phối được nhập trực tiếp từ chính hãng sản xuất với gía cạnh tranh nhất.
            Chúng tôi cam kết kiểm tra kỹ từng sản phẩm trước khi gữi hàng và chịu trách nhiệm bảo hành 1 đổi 1 trong thời hạn 12 tháng.
            Quý khách hoàn toàn yên tâm khi mua hàng tại shop.
            Cty xuất hóa đơn cho khách mua hàng số lượng.
            ----------------------------`,
        price: 85000,
        saleoff: 10,
        images: []
    },
    {
        name: `Bóng đèn cảm biến âm thanh E27 5W`,
        description: `Bóng đèn cảm biến âm thanh E27 5W
            Bóng đèn Led trụ siêu sáng tiết kiệm điện, sáng gấp 2 lần bóng U và gấp 3 lần bóng sợi đốt cùng công suất.
            Loại giao diện: Đuôi E27
            Điện áp đầu vào: 220V
            Công suất: 5W
            Chùm tia góc: 360 độ
            Lumens (lm): 1100-1210LM
            Bảo hành: 12 Tháng`,
        price: 79000,
        saleoff: 47,
        images: []
    },
    {
        name: `BÓNG ĐÈN THÔNG MINH XIAOMI YEELIGHT 2 16 TRIỆU MÀU (2019) -Bóng đèn LED thông minh Xiaomi Yeelight 2`,
        description: `█ Tại sao bạn nên chọn Đèn thông minh Xiaomi Yeelight Bulb (Color) của 978 Store :
            ✔ Có tới 16 triệu màu và độ sáng tự động thay đổi
            ✔ Đèn được trang bị công nghệ đèn LED thông minh với khả năng tiêu thụ điện năng thấp, chuyển đổi hàng triệu màu sắc phù hợp với môi trường và tâm trạng người dùng
            ✔ Công suất chỉ 10W nhưng lại cho quang thông lên đến 800 lumens tăng độ sáng lên hơn 33% so với các loại bóng đèn LED thông thường khác
            ✔ Đèn có khả năng điều chỉnh được nhiệt độ màu từ 1700K-6500K từ tone màu ấm sang tone màu lạnh tùy theo nhu cầu người dùng và nhiệt độ môi trường xung quanh
            ✔ Độ bền lên tới 11 năm (25.000 tiếng)
            ✔ Điều khiển tắt mở, thay đổi độ sáng, màu sắc từ xa trên smartphone và tương thích với đầu đui E27 khá phổ biến
            ✔ Đặc biệt có thể làm việc với Amazon Alexa, Google Assistant (Google Home) qua điều khiển giọng nói của bạn đặt hàng.
            -------------------------------------------
            Thông số chi tiết:
            ✔ Model: YLDP06YL
            ✔ Giao diện: E27
            ✔ Quang thông: 800 lumens
            ✔ Nhiệt độ màu: 1700K-6500K
            ✔ Tuổi thọ: 25000 giờ
            ✔ Kết nối không dây: Wi-Fi IEEE 802.11 b/g/n 2.4GHz
            ✔ Đầu vào: 220V-240V~50/60Hz 0.05A
            ✔ Công suất định mức: 10W

            BẢO HÀNH DO LỖI NSX QUA TEM BẢO HÀNH DÁN TRÊN SẢN PHẨM
            #sale #978store #phukienxiaomi #giamgia #xiaomi #phukien #giare #re #denthongminh #bongdenthongminh #denngu #denled #led #den #denxiaomi #denthongminh xiaomi`,
        price: 329900,
        saleoff: 28,
        images: []
    },
    {
        name: `Đèn Led 3w tiết kiệm điện siêu sáng chống nước cao cấp`,
        description: `Đèn Led 3w  tiết kiệm điện siêu sáng chống nước cao cấp
            #Công dụng:
            +Bóng đèn Led 3-5w sử dụng làm đèn trang trí, đèn tường, đèn góc, đèn gương, đèn ở khu vực nhỏ cần sáng ít.
            +Công nghệ chip Led Heli.os siêu sáng, cho ánh sáng mạnh
            +Thiết kế chống nước, cho khả năng sử dụng ngoài trời
            #Tiết kiệm điện:
            +Đèn LED POSSON là giải pháp tiết kiệm điện tuyệt vời cho mọi gia đình. Tiết kiệm đến 80% so với bóng đèn thông thường
            #Tuổi thọ, độ bền:
            +Led có tuổi thọ cao từ 15000 đến 25000 giờ, sử dụng đến vài năm sau mới có thể hỏng. 
            +Chất liệu bóng đèn bằng nhựa kỹ thuật giúp cho bóng đèn không sợ va chạm hay rơi vỡ.
            #Êm dịu mắt:
            +Ánh sáng giống như ánh sáng tự nhiên nên không hại mắt, không tỏa nhiệt nóng
            #Hướng dẫn chọn công suất bóng đèn phù hợp:
            +3-5W: Sử dụng làm đèn trang trí, đèn tường, đèn góc, đèn gương, đèn ở khu vực nhỏ cần sáng ít.
            #Nếu quý khách nhỡ mua công suất nhỏ mà cần độ sáng cao hơn thì liên hệ với shop để đổi công suất bóng lớn hơn. #Thông tin kỹ thuật:
            *Điện áp: 220V (175-245V)
            *Công suất: 3W
            *Chip Led: 6 Led Heli.os siêu sáng
            *Driver: IC (có đế nhôm tản nhiệt)
            *Ánh sáng: Trắng mát 6500K /Vàng nắng 3500K
            *Flux: 500lm /85lx
            *Góc chiếu sáng: 180 độ
            *Chống nước: Có
            *Đuôi đèn: E27: đuôi xoáy 27mm`,
        price: 10000,
        saleoff: 50,
        images: []
    },
    {
        name: `Bóng đèn cảm ứng hồng ngoại chuyển động thông minh 9w`,
        description: `Nguyên tắc hoạt động: Có người di chuyển trong vùng cảm ứng thì đèn sẽ sáng (dưới 10 lux – 7:30 tối trở đi )
            Đây là thiết bị cảm biến nhận diện sự chuyển động của con người. Tự động mở đèn khi có người di chuyển và thiếu ánh sáng (dưới 10 lux – 6:30 tối).
            Tự động mở đèn khi thiếu ánh sáng (dưới 10 lux – 6:30 tối) có người di chuyển trong vùng cảm ứng.
            Chất liệu cao cấp
                Độ bền cao
                An toàn cho người sử dụng
                Tiết kiệm điện năng tiêu thụ
                Bảo hành 6 tháng
                Lỗi 1 đổi 1 trong 1 tháng`,
        price: 59000,
        saleoff: 54,
        images: []
    },
    {
        name: `Bóng đèn LED SIÊU SÁNG - SIÊU TIẾT KIỆM ĐIỆN 5-65W`,
        description: `#bongden #bongled #LED 
            🍀 Bóng LED bầu kín sản xuất theo công nghệ Nhật, độ sáng cao (gấp 2-3lần bóng compact).
            🍀 Bóng LED đặc biệt tiết kiệm điện năng, có độ bền cao.
            🍀 Loại: đui xoáy; ánh sáng: trắng.
            🍀 Bảo hành: 12 tháng.`,
        price: 72000,
        saleoff: 0,
        images: []
    },
    {
        name: `Bóng đèn trụ LED 50W siêu sáng tiết kiệm điện bảo hành 1 năm`,
        description: `Ngày nay xu hướng sử dụng đèn Led càng ngày càng phổ biến trong đời sống khi giá của công nghệ này càng ngày càng rẻ đi và chúng đã được người dùng kiểm nghiệm thực tế là có công dụng tuyệt vời, có nhiều ưu điểm vượt trội so với các loại đèn cũ như: 
            - Tiết kiệm điện đến 90% so với bóng đèn sợi đốt.
            - Không tạo tia bức xạ, tia hồng ngoại, tia cực tím. Nhiệt độ của bóng thấp, cho ánh sáng dễ chịu, không chói mắt và hiệu suất chiếu sáng cao 
            - Bóng bầu kín chống nước có thể thắp sáng ngoài trời. 
            - Sản phẩm sử dụng chíp cao cấp SMD. Đèn led có tuổi thọ bền bỉ, lên đến 40 nghìn giờ thắp sáng. Đèn Led khi bật công tắc không có thời gian trễ, bật là sáng luôn không nhấp nháy. 
            Thuộc Tính Sản Phẩm :
            + Ánh sáng: trắng 
            + Chất liệu:  nhôm nhựa 
            + Điện áp : 220V/5`,
        price: 49500,
        saleoff: 10,
        images: []
    },
    {
        name: `Bóng led trụ 5W/8W/20W/30W/40W/50W đuôi E27`,
        description: `Bóng led trụ công suất từ 5W tới 50W với ánh sáng trắng và vàng. Bóng led tiết kiện điện,thân thiện môi trường với ánh sáng gấp đôi bóng huỳnh quang.
            Sử dụng thắp sáng trong nhà, ngoài sân ...
            #bongden #bongled #ledtru #5W #8W #20W #30W #40W #50W #E27`,
        price: 70000,
        saleoff: 15,
        images: []
    },
    {
        name: `Bóng đèn Compact Rạng Đông Ánh Sáng Trắng`,
        description: `Sản phẩm: BÓNG ĐÈN COMPACT
            💡💡Thương hiệu: Rạng Đông - Sản xuất tại Việt Nam
            💡Công suất: 7W - 11W - 14W - 15W - 20W - 25W - 30W
            💡Ánh sáng: trắng (khách order ánh sáng vàng xin inbox)
            >>>>>Cam kết hàng chuẩn công ty Rạng Đông 100% (có tem bảo hành chống giả dán trên thân mỗi bóng)<<<<<
            💡Bảo hành ĐỔI MỚI trong vòng 6 tháng kể từ ngày mua đối với lỗi kỹ thuật (như bóng không sáng, ánh sáng yếu khi mới dùng...)
            💡Đặc điểm sản phẩm:
            - Bóng đèn tiết kiệm điện năng 80% so với đèn sợi đốt
            - Độ sáng:
            Công suất 7W tương đương bóng 40W sợi đốt
            Công suất 11W tương đương bóng 60W sợi đốt
            Công suất 14W tương đương bóng 75W sợi đốt
            ....
            Công suất 30W tương đương bóng 150W sợi đốt
            - Sử dụng bột huỳnh quang 3 phổ
            - Hiệu suất sáng cao
            - Có thể hoạt động từ 170V - 240V
            - Bầu nhựa chống cháy PBT
            - Không dùng với công tắc điều chỉnh độ sáng
            - Tuổi thọ trung bình: 5000 - 8000 giờ
            💡💡Thông tin sản phẩm:
            Sản phẩm gồm: 1 bóng đèn compact 
            7W - ruột gà 3 xoắn - giá 30k
            14W - ruột gà 4 xoắn - giá 36k
            30W - ruột gà 5 xoắn - giá 60k
            11W - 2 U - giá 30k
            15W - 3 U - giá 35k
            20W - 3 U - giá 38k
            25W - 3 U - giá 45k
            Bao bì: hộp giấy
            #rangdong #compact #bóng #chinhhang #baohanh`,
        price: 45000,
        saleoff: 0,
        images: []
    },
    {
        name: `Bóng đèn năng lượng mặt trời 5 chế độ sáng chất lượng cao`,
        description: `Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày

            Thông tin chi tiết:
            Model: BLS-60-20D
            Chất liệu nhựa ABS + PC
            Kích thước bóng đèn: 60 * 125mm / 2.36 * 4.92, Khối lượng tịnh: 100g, công suất: 7W
            Kích thước bóng đèn: 70 * 145mm / 2,76 * 5,71, Khối lượng tịnh: 110g, công suất: 9W
            Tổng Khối lượng tịnh: 190g
            Nguồn sáng:
            20 Bóng 2835 LED 7W
            25 Bóng 2835 LED 9W
            Điện áp đầu vào: USB DC / 5-6V
            Thông lượng phát sáng: 150-200LM
            Pin: 18650 pin lithium 3,7V / 1200mAh
            Thời gian chiếu sáng: ≥8 giờ
            5 Chức năng, ba chức năng đầu tiên là chức năng làm mờ (cao, trung bình và thấp), chức năng thứ 4 là nhấp nháy, chức năng thứ 5 là SOS trong trường hợp khẩn cấp.
            Kèm tấm pin mặt trời 6V * 1.2W (khung nhựa của tấm pin mặt trời có kích thước 130 * 84 * 10 mm / 5,12 * 3,31 * 0,39, Khối lượng tịnh: 90g)
            Thời gian sạc là 6 giờ, trong điều kiện nhiều ánh nắng mặt trời.
            Tấm pin mặt trời có dây dài 3 mét chất lượng cao, giao diện USB Micro 5P
            Phụ kiện: Móc
            Kiểu: Điều khiển từ xa 9W
            Gói hàng bao gồm:
            1 Bóng đèn năng lượng mặt trời`,
        price: 140000,
        saleoff: 12,
        images: []
    },
    {
        name: `Bóng đèn Edison Vintage ST64 40W E27`,
        description: `Thiết kế: Bóng Đèn Edison Vintage SGB35ST64 40W E27

            Đuôi đèn: E27

            Quy cách: W62 x H140

            Công suất: 40W 

            Có thể tăng giàm độ sáng tùy thích (dùng với dimmer).

            Bảo hành: 6 tháng
            Loại bóng đèn  Bóng đèn sợi đốt
            Công suất(W)  40
            Kiểu bóng đèn  Hình trụ
            Kiểu đuôi đèn  Đuôi E27
            Nguồn điện sử dụng  220V
            Màu sáng  Màu ấm
            Chiều dài bóng đèn (mm)  62
            Xuất xứ  Trung Quốc`,
        price: 31000,
        saleoff: 10,
        images: []
    },
    {
        name: `Bóng đèn bắt muỗi Mosquito killer Lamp AC175-260V (Trắng)`,
        description: `❌  SHOP CAM KẾT
            - Hàng đúng như mô tả, ảnh
            - 1 đổi 1 trong 07 ngày nếu SP có lỗi từ NSX
            - Giao hàng toàn quốc, #Freeship cho đơn hàng >99.000đ
            - #Bansi toàn quốc, cam kết #giare nhất
            - Mua sỉ: :Liên hệ trực tiếp hoặc inbox

            ❌  MÔ TẢ SẢN PHẨM:  Bóng đèn bắt muỗi Mosquito killer Lamp AC175-260V (Trắng)

            Côn trùng đặc biệt là muỗi là trung gian truyền nhiễm các bệnh nguy hiểm như: Bệnh sốt xuất huyết,virus ZIKA, … Để chủ động phòng tránh dịch do muỗi và côn trùng truyền bệnh. không còn phải ngửi những mùi hương khó chịu do khói của các loại nhang muỗi hay mỏi tay cầm vợt bắt muỗi, các chất hóa học không an toàn từ bình xịt muỗi... hãy bảo vệ sức khỏe gia đình bạn với Đèn LED bắt muỗi hiệu quả cao VegaVN  của chúng tôi.
            Nguyên lý hoạt động: Đèn LED bắt muỗi hiệu quả cao VegaVN đèn bắt muỗi có dạng hình ống, trụ tròn, bên trong lồng quạt có gắn bóng đèn UV có nhiệm vụ phát ra ánh sáng thu hút muỗi. Khi muỗi bay vào trong phía đèn sẽ bị không khí khô nóng ở đây đốt cháy, và rơi xuống phần đáy của chiếc đèn.
            Đặc Điểm Nổi Bật
            Sản phẩm không gây độc hại, Thân thiện với môi trường, an toàn sang trọng và tiện lợi
            Thu hút và tiêu diệt muỗi, côn trùng và các loại sâu bọ bay khác
            Không gây tiếng ồn khi hoạt và không yêu cầu người dùng tương tác.
            Để sử dụng trong nhà và ngoài trời đều hiệu quả .
            Tiết kiệm với công suất tiêu thụ tối đa là: 12W
            Không có mùi xác muỗi chết khó chịu như những loại dùng điện cao áp hay vợt muỗi.
            Không chất hóa học - Không khí ga
            Lắp đặt đơn giản, sử dụng dễ dàng
            Hiệu suất cao hơn đèn thủy ngân
            Không thải khí độc.
            THÔNG TIN CHI TIẾT:
            Sản phẩm 2 tác dụng trong 1: đèn và máy bắt muỗi
            Số lượng đèn led: 6 Led
            Điện áp: 2000-3000 V
            Bảo vệ diện tích:30-40 mét vuông 
            Điện áp đầu vào: 110 V- 240 V
            Tần số: 50Hz
            Công suất:  12W (Ánh sáng 10W + diệt muỗi 2W) 
            Đèn LED bắt muỗi hiệu quả cao VegaVN thích hợp sử dụng cho hộ gia đình. Đèn bắt muỗi UV thế hệ mới cũng được sử dụng được cả ngoài sân vườn để bắt muỗi cả đêm hạn chế muỗi cho khu vực xung quanh nhà bạn. Đèn LED bắt muỗi hiệu quả cao VegaVN có thiết kế nhỏ gọn thuận tiện cho bạn đặt vào những vị trí góc khuất.`,
        price: 42000,
        saleoff: 19,
        images: []
    },
    {
        name: `Bóng Đèn Led Hồ Lô Loại Đẹp Siêu Sáng 5w`,
        description: `Bóng Đèn Led Hồ Lô Loại Đẹp Siêu Sáng 5w
            Siêu Sáng - siêu Tiết Kiệm Điện
            Chất liệu vỏ: nhựa pe cao cấp tản nhiệt,chống nước ,chống côn trùng
            Ánh sáng đèn LED không có tia UV an toàn cho mắt
            Đui bóng đèn: E27
            khích thước : cao 11cm, rỗng 6cm
            Ánh sáng trắng
            Hiệu suất chiếu sáng tốt lên đến 40000h
            Thích hợp dùng ngoài trời`,
        price: 41000,
        saleoff: 49,
        images: []
    },
    {
        name: `Bóng đèn bắp ngô tiết kiệm năng lượng 3000k 12w`,
        description: `Bóng đèn bắp ngô   tiết kiệm năng lượng 3000k 12w
            12W LED light bulb, high energy conversion. Corn shape bulb with mini size, creative and stylish. Flick-free, durable with long service life. Item Name: LED Light Bulb Power: 12W Lamp Body Material: Plastic/Aluminum Light Color: White Light/Warm Light/Tree Color Changing Light Lamp Head: E14 Features: Corn Shape, Easy to Use, Portable, Energy Saving, Decorative Lamp 12W Size: 3cm x 9.8cm/1.18 x 3.86  Notes: Due to the light and screen setting difference, the item's color may be slightly different from the pictures. Please allow slight dimension difference due to different manual measurement. Package Includes: 1 x LED Light Bulb `,
        price: 24000,
        saleoff: 48,
        images: []
    },
    {
        name: `Bóng đèn: Bóng LED Edison T64 4W đui E27 Mã T64`,
        description: `Bóng đèn: Bóng LED Edison T64 4W đui E27 Mã T64
            Đèn Toàn Lợi giới thiêu bạn mẫu Bóng LED Edison T64 4W loại bóng E27 thường sử dụng để trang trí trong các quán cafe, quán ăn, shop thời trang. Bạn xem qua thông số sản phẩm nhé!

            Bóng đèn: Bóng LED Edison T64 4W đui E27 - Đèn Toàn Lợi
            Bóng đèn: Bóng LED Edison T64 4W đui E27 – Đèn Toàn Lợi
            Thông tin sản phẩm Bóng Led Edison T64 phong cách Vintage
            Kiểm LED Bulbs, ánh sáng vàng
            Bóng đèn sợi LED công suất 4W
            Sử dụng đui tiếp điện phổ biếnE27
            Chip LED Nationstar Đài Loan hiệu suất chiếu sáng cao 80 Lm/W
            Kích thước: 6.4Cm x 14Cm
            Ánh sáng đẹp, độ hoàn màu cao Ra > 80
            Góc tỏa của chùm sáng là 360o
            Tuổi thọ đèn lên đến 15.000h
            Warm White (2700-3500K)
            Bảo hành: 12 tháng
            Bóng Led Edison là bóng giả bóng sợi tóc hồi xưa bên trong sử dụng chip Led để điều khiển ánh sáng
            Liên hệ ngay: Đèn Toàn Lợi – Ánh sáng toàn mỹ
            Hotlien Đèn Trang Trí Toàn Lợi

            Hotline: 0988 414 762
            Email: dentoanloi@gmail.com
            Fanpage: Đèn Toàn Lợi – Ánh sáng toàn mỹ
            Website: Đèn Toàn Lợi
            Ứng dụng của: Bóng LED Edison T64 4W đuôi E27 là gì?
            Được ứng dụng nhiều ở các quán cafe, shop thời trang, trà sữa, quán ăn….

            Đèn thả Mẫu đèn thả chao màu đen hình cây dù trang trí nhà khách
            Bóng đèn: Bóng LED Edison T64 4W đuôi E27 – Đèn Toàn Lợi
            Đèn thả Mẫu đèn thả lồng sắt nhẹ nhàng cho quán cafe
            Bóng đèn: Bóng LED Edison T64 4W đuôi E27 – Đèn Toàn Lợi
            

            Nếu mẫu bóng  LED Edison T64 4W của Toàn Lợi không đáp ứng được yêu cầu thiết kế của bạn. Bạn có thể xem thêm các sản phẩm đèn khác trong cùng danh mục Bóng Đèn của chúng tôi. Hoặc liên hệ với nhân viên chúng tôi. Chúng tôi sẽ tìm cho bạn nhé!`,
        price: 25000,
        saleoff: 49,
        images: []
    },
    {
        name: `Bóng đèn E27 220V 150W 5500k chụp ảnh ban ngày cho studio`,
        description: `🎉Hi~Click hashtag #MSSTORE📷 to Explore More Nice Items🎉

            E27 220V 150W 5500K Photo Studio Bulb Video Light Photography Daylight Lamp

            
            Features: 
            Provide bright environment for taking product photo. 
            Compact and easy set up. 
            E27 Socket fit most standard photo fixtures. 
            Life Span up to 8,000 Hours. 
            Low operating temperature. 
            Perfect for digital camera photography. 
            Specification: 
            Type: Photo Studio Bulb 
            Power: 150W 
            Voltage: 110V 
            Temperature: 5500K 
            Light color: White 
            Item size: Approx. 23 * 8cm / 9.1 * 3.1in (L * D) 
            Item weight: 164g / 5.78oz 
            Package size: 24 * 8.5 * 8.5cm / 9.4 * 3.3 * 3.3in 
            Package weight: 237g / 8.37oz 
            Note: 
            The rated power of this energy-saving bulb is 50W,  which is equal to the incandescent bulb with 150W power. `,
        price: 132000,
        saleoff: 42,
        images: []
    },
    {
        name: `Bóng đèn UV tiết kiệm năng lượng để sưởi ấm cho các loài rùa rắn bò sát`,
        description: `Desert Rainforest Lamp 5.0 10.0 13W
            This 10.0 UVB lamp is ideal for all desert dwelling reptiles. 
            Helps to prevent or reverse Metabolic Bone Disease commonly seen in captive reptiles at 6-12 months of age. 
            Provides UVB for vitamin D production and calcium metabolism.
            About the Product
            Helps simulate environment of a natural desert
            Ideal for all desert dwelling reptiles
            Provides necessary UVB rays for optimal calcium metabolism
            Stimulates breeding behaviour in reptiles and amphibians
            Specification:
            UVB Output:5.0 UVB Output for Rainforest type,10.0 UVB Output for Desert type.
            Wattage:  13w
            Base: ES-E27 (standard screw fitting)
            Package included: 1 * 5.0 UVB Output Lamp OR 1 * 10.0 UVB Output Lamp`,
        price: 136000,
        saleoff: 31,
        images: []
    },
    {
        name: `Bóng đèn Halogen siêu sáng 50W 220V-240V`,
        description: `Decription: 
            Features:
            GU 10+C halogen bulb Suitable for showcases lighting, accent lighting, restaurants,shop windows,display,, product retail illumination, artwork accents and track lighting,etc.
            Superior lumen performance throughout the life of the lamp.
            Fitted with UV- stop protects against harmful UV radiation
            Strengthened Clear front Class Cover
            Fitted with Aluminium reflector
            Base type:GU10
            Voltage:AC 220V-240V,steady voltage:AC 230V
            Watt:50W
            Color temperature:2700K
            Luminous flux:900 Lum
            Beam angle:38 degrees
            Average life:2000 hours
            Light color:Warm yellow
            Dimensions:about 55mm x 50mm(Length x Diameter)
            The lamp is ideal for most indoor general lighting applications and display accent lighting.
            Included: 
            1 x Halogen Bulb`,
        price: 28500,
        saleoff: 50,
        images: []
    },
    {
        name: `Bóng đèn cảm biến chuyển động E27 5W tiện lợi kích thước 10*6*6cm ánh sáng trắng`,
        description: `Features:
            Easy installation, fit for E27 lamp holders.
            Environmentally friendly, low energy consumption.
            Extremly long life to about 30,000 hours, with high luminescence efficiency.
            Combining the light source and lamp holder together to achieve the integration of sound-control base and light source.
            
            Description:
            Color: White
            Light color: Cold white
            Material: ABS+metal+electronic component
            Application scope: General
            Suitable lamp holder: E27
            Lamp bead pattern: SMD2835
            Input voltage: AC220V，50/60Hz
            Power: 5W
            Luminous flux: ＜500lm
            Special function: Sound sensor, auto PIR motion detection
            Product size: 10*6*6cm

            Package list:
            1*LED bulb`,
        price: 27000,
        saleoff: 10,
        images: []
    },
    {
        name: `Dây đèn led tròn pha lê trong suốt dài 6m gồm 50 bóng chạy bằng pin`,
        description: `THẾ GIỚI BÓNG BAY  giới thiệu sản phẩm mới: đèn led trang trí bóng tròn pha lê trong suốt
            TÍNH NĂNG NỔI BẬT.
            + Đèn có nhiều chế độ sáng: sáng bình thường và nhiều thể loại nhấp nháy. Có thể chuyển chế độ sáng một cách dễ dàng. Đáng yêu cực kì.
            + Giúp trang trí nổi bật..
            + Sản phẩm dùng pin thông thường, dễ dàng sử dụng, chống nước, va đập, có thể gắn ở khắp các nơi.
            Sản phẩm được phân phối bởi: luckydecor
            Chất liệu: Nhựa dẻo bọc dây 
            Màu sắc: Màu pha lê trong suốt giống y như hình
            🍀 Kích thước: 6m 50 bóng, mỗi bóng 2,4cm
            LƯU Ý: SẢN PHẨM CHẠY PIN VÀ CHƯA BẢO GỒM PIN, SHOP MÌNH CÓ BÁN PIN NHÉ`,
        price: 55000,
        saleoff: 20,
        images: []
    }
];

module.exports.createDefaultCollection = async () => {
    const productsArray = await ProductDao.find();
    if (productsArray.length <= 0) {
        console.log("Product collection is empty.");
        products.map((product, i) => {
            let productNew = new Product();
            productNew.name = product.name;
            productNew.description = product.description;
            productNew.price = product.price;
            productNew.saleoff = product.saleoff;
            productNew.images.push(imageUrls[i]);

            // console.log(productNew);
            ProductDao.save(productNew);
        });
        console.log("Default Product collection created.");
    } else {
        console.log("Product collection existed.");
    }
};
