import * as api from '@/api/loc'

function checkRemoveChild(data) {
    data.forEach((item, index) => {
        if (item.all_children.length === 0) {
            delete data[index].all_children
        } else {
            data[index].all_children = checkRemoveChild(item.all_children)
        }
    })
    return data
}

const loc = {
    state: {
        locs: [],
        ms: [],
        pagination: {
            current_page: 1,
            per_page: 15,
            total: 0,
        },
        op: {
            showAdd: false,
            select: null,
            add: null,
            loc: null,
            props: {
                label: 'name',
                value: 'id',
                children: 'all_children'
            }
        },
    },
    mutations: {
        set_loc(state, data) {
            let a = checkRemoveChild(data)
            console.log(a)
        },
    },
    actions: {
        getLocs({state, commit}) {
            api.getLoc().then(rs => {
                commit('set_loc', rs.data)
            }).catch(() => {
            })
        }
    }
}

export default loc