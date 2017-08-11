import {Notification, Message} from 'element-ui'
import router from '@/router'

export function openWindow(url, title = null, w = 860, h = 640, is_scroll = 'no') {
    let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    
    let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    
    let left = ((width / 2) - (w / 2)) + dualScreenLeft;
    let top = ((height / 2) - (h / 2)) + dualScreenTop;
    let newWindow = window.open(url, title, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=${is_scroll}, resizable=yes, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`);
    newWindow.focus();
}

export function err(err) {
    switch (err.response.status) {
        case 401:
            Notification({
                type: 'error',
                title: '过期提醒',
                message: '你的会话已过期，需要重新登录。'
            })
            router.push('/login')
            break;
        case 422:
            let msg = [];
            for (let v in err.response.data) {
                msg.push(err.response.data[v]);
            }
            Message.warning(msg.join('<br>'));
            break;
        case 500:
            Message.error('服务器发生了一个错误。');
            break;
        default :
            Message.warning('数据获取失败！');
            break;
    }
}
