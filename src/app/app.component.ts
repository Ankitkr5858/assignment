import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bankListForDropDown: Array<any> = [{
    ifsc: "ABHY0065001", bank_id: 60, branch: "RTGS-HO",
    address: "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065002", bank_id: 60,
    branch: "ABHYUDAYA NAGAR", address:
      "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065003", bank_id: 60,
    branch: "BAIL BAZAR", address: "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065004", bank_id: 60, branch: "BHANDUP",
    address: "CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078", city: "MUMBAI",
    district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065005", bank_id: 60, branch:
      "DARUKHANA", address: "POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  }];
  public bankListForTable: Array<any> = [{
    ifsc: "ABHY0065001", bank_id: 60, branch: "RTGS-HO",
    address: "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065002", bank_id: 60,
    branch: "ABHYUDAYA NAGAR", address:
      "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065003", bank_id: 60,
    branch: "BAIL BAZAR", address: "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065004", bank_id: 60, branch: "BHANDUP",
    address: "CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078", city: "MUMBAI",
    district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  },
  {
    ifsc: "ABHY0065005", bank_id: 60, branch:
      "DARUKHANA", address: "POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010",
    city: "MUMBAI", district: "GREATER MUMBAI", state: "MAHARASHTRA",
    bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED"
  }];
  tableHeaderList: Array<any> = ["IFSc", "Bank Id", "Branch", "address", "city", "state", "District", "BankNname"];
  public selectedItem: any;
  filterQueryConcate: string = "";

  ngOnInit() {
  }

  selectedBank(event) {
    this.bankListForTable = [''];
    this.bankListForTable.push(this.selectedItem);
  }

  findAction(event) {
    if (event.key != "F1" && event.key != "Backspace" && event.key != "Shift") {
      this.filterQueryConcate += event.key;
    }
    if (event.key == "Backspace") {
      this.filterQueryConcate += event.key;
      this.bankListForTable = this.bankListForDropDown;
      this.filterQueryConcate = "";
    }
  }

  findQuery() {
    this.bankListForTable.forEach(element => {
      if (element.branch.toLowerCase() == this.filterQueryConcate.toLowerCase()) {
        this.bankListForTable = [];
        this.bankListForTable.push(element);
      }
    }
    )
  }




}

