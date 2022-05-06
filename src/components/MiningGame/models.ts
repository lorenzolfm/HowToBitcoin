import { BLUE, HEIGHT, RED, WIDTH } from './constants';

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

type Coord = { x: number, y: number };

type ConstructorParams = {
  coord: Coord;
  color: string;
  height: number;
  width: number;
}

type Hitbox = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export abstract class Drawable {
  protected _width: number;
  protected _height: number;
  protected _coord: Coord;
  protected _color: string;
  protected _hitbox: Hitbox;

  constructor({ coord, color, height, width }: ConstructorParams) {
    this._width = width;
    this._height = height;
    this._coord = coord;
    this._color = color;

    this._hitbox = {
      x0: this._coord.x,
      y0: this._coord.y,
      x1: this._coord.x + this._width,
      y1: this._coord.y + this._height,
    };
  }

  get color(): string { return this._color; }
  get width(): number { return this._width; }
  get height(): number { return this._height; }
  get x(): number { return this._coord.x; }
  get y(): number { return this._coord.y; }
  get hitbox(): Hitbox { return this._hitbox; }

  protected setHitbox() {
    this._hitbox = {
      x0: this._coord.x,
      y0: this._coord.y,
      x1: this._coord.x + this._width,
      y1: this._coord.y + this._height,
    };
  }
}

export class Target extends Drawable {
  constructor(size: number) {
    const width = 20;
    const x = WIDTH - width;
    const y = HEIGHT / 2 - size / 2;

    super({
      coord: { x, y },
      color: RED,
      width: 20,
      height: size,
    });
  }
}

export class Bullet extends Drawable {
  private initialY: number;
  private angularCoefficient: number;

  constructor(coord: Coord) {
    super({
      width: 5,
      height: 5,
      color: BLUE ,
      coord,
    });

    this.initialY = coord.y - this.width / 2;
    const angularCoefficientMin = - this.initialY / WIDTH;
    const angularCoefficientMax = (HEIGHT - this.initialY) / WIDTH;
    this.angularCoefficient = randomInRange(angularCoefficientMin, angularCoefficientMax);
  }

  public move(): void {
    const dx = 5;
    const newX = this.x + dx;
    // y = ax + b
    const newY = newX * this.angularCoefficient + this.initialY;

    this._coord = { x: newX, y: newY };
    this.setHitbox();
  }

  public reachedBorder(borderXMax: number): boolean {
    return this.hitbox.x1 >= borderXMax;
  }
}
