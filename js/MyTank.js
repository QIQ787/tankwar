(function(w){
   // 1 创建我方坦克
   function MyTank(w, h, direction) {
    // 1.1 给坦克设置宽高 方向
    this.w = w || 15;
    this.h = h || 15;
    this.direction = 'right';
    // 1.2坦克的身体 设置默认位置
    this.body = [
        { x: 4, y: 3, heart: true },// 头部
        { x: 3, y: 3, centre: true },// 中间
        { x: 3, y: 4 },//中右
        { x: 2, y: 4 },//尾右
        { x: 3, y: 2 },//中左
        { x: 2, y: 2 },//尾左
    ]
}

// 2 生成坦克
MyTank.prototype.render = function (map) {
    // 2.1 使用数组保存每一节div 用于移除
    this.eles = [];
    for (let i = 0; i < this.body.length; i++) {
        // 2.2 设置位置和样式
        let div = document.createElement('div');
        div.style.width = this.w + 'px';
        div.style.height = this.h + 'px';
        div.style.position = 'absolute';
        div.style.left = this.body[i].x * this.w + 'px';
        div.style.top = this.body[i].y * this.h + 'px';
        div.style.backgroundColor = 'skyblue';
        // 2.3 追加到地图上并保存
        map.appendChild(div);
        // 2.4 将每节身体保存到自定义属性中
        this.eles.push(div);
    }
}

// 3 坦克移动
MyTank.prototype.move = function (map) {
    //3.1 根据坦克的方向移动
    switch (this.direction) {
        case 'left':
            this.body.forEach((item, index) => {
                item.x-- 
            })
            break;
        case 'right':
            this.body.forEach((item, index) => {
                item.x++
            })
            break;
        case 'top':
            this.body.forEach((item, index) => {
                item.y--
            })
            break;
        case 'bottom':
            this.body.forEach((item, index) => {
                item.y++
            })
            break;
    }
    // 3.2移除旧坦克
    this.remove(map);
    // 3.3生成新坦克
    this.render(map);
}

// 4 移除坦克
MyTank.prototype.remove = function (map) {
    // 4.1 通过保存每节身体div的自定义属性来删除坦克
    for (var i = 0; i < this.eles.length; i++) {
        map.removeChild(this.eles[i]);
    }
}

 w.MyTank =MyTank;


})(window)