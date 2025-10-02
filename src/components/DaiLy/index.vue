<template>
 <div class="row">
    <div class="card">
        <div class="card-header">
              <div class="row">
                <div class="col-lg-6 mt-2">
                    <h2><b>Danh Sách Đại Lý</b></h2>
                </div>
                <div class="col-lg-6 text-end mt-2">
                    <button type="button" class="btn btn-outline-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#themmoi">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr class="text-center table-info">
                        <th>#</th>
                        <th>Tên Đại lý</th>
                        <th>Email</th>
                        <th>Holine</th>
                        <th>Mã Số Thuế</th>
                        <th>Địa Chỉ Kinh Doanh</th>
                        <th>Tình Trạng</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   <template v-for="(value,index) in dai_ly" :key="index">
                     <tr class="text-center">
                        <th> {{ index + 1 }}</th>
                        <td>{{ value.ten_cong_ty }}</td>
                        <td>{{ value.email }}</td>
                        <td>{{ value.hotline }}</td>
                        <td>{{ value.ma_so_thue }}</td>
                        <td>{{ value.dia_chi }}</td>
                        <td>
                             <div class="d-grid gap-2">
                                <button v-if="value.tinh_trang == 1" class="btn btn-success">Đang Hợp Tác</button>
                                <button v-else class="btn btn-danger">Ngưng Hợp Tác</button>
                            </div>
                        </td>
                        <td>
                              <button class="btn btn-primary me-1">Cập nhật</button>
                                    <button class="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                   </template>
                </tbody>
            </table>
        </div>
    </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            dai_ly: [
                {'ten_cong_ty': 'Công Ty DZFullStack', 'email': 'DZFullStack@gmail.com', 'hotline': '0909123456', 'tinh_trang': 1, 'dia_chi': '32 Xuân Diệu, Sơn Trà, Đà Nẵng', 'ma_so_thue': '1234567890' },
                {'ten_cong_ty': 'Công Ty TNHH ABC', 'email': 'congtyABC@gmail.com', 'hotline': '0909955560', 'tinh_trang': 1, 'dia_chi': '01 Lê Duẩn, Hải Châu, Đà Nẵng', 'ma_so_thue': '9999999999' },
                {'ten_cong_ty': 'Công Ty TNHH XXX', 'email': 'congtyXXX@gmail.com', 'hotline': '0709955098', 'tinh_trang': 0, 'dia_chi': '19 Lê Đình Lý, Thanh Khê, Đà Nẵng', 'ma_so_thue': '8888888888' },
            ],
        }
    },
    methods: {
       
    }
}
</script>

<style>
</style>