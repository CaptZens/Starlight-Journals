export default class starlightitem extends itemsheet {
	get template() {
		return 'systems/starlightjournals/sheets/@{this.item.data.type}-sheet.html' ;
	}
}