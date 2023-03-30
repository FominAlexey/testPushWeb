export default class CustomerTenderObject {
	id = null;
	name = null;
	contactPhone = null;
	contactEmail = null;

	constructor(customerTender = null) {
		if (customerTender) {
			this.id = customerTender.id;
			this.name = customerTender.name;
			this.contactPhone = customerTender.contactPhone;
			this.contactEmail = customerTender.contactEmail;
		}
	}

	toDummyResponse() {
		return {
			id: this.id,
			name: this.name,
			contactPhone: this.contactPhone,
			contactEmail: this.contactEmail,
		};
	}
}
