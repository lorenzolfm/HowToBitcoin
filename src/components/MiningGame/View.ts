import { Drawable } from './models';
import { GREY, HEIGHT, WIDTH } from './constants';

export class View {
  private context!: CanvasRenderingContext2D;
  private _width = WIDTH;
  private _height = HEIGHT;
  private _color = GREY;

  public init(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.drawBackground();
  }

  public drawBackground() {
    this.context.fillStyle = this._color;
    this.context.fillRect(0, 0, this._width, this._height);
  }

  public draw(object: Drawable) {
    this.context.fillStyle = object.color;
    this.context.fillRect(object.x, object.y, object.width, object.height);
  }

  get width() { return this._width; }
  get height() { return this._height; }
}
