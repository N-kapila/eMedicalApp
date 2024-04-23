import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Diagnosis {
  code: string;
  display: string;
}

@Component({
  selector: 'app-diagnosis-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosis-search.component.html',
  styleUrl: './diagnosis-search.component.css',
  providers: [HttpClient],
})
export class DiagnosisSearchComponent implements OnInit {
  @Input() initialSelectedDiagnoses: string[] = [];
  @Output() selectedDiagnosesChange = new EventEmitter<string[]>();

  SNOMED_SERVER = 'https://r4.ontoserver.csiro.au/fhir';
  DIAGNOSIS_URL =
    this.SNOMED_SERVER +
    '/ValueSet/$expand?url=' +
    encodeURIComponent('http://snomed.info/sct') +
    encodeURIComponent('?fhir_vs=ecl/') +
    encodeURIComponent('< 404684003') +
    '&count=20';

  diagnosisList: Diagnosis[] = [];
  searchText: string = '';
  isListVisible: boolean = true;
  selectedDiagnoses: string[] = this.initialSelectedDiagnoses;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchDiagnoses(filter: string) {
    this.http
      .get<any>(this.DIAGNOSIS_URL + '&filter=' + filter)
      .subscribe((data) => {
        this.diagnosisList = (data.expansion?.contains || []).map(
          (diagnosis: any) => ({
            code: diagnosis.code,
            display: diagnosis.display,
          })
        );
      });
  }

handleDiagnosisSelect(diagnosis: Diagnosis) {
  if (!this.selectedDiagnoses.includes(diagnosis.display)) {
    this.selectedDiagnoses.push(diagnosis.display);
    this.selectedDiagnosesChange.emit(this.selectedDiagnoses);
    this.searchText = ''; // Clear the search text after selection
    this.isListVisible = false; // Hide the search list after selection
  }
}


handleSearchChange(event: any): void {
  this.searchText = event.target.value;
  this.diagnosisList = []; // Clear list on new search
  if (this.searchText.length > 0) {
    this.fetchDiagnoses(this.searchText);
    this.isListVisible = true; // Show the search list when typing
  } else {
    this.isListVisible = false; // Hide the search list if search text is empty
  }
}

}
