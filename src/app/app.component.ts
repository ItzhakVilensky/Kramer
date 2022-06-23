import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEDID } from 'src/models/EDID';
import { EdidService } from 'src/services/edid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kramer';
  public edidData: IEDID[];
  filterForm: FormGroup = this.fb.group({
    name: [null, Validators.required]
  });
  isFocus: boolean = false;
  edidNameFocus: string[] = [];

  constructor(private edidService: EdidService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchData();
  }

  getClass(status: number): "grey" | "green" {
    if (status === 0) {
      return 'grey';
    } else {
      return 'green';
    }
  }

  onClick(name) {
    const index = this.edidNameFocus.indexOf(name);

    if (this.edidNameFocus.indexOf(name) < 0) {
      this.edidNameFocus.push(name);
    } else {
      if (index > -1) {
        this.edidNameFocus.splice(index, 1);
      }
    }
  }

  onFocus(name): boolean {
    return this.edidNameFocus.includes(name);
  }

  private fetchData() {
    this.edidData = this.edidService.getAllEdid();
  }
}
