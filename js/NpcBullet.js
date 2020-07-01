(function(w){
    // 敌方子弹
    function NpcBullet(w, h, x, y, direction) {
        this.w = w || 15
        this.h = h || 15
        this.x = npcTank.body[0].x
        this.y = npcTank.body[0].y
        this.direction = npcTank.direction
    }

    // 敌方子弹生成
    NpcBullet.prototype.render = function (map, x, y) {
        let div = document.createElement('div');
        div.style.width = this.w + 'px';
        div.style.height = this.h + 'px';
        div.style.position = 'absolute';
        div.style.left = x * this.w + 'px';
        div.style.top = y * this.h + 'px';
        div.style.backgroundColor = 'black';
        map.appendChild(div);
        this.ele = div;
    }

    NpcBullet.prototype.move = function (map, x, y) {
        switch (this.direction) {
            case 'left':
                this.Npcsend(x, y, this.direction)
                break;
            case 'right':
                this.Npcsend(x, y, this.direction)
                break;
            case 'top':
                this.Npcsend(x, y, this.direction)
                break;
            case 'bottom':
                this.Npcsend(x, y, this.direction)
                break;
        }

    }

    
    // 移除子弹
    NpcBullet.prototype.remove = function (map) {
        map.removeChild(this.ele);
    }

    
    // 敌方发射子弹
    NpcBullet.prototype.Npcsend =function(x, y, direction){
        switch (direction) {
            case 'left':
                this.Npcsend.timeId = setInterval(() => {
                    if (x == 0) {
                        Npcbullet.remove(map);
                        clearInterval(this.Npcsend.timeId);
                        Npcbullet.ele = undefined;
                        return;
                    }
                    x--
                    Npcbullet.remove(map);
                    Npcbullet.render(map, x, y);
                    for (let i = 0; i < tank.body.length; i++) {
                        if (x == tank.body[i].x && y == tank.body[i].y) {
                            tank.remove(map);
                            Npcbullet.remove(map);
                            clearInterval(this.Npcsend.timeId);
                            Npcbullet.ele = undefined;
                            alert('game over')
                            window.location.reload();
                            return;
                        }
                    }

                }, localStorage.getItem('Npcbullet'))
                break;
            case 'right':
                this.Npcsend.timeId = setInterval( ()=> {
                    if (x == 59) {
                        Npcbullet.remove(map);
                        clearInterval(this.Npcsend.timeId);
                        Npcbullet.ele = undefined;
                        return;
                    }
                    x++
                    Npcbullet.remove(map);
                    Npcbullet.render(map, x, y);
                    for (let i = 0; i < tank.body.length; i++) {
                        if (x == tank.body[i].x && y == tank.body[i].y) {
                            tank.remove(map);
                            Npcbullet.remove(map);
                            clearInterval(this.Npcsend.timeId);
                            Npcbullet.ele = undefined;
                            alert('game over')
                            window.location.reload();
                            return;
                        }
                    }
                }, localStorage.getItem('Npcbullet'))
                break;
            case 'top':
                this.Npcsend.timeId = setInterval(()=> {
                    if (y == 0) {
                        Npcbullet.remove(map);
                        clearInterval(this.Npcsend.timeId);
                        Npcbullet.ele = undefined;
                        return;
                    }
                    y--
                    Npcbullet.remove(map);
                    Npcbullet.render(map, x, y);
                    for (let i = 0; i < tank.body.length; i++) {
                        if (x == tank.body[i].x && y == tank.body[i].y) {
                            tank.remove(map);
                            Npcbullet.remove(map);
                            clearInterval(this.Npcsend.timeId);
                            Npcbullet.ele = undefined;
                            alert('game over')
                            window.location.reload();
                            return;
                        }
                    }
                }, localStorage.getItem('Npcbullet'))
                break;
            case 'bottom':
                this.Npcsend.timeId = setInterval(()=> {
                    if (y == 39) {
                        Npcbullet.remove(map);
                        clearInterval(this.Npcsend.timeId);
                        Npcbullet.ele = undefined;
                        return;
                    }
                    y++
                    Npcbullet.remove(map);
                    Npcbullet.render(map, x, y);
                    for (let i = 0; i < tank.body.length; i++) {
                        if (x == tank.body[i].x && y == tank.body[i].y) {
                            tank.remove(map);
                            Npcbullet.remove(map);
                            clearInterval(this.Npcsend.timeId);
                            Npcbullet.ele = undefined;
                            alert('game over')
                            window.location.reload();
                            return;
                        }
                    }
                }, localStorage.getItem('Npcbullet'))
                break;
        }
    }
    

    //敌方子弹限流
    NpcBullet.prototype.NpcsendStop= function(npcTank) {
        if (Npcbullet.ele) {
            return;
        }
        Npcbullet = new NpcBullet();
        let x = Npcbullet.x;
        let y = Npcbullet.y;
        Npcbullet.render(map, x, y);
        Npcbullet.move(map, x, y);
    }


    w.NpcBullet =NpcBullet;
})(window)