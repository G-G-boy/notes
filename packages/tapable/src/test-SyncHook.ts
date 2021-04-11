import {SyncHook} from 'tapable';

// 实例化一个加速的hook
const accelerate = new SyncHook<number>(['newSpeed']);

// 注册第一个回调，加速时记录下当前速度
accelerate.tap('LoggerPlugin', (newSpeed) => console.log('LoggerPlugin', `加速到${newSpeed}`));

// 再注册一个回调，用来检测是否超速
accelerate.tap('OverspeedPlugin', (newSpeed) => {
    if (newSpeed > 120) {
        console.log('OverspeedPlugin', '您已超速！！');
    }
});

// 再注册一个回调，用来检测速度是否快到损坏车子了
accelerate.tap('DamagePlugin', (newSpeed) => {
    if (newSpeed > 300) {
        console.log('DamagePlugin', '速度实在太快，车子快散架了。。。');
    }
});

export default accelerate;
