import HomeStore from '../../stores/home-store';
import KlatchHomeView from './klatch-home-view';

export default function KlatchHome() {

    return {
        render() {
            return KlatchHomeView(HomeStore);
        }
    }
}
