class Enemy
{
    constructor(x, y, w, h, vel, color, canvas, random)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.score = 0;
        this.vel = vel;
        this.color = color;
        this.canvas = canvas;
        this.random = random;
        this.enemy = loadImage("enemy", "src/assets/img/enemy.png", this.x, this.y, this.w, this.h, this.canvas);
    }
    update()
    {
        if (this.y < 340)
        {
            this.y = this.y + this.vel;
            setY(this.enemy, this.y);
        }
        else if (this.y >= 340)
        {
            this.score++;
            this.pos = this.random.random(300 - 40);
            if (this.pos < 100 + 12)
            {
                this.pos = 100 + 12;
            }
            this.y = 8;
            this.x = this.pos;
            this.vel = this.vel + 0.5;
            setY(this.enemy, this.y);
            setX(this.enemy, this.x);
        }
    }
}