import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject, observable, Observable } from "rxjs";
import { BoardService } from "../board.service";
import { COORD, BoardProcessed } from "../generator";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  private observable = new BehaviorSubject<number[]>([-1, -1]);

  constructor(private BS: BoardService) {}

  get obsSudo(): Observable<BoardProcessed> {
    return this.BS.observable;
  }

  get obsPlayable(): Observable<number[]> {
    return this.observable;
  }

  newGame(): void {
    this.BS.newGame();
  }

  receiveCase(v: COORD): void {
    console.log("receive", v);
    this.observable.next(this.BS.canPlay(v));
    //this.BS.canPlay(v);
  }

  playable(): Observable<number[]> {
    const tst = this.observable.pipe(map(n => filter(n => n !== -1)));
    return null;
  }

  ngOnInit(): void {}
}
