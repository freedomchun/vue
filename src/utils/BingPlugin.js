export default {
    install(Vue, options) {
        Vue.prototype.imagecut = function (url, width, height = false) {
            return `${process.env.BASE_HOST}/thumb/${width}${height ? `/${height}` : ''}?url=${encodeURIComponent(url)}`;
        }
    }
}