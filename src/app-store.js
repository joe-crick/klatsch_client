import authStore from 'stores/auth-store';
import globalStore from 'stores/global-store';

// Merge all of the separate stores into one
export default globalStore.merge(authStore);