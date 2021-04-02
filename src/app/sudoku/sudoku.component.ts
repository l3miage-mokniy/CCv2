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
  private selectCase: COORD = { x: -1, y: -1, value: -1 };

  constructor() {}

  ngOnInit(): void {}

  isInternal(n: number, s: number): boolean {
    if (n % Math.sqrt(s) === 0) {
      return true;
    } else {
      return false;
    }
  }

  getSelectCase(): number[] {
    return [this.selectCase.x, this.selectCase.y];
  }

  wantPlayHere(y: number, x: number, v: number): void {
    if (this.board.isInitial[y][x] === false) {
      console.log("NOT INITIAL CASE");
      this.selectCase = { x: x, y: y, value: v };
      this.caseClicked.emit(this.selectCase);
    }
  }
}
