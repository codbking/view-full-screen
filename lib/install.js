
import viewFullScreen from "./view-full-screen";

export default {
    install: (Vue) => {
        Vue.component("view-full-screen", viewFullScreen)
    }
}

export {viewFullScreen}
