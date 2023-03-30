export default class LotTenderObject {
	id = null;
	name = null;
	price = null;
	tenderId = null;

	constructor(lotTender = null) {
		if (lotTender) {
			this.id = lotTender.id;
			this.name = lotTender.name;
			this.price = lotTender.price;
			this.tenderId = lotTender.tenderId;
		}
	}

	toDummyResponse() {
		return {
			id: this.id,
			name: this.name,
			price: this.price,
			tenderId: this.tenderId,
		};
	}
}
