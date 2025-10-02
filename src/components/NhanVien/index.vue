<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   
            <div class="row">
                <div class="col-lg-4">
                    <div class="card radius-10 border-top border-0 border-3 border-info">
                        <div class="card-header">
                            <h2><b> Nhân Viên</b></h2>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="">Họ Và Tên</label>
                                <input type="text" class="form-control" placeholder="nhập họ và tên">
                            </div>
                              <div class="mb-3">
                                <label for="">Email</label>
                                <input type="text" class="form-control" placeholder="nhập Email">
                            </div>
                            <div class="mb-3">
                                <label for="">Số Điện Thoại</label>
                                <input type="text" class="form-control" placeholder="nhập Số Điện Thoại">
                            </div>
                              <div class="mb-3">
                                <label for="">Địa Chỉ</label>
                                <input type="text" class="form-control" placeholder="nhập Địa Chỉ">
                            </div>
                              <div class="mb-3">
                                <label for="">Quyền</label>
                               <select name="" id="" class="form-control">
                                <option value="1">Admin</option>
                                <option value="0">Nhân Viên</option>
                               </select>
                            </div>
                              <div class="mb-3">
                                <label for="">Tình Trạng</label>
                              <select name="" id="" class="form-control">
                                <option value="1">Đang Hoạt Động</option>
                                <option value="0">Chưa Hoạt Động</option>
                               </select>
                            </div>
                              
                        </div>
                        <div class="card-footer text-end">
                            <button class="btn btn-primary">Thêm Mới</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 ">
                    <div class="card radius-10 border-top border-0 border-3 border-info">
                        <div class="card-header">
 <h2><b>Danh Sách Nhân Viên</b></h2>
                        </div>
                               <div class="card-body">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr class="text-center">
                        <th>#</th>
                        <th>Họ Và Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa Chỉ</th>
                        <th>Quyền</th>
                        <th>Tình Trạng</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  <template v-for="(value,index) in nhan_vien" :key="index">
                      <tr class="text-center">
                        <th>{{ index +1 }}</th>
                        <td>{{ value.ho_va_ten }}</td>
                        <td>{{ value.email }}</td>
                        <td>{{ value.so_dien_thoai }}</td>
                        <td>{{ value.dia_chi }}</td>
                        <td>{{ value.ten_quyen }}</td>
                        <td>
                            <div class="d-grid gap-2">
                                <button v-if="value.tinh_trang == 1" class="btn btn-success">Hoạt Động</button>
                                <button v-else class="btn btn-danger">Chưa Hoạt Động</button>
                            </div>
                        </td>
                        <td>
                              <button v-on:click="Object.assign(update,value)" class="btn btn-outline-info me-1" data-bs-toggle="modal" data-bs-target="#CapNhat"><i class="fa-solid fa-pen-nib"></i></button>
                                    <button v-on:click="Object.assign(delete_nhanvien,value)" data-bs-toggle="modal" data-bs-target="#Xoa" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                  </template>
                </tbody>
            </table>
        </div>
                    </div>
     </div>
            </div>
   <!-- Xóa -->
<div class="modal fade" id="Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhân Viên</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-danger" role="alert">
  Bạn Có Chắc Chắn Muốn Xóa <b>{{ delete_nhanvien.ho_va_ten }}</b> này không ?
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">đóng</button>
        <button type="button" class="btn btn-danger">Xóa</button>
      </div>
    </div>
  </div>
</div>
       
    
 <!-- CapNhat -->
<div class="modal fade" id="CapNhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-info">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nhân Viên</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
                                <label for="">Họ Và Tên</label>
                                <input v-model="update.ho_va_ten" type="text" class="form-control" placeholder="nhập họ và tên">
                            </div>
                              <div class="mb-3">
                                <label for="">Email</label>
                                <input v-model="update.email" type="text" class="form-control" placeholder="nhập Email">
                            </div>
                            <div class="mb-3">
                                <label for="">Số Điện Thoại</label>
                                <input v-model="update.so_dien_thoai" type="text" class="form-control" placeholder="nhập Số Điện Thoại">
                            </div>
                              <div class="mb-3">
                                <label for="">Địa Chỉ</label>
                                <input v-model="update.dia_chi" type="text" class="form-control" placeholder="nhập Địa Chỉ">
                            </div>
                              <div class="mb-3">
                                <label for="">Quyền</label>
                               <select v-model="update.ten_quyen" name="" id="" class="form-control">
                                <option value="1">Admin</option>
                                <option value="0">Nhân Viên</option>
                               </select>
                            </div>
                              <div class="mb-3">
                                <label for="">Tình Trạng</label>
                              <select v-model="update.tinh_trang" name="" id="" class="form-control">
                                <option value="1">Đang Hoạt Động</option>
                                <option value="0">Chưa Hoạt Động</option>
                               </select>
                            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            nhan_vien: [
                { 'ho_va_ten': 'Nguyễn Văn A', 'so_dien_thoai': '0394421076', 'dia_chi': 'Quảng Ngãi', 'tinh_trang': 1, 'ten_quyen': 'Admin', 'email': 'nguyevanA@gamil.com' },
                { 'ho_va_ten': 'Nguyễn Văn B', 'so_dien_thoai': '0384932423', 'dia_chi': 'Quảng Nam', 'tinh_trang': 0, 'ten_quyen': 'Nhân Viên', 'email': 'nguyevanB@gamil.com' },
                { 'ho_va_ten': 'Nguyễn Văn C', 'so_dien_thoai': '0798121381', 'dia_chi': 'Quảng Nam', 'tinh_trang': 1, 'ten_quyen': 'Nhân Viên', 'email': 'nguyevanC@gamil.com' },
                { 'ho_va_ten': 'Nguyễn Văn D', 'so_dien_thoai': '0718232812', 'dia_chi': 'Quảng Bình', 'tinh_trang': 1, 'ten_quyen': 'Nhân Viên', 'email': 'nguyevanD@gamil.com' },
                { 'ho_va_ten': 'Nguyễn Văn E', 'so_dien_thoai': '0392811921', 'dia_chi': 'Quảng Trị', 'tinh_trang': 0, 'ten_quyen': 'Nhân Viên', 'email': 'nguyevanE@gamil.com' },
            ],
            update: { 'ho_va_ten': '', 'so_dien_thoai': '', 'dia_chi': '', 'tinh_trang': '', 'ten_quyen': '', 'email': '' },
            delete_nhanvien:{}
          
        }
    },
    methods: {
        
    }
}
</script>
<style></style>