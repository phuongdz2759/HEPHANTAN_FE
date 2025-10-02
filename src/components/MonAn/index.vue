<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        <div class="row">
            <div class="card radius-10 border-top border-0 border-3 border-success">
                <div class="card-header mt-2 ms-2">
                    <div class="row">
                        <div class="col-lg-6 ">
                            <h2><b>Danh Sách Các Món Ăn</b></h2>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button type="button" class="btn btn-outline-success px-5 radius-30" data-bs-toggle="modal"
                                data-bs-target="#themmoi"><i class="fa-solid fa-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
         <template v-for="(value,index) in menuList" :key="index">
             <div class="col-lg-3 ">
              <div class="card d-flex radius-10 border-bottom border-0 border-3 border-success">
                <img :src="value.image" alt="" class="img-fluid" style="height: 250px;">
                <div class="card-body">
                    <h5><b>{{ value.name }}</b></h5>
                    <p>{{ value.description }}</p>
                    <br>
                    <div class="row">
                        <div class="col-lg-6">
                            <span class="text-danger"><b>{{ value.price }} đ</b></span>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button v-on:click="Object.assign(delete_monan,value)"  data-bs-toggle="modal" data-bs-target="#Xoa" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash"></i>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
         </template>
        </div>
           <!-- Themmoi -->
<div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Món Ăn</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <div class="mb-3">
                <label for="">Tên Món Ăn</label>
                <input type="text" class="form-control" placeholder="Nhập Tên Món Ăn">
            </div>
             <div class="mb-3">
                <label for="">Mô Tả</label>
                <input type="text" class="form-control" placeholder="Nhập Mô Tả">
            </div>
            <div class="mb-3">
                <label for="">Hình Ảnh</label>
                <input type="text" class="form-control" placeholder="Nhập Hình Ảnh">
            </div>
            <div class="mb-3">
                <label for="">Giá</label>
                <input type="number" class="form-control" placeholder="Nhập Giá">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">đóng</button>
        <button type="button" class="btn btn-info">Thêm Mới</button>
      </div>
    </div>
  </div>
</div>
      <!-- Xóa -->
<div class="modal fade" id="Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Món Ăn</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-danger" role="alert">
  Bạn Có Chắc Chắn Muốn Xóa <b>{{delete_monan.name}}</b> này không ?
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">đóng</button>
        <button type="button" class="btn btn-danger">Xóa</button>
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
                    name: "Phở Bò Đặc Biệt",
                    description: "Phở bò với các loại thịt bò chọn lọc, nước dùng đậm đà",
                    price: 65000,
                    image: "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
                },
                {
                    name: "Cơm Gà Hải Nam",
                    description: "Cơm gà hấp với nước luộc gà và gia vị đặc biệt",
                    price: 55000,
                    image: "https://cdn.tgdd.vn/Files/2021/08/16/1375575/cach-nau-com-ga-hai-nam-don-gian-ga-chin-vang-uom-da-gion-dung-chuan-202112290927578686.png",
                },
                {
                    name: "Bún Bò Huế",
                    description: "Bún bò Huế cay nồng với nước dùng đặc trưng",
                    price: 60000,
                    image: "https://www.shutterstock.com/image-photo/vietnamese-spicy-beef-noodle-soup-600nw-2318182837.jpg",
                },
                {
                    name: "Bánh Mì Thịt",
                    description: "Bánh mì giòn với nhiều loại thịt và rau sống",
                    price: 25000,
                    image: "https://dongtienbakery.com/image/cache/data/Product_B%C3%A1nh%20m%C3%AC/M%C3%AC%20th%E1%BB%8Bt%20ch%E1%BA%A3%20(1)_fix-608x416f.jpg",
                },
                {
                    name: "Bún Chả Hà Nội",
                    description: "Bún chả với thịt nướng thơm lừng, nước mắm chua ngọt đặc trưng",
                    price: 45000,
                    image: "https://daiductai.vn/upload/filemanager/B%C3%BAn%20ch%E1%BA%A3/bun-cha.jpg",
                },
                {
                    name: "Cơm Tấm Sườn Bì",
                    description: "Cơm tấm với sườn nướng, bì heo và trứng ốp la",
                    price: 40000,
                    image: "https://cdn.tgdd.vn/2020/08/CookProduct/52-1200x676.jpg",
                },
                {
                    name: "Mì Quảng",
                    description: "Mì Quảng với tôm thịt, bánh tráng và rau sống đặc trưng miền Trung",
                    price: 35000,
                    image: "https://i0.wp.com/vickypham.com/wp-content/uploads/2023/05/8faee-2023_04_28eosm56722.jpg",
                },
                {
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
<style></style>