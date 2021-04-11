// 单例模式
class CreateSingleton {
    name: string;
    constructor(name: string) {
        this.name = name;
        this.init();
    }

    init() {
        console.log(this.name);
    }
}

const Singleton = (function () {
    let instance: CreateSingleton;
    return class {
        constructor(name: string) {
            if (!instance) {
                instance = new CreateSingleton(name);
            }
            return instance;
        }
    };
})();

const a = new Singleton('a');
const b = new Singleton('b');
console.log(a === b);
