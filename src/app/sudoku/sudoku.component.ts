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
  private selectCase: [number, number] = [-1, -1];

  constructor() {}

  ngOnInit(): void {}

  isInternal(n: number, s: number): boolean {
    if (n % Math.sqrt(s) === 0) {
      return true;
    } else {
      return false;
    }
  }

  getSelectCase(): [number, number] {
    return this.selectCase;
  }

  wantPlayHere(y: number, x: number): void {
    if (this.board.data[y][x] === 0) {
      this.selectCase = [y, x];
      console.log(this.selectCase);
      console.log("case vide");
    }
  }
}
