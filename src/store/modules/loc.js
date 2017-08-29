import {getLoc} from '@/api/loc'

function checkChildren(data) {
    data.forEach((item, index) => {
        item.value = item.id
        if (item.all_children.length === 0) {
            delete item.all_children
        } else {
            item.all_children = checkChildren(item.all_children)
        }
        data[index] = item
    })
    return data
}

const loc = {
    state: {
        list: [],
        props: {
            children: 'all_children'
        }
    },
    mutations: {
        setList(state, data) {
            state.list = checkChildren(data)
        }
    },
    actions: {
        get_locList({commit}) {
            getLoc().then(rs => {
                commit('setList', rs.data)
            }).catch(() => {
            })
        }
    }
}

export default loc