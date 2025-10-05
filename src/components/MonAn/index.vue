<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <div class="food-menu-container">
        <!-- Header Section -->
        <div class="header-section mb-5">
            <div class="glass-card">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="header-title">
                        <div class="icon-wrapper">
                            <i class="fa-solid fa-utensils"></i>
                        </div>
                        <div>
                            <h1 class="title-main mb-1">Thực Đơn Nhà Hàng</h1>
                            <p class="title-sub mb-0">Khám phá những món ăn đặc sắc</p>
                        </div>
                        </div>
                    <button type="button" class="btn-add-new" data-bs-toggle="modal" data-bs-target="#themmoi">
                        <i class="fa-solid fa-plus me-2"></i>
                        <span>Thêm Món Mới</span>
                    </button>
                        </div>
                    </div>
        </div>

        <!-- Menu Grid -->
        <div class="menu-grid">
            <template v-for="(value,index) in menuList" :key="value.id">
                <div class="menu-item" :style="{'animation-delay': (index * 0.1) + 's'}">
                    <div class="food-card">
                        <div class="card-image-wrapper">
                            <img :src="value.image" :alt="value.name" class="food-image">
                            <div class="image-overlay">
                                <div class="overlay-content">
                                    <button class="btn-view-detail">
                                        <i class="fa-solid fa-eye"></i>
                                    </button>
                </div>
            </div>
        </div>
                        
                        <div class="card-content">
                            <div class="food-info">
                                <h3 class="food-name">{{ value.name }}</h3>
                                <p class="food-description">{{ value.description }}</p>
                            </div>
                            
                            <div class="card-footer">
                                <div class="price-badge">
                                    <span class="price-amount">{{ value.price.toLocaleString() }}</span>
                                    <span class="price-currency">VNĐ</span>
                        </div>
                                <div class="action-buttons">
                                    <button class="btn-edit" title="Chỉnh sửa">
                                        <i class="fa-solid fa-edit"></i>
                                    </button>
                                    <button v-on:click="Object.assign(delete_monan,value)" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#Xoa" 
                                            class="btn-delete" 
                                            title="Xóa">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
         </template>
        </div>
    </div>
    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content modern-modal">
                <div class="modal-header">
                    <div class="modal-title-wrapper">
                        <div class="modal-icon add-icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div>
                            <h1 class="modal-title" id="addModalLabel">Thêm Món Ăn Mới</h1>
                            <p class="modal-subtitle">Tạo món ăn mới cho thực đơn</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close-modern" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa-solid fa-times"></i>
                    </button>
      </div>
      <div class="modal-body">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label-modern">
                                <i class="fa-solid fa-signature me-2"></i>Tên Món Ăn
                            </label>
                            <input type="text" class="form-control-modern" placeholder="Nhập tên món ăn...">
                        </div>
                        <div class="form-group">
                            <label class="form-label-modern">
                                <i class="fa-solid fa-align-left me-2"></i>Mô Tả
                            </label>
                            <textarea class="form-control-modern" rows="3" placeholder="Mô tả chi tiết về món ăn..."></textarea>
            </div>
                        <div class="form-group">
                            <label class="form-label-modern">
                                <i class="fa-solid fa-image me-2"></i>Hình Ảnh URL
                            </label>
                            <input type="url" class="form-control-modern" placeholder="https://example.com/image.jpg">
            </div>
                        <div class="form-group">
                            <label class="form-label-modern">
                                <i class="fa-solid fa-tag me-2"></i>Giá (VNĐ)
                            </label>
                            <input type="number" class="form-control-modern" placeholder="0" min="0">
            </div>
            </div>
      </div>
      <div class="modal-footer">
                    <button type="button" class="btn-modern btn-secondary" data-bs-dismiss="modal">
                        <i class="fa-solid fa-times me-2"></i>Hủy
                    </button>
                    <button type="button" class="btn-modern btn-primary">
                        <i class="fa-solid fa-plus me-2"></i>Thêm Món
                    </button>
      </div>
    </div>
  </div>
</div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="Xoa" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modern-modal">
                <div class="modal-header">
                    <div class="modal-title-wrapper">
                        <div class="modal-icon delete-icon">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                        <div>
                            <h1 class="modal-title" id="deleteModalLabel">Xác Nhận Xóa</h1>
                            <p class="modal-subtitle">Hành động này không thể hoàn tác</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close-modern" data-bs-dismiss="modal" aria-label="Close">
                        <i class="fa-solid fa-times"></i>
                    </button>
      </div>
      <div class="modal-body">
                    <div class="delete-confirmation">
                        <div class="warning-icon">
                            <i class="fa-solid fa-exclamation-triangle"></i>
                        </div>
                        <div class="warning-text">
                            <p class="mb-2">Bạn có chắc chắn muốn xóa món ăn</p>
                            <p class="food-name-delete"><strong>{{ delete_monan.name }}</strong></p>
                            <p class="text-muted small mb-0">Món ăn sẽ bị xóa vĩnh viễn khỏi thực đơn.</p>
                        </div>
</div>
      </div>
      <div class="modal-footer">
                    <button type="button" class="btn-modern btn-secondary" data-bs-dismiss="modal">
                        <i class="fa-solid fa-times me-2"></i>Hủy
                    </button>
                    <button type="button" class="btn-modern btn-danger">
                        <i class="fa-solid fa-trash me-2"></i>Xóa Món
                    </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            menuList: [
                {
                    id: 1,
                    name: "Phở Bò Đặc Biệt",
                    description: "Phở bò với các loại thịt bò chọn lọc, nước dùng đậm đà",
                    price: 65000,
                    image: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
                },
                {
                    id: 2,
                    name: "Cơm Gà Hải Nam",
                    description: "Cơm gà hấp với nước luộc gà và gia vị đặc biệt",
                    price: 55000,
                    image: "https://cdn.tgdd.vn/Files/2021/08/16/1375575/cach-nau-com-ga-hai-nam-don-gian-ga-chin-vang-uom-da-gion-dung-chuan-202112290927578686.png",
                },
                {
                    id: 3,
                    name: "Bún Bò Huế",
                    description: "Bún bò Huế cay nồng với nước dùng đặc trưng",
                    price: 60000,
                    image: "https://www.shutterstock.com/image-photo/vietnamese-spicy-beef-noodle-soup-600nw-2318182837.jpg",
                },
                {
                    id: 4,
                    name: "Bánh Mì Thịt",
                    description: "Bánh mì giòn với nhiều loại thịt và rau sống",
                    price: 25000,
                    image: "https://dongtienbakery.com/image/cache/data/Product_B%C3%A1nh%20m%C3%AC/M%C3%AC%20th%E1%BB%8Bt%20ch%E1%BA%A3%20(1)_fix-608x416f.jpg",
                },
                {
                    id: 5,
                    name: "Bún Chả Hà Nội",
                    description: "Bún chả với thịt nướng thơm lừng, nước mắm chua ngọt đặc trưng",
                    price: 45000,
                    image: "https://daiductai.vn/upload/filemanager/B%C3%BAn%20ch%E1%BA%A3/bun-cha.jpg",
                },
                {
                    id: 6,
                    name: "Cơm Tấm Sườn Bì",
                    description: "Cơm tấm với sườn nướng, bì heo và trứng ốp la",
                    price: 40000,
                    image: "https://cdn.tgdd.vn/2020/08/CookProduct/52-1200x676.jpg",
                },
                {
                    id: 7,
                    name: "Mì Quảng",
                    description: "Mì Quảng với tôm thịt, bánh tráng và rau sống đặc trưng miền Trung",
                    price: 35000,
                    image: "https://i0.wp.com/vickypham.com/wp-content/uploads/2023/05/8faee-2023_04_28eosm56722.jpg",
                },
                {
                    id: 8,
                    name: "Gỏi Cuốn Tôm Thịt",
                    description: "Gỏi cuốn tươi mát với tôm, thịt, bún và rau thơm",
                    price: 30000,
                    image: "https://heyyofoods.com/wp-content/uploads/2024/03/3-4.jpg",
                }
            ],
            delete_monan:{},
            add_monan:{},

        }
    },
    methods: {

    },
}
</script>
<style scoped>

</style>