import { HEIGHT } from './constants';
import { Bullet, Drawable, Target } from './models';
import { View } from './View';

export class Controller {
  private view: View;
  private target: Target;
  private bullets: Bullet[] = [];
  private numOfBullets!: number;
  private intervalId!: NodeJS.Timeout;
  private targetHit = false;
  private _tries = 0;
  private attemptsCallback: (tries: number) => void;
  private isGameRunningCallback: (isGameRunning: boolean) => void;

  constructor(
    numOfBullets: number,
    targetSize: number,
    attemptsCallback: (tries: number) => void,
    isGameRunningCallback: (isGameRunning: boolean) => void,
  ) {
    this.attemptsCallback = attemptsCallback;
    this.isGameRunningCallback = isGameRunningCallback;
    this.numOfBullets = numOfBullets;
    this.view = new View();
    this.target = new Target(targetSize);
  }

  private draw = (object: Drawable) => this.view.draw(object);

  public init(
    canvas: HTMLCanvasElement,
  ): void {
    this.view.init(canvas);
    this.draw(this.target);
  }

  public run(): void {
    this.isGameRunningCallback(!this.targetHit);

    if (this.intervalId) clearInterval(this.intervalId);

    this._tries += 1;

    for (let i = 0; i < this.numOfBullets; i++)
      this.bullets.push(new Bullet({ x: 0, y: HEIGHT / 2 }));

    this.intervalId = setInterval(() => this.gameLoop(), 10);
  }

  private gameLoop(): void {
    this.view.drawBackground();
    this.draw(this.target);

    this.checkTargetHit();

    this.bullets.forEach(bullet => this.draw(bullet));
    this.bullets.forEach(bullet => bullet.move());
    this.bullets = this.bullets
      .filter(bullet => !bullet.reachedBorder(this.view.width));

    if (!this.bullets.length) this.run();

    if (this.targetHit) this.resetGame();
    else this.attemptsCallback(this._tries);
  }

  private resetGame() {
    clearTimeout(this.intervalId);

    this.bullets = [];
    this.isGameRunningCallback(!this.targetHit);
    this.targetHit = false;
    this._tries = 0;
  }

  private checkTargetHit() {
    const { x0, y0, y1 } = this.target.hitbox;

    this.bullets.forEach(bullet => {
      if (
        bullet.hitbox.x1 >= x0 &&
        bullet.hitbox.y0 >= y0 &&
        bullet.hitbox.y1 <= y1
      ) this.targetHit = true;
    });
  }

  public setTargetSize(newSize: number) {
    this.target = new Target(newSize);
    this.view.drawBackground();
    this.draw(this.target);
  }

  public setNumOfBullets(newNumOfBullets: number) {
    this.numOfBullets = newNumOfBullets;
  }
}
