import authStore from './stores/auth-store';
import homeStore from './stores/home-store';
import globalStore from './stores/global-store';

// Merge all of the separate stores into one
globalStore.merge(homeStore);
export default globalStore.merge(authStore);