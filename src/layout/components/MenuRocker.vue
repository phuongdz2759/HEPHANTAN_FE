<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item">
					<router-link to="/">
						<a class="nav-link" href="/">
							<div class="parent-icon"><i class="bx bx-home-circle"></i>
							</div>
							<div class="menu-title">Sản Phẩm</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/nhan-vien">
						<a class="nav-link" href="/nhan-vien">
							<div class="parent-icon"><i class="bx bx-home-circle"></i>
							</div>
							<div class="menu-title">Nhân Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Mon-an">
						<a class="nav-link" href="/Mon-an">
							<div class="parent-icon"><i class="bx bx-home-circle"></i>
							</div>
							<div class="menu-title">Món Ăn</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/dai-ly">
						<a class="nav-link" href="/dai-ly">
							<div class="parent-icon"><i class="bx bx-home-circle"></i>
							</div>
							<div class="menu-title">Đại Lý</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>

export default {
	
}
</script>
<style></style>