import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject, observable, Observable } from "rxjs";
import { BoardService } from "../board.service";
import { COORD, BoardProcessed } from "../generator";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  private observable = new BehaviorSubject<number[]>([]);

  constructor(private BS: BoardService) {}

  get obsSudo(): Observable<BoardProcessed> {
    return this.BS.observable;
  }
  newGame(): void {
    this.BS.newGame();
  }

  receiveCase(v: COORD): void {
    console.log(v);
    this.BS.canPlay(v);
    //this.observable.next(this.BS.canPlay(v));
    //this.BS.canPlay(v);
  }

  ngOnInit(): void {}
}
