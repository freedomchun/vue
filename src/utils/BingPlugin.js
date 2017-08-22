export default {
    install(Vue, options) {
        Vue.prototype.imagecut = function (url, width, height = false) {
            return `${process.env.BASE_HOST}/thumb/${width}${height ? `/${height}` : ''}?url=${encodeURIComponent(url)}`;
        }
        
        Vue.prototype.treeMenu = function (ctegorys = [], level = 0) {
            let arr = []
            ctegorys.forEach((value, index) => {
                value.level = level
                arr.push(value)
                if (value.all_children.length !== 0) {
                    this.treeMenu(value.all_children, level + 1).forEach((item, key) => {
                        arr.push(item)
                    })
                    value.all_children = []
                }
            })
            return arr
        }
    }
}