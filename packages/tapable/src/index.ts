import accelerate from './test-SyncHook';
import syncBailAccelerate from './test-SyncBailHook';
import syncWaterfallAccelerate from './test-SyncWaterfallHook';

// accelerate.call(100);

// syncBailAccelerate.call(100);

const lastPlugin = syncWaterfallAccelerate.call(100);
console.log(lastPlugin);
