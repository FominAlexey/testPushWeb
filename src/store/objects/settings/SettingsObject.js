import RulesFiltersTendersSettingsObject from "./RulesFiltersTendersSettingsObject";

export default class SettingsObject {
	userId = null;
	rulesFiltersTenders = null;

	constructor(settings = null) {
		if (settings) {
			this.userId = settings.userId;
			this.rulesFiltersTenders = settings.rulesFiltersTenders.map(
				(RuleFilterTenders) =>
					new RulesFiltersTendersSettingsObject(RuleFilterTenders)
			);
		}
	}

	toRequest() {
		return {
			UserId: this.userId,
			RulesFiltersTenders: this.rulesFiltersTenders,
		};
	}

	toDummyResponse() {
		return {
			userId: this.userId,
			rulesFiltersTenders: this.rulesFiltersTenders,
		};
	}
}
