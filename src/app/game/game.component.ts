import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BoardService } from "../board.service";
import { COORD, BoardProcessed } from "../generator";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  constructor(private BS: BoardService) {}

  get obsSudo(): Observable<BoardProcessed> {
    return this.BS.observable;
  }

  ngOnInit(): void {}
}
