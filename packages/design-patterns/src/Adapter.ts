// 适配器模式

// 百度地图 api
const baiduMap = {
    show: function () {
        console.log('开始渲染百度地图');
    },
};

// 高德地图 api
const AMap = {
    render: function () {
        console.log('开始渲染高德地图');
    },
};

// 适配器
const baiduAdapter = {
    render: function () {
        return baiduMap.show();
    },
};

function renderMap(map: any) {
    if (typeof map.render === 'function') {
        map.render();
    }
}

renderMap(AMap); // 开始渲染高德地图
renderMap(baiduAdapter); // 开始渲染百度地图
