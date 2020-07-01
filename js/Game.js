(function(w){
    function Game(){
        // 1 获取地图
        w.map = document.querySelector('#map');
        // 2创建坦克实例化对象
        w.tank = new MyTank();
        w.tank.render(map);
        // 3 我方坦克子弹
        w.bullet = new Bullet();
        // 4 敌方坦克
        w.npcTank = new NpcTank();
        w.npcTank.render(map);    
        // 5 敌方坦克子弹
        w.Npcbullet = new NpcBullet();
    }

    Game.prototype.start=function(){
        // 事件处理
        window.onkeydown = function (e) {
            //获取键盘按键  兼容性
            var code = e.keyCode || e.charCode || e.which;
            switch (code) {
                case 37:
                    //左 
                    // 边界检测
                    for (let i = 0; i < tank.body.length; i++) {
                        if (tank.body[i].x == 0) {
                            return;
                        }
                    }
                    if (tank.direction == 'left') {
                        tank.direction = 'left';
                    } else {
                        tank.direction = 'left';
                        let centerX = tank.body[1].x
                        let centerY = tank.body[1].y
                        // 身体重组
                        tank.body = [
                            { x: centerX - 1, y: centerY, heart: true },
                            { x: centerX, y: centerY, centre: true },
                            { x: centerX, y: centerY - 1 },
                            { x: centerX + 1, y: centerY - 1 },
                            { x: centerX, y: centerY + 1 },
                            { x: centerX + 1, y: centerY + 1 },
                        ]
                    }
                    break;
                case 38:
                    //上
                    for (let i = 0; i < tank.body.length; i++) {
                        if (tank.body[i].y == 0) {
                            return;
                        }
                    }
                    if (tank.direction == 'top') {
                        tank.direction = 'top';
                    } else {
                        tank.direction = 'top';
                        let centerX = tank.body[1].x
                        let centerY = tank.body[1].y
                        tank.body = [
                            { x: centerX, y: centerY - 1, heart: true },
                            { x: centerX, y: centerY, centre: true },
                            { x: centerX + 1, y: centerY },
                            { x: centerX + 1, y: centerY + 1 },
                            { x: centerX - 1, y: centerY },
                            { x: centerX - 1, y: centerY + 1 },
                        ]
                    }
                    break;
                case 39:
                    //右
                    for (let i = 0; i < tank.body.length; i++) {
                        if (tank.body[i].x == 59) {
                            return;
                        }
                    }
                    if (tank.direction == 'right') {
                        tank.direction = 'right';
                    } else {
                        tank.direction = 'right';
                        let centerX = tank.body[1].x
                        let centerY = tank.body[1].y
                        tank.body = [
                            { x: centerX + 1, y: centerY, heart: true },
                            { x: centerX, y: centerY, centre: true },
                            { x: centerX, y: centerY - 1 },
                            { x: centerX - 1, y: centerY - 1 },
                            { x: centerX, y: centerY + 1 },
                            { x: centerX - 1, y: centerY + 1 },
                        ]
                    }
                    break;
                case 40:
                    //下
                    for (let i = 0; i < tank.body.length; i++) {
                        if (tank.body[i].y == 39) {
                            return;
                        }
                    }
                    if (tank.direction == 'buttom') {
                        tank.direction = 'bottom';
                    } else {
                        tank.direction = 'bottom';
                        let centerX = tank.body[1].x
                        let centerY = tank.body[1].y
                        tank.body = [
                            { x: centerX, y: centerY + 1, heart: true },
                            { x: centerX, y: centerY, centre: true },
                            { x: centerX - 1, y: centerY },
                            { x: centerX - 1, y: centerY - 1 },
                            { x: centerX + 1, y: centerY },
                            { x: centerX + 1, y: centerY - 1 },
                        ]
                    }
                    break;
                case 32:
                    //我方子弹限流
                    if (bullet.ele) {
                        return;
                    }
                    //bullet.direction = tank.direction;
                    bullet = new Bullet();
                    let x = bullet.x;
                    let y = bullet.y;
                    //按下空格键发射子弹
                    bullet.render(map, x, y);
                    bullet.move(map, x, y);
    
                    return;
    
                default:
                    //用户按得不是上下左右空格,则结束事件处理函数
                    return;
                    break;
            }
    
            // 坦克移动
            tank.move(map);
        }
    // 敌方 难度设置
    document.querySelector('.Npcbullet').onclick =function(){
        // 设置敌人子弹的速度
        localStorage.setItem('Npcbullet',document.querySelector('#Npcbullet').value);
    }
    document.querySelector('#Npcbullet').value=localStorage.getItem('Npcbullet');
    

    // 我方
    document.querySelector('.Mybullet').onclick =function(){
        // 设置敌人子弹的速度
        localStorage.setItem('Mybullet',document.querySelector('#Mybullet').value);
    }
    document.querySelector('#Mybullet').value=localStorage.getItem('Mybullet');


    // 点击遮罩层开始游戏
    document.querySelector('.shade').onclick = () => {
        npcTank.getMove(npcTank);
        document.querySelector('.shade').style.display = 'none';
    }
    
        
        


    }

   
   w.Game =Game;

})(window)