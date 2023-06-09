import { makeAutoObservable, observable, computed } from 'mobx';

class UIStore {
    rootStore;
    constructor(rootStore) {
        console.log('UIStore ', rootStore);

        makeAutoObservable(this, {
            windowDimensions: observable.struct,
            isMobile: computed
        });
        window.onresize = () => {
            this.windowDimensions = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        };
        this.rootStore = rootStore;
    }
    windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    get isMobile() {
        return this.windowDimensions.width < 798;
    }
}

export default UIStore;
