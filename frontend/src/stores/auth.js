import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)

  function login(_token, _user) {
    token.value = _token
    user.value = _user
  }

  function logout() {
    token.value = ''
    user.value = null
  }

  return { token, user, isLoggedIn, login, logout }
}