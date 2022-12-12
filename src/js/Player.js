class Player
{
    constructor(x, y, w, h, vel, color, canvas)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = vel;
        this.color = color;
        this.canvas = canvas;
        this.player = loadImage("player", "src/assets/img/car.png", this.x, this.y, this.w, this.h, this.canvas);
        this.controller = new Controller();
        this.controller.controller();
    }
    update()
    {
        if (this.controller.state[2] && this.x >= 112)
        {
            this.x = this.x - this.vel;
            setX(this.player, this.x);
        }
        if (this.controller.state[3] && this.x <= 300 - 45)
        {
            this.x = this.x + this.vel;
            setX(this.player, this.x);
        }
    }
    
    isTouching(enemy)
    {
        this.enemy = enemy;
        if (((this.x > this.enemy.x && this.x < this.enemy.x + this.enemy.w) && (this.y > this.enemy.y && this.y < this.enemy.y + this.enemy.h) || (this.x + this.w > this.enemy.x && this.x < this.enemy.x) && (this.y > this.enemy.y && this.y < this.enemy.y + this.enemy.h)))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}