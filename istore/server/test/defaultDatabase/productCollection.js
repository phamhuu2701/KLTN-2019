const Product = require("../../models/product.model");
const ProductDao = require("../../dao/product.dao");
const ProductCategoryDao = require("../../dao/productCategory.dao");
const StoreDao = require("./../../dao/store.dao");

const imageUrls = [
    "https://nvc-lighting.com.vn/wp-content/uploads/2017/09/bong-den-led-bulb-a60g-350x350.png",
    "https://chunoidep.com/wp-content/uploads/2018/08/chu-noi-nguoc-led-bong-tron-800x551.jpg",
    "https://banbuonsieure.com/wp-content/uploads/2018/11/Day-den-led-trang-tri-bong-tron-12-bong-1.jpg",
    "https://imgaz.staticbg.com/thumb/large/2014/chenyongfu/09/SKU128358/SKU122314180(23).jpg",
    "https://nvc-lighting.com.vn/wp-content/uploads/2017/04/bong-den-led-nvc-a60f-d-min.jpg",
    "https://ae01.alicdn.com/kf/HTB18uS5tRyWBuNkSmFPq6xguVXaM/3-c-i-E14-nhi-t-cao-b-ng-n-500-25-w-t-Halogen-bong.jpg_640x640.jpg",
    "https://7aothuat.com/wp-content/uploads/2015/07/bong-den-tu-sang-3-mau-4.jpg",
    "https://givasolar.com/wp-content/uploads/2018/10/bong-den-led-quang-hop-6w-1.jpg",
    "https://photo-2-baomoi.zadn.vn/w1000_r1/2017_07_31_83_22890892/0458d6c9f5881cd64599.jpg",
    "https://ledoto.vn/wp-content/uploads/2018/08/bong-led-c6.jpg",

    "https://vusonsolar.vn/wp-content/uploads/2016/05/image023.png",
    "https://cf.shopee.vn/file/b8500d269f80610807a63d4697a62d09",
    "https://png.pngtree.com/png_detail/18/09/10/pngtree-light-bulb-png-clipart_905118.jpg",
    "https://cf.shopee.vn/file/f5eb76d3581f1e277d8b26eddce798d6",
    "https://cf.shopee.vn/file/f9356aff78b3a041be85b91d477f982f",
    "https://thuytinhmiso.com/wp-content/uploads/2017/07/Chai-nhua-PET-bong-den-330ml-2.jpg",
    "https://chuyensuachuadiennuoc.com/wp-content/uploads/2019/04/bong-den-compact.jpg",
    "https://salt.tikicdn.com/ts/tmp/bd/47/53/3da9fae59afd82f8f831a0090c556d80.jpg",
    "https://product.hstatic.net/1000126467/product/4.u2769.d20170610.t125056.172076_grande.jpg",
    "https://tuviphuongdong.net/wp-content/uploads/2019/04/mo-thay-bong-den.png",

    "https://moitruongnhaty.com/wp-content/uploads/2018/02/Tai-sao-bong-den-sang-mo-khi-da-tat.jpg",
    "https://img.my-best.vn/press_component_images/2018_08_q.jpg?ixlib=rails-3.0.2&auto=compress&q=70&lossless=0&w=690&fit=max&s=9dee4038fa64ce37f3afd3d473ca83f3",
    "https://thichdiy.com/wp-content/uploads/2017/09/ac37c7703093d0ddf1990ad09c406296.jpg",
    "https://standavietnam.net/wp-content/uploads/2017/11/bong-den.jpg",
    "https://thuytinhmiso.com/wp-content/uploads/2017/07/Chai-nhua-PET-bong-den-330ml-3.jpg",
    "https://mycart.vn/upload/img/1497009262bong-dien-thong%20minh-Colorful-LED-Bluetooth-3-0-nghe-nhac.jpg",
    "https://image.anninhthudo.vn/w500/Uploaded/hasumo/2012_05_28/bong%20den%20chong%20am.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2fcW8N8M0DAQbNkXx-UuHfMIwSLRGOrS5oT0jx_NbCV6yDuA&s",
    "https://camerayoosee.com.vn/uploads/shops/files/ipvr006s/ipvr006-2.jpg",
    "https://chonoithatoto.vn/wp-content/uploads/2018/03/do-bong-den-xenon-o-to-kia-carens.jpg",
];

const products = [
    {
        name: `Bóng LED nến tháp đuôi E14`,
        description: `Bóng LED nến tháp đuôi E14 thông dụng nhất, công suất đa dạng, dùng chiếu sáng trong nhà, ngoài trời thay bóng đèn compact cũ...
            Đèn Comet là thương hiệu đèn nổi tiếng về uy tín và chất lượng trên thị trường đèn chiếu sáng hiện nay. 
            Sản phẩm này ứng dụng công nghệ chiếu sáng chip LED tiên tiến nhất với tính năng ưu việt, vô cùng tiết kiệm điện, không chứa chất độc hại và giá cả phải chăng.
            Bóng đèn được sản xuất bởi thương hiệu uy tín, đủ công suất, độ sáng luôn bảo đảm sau nhiều năm sữ dụng, an toàn điện chống cháy nổ theo tiêu chuẩn cao nhất
            * Công suất: 7W - 9W - 15W - 18W - 28W:
                    * 7W ánh sáng vàng ấm áp: phù hợp làm đèn cầu thang, thay bóng đèn bàn học, bóng đèn âm trần.
                    * 9W - 15W: là loại bóng đèn thông dụng nhất trong nhà, phù hợp thay thế bóng đèn compact đang dùng trong bếp nấu, phòng khách, hành lang, phòng ngủ, nhà vệ sinh,...vv
                    * 18W - 28W: bóng đèn siêu sáng dùng cho buôn bán ngoài trời, quán ăn lề đường, chiếu sáng vĩa hè, nhà xưởng sản xuất`,
        price: 85000,
        saleoff: 15,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Philips LED Ecobright 5W 6500K E27 A60 - Ánh Sáng Trắng - Hàng Chính Hãng`,
        description: `█ Tại sao bạn nên chọn Bóng Đèn Philips LED Ecobright 5W 6500K E27 A60 - Ánh Sáng Trắng - Hàng Chính Hãng :
            ✔ Có tới 16 triệu màu và độ sáng tự động thay đổi
            ✔ Đèn được trang bị công nghệ đèn LED thông minh với khả năng tiêu thụ điện năng thấp, chuyển đổi hàng triệu màu sắc phù hợp với môi trường và tâm trạng người dùng
            ✔ Công suất chỉ 10W nhưng lại cho quang thông lên đến 800 lumens tăng độ sáng lên hơn 33% so với các loại bóng đèn LED thông thường khác
            ✔ Đèn có khả năng điều chỉnh được nhiệt độ màu từ 1700K-6500K từ tone màu ấm sang tone màu lạnh tùy theo nhu cầu người dùng và nhiệt độ môi trường xung quanh
            ✔ Độ bền lên tới 11 năm (25.000 tiếng)
            ✔ Điều khiển tắt mở, thay đổi độ sáng, màu sắc từ xa trên smartphone và tương thích với đầu đui E27 khá phổ biến
            ✔ Đặc biệt có thể làm việc với Amazon Alexa, Google Assistant (Google Home) qua điều khiển giọng nói của bạn đặt hàng.`,
        price: 329900,
        saleoff: 28,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            +Chất liệu bóng đèn bằng nhựa kỹ thuật giúp cho bóng đèn không sợ va chạm hay rơi vỡ.`,
        price: 10000,
        saleoff: 50,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng led trụ 5W/8W/20W/30W/40W/50W đuôi E27`,
        description: `Bóng led trụ công suất từ 5W tới 50W với ánh sáng trắng và vàng. Bóng led tiết kiện điện,thân thiện môi trường với ánh sáng gấp đôi bóng huỳnh quang.
            Sử dụng thắp sáng trong nhà, ngoài sân ...
            #bongden #bongled #ledtru #5W #8W #20W #30W #40W #50W #E27`,
        price: 70000,
        saleoff: 15,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            Công suất 14W tương đương bóng 75W sợi đốt`,
        price: 45000,
        saleoff: 0,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            25 Bóng 2835 LED 9W`,
        price: 140000,
        saleoff: 12,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            Chiều dài bóng đèn (mm)  62`,
        price: 31000,
        saleoff: 10,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn bắt muỗi Mosquito killer Lamp AC175-260V (Trắng)`,
        description: `❌  SHOP CAM KẾT
            - Hàng đúng như mô tả, ảnh
            - 1 đổi 1 trong 07 ngày nếu SP có lỗi từ NSX
            - Giao hàng toàn quốc, #Freeship cho đơn hàng >99.000đ
            - #Bansi toàn quốc, cam kết #giare nhất
            - Mua sỉ: :Liên hệ trực tiếp hoặc inbox
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn bắp ngô tiết kiệm năng lượng 3000k 12w`,
        description: `Bóng đèn bắp ngô tiết kiệm năng lượng 3000k 12w
            12W LED light bulb, high energy conversion. Corn shape bulb with mini size, creative and stylish. Flick-free, durable with long service life. Item Name: LED Light Bulb Power: 12W Lamp Body Material: Plastic/Aluminum Light Color: White Light/Warm Light/Tree Color Changing Light Lamp Head: E14 Features: Corn Shape, Easy to Use, Portable, Energy Saving, Decorative Lamp 12W Size: 3cm x 9.8cm/1.18 x 3.86  Notes: Due to the light and screen setting difference, the item's color may be slightly different from the pictures. Please allow slight dimension difference due to different manual measurement. Package Includes: 1 x LED Light Bulb `,
        price: 24000,
        saleoff: 48,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            Bảo hành: 12 tháng`,
        price: 25000,
        saleoff: 49,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
            Product size: 10*6*6cm`,
        price: 27000,
        saleoff: 10,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
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
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Bulb Led Osram công suất 10W`,
        description: `Bộ 4 bóng Bulb Led Osram công suất 10W
        OSRAM là một trong những nhà sản xuất thiết bị chiếu sáng hàng đầu thế giới có bề dày lịch sử hơn 100 năm phát triển thành công.
        Được thành lập và đăng ký nhãn hiệu OSRAM tại cơ quan Sáng chế Hoàng gia ở Berlin (CHLB Đức) vào năm 1906. Kể từ đó, OSRAM đã không ngừng phát triển và đã sáng tạo ra những sản phẩm đèn led OSRAM với công nghệ chiếu sáng hiện đại, thông minh, đồng bộ trong từng sản phẩm.
        Tập đoàn KTG được chọn là nhà phân phối chính hãng toàn bộ sản phẩm đèn LEDVANCE OSRAM tại Việt Nam với chính sách bảo hành đổi mới 1 đổi 1, và đầy đủ các chứng từ, giấy chứng nhận chất lượng (CQ), xuất xứ hàng hóa (CO), Hóa đơn VAT.
        Lợi ích khi sử dụng đèn led Osram:
        Osram cho ra đời công nghệ OLED mới thay thế công nghệ LED vốn hiển thị màu sắc thiếu trung thực và hao tốn nhiều điện năng. Led osram có ánh sáng đẹp, ấm áp mang lại cảm giác thoải mái và dễ chịu khi bước vào không gian phòng.
        Đèn led Osram cho chất lượng chiếu sáng hoàn hảo phù hợp với mọi không gian nhà bếp, phòng ngủ, phòng khách, siêu thị, văn phòng làm việc. Đèn không nhấp nháy, chập chờn , độ hoàn màu cao giúp mắt cảm giác dễ chịu và thoải mái hơn.
        THÔNG SỐ KỸ THUẬT:
        Công suất: 10W
        Điện áp: 220V – 240V
        Tần số: 50-60Hz
        Tuổi thọ: 10.000 giờ`,
        price: 113000,
        saleoff: 22,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Compact V-Light PL 13W`,
        description: `Bóng Đèn Compact V-Light PL 13W là loại bóng đèn compact khi thắp sáng đèn không bị nhấp nháy như những chiếc bóng đèn bình thường khác, cho ánh sáng dịu không làm ảnh hưởng tới mắt.
        Bóng đèn với 03 phổ màu Tricolor Phosphor , bóng đèn này kết hợp với ballast điện tử của đèn biến tần FGL 13W/S tạo ra chỉ số truyền màu CRI trên 82% giúp phân biệt màu sắc rõ và chuẩn xác hơn.
        Bóng đèn có tuổi thọ cao, tuy nhiên bạn nên cẩn thận tránh va đập làm vỡ bóng hoặc kiểm tra nguồn điện trước khi sử dụng, tránh làm cháy, đứt bóng đèn. 
        Khi bóng đèn bị vỡ nên được thay mới, để mang lại hiệu quả sử dụng tốt nhất.
        Tiết kiệm điện năng 80%.`,
        price: 45000,
        saleoff: 8,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Led Ớt Trang Trí Bàn Thờ (Led Trái Ớt)`,
        description: `Bộ 10 Bóng Led Ớt Trang Trí Bàn Thờ (Led Trái Ớt)
        Ánh sáng đỏ
        Đuôi vặn E12 (12mm)
        Số Led: 4 led chíp dán
        Điện áp: 200-240 VAC
        Công suất: 0.3W
        Điện Thế: 220V 
        Trước đây; chúng ta thường dùng bóng đèn cà na (bóng trái ớt) cho việc trang trí bàn thờ. Tuy nhiên loại bóng này hay hư hỏng và rất hao điện (từ 11->18W/bóng) và phát sinh nhiệt độ cao gây nguy hiểm.
        Hiện nay bóng Led thay thế với ưu điểm là bền hơn; không nóng; và giảm lượng điện tiêu thụ xuống nhiều lần.`,
        price: 55000,
        saleoff: 48,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Philips LED Ecobright 8W 3000K E27 A60 - Ánh Sáng Vàng - Hàng Chính Hãng`,
        description: `Bóng Đèn Ecobright LED Bulb Đui E27 8W 3000K A60 Philips 929001260107 - Ánh Sáng Vàng tỏa nhiệt ít, ánh sáng không gây chói, thích hợp với nhiều không gian.
        Sản phẩm hoạt động với công suất 8W, nhiệt độ màu 3000K, giải điện áp thấp ≥ 48V, tạo ánh sáng ấm áp, êm dịu.
        Thân đèn tản quang, loại bóng A60, đui đèn xoắn E27, dễ dàng thay mới.
        Bóng đèn LED của Philips cung cấp toàn bộ ánh sáng ngay khi bật, không nhấp nháy, vô cùng nhanh nhạy.
        Tiêu thụ điện ít hơn  so với bóng đèn huỳnh quang,  tiết kiệm 86% điện năng tiêu thụ nhưng vẫn giữ nguyên chất lượng và độ sáng.
        Độ bền cao, tuổi thọ của đèn LED Philips kéo dài đến 10000h, giúp người dùng trải nghiệm sản phẩm tốt hơn.`,
        price: 61000,
        saleoff: 68,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn tuyp Led 1m2 bán nguyệt 36w sáng trắng Posson LTC-36-120`,
        description: `#Giới thiệu sản phẩm:
        *Đèn LED POSSON là giải pháp tiết kiệm điện tuyệt vời cho mọi gia đình. Tiết kiệm đến 80% so với bóng đèn thông thường
        *Đèn này để thay thế đèn Neon đời cũ. Và sáng hơn đèn đôi Nêon 1m2 40w+40w
        *Tích hợp tất cả trong 1 bộ đèn Led gọn gàng, lắp đặt và thay thế dễ dàng.
        *Độ bền cao đến 25000 giờ, sử dụng đến vài năm sau mới có thể hỏng
        *Chất liệu nhựa kỹ thuật và nhôm giúp cho bóng đèn không sợ va chạm hay rơi vỡ.
        *Ánh sáng giống như ánh sáng tự nhiên, không hại mắt, không tỏa nhiệt nóng
        *Kiểu thanh gọn, lắp ốp lên tường nhà, trần nhà rất đẹp
        
        #Thông tin kỹ thuật:
        *Điện áp: 220V (180-260V)
        *Công suất: 36w
        *Chip Led: 192 Led 2835
        *Driver: IC
        *Ánh sáng: Trắng mát 6500K
        *Flux: 3240lm
        *Góc chiếu sáng: 160 độ
        *Chống nước: Không
        *Đuôi đèn: Đấu điện trực tiếp
        *Kích thước SP: 120x7,5x2,5cm`,
        price: 156000,
        saleoff: 45,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn LED Trụ 30W (Ánh Sáng Trắng)`,
        description: `Bộ 10 Bóng Đèn LED Trụ 30W (Ánh Sáng Trắng) - Chống nước có thể để ngoài trời
        Tiết kiệm năng lượng, tiêu thụ điện năng thấp, tuổi thọ cao Không có chì và thủy ngân, không có tia cực tím và tia hồng ngoại
        Chiếu sáng và hiệu quả hơn so với đèn sợi đốt và hầu hết Halogen
        Đèn Thích hợp cho khách sạn, phòng ăn, phòng khách, phòng họp, phòng khách, phòng trưng bày, cửa hàng, hành lang, gian hàng điện thoại, phòng thu và triển lãm, hộ gia đình vv`,
        price: 344600,
        saleoff: 51,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Compact V-Light PL 9W`,
        description: `Bóng Đèn Compact V-Light PL 9W là loại bóng đèn compact khi thắp sáng đèn không bị nhấp nháy như những chiếc bóng đèn bình thường khác, cho ánh sáng dịu không làm ảnh hưởng tới mắt.
        Bóng đèn với 03 phổ màu Tricolor Phosphor , bóng đèn này kết hợp với ballast điện tử của đèn biến tần FGL 9W tạo ra chỉ số truyền màu CRI trên 82% giúp phân biệt màu sắc rõ và chuẩn xác hơn.
        Bóng đèn có tuổi thọ cao, tuy nhiên bạn nên cẩn thận tránh va đập làm vỡ bóng hoặc kiểm tra nguồn điện trước khi sử dụng, tránh làm cháy, đứt bóng đèn. 
        Khi bóng đèn bị vỡ nên được thay mới, để mang lại hiệu quả sử dụng tốt nhất.
        Tiết kiệm điện năng 80%.`,
        price: 45000,
        saleoff: 8,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn Hồng Ngoại Sưởi ấm`,
        description: `Sử dụng ánh sáng hồng ngoại từ lâu đã được biết đến như một phương pháp chữa bệnh và hỗ trợ điều trị các bệnh nan y như viêm khớp, ung thư, thần rất hiệu quả và được áp dụng rộng rãi tại các bệnh viện, phòng khám, trung tâm thẩm mỹ.

        Đèn sử dụng ánh sáng hồng ngoại rất tốt cho sức khỏe và chữa được nhiều bệnh nan y như: giảm đau nhức xương khớp, đau cơ, đau dây thần kinh, phục hồi vết thương, hỗ trợ điều trị ung thư, viêm xoang, điều trị các vấn đề tai mũi họng, tăng cường tuần hoàn máu, trẻ hóa da, kích hoạt tế bào, cân bằng hệ bài tiết, thư giãn thần kinh, giảm viêm và phù nề, tăng cường trao đổi chất, chăm sóc sắc đẹp, sưởi ấm, là món quà tuyệt vời dành cho cha mẹ và những người lớn tuổi.`,
        price: 55000,
        saleoff: 73,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Đèn led năng lượng mặt trời MIN-30 (30 led), MIN-20 (20 led), Pin li-ion, cảm biến`,
        description: `Nhà sản xuất: Nhập khẩu Trung Quốc
        Khối lượng: 0.2 kg
        Màu sắc: Như hình đại diện
        Chiều Dài: 13 cm
        Chiều rộng: 10 cm
        Chiều Cao: 5.5 cm
        Kiểu hoạt động: Tự động
        Công suất: 20 Led :  4W. 30 Led :  6W
        Nguồn điện: Pin li-ion 1200mAh, 3.7V. Xạc đầy thời gian sử dụng đèn ~4~5h
        Nguồn điện: Năng lượng mặt trời, pin Li-ion
        Độ bền: 5 năm
        Bảo hành: 1 đổi 1 trong 1 tháng`,
        price: 74900,
        saleoff: 57,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn Led hình nến 5w đuôi E14 sáng vàng ấm Posson Lca-5E14G`,
        description: `#Giới thiệu sản phẩm:
        * Đèn LED nhãn hiệu POSSON là giải pháp tiết kiệm điện tuyệt vời cho mọi gia đình. Tiết kiệm đến 80% so với bóng đèn thông thường
        * Độ bền cao đến 25000 giờ, sử dụng đến vài năm sau mới có thể hỏng
        * Chất liệu nhựa kỹ thuật giúp cho bóng đèn không sợ va chạm hay rơi vỡ.
        * Ánh sáng giống như ánh sáng tự nhiên, không hại mắt, không tỏa nhiệt nóng
        * Bóng đèn hình nến dùng để lắp vào các loại đèn trang trí, đèn chùm, đèn có đui E14....
        * Thiết kế chống nước, cho khả năng sử dụng ngoài trời
        
        #Thông tin kỹ thuật:
        *Điện áp: 220V
        *Công suất: 5W
        *Chip Led: 25 Led 2835
        *Driver: RC
        *Ánh sáng: Vàng ấm 3500K
        *Flux: 450lm
        *Góc chiếu sáng: 360 độ
        *Chống nước: Có
        *Đuôi đèn: E14: đui xoáy 14mm
        *Kích thước SP: 3,5x3,5x10,5cm`,
        price: 133000,
        saleoff: 11,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Đèn LED Máy Chiếu Bầu Trời Đêm Hình Trăng Sao`,
        description: `Đèn LED Máy Chiếu Bầu Trời Đêm Hình Trăng Sao - Bạn có bao giờ nghĩ sẽ mang cả bầu trời trăng sao vào căn phòng bé nhỏ của mình?.Thật đơn giản khi bạn sỡ hữu chiếc máy chiếu tạo trăng sao chúng tôi sẽ giúp bạn thực hiện được điều đó tưởng chừng như là không thể.
        Cả một bầu trời trăng sao nhỏ bé sẽ tràn ngập căn phòng của bạn làm cho không gian của bạn trở nên lãng mạn, thơ mộng và ấm áp hơn.
        Thiết kế nhỏ họn tạo không gian rộng rãi khi sử dụng đèn. Xoay 360 độ cung cấp một di chuyển trên bầu trời đầy trăng sao. Điều kiển dễ dàng nhiều chế độ mầu bằng công tắc Tạo ra những hiệu ứng vô cùng đẹp với nhiều mầu trắc khác nhau trên bầu trời đầy trăng sao trong ngôi nhà của bạn hoặc bất cứ đâu bạn thích. Sáng cho một hiệu ứng đèn ngủ âm dịu và lãng mạn. Lý tưởng cho những người yêu lãng mạn và những gia đình cho trẻ nhỏ
        Nguồn: Sử dụng PIN AAA (4 viên). Cắm trực tiếp vào máy tính qua dây cáp USB. DC 5V. Sử dụng 4 đèn LED (nhiều mầu). Trục xoay tròn 360 độ.
        Chất liệu: Nhựa + linh kiện điện tử.`,
        price: 139000,
        saleoff: 50,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Philips LED Ecobright 5W 3000K E27 A60 - Ánh Sáng Vàng - Hàng Chính Hãng`,
        description: `Thương hiệu: Philips
        Xuất xứ thương hiệu: Hà Lan
        Nơi sản xuất: Trung Quốc
        SKU: 8895709585048
        Model: 3C-929001259707
        Công suất: 5W
        Tuổi thọ tối đa: 10000h
        Chất liệu: Nhựa cao cấp
        Kích thước: Dài x Rộng x Cao: 13 x 7 x 13 cm`,
        price: 146000,
        saleoff: 2,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn Led trụ 18w 20w tiết kiệm điện sáng trắng-vàng nắng Posson LC-N18-18G`,
        description: `#Công dụng:
        +Bóng đèn Led 18-20w sử dụng chiếu sáng trong nhà nhỏ, nhà bếp, hành lang, ban công, khu vực nhỏ và vừa cần sáng rõ ràng.
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
        +7-12W: Sử dụng làm đèn trang trí, đèn cầu thang, đèn nhà tắm, vệ sinh, khu vực nhỏ cần sáng vừa.
        +15-24W: Sử dụng chiếu sáng trong nhà nhỏ, nhà bếp, hành lang, ban công, khu vực nhỏ và vừa cần sáng rõ ràng.
        +25-50W: Sử dụng chiếu sáng khu vực nhà rộng, sân vườn, khu vực rộng cần ánh sáng tốt.`,
        price: 215000,
        saleoff: 19,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng Đèn Halogen Cho Đèn Xông Tinh Dầu`,
        description: `CHIA SẺ KINH NGHIỆM
        -------------------------------------        
        Kiểm tra phích cắm đảm bảo không chập chờn điện         
        Không nên mở đèn sáng tối đa nhiều giờ liên tục, tầm 7-8 tiếng nên tắt đèn.         
        Trước khi rút đèn khỏi ổ cắm, nên vặn công tắc đèn về nút OFF, tránh tình trạng khi cắm điện trở lại, điện áp tăng đột ngột dễ làm đứt bóng đèn.        
        
        CÁCH THAY BÓNG ĐÈN        
        -------------------------------------        
        Rút điện, dùng tay nhẹ nhàng rút bóng ra (chỉ cần rút thẳng, không cần xoáy hoặc lắc) kiểm tra bóng đèn (nếu bóng cháy có màu đen hoặc đứt sợi tóc) thì thay bóng mới lấy bóng mới, nhẹ nhàng cắm vào 2 đầu của chân đế..`,
        price: 120000,
        saleoff: 40,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng thay thế cho đèn muỗi Đại sinh D6 6W`,
        description: `Bóng đèn 6W - Đèn diệt côn trùng DS-D6 có khả năng dẫn dụ côn trùng rất tốt. 
        Đối với đèn diệt côn trùng thì bóng đèn đóng vai trò quan trọng nhất bởi đó là dụng cụ chính thu hút sự chú ý của muỗi, các côn trùng xâm nhập. Khi phát hiện bị cháy bóng cần gấp rút thay nhanh để không ảnh hưởng đến hoạt động của đèn. Bóng đèn 6W Đại Sinh thích hợp sử dụng cho đèn diệt côn trùng DS-D6 là 1 trong những loại bóng đèn UV, có bước sóng dài, có khả năng dẫn dụ côn trùng rất tốt, nhờ vào nguồn sáng đặc biệt.`,
        price: 175000,
        saleoff: 49,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `BÓNG ĐÈN LED TÍCH ĐIỆN CÓ MÓC TREO TIỆN LỢI 50w`,
        description: `GIẢI QUYẾT VẤN ĐỀ CỦA BẠN CHỈ VỚI 1 SẢN PHẨM TIỆN  LỢI THÔNG MINH`,
        price: 119900,
        saleoff: 40,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `BÓNG ĐÈN LED XOAY 7 MÀU`,
        description: `Thông tin sản phẩm: - Tên sản phẩm: Đèn led xoay 7 màu. - Màu sắc: nhiều màu - Kích thước hộp: 8 x8 x16cm - Chất liệu: nhựa - Đèn LED pha lê với sự pha trộn giữa 3 màu: xanh dương, xanh lá, đỏ - Sử dụng nguồn điện 220V - Chế độ xoay tròn 360 độ Điểm nổi bật - Đèn led cầu xoay 7 màu được thiết kế thông minh với nhiều màu sắc rực rỡ, quay vòng 360 độ giúp ánh sáng lan tỏa đều, mang đến cho bạn một không gian sống động, cuồng nhiệt và tràn ngập sắc màu. - Màu đa sắc rực rỡ của đèn do sự phối màu từ 3 bóng LED siêu sáng: xanh dương, xanh lá và đỏ kết hợp với ánh sáng phản chiếu qua các tấm gương cấu trúc pha lê tạo ra được nhiều hiệu ứng độc đáo. - Đèn được làm từ chất liệu cao cấp cùng những chip điện tử thông minh, bền hơn, sáng hơn và đặc biệt tiết kiệm điện hơn những loại thông thường khác. - Chuôi bóng được thiết kế với dạng ốc vặn giống chuôi đèn compact rất tiện sử dụng và lắp đặt. Sản phẩm thích hợp sử dụng ở nhiều nơi khác nhau như: quán bar, phòng trà, phòng karaoke và đặt biệt là ngay tại ngôi nhà của bạn.`,
        price: 53000,
        saleoff: 18,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Đèn Led Siêu Mỏng Âm Trần Fighter Comet 12W CD01F012`,
        description: `Đèn Led Siêu Mỏng Âm Trần Fighter Comet 12W CD01F012 có thiết kế siêu mỏng với chất liệu nhôm sơn tĩnh điện, giúp chống rỉ sét và tản nhiệt hiệu quả; tính năng tản sáng cao cấp, quang thông cao giúp mang lại hiệu suất chiếu sáng tốt mà vẫn tiết kiệm đến 80% công suất điệ
        Thiết kế mặt tán xạ tròn, phẳng mỏng thuận tiện cho việc vệ sinh và bảo trì sản phẩm
        Thông số kỹ thuật:
        
        Công suất: 12W
        Điện áp rộng, sử dụng phù hợp với ngay cả những khu vực có điện thế yếu: AC100 240V/50Hz
        Chip led cao cấp: SMD2835
        CRI > 80
        Tuổi thọ cao: 25.000 giờ
        Isolated driver: IC Driver
        IP Rating: IP20
        Quang thông cao: 840 Lm
        Lỗ khoét trần (Cut Out): 150 mm
        Kích thước sản phẩm: D170 x H20 mm (đường kính 170mm, cao 20mm)`,
        price: 110000,
        saleoff: 23,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng đèn led vũ trường xoay 7 màu`,
        description: `Bóng đèn led vũ trường xoay 7 màu 
        Thiết kế nhỏ gọn với bóng led thông minh, chiếu sáng xa, giúp tiết kiệm diện cho người dùng.
        Tạo hiệu ứng ánh sáng cực sinh động với đủ màu sắc khắp phòng
        Đèn led cảm ứng với chế độ tự động xoay chớp theo nhạc hiện đại, led siêu tiết kiệm điện.`,
        price: 38000,
        saleoff: 37,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Đèn LED Năng Lượng Mặt Trời Suntek JD-8810`,
        description: `Sử dụng chiếu sáng như đèn sân vườn cho biệt thự, đèn đường, đèn chiếu, đèn cho các khu đất rộng, khu vườn, khu ao, vuông tô
        Đèn tích hợp bộ cảm biến ánh sáng, tự động sáng đèn khi trời tối và tắt đèn khi trời sáng. Chế độ sáng thông minh khi ít điện hoặc mưa liên tục sẽ giảm điện tiêu thụ về đêm khuya để tiết kiệm điện.`,
        price: 505000,
        saleoff: 43,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `DÈN SƯỞI ĐUÔI CÁ LOẠI 2 BÓNG [ GIẢM GIÁ ]`,
        description: `Tỏa nhiệt bằng 2 bóng đèn halogen chóng vánh. Quạt sưởi halogen có 2 bóng đèn tùy chỉnh theo nút chỉnh. phải chăng cho sức khỏe, an toàn lúc dùng có chế độ ngắt nguồn điện
        shop CHUYÊN SỈ HÀNG TOÀN QUỐC
        Rất vui được phục vụ mọi người`,
        price: 180000,
        saleoff: 12,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Bóng dèn UV cho thú cưng - bò sát (25w 50w 75w)`,
        description: `Đèn UVA UVB 3.0 cho bò sát cũng giống như các loại đèn chuyên dụng khác. Đây là một loại bóng tích hợp được cả UVA và UVB. Chúng khá tiện lợi cho người mới bắt đầu, bởi các đặc tính ở bài viết bên dưới.

        Thông tin chi tiết về đèn UVA UVB 3.0 cho Bò Sát
        đèn uva uvb 
        
        Bóng Đèn UVA UVB 3.0 sử dụng chính cho Rùa Nước, Trăn cảnh – Rắn cảnh và một số loài Tắc Kè. Bóng này không sử dụng cho rùa cạn hay các loại rồng.
        Bóng Đèn UVA UVB 3.0 sử dụng thời vụ cho các loại rùa cạn hoặc rồng. Nếu đan xen với phơi nắng 2 tiếng có thể nuôi được nhiều loại. Như là Rồng úc, Rồng nam mỹ, Rùa Cạn, Kỳ Đà v.v….
        Bóng Đèn UVA UVB 3.0 giá thành rẻ nhất trong các hệ số.
        Bóng Đèn UVA UVB 3.0 độ bền thấp. Sẽ bị hỏng nếu như dính 4 vấn đề sau: bị va đập, dùng chụp đèn kém chất lượng, bị xung điện hoặc bị nước bắn vào bóng là đứt dây tóc ngay lập tức. Lưu ý shop chỉ bảo hành kiểm tra bóng tại chỗ. Khi về nhà quý khách cần để ý kỹ hơn để tránh bị hỏng bóng.`,
        price: 45000,
        saleoff: 3,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Dèn led tiện dụng có đầu cắm USB dùng được cho máy tính`,
        description: `★Product Description：
        100% brand-new and high quality.
        No need drive, plug and play.
        High brightness, durable life.
        Flexible body, easy to bend.
        Mini size, convenient to carry and store.
        Suitable for USB interface type.
        
        Specifications:
        Material: PVC
        Rated voltage: 5V
        Rated power: 1.2W
        
        Specifications:
        No need drive, plug and play.
        High brightness, durable life.
        Flexible body, easy to bend.
        Mini size, convenient to carry and store.
        Suitable for USB interface type.`,
        price: 67766,
        saleoff: 9,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },
    {
        name: `Dèn NOCTIGON K1 - sử dụng bóng LED siêu nhỏ Osram chiếu xa`,
        description: `NOCTIGON K1 là một cây đèn chiếu siêu xa mới của NOCTIGON, sử dụng bóng LED siêu nhỏ Osram, với nhân LED chỉ nhỏ cỡ 1mm2, cho khả năng chiếu xa đáng kinh ngạc, lên đến 1.6km

        Tính năng , đặc điểm : 
        • Gia công CNC bằng hợp kim nhôm hàng không
        • Chóa trơn, làm từ hợp kim nhôm
        • Thấu phủ AR chống lóa
        • Cấu trúc Unihead
        • Độ sáng cao nhất là 1400lm và thấp nhất sáng như mặt trăng
        • Chỉnh sáng vô cấp
        • Sạc USB type C trên thân
        • Nút bấm mềm ALPS siêu bền, tích hợp đèn báo pin RGB
        •  Lò xo Beryllium-Copper với khả năng dẫn điện cao hơn 45% so với lò xo thép không gỉ sử dụng cho lò xo chỉ  2% IACS.
        • Dòng điện ko đổi, hạ độ sáng theo nhiệt độ
        • Chống nước, chống bụi IP67 
        • Kích thước: 173mm(Dài) * 72mm(Đầu) * 26.5mm(thân)
        
        Lumens và lux của từng loại bóng:
        W1 (bóng led Osram CSLNM1.TG): 900lm, Lux : 650Kcd(650,000cd) chiếu xa 1612m
        W2 (bóng led Osram CSLPM1.TG): 1400lm, Lux: 550Kcd(550,000cd) chiếu xa 1483m`,
        price: 1850000,
        saleoff: 5,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Trần Quân",
                email: "quantran@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ]
    },



























































    {
        name: `Đèn Led Compact Điện Quang ĐQ LEDCP01 09727AW Sáng vàng 9W - bong den led`,
        description: `Đèn Led Compact Điện Quang ĐQ LEDCP01 09727AW Sáng vàng 9W(Sáng Vàng)
        Đèn Compact Điện Quang 09727AW sẽ giúp bạn tăng thêm sự lựa chọn với bóng đèn công suất lớn tiết kiệm điện, phù hợp khi chiếu sáng ngõ xóm, nhà xưởng, khuôn viên, gian hàng thương mại,...
        Sử dụng bột huỳnh quang 3 màu và ballast điện tử
        Là sản phẩm lý tưởng trong việc thay thế cho bóng đèn dây tóc
        Hiệu suất phát quang cao hơn và tiết kiệm điện năng hữu hiệu`,
        price: 70000,
        saleoff: 0,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ],
        url:
            "https://www.lazada.vn/products/den-led-compact-dien-quang-dq-ledcp01-09727aw-sang-vang-9w-bong-den-led-i223532629-s281719031.html?spm=a2o4n.searchlist.list.1.29704015A63EDK&search=1"
    },
    {
        name: `Đèn Led Compact Điện Quang ĐQ LEDCP01 09727AW Sáng vàng 9W - bong den led`,
        description: `Đèn Led Compact Điện Quang ĐQ LEDCP01 09727AW Sáng vàng 9W(Sáng Vàng)
        Đèn Compact Điện Quang 09727AW sẽ giúp bạn tăng thêm sự lựa chọn với bóng đèn công suất lớn tiết kiệm điện, phù hợp khi chiếu sáng ngõ xóm, nhà xưởng, khuôn viên, gian hàng thương mại,...
        Sử dụng bột huỳnh quang 3 màu và ballast điện tử
        Là sản phẩm lý tưởng trong việc thay thế cho bóng đèn dây tóc
        Hiệu suất phát quang cao hơn và tiết kiệm điện năng hữu hiệu`,
        price: 70000,
        saleoff: 0,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ],
        url:
            "https://www.lazada.vn/products/den-led-compact-dien-quang-dq-ledcp01-09727aw-sang-vang-9w-bong-den-led-i223532629-s281719031.html?spm=a2o4n.searchlist.list.1.29704015A63EDK&search=1"
    },
    {
        name: `Bóng đèn led Hồng Ngoại Sưởi ấm`,
        description: `Đèn Led Hồng Ngoại Sưởi ấm LEDCP01 09727AW Sáng vàng 9W(Sáng Vàng)
        Đèn Led Hồng Ngoại Sưởi ấm 09727AW sẽ giúp bạn tăng thêm sự lựa chọn với bóng đèn công suất lớn tiết kiệm điện, phù hợp khi chiếu sáng ngõ xóm, nhà xưởng, khuôn viên, gian hàng thương mại,...
        Sử dụng bột huỳnh quang 3 màu và ballast điện tử
        Là sản phẩm lý tưởng trong việc thay thế cho bóng đèn dây tóc
        Hiệu suất phát quang cao hơn và tiết kiệm điện năng hữu hiệu`,
        price: 145000,
        saleoff: 73,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ],
        url:
            "https://tiki.vn/bong-den-hong-ngoai-suoi-am-p15089394.html?_v=new_disable_fbt&src=search&2hi=1&keyword=bong+den&utm_expid=.VuO9Tv3VTQyjx6MLutmThw.3&utm_referrer=https%3A%2F%2Ftiki.vn%2Fsearch%3Fq%3Dbong%2520den"
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
        price: 55000,
        saleoff: 7,
        images: [],
        videos: [],
        rates: [
            {
                fullname: "Hồng Hưng",
                email: "honghung@gmail.com",
                content: "Sản phẩm chất lượng, dùng tốt. Thank shop!",
                stars: 3 + Math.floor(Math.random() * 2)
            },
            {
                fullname: "Huỳnh Trung",
                email: "trunghuynh@gmail.com",
                content: "Sản phẩm giá cả phù hợp túi tiền",
                stars: 3 + Math.floor(Math.random() * 2)
            }
        ],
        url:
            "https://shopee.vn/B%C3%B3ng-%C4%91%C3%A8n-tr%E1%BB%A5-LED-50W-si%C3%AAu-s%C3%A1ng-ti%E1%BA%BFt-ki%E1%BB%87m-%C4%91i%E1%BB%87n-b%E1%BA%A3o-h%C3%A0nh-1-n%C4%83m-i.116832373.2446585129"
    }
];

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str.toLowerCase();
}

module.exports.createDefaultCollection = async () => {
    const productsArray = await ProductDao.find();
    if (productsArray.length <= 0) {
        console.log("Product collection is empty.");

        const productCategory = await ProductCategoryDao.findOneByName(
            "Thiết bị chiếu sáng"
        );
        // console.log(productCategory);

        if (productCategory != null) {
            for (let i = 0; i < products.length; i++) {

                let key = i % products.length;

                const nameRemoveAccents = removeAccents(products[key].name);

                let productNew = new Product({
                    productCategory: productCategory,
                    name: products[key].name,
                    nameRemoveAccents: nameRemoveAccents,
                    description: products[key].description,
                    price: products[key].price,
                    saleoff: products[key].saleoff,
                    rates: products[key].rates,
                    url: products[key].url ? products[key].url : "",
                    producerCode: Math.random().toString(36).substr(2, Math.floor(Math.random() * 2) + 4).toUpperCase()
                });

                productNew.images.push(imageUrls[i % 30]);
                productNew.images.push(imageUrls[(i + 1) % 30]);
                productNew.images.push(imageUrls[(i + 2) % 30]);
                productNew.images.push(imageUrls[(i + 3) % 30]);
                productNew.images.push(imageUrls[(i + 4) % 30]);
                productNew.images.push(imageUrls[(i + 6) % 30]);

                // console.log(productNew);
                const productSave = await ProductDao.save(productNew);
                // console.log("product index: ", i, ": ", (productSave != null) ? "OK" : "Fail" );
            }
            console.log("Default Product collection created.");
        }
    } else {
        console.log(
            "Product collection existed: ",
            productsArray.length,
            "/",
            products.length
        );
    }
};
