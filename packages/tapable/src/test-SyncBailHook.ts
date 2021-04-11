import {SyncBailHook} from 'tapable';

// 实例化一个加速的hook
const accelerate = new SyncBailHook<number, void | Error>(['newSpeed']);

accelerate.tap('LoggerPlugin', (newSpeed) => console.log('LoggerPlugin', `加速到${newSpeed}`));

// 再注册一个回调，用来检测是否超速
// 如果超速就返回一个错误
accelerate.tap('OverspeedPlugin', (newSpeed) => {
    if (newSpeed > 120) {
        console.log('OverspeedPlugin', '您已超速！！');

        return new Error('您已超速！！');
    }
    return;
});

accelerate.tap('DamagePlugin', (newSpeed) => {
    if (newSpeed > 300) {
        console.log('DamagePlugin', '速度实在太快，车子快散架了。。。');
    }
});

export default accelerate;
