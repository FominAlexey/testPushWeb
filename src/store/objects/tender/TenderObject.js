import DataTenderObject from "./DataTenderObject";

export default class TenderObject {
  id = null;
  status = null;
  data = null;

  constructor(tender = null) {
    if (tender) {
      this.id = tender.id;
      this.status = tender.status;
      this.data = new DataTenderObject(tender.data);
    }
  }

  toRequest() {
    return {
      Id: this.id,
      Status: this.status,
    };
  }

  toDummyResponse() {
    return {
      id: this.id,
      status: this.status,
      data: this.data,
    };
  }
}
