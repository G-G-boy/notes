// 建造者模式
class ComputerBuilder {
    brand: string;
    cpu: string = '';
    mSize: string = '';

    constructor(brand: string) {
        this.brand = brand;
    }

    buildCPU(type: 'Intel' | 'AMD') {
        switch (type) {
            case 'Intel':
                this.cpu = 'Intel 处理器';
                break;
            case 'AMD':
                this.cpu = 'AMD 处理器';
                break;
        }
        return this;
    }

    buildMemory(mSize: string) {
        this.mSize = '内存' + mSize + 'G';
        return this;
    }
}

function computerDirector(brand: string, type: 'Intel' | 'AMD', mSize: string) {
    const _computer = new ComputerBuilder(brand);
    _computer.buildCPU(type).buildMemory(mSize);
    return _computer;
}

console.log(computerDirector('apple', 'Intel', '32'));
