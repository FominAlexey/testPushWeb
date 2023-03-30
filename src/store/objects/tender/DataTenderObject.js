import LotTenderObject from "./LotTenderObject";
import CustomerTenderObject from "./CustomerTenderObject";

export default class DataTenderObject {
	name = null;
	url = null;
	keywords = null;
	lots = null;
	startDate = null;
	endDate = null;
	price = null;
	type = null;
	description = null;
	customer = null;
	externalId = null;
	internalPrice = null;
	comment = null;

	constructor(dataTender = null) {
		if (dataTender) {
			this.name = dataTender.name;
			this.url = dataTender.url;
			this.keywords = dataTender.keywords;
			this.startDate = dataTender.startDate;
			this.endDate = dataTender.endDate;
			this.lots = dataTender.lots.map(
				(lotTender) => new LotTenderObject(lotTender)
			);
			this.price = dataTender.price;
			this.type = dataTender.type;
			this.description = dataTender.description;
			this.customer = new CustomerTenderObject(dataTender.customer);
			this.externalId = dataTender.externalId;
			this.internalPrice = dataTender.internalPrice;
			this.comment = dataTender.comment;
		}
	}

	toDummyResponse() {
		return {
			name: this.name,
			url: this.url,
			keywords: this.keywords,
			lots: this.lots,
			startDate: this.startDate,
			endDate: this.endDate,
			price: this.price,
			type: this.type,
			description: this.description,
			customer: this.comment,
			externalId: this.externalId,
			internalPrice: this.internalPrice,
			comment: this.comment,
		};
	}
}
