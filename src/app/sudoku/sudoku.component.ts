import { EventEmitter } from "@angular/core";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output
} from "@angular/core";
import { COORD, emptyBoard, BoardProcessed } from "../generator";

@Component({
  selector: "app-sudoku",
  templateUrl: "./sudoku.component.html",
  styleUrls: ["./sudoku.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuComponent implements OnInit {
  @Input() board: BoardProcessed = emptyBoard;
  @Output() caseClicked = new EventEmitter<COORD>();

  constructor() {}

  ngOnInit(): void {}

  isInternal(n: number, s: number): boolean {
    if (n % Math.sqrt(s) === 0) {
      return true;
    } else {
      return false;
    }
  }

  wantPlayHere(y: number, x: number): void {
    if (this.board.data[y][x] === 0) {
      console.log("case vide");
    }
  }
}
