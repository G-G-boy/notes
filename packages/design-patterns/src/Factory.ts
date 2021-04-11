// 工厂模式
class A {
    constructor() {
        console.log('A');
    }
}

class B {
    constructor() {
        console.log('B');
    }
}

class Factory {
    constructor(type: 'A' | 'B') {
        switch (type) {
            case 'A':
                return new A();
            case 'B':
                return new B();
            default:
                throw new Error('not found');
        }
    }
}

new Factory('A');
new Factory('B');
