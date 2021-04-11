// 事件监听器
const Emitter = (function () {
    const _events: {[key: string]: any[]} = {};
    return {
        // 事件绑定
        on(type: string, cb: Function) {
            if (!_events[type]) {
                _events[type] = [];
            }
            if (typeof cb === 'function') {
                _events[type].push(cb);
            } else {
                throw new Error('参数类型必须为函数');
            }
        },
        // 事件解绑
        off(type: string, cb: Function) {
            if (!_events[type] || !_events[type].includes(cb)) return;
            // 移除事件监听
            _events[type].forEach((fn: Function, index: number) => {
                if (fn === cb) {
                    _events[type].splice(index, 1);
                }
            });
        },
        emit(type: string, ...args: any[]) {
            if (!_events[type]) return;
            _events[type].forEach((cb: Function) => cb(...args));
        },
    };
})();

// 事件订阅
Emitter.on('change', (data: any) => console.log(`我是第一条信息：${data}`));
Emitter.on('change', (data: any) => console.log(`我是第二条信息：${data}`));

// 事件发布
Emitter.emit('change', '参数');
