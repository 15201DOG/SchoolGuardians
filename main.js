var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var user = {
    x : 885,
    y : 700,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}

class Alien1 {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.hp = 100;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y, this.width,this.height);
        
    }
}

function 이동(){
    animation = requestAnimationFrame(이동);

    ctx.clearRect(0,0, canvas.width, canvas.height);

    var alien1 = new Alien1();
    alien1.draw();

    if(right == true){
        user.x += 5;
        right = false;
    }

    if(left == true){
        user.x -= 5;
        left = false;
    }

    if(up == true){
        user.y -= 5;
        up = false;
    }

    if(down == true){
        user.y += 5;
        down = false;
    }

    if(user.x < 0){
        user.x = 0;
    }

    if(user.y < 0){
        user.y = 0;
    }

    if(user.x > 1770){
        user.x = 1770;
    }

    if(user.y > 810){
        user.y = 810;
    }

    user.draw()
}
    이동();

var right = false;
var left = false;
var up = false;
var down = false;

document.addEventListener('keydown', function(e){
    if (e.code === 'ArrowRight'){
        right = true;
    }
})

document.addEventListener('keydown', function(e){
    if (e.code === 'ArrowLeft'){
        left = true;
    }
})

document.addEventListener('keydown', function(e){
    if (e.code === 'ArrowUp'){
        up = true;
    }
})

document.addEventListener('keydown', function(e){
    if (e.code === 'ArrowDown'){
        down = true;
    }
})
