<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="row">
        <div class="col-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-3">
                            <h4>Danh Sách Sản Phẩm</h4>
                        </div>
                        <div class="col-lg-9 col-xl-9">
                            <div class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="position-relative">
                                            <input v-model="search_tag" type="text" class="form-control ps-5"
                                                placeholder="Search Product..."> <span
                                                class="position-absolute top-50 product-show translate-middle-y"><i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group"
                                            aria-label="Button group with nested dropdown">
                                            <button type="button" class="btn btn-white">Sắp Xếp</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-arrow-down-short-wide"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-xxl-end" aria-labelledby="btnGroupDrop1">
                                                    <li><a  class="dropdown-item" href="#">A - Z</a>
                                                    </li>
                                                    <li><a  class="dropdown-item" href="#">Z - A</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-white">Khoảng Giá</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fa-solid fa-circle-arrow-down"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-xxl-end " style="width: 400px;"
                                                    aria-labelledby="btnGroupDrop1">
                                                    <li>
                                                        <div class="dropdown-header">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="row">
                                                                        <div class="col-4">
                                                                            <input v-model="begin" class="form-control"
                                                                                placeholder="0 đ" type="text"></div>
                                                                        <div class="col-2" style="padding: 0px 0px">
                                                                            <hr>
                                                                        </div>
                                                                        <div class="col-6"><input v-model="end" class="form-control"
                                                                                placeholder="540.000 đ" type="text">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row ">
          <template v-for="(value, index) in sxandgido" :key="index">
            <div class="col-lg-3 d-flex">
                <div class="card flex-fill radius-10 border-bottom border-0 border-3 border-info">
                    <img v-bind:src="value.hinh_anh" class="card-img-top "
                        style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;" alt="...">
                    <div class="">
                        <div v-if="value.is_flash_sale == 1" class="position-absolute top-0 end-0 m-3 product-discount">
                            <span class="badge bg-warning mt-2">Sale</span>
                        </div>
                        <div v-if="value.is_noi_bat == 1" class="position-absolute top-0 end-0 m-3 product-discount">
                            <span class="badge bg-danger mt-2">Nổi Bật</span>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title cursor-pointer">
                           {{ value.ten_san_pham }}
                                <p class="mt-3">{{ value.tag }}</p>
                           
                        </h6>
                        <div class="mt-auto">
                            <div class="d-flex align-items-center fs-6">
                                <div class="cursor-pointer">
                                    <template v-for="items in value.sao_danh_gia" :key="items">
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </template>
                                    <template v-for="items in (5 - value.sao_danh_gia)" :key="items">
                                        <i class="fa-regular fa-star"></i>
                                    </template>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="clearfix mt-4">
                                <button v-on:click="Object.assign(chitiet,value)" class="btn btn-outline-danger btn-sm  " data-bs-toggle="modal" data-bs-target="#chitiet">Chi Tiết</button>
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-muted">{{ value.gia_ban
                                        }}</span><span class="fs-5 text-danger">{{ value.gia_khuyen_mai }}</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </template>
    </div>
    <!-- Modal -->
<div class="modal fade" id="chitiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
               <div class="modal-body text-center">
            <img
              :src="chitiet.hinh_anh"
              alt="iPhone 17 Pro Max"
              class="img-fluid mb-3"
            >
            <h4>{{ chitiet.ten_san_pham }}</h4>
            <p><b>Giá khuyến mãi:</b> {{chitiet.gia_khuyen_mai}}đ</p>
            <p><b>Giá gốc:</b> <del>{{chitiet.gia_ban}}đ</del></p>
            <p><b>Mô tả:</b>{{ chitiet.tag }}.</p>
           
          </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
        chitiet:{},
      sxandgido: [
        {
          id: 1,
          ten_san_pham: "Laptop Gaming Acer Nitro 5",
          slug_san_pham: "laptop-gaming-acer-nitro-5",
          hinh_anh: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413248cv1d.jpg",
          is_flash_sale: 1,
          is_noi_bat: 0,
          gia_ban: "25,000,000đ",
          gia_khuyen_mai: "22,500,000đ",
          sao_danh_gia: 4,
          tag: "Gaming, Hiệu năng cao"
        },
        {
          id: 2,
          ten_san_pham: "Điện thoại iPhone 17 Pro Max",
          slug_san_pham: "iphone-17-pro-max",
          hinh_anh: "https://9to5mac.com/wp-content/uploads/sites/6/2025/04/iphone-17-blue-mockup.jpg?quality=82&strip=all&w=1600",
          is_flash_sale: 0,
          is_noi_bat: 1,
          gia_ban: "35,000,000đ",
          gia_khuyen_mai: "32,000,000đ",
          sao_danh_gia: 5,
          tag: "Flagship, Camera đẹp"
        },
        {
          id: 3,
          ten_san_pham: "Tai nghe Sony WH-1000XM5",
          slug_san_pham: "tai-nghe-sony-wh-1000xm5",
          hinh_anh: "https://tse2.mm.bing.net/th/id/OIP.3EMl233EK2zAo5-jb92E7QGQGQ?pid=Api&P=0&h=220",
          is_flash_sale: 1,
          is_noi_bat: 1,
          gia_ban: "9,000,000đ",
          gia_khuyen_mai: "7,500,000đ",
          sao_danh_gia: 5,
          tag: "Noise Cancelling, Bluetooth"
        },
        {
          id: 4,
          ten_san_pham: "Chuột Logitech G Pro X Superlight",
          slug_san_pham: "chuot-logitech-g-pro-x-superlight",
          hinh_anh: "https://product.hstatic.net/200000722513/product/g-pro-x-superlight-wireless-black-666_83650815ce2e486f9108dbbb17c29159_1450bb4a9bd34dcb92fc77f627eb600d_master.jpg",
          is_flash_sale: 1,
          is_noi_bat: 0,
          gia_ban: "3,500,000đ",
          gia_khuyen_mai: "3,000,000đ",
          sao_danh_gia: 4,
          tag: "Chuột gaming, Siêu nhẹ"
        },
        {
          id: 5,
          ten_san_pham: "Bàn phím cơ Keychron K2",
          slug_san_pham: "ban-phim-co-keychron-k2",
          hinh_anh: "https://tse3.mm.bing.net/th/id/OIP.4lMOCH2Qp3k7ucjx6JSU9AHaEK?pid=Api&P=0&h=220",
          is_flash_sale: 1,
          is_noi_bat: 0,
          gia_ban: "2,800,000đ",
          gia_khuyen_mai: "2,400,000đ",
          sao_danh_gia: 4,
          tag: "Bluetooth, Hot-swap"
        },
         {
          id: 6,
          ten_san_pham: "Màn hình LG UltraGear 27GN950",
          slug_san_pham: "man-hinh-lg-ultragear-27gn950",
          hinh_anh: "https://nguyencongpc.vn/photos/17/LG-27GN950-B-2.JPG",
          is_flash_sale: 1,
          is_noi_bat: 1,
          gia_ban: "18,000,000đ",
          gia_khuyen_mai: "16,500,000đ",
          sao_danh_gia: 5,
          tag: "4K, 144Hz, Gaming"
        },
        {
          id: 7,
          ten_san_pham: "Máy ảnh Sony A7 IV",
          slug_san_pham: "may-anh-sony-a7-iv",
          hinh_anh: "https://mayanh9x.com/image/catalog/san-pham/mayanh-sony/sony-alpha-a7-iv/may-anh-Sony-Alpha-a7-IV-fulframe.jpg",
          is_flash_sale: 0,
          is_noi_bat: 1,
          gia_ban: "50,000,000đ",
          gia_khuyen_mai: "47,000,000đ",
          sao_danh_gia: 5,
          tag: "Full-frame, Quay phim 4K"
        },
        {
          id: 8,
          ten_san_pham: "Loa Bluetooth JBL Charge 5",
          slug_san_pham: "loa-bluetooth-jbl-charge-5",
          hinh_anh: "http://www.maccenter.vn/Audio/JBL-Charge5-Gray-A.jpg",
          is_flash_sale: 1,
          is_noi_bat: 0,
          gia_ban: "4,200,000đ",
          gia_khuyen_mai: "3,600,000đ",
          sao_danh_gia: 4,
          tag: "Chống nước, Bass mạnh"
        }
      ]
    }
  }
}

</script>
<style></style>