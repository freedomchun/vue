import * as attachment from '@/api/attachment'
import {getToken} from "@/utils/auth";

const pic = {
    state: {
        dirs: [],
        atts: [],
        pagination: {
            current_page: 1,
            per_page: 16,
            total: 0,
        },
        props: {
            label: 'title',
            children: 'children',
        },
        loading: {
            dir: false,
            att: false,
            del: false,
        },
        op: {
            searchDirWord: '',
            current_dir: null,
        },
        upload: {
            show: false,
            url: `${process.env.BASE_API}/attachment`,
            headers: {
                Accept: 'application/json, text/plain, */*',
                Authorization: 'Bearer ' + getToken()
            },
            data: {},
            dialog: {
                show: false,
                imageUrl: null,
            }
        },
        sel: {
            indeterminate: false,
            checkAll: false,
            checkedAtts: [],
        }
    },
    mutations: {
        setDirs(state, resData) {
            state.dirs = resData
        },
        setAtts(state, resData) {
            state.atts = resData
        },
        setPicPagination(state, pagination) {
            state.pagination.current_page = pagination.current_page
            state.pagination.total = pagination.total
        },
        setCurrentDir(state, dir) {
            state.op.current_dir = dir
        },
        setUploadInfo(state, info) {
            state.upload.data = info
            state.upload.show = !state.upload.show
        },
        uploadPreview(state, file) {
            state.upload.dialog.show = true;
            state.upload.dialog.imageUrl = file.url;
        },
        checkAllChange(state, event) {
            state.sel.isIndeterminate = false;
            state.sel.checkedAtts = event.target.checked ? state.atts.map(item => item.id) : [];
        },
        checkedAttsChange(state, value) {
            let checkedCount = value.length;
            state.sel.checkAll = checkedCount === state.atts.length;
            state.sel.indeterminate = checkedCount > 0 && checkedCount < state.atts.length;
        }
    },
    actions: {
        getDirs({commit, state}) {
            state.loading.dir = true
            attachment.requestAttDirs().then(rs => {
                commit('setDirs', rs.data)
                state.loading.dir = false
            }).catch(err => {
                state.loading.dir = false
            })
        },
        getAtts({commit, state}) {
            state.loading.att = true
            let dir_id = state.op.current_dir !== null ? state.op.current_dir.id : null
            let params = {page: state.pagination.current_page, per_page: state.pagination.per_page, dir_id}
            attachment.requestAttachments(params).then(rs => {
                commit('setAtts', rs.data.data)
                commit('setPicPagination', rs.data)
                state.loading.att = false
            }).catch(err => {
                state.loading.att = false
            })
        },
        createFolder({dispatch}, params) {
            attachment.requestCreateDir(params).then(() => {
                dispatch('getDirs')
            })
        },
        uploadRemove({dispatch}, file) {
            if (file !== null && typeof file.response.id !== 'undefined') {
                attachment.requestDeleteAttachment([file.response.id]).then(() => {
                    dispatch('getAtts')
                });
            }
        },
        uploadProgress({dispatch}, event) {
            if (event.loaded === event.total) {
                dispatch('getAtts')
            }
        },
        deleteSelect({dispatch, state}) {
            if (!!state.sel.checkedAtts.length) {
                state.loading.del = true
                attachment.requestDeleteAttachment(state.sel.checkedAtts).then(rs => {
                    state.sel.checkedAtts = []
                    state.sel.indeterminate = false
                    state.sel.checkAll = false
                    state.loading.del = false
                    dispatch('getAtts')
                });
            }
        },
        updateFolder({dispatch, state}, dir) {
            return new Promise((resolve, reject) => {
                attachment.requestEditDir(dir).then(rs => {
                    resolve(rs)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        deleteFolder({dispatch, state}, dir) {
            return new Promise((resolve, reject) => {
                attachment.requestDeleteDir(dir).then(rs => {
                    resolve(rs)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default pic