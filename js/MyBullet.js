(function(w){
   // 我方子弹对象
   function Bullet(w, h, x, y, direction) {
    this.w = w || 15
    this.h = h || 15
    this.x = tank.body[0].x
    this.y = tank.body[0].y
    this.direction = tank.direction
}



// 生成我方子弹
Bullet.prototype.render = function (map, x, y) {
    let div = document.createElement('div');
    div.style.width = this.w + 'px';
    div.style.height = this.h + 'px';
    div.style.position = 'absolute';
    div.style.left = x * this.w + 'px';
    div.style.top = y * this.h + 'px';
    div.style.backgroundColor = '#637be4';
    map.appendChild(div);
    this.ele = div;
}


// 子弹移动
Bullet.prototype.move = function (map, x, y) {
    switch (this.direction) {
        case 'left':
            this.send(x, y, this.direction)
            break;
        case 'right':
            this.send(x, y, this.direction)
            break;
        case 'top':
            this.send(x, y, this.direction)
            break;
        case 'bottom':
            this.send(x, y, this.direction)
            break;
    }

}


// 移除子弹
Bullet.prototype.remove = function (map) {
    map.removeChild(this.ele);
}


// 我方发射子弹
Bullet.prototype.send =function(x, y, direction){
    switch (direction) {
        case 'left':
            this.send.timeId = setInterval(() =>{

                if (x == 0) {
                    bullet.remove(map);
                    clearInterval(this.send.timeId);
                    bullet.ele = undefined;
                    return;
                }
                x--
                bullet.remove(map);
                bullet.render(map, x, y);
                this.wipe(x,y);
            }, localStorage.getItem('Mybullet'))
            break;
        case 'right':
            this.send.timeId = setInterval( () =>{
                if (x == 59) {
                    bullet.remove(map);
                    clearInterval(this.send.timeId);
                    bullet.ele = undefined;
                    return;
                }
                x++
                bullet.remove(map);
                bullet.render(map, x, y);
                this.wipe(x,y);
            }, localStorage.getItem('Mybullet'))
            break;
        case 'top':
            this.send.timeId = setInterval( () =>{
                if (y == 0) {
                    bullet.remove(map);
                    clearInterval(this.send.timeId);
                    bullet.ele = undefined;
                    return;
                }
                y--
                bullet.remove(map);
                bullet.render(map, x, y);
                this.wipe(x,y);
            }, localStorage.getItem('Mybullet'))
            break;
        case 'bottom':
            this.send.timeId = setInterval( () =>{
                if (y == 39) {
                    bullet.remove(map);
                    clearInterval(this.send.timeId);
                    bullet.ele = undefined;
                    return;
                }
                y++
                bullet.remove(map);
                bullet.render(map, x, y);
                this.wipe(x,y);
            }, localStorage.getItem('Mybullet'))
            break;
    }
}

// 判断子弹是否消灭敌人
Bullet.prototype.wipe =function(x,y){
    for (let i = 0; i < npcTank.body.length; i++) {
        if (x == npcTank.body[i].x && y == npcTank.body[i].y) {
                bullet.remove(map);
                clearInterval(this.send.timeId);
                bullet.ele = undefined;
                clearInterval(npcTank.getMove.timeId);
                
                $('.npc').hide(500,function(){
                    $('.npc').show()
                });
               setTimeout(function(){
                npcTank.remove(map);
                setTimeout(function () {
                    npcTank = new NpcTank();
                    npcTank.render(map);
                    npcTank.getMove(npcTank);
                }, 1000)
               },500)
                    
                
        }
    }
}

w.Bullet = Bullet;
})(window)