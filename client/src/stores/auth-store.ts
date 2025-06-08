import { createAuthClient } from "better-auth/vue";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const loading = ref(false);
  const session = authClient.useSession();

  const authenticated = computed(() => !!session.value.data);
  const user = computed(() => session.value.data?.user ?? null);

  // async function googleSignIn() {
  //   loading.value = true;
  //   await authClient.signIn.social({
  //     provider: "google",
  //     callbackURL: "/dashboard",
  //     newUserCallbackURL: "/onboarding",
  //   });
  //   loading.value = false;
  // }

  async function signIn(email: string, password: string) {
    loading.value = true;
    await authClient.signIn.email({
      email,
      password,
    });
    loading.value = false;
  }

  async function signUp(name: string, email: string, password: string) {
    loading.value = true;
    await authClient.signUp.email({
      name,
      email,
      password,
    });
    loading.value = false;
  }

  async function signOut() {
    loading.value = true;
    await authClient.signOut();
    loading.value = false;
  }

  return {
    loading,
    authenticated,
    user,
    signUp,
    signIn,
    signOut,
    // googleSignIn,
  };
});
