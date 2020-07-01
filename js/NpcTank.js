(function(w){
    // 敌方坦克
    function NpcTank(w, h, direction) {
        this.w = w || 15;
        this.h = h || 15;
        this.direction = 'left';
        // 设置初始位置
        this.body = [
            { x: 54, y: 36, heart: true },// 头部
            { x: 55, y: 36, centre: true },// 中间
            { x: 55, y: 35 },//中右
            { x: 56, y: 35 },//尾右
            { x: 55, y: 37 },//中左
            { x: 56, y: 37 },//尾左
        ]
    }

    //  生成敌方坦克
    NpcTank.prototype.render = function (map) {
        this.eles = [];
        //2.1 根据身体生成div
        for (let i = 0; i < this.body.length; i++) {
            // 2.2设置位置和样式
            let div = document.createElement('div');
            div.style.width = this.w + 'px';
            div.style.height = this.h + 'px';
            div.style.position = 'absolute';
            div.style.left = this.body[i].x * this.w + 'px';
            div.style.top = this.body[i].y * this.h + 'px';
            div.style.backgroundColor = 'black';
            div.className = 'npc';
            map.appendChild(div);
            this.eles.push(div);
        }
    }
    //  敌方坦克移动
    NpcTank.prototype.move = function (map) {
        //3.1 
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
        // 移除旧坦克
        this.remove(map);
        // 生成新坦克
        this.render(map);
    }

    // 移除敌方坦克
    NpcTank.prototype.remove = function (map) {
        for (var i = 0; i < this.eles.length; i++) {
            map.removeChild(this.eles[i]);
        }
    }

    // 给敌方坦克设置定时器
    NpcTank.prototype.getMove =function(npcTank){
        npcTank.getMove.timeId=setInterval(function () {
        // 不停修改敌方坦克的方向
        let Npcdirection = ['left', 'bottom', 'top', 'right'];
        let num = Math.floor(Math.random() * 4);
        npcTank.direction = Npcdirection[num];
        if (npcTank.direction == 'left') {
            for(let i=0;i<npcTank.body.length;i++){
                    if(npcTank.body[i].x==0){
                         return;
                    }
            }
            let centerX = npcTank.body[1].x
            let centerY = npcTank.body[1].y
            npcTank.body = [
                { x: centerX - 1, y: centerY, heart: true },
                { x: centerX, y: centerY, centre: true },
                { x: centerX, y: centerY - 1 },
                { x: centerX + 1, y: centerY - 1 },
                { x: centerX, y: centerY + 1 },
                { x: centerX + 1, y: centerY + 1 },
            ]
        } else if (npcTank.direction == 'right') {
            for(let i=0;i<npcTank.body.length;i++){
                    if(npcTank.body[i].x==59){
                         return;
                    }
                }
            let centerX = npcTank.body[1].x
            let centerY = npcTank.body[1].y
            npcTank.body = [
                { x: centerX + 1, y: centerY, heart: true },
                { x: centerX, y: centerY, centre: true },
                { x: centerX, y: centerY - 1 },
                { x: centerX - 1, y: centerY - 1 },
                { x: centerX, y: centerY + 1 },
                { x: centerX - 1, y: centerY + 1 },
            ]
        } else if (npcTank.direction == 'top') {
            for(let i=0;i<npcTank.body.length;i++){
                    if(npcTank.body[i].y==0){
                         return;
                    }
                }
            let centerX = npcTank.body[1].x
            let centerY = npcTank.body[1].y
            npcTank.body = [
                { x: centerX, y: centerY - 1, heart: true },
                { x: centerX, y: centerY, centre: true },
                { x: centerX + 1, y: centerY },
                { x: centerX + 1, y: centerY + 1 },
                { x: centerX - 1, y: centerY },
                { x: centerX - 1, y: centerY + 1 },
            ]
        } else if (npcTank.direction == 'bottom') {
            for(let i=0;i<npcTank.body.length;i++){
                    if(npcTank.body[i].y==39){
                         return;
                    }
                }
            let centerX = npcTank.body[1].x
            let centerY = npcTank.body[1].y
            npcTank.body = [
                { x: centerX, y: centerY + 1, heart: true },
                { x: centerX, y: centerY, centre: true },
                { x: centerX - 1, y: centerY },
                { x: centerX - 1, y: centerY - 1 },
                { x: centerX + 1, y: centerY },
                { x: centerX + 1, y: centerY - 1 },
            ]
        }
        npcTank.move(map);
        
        Npcbullet.NpcsendStop(npcTank);
    }, 500)
    }

    w.NpcTank =NpcTank;
})(window)