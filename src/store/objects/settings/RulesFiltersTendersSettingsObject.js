export default class RulesFiltersTendersSettingsObject {
	number = null;
	location = null;
	action = null;
	value = null;
	logicalConnection = null;

	constructor(ruleFilterTendersSettings = null) {
		if (ruleFilterTendersSettings) {
			this.number = ruleFilterTendersSettings.number;
			this.location = ruleFilterTendersSettings.location;
			this.action = ruleFilterTendersSettings.action;
			this.value = ruleFilterTendersSettings.value;
			this.logicalConnection = ruleFilterTendersSettings.logicalConnection;
		}
	}

	toRequest() {
		return {
			Number: this.number,
			Location: this.location,
			Action: this.action,
			Value: this.value,
			LogicalConnection: this.logicalConnection,
		};
	}

	toDummyResponse() {
		return {
			number: this.number,
			location: this.location,
			action: this.action,
			value: this.value,
			logicalConnection: this.logicalConnection,
		};
	}
}
