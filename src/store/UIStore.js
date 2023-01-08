import { makeAutoObservable, observable, computed } from 'mobx';

class UIStore {
    constructor() {
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
