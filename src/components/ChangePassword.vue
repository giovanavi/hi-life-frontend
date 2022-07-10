<template>
<div class="container">
	<div class="row">
		<div class="col-12">
			<!-- Page title -->
			<div class="p-3">
				<h3>Alterar Senha</h3>
				<hr>
			</div>
			<!-- Form START -->
			<form class="row g-3">	
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="password" class="form-control form-control-lg" placeholder="Senha Antiga">
				</div>
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="password" class="form-control form-control-lg" placeholder="Nova senha">
				</div>
				<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
					<input type="password" class="form-control form-control-lg" placeholder="Confirmação de senha">
				</div>

				<div class="p-3 d-md-flex justify-content-md-end">
					<button class="btn btn-danger btn-lg " type="submit"> Cancelar </button>
					<button class="btn btn-primary btn-lg " type="submit"> Alterar </button>
				</div>
			</form> <!-- Form END -->
		</div>
	</div>
</div>
</template>