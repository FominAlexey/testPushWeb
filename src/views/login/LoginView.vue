<template>
	<v-container class="login-view-container">
		<div class="login-logo-container">
			<v-img
				:src="require('@/assets/img/logo/logo.png')"
				:width="150"
				contain
				class="logo"
			/>
		</div>

		<div class="login-input-container">
			<v-text-field
				v-model="email"
				variant="solo"
				placeholder="Email"
				autocomplete="email"
				clearable
			></v-text-field>
			<v-text-field
				v-model="password"
				variant="solo"
				placeholder="Password"
				type="password"
				clearable
			></v-text-field>
		</div>

		<v-btn
			@click="onLoginClicked"
			:loading="loading"
			class="login-button"
			size="x-large"
			color="blue-darken-2"
			variant="elevated"
		>
			Войти
		</v-btn>
		<custom-snackbar ref="snackbar" />
	</v-container>
</template>
<script>
import "@/assets/styles/views/loginView.css";

import ErrorsMixins from "@/plugins/mixins/errors";

import Snackbar from "@/components/SnackBar.vue";

import store from "@/store/index";

export default {
	mixins: [ErrorsMixins],

	data() {
		return {
			email: null,
			password: null,
			loading: null,
		};
	},
	methods: {
		onLoginClicked() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
				store.dispatch("INIT_TOKEN_AND_ACCOUNT");
				this.$router.push("/NewTenders");
			}, 3000);
		},
	},
	components: {
		CustomSnackbar: Snackbar,
	},
};
</script>
