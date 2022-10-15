// Import Document Classes.
import { starlightactor } from "./module/document/actor.js";
import { starlightitem } from "./module/Document/item.js";
// Import Sheet Classes.
import { starlightactorsheet } from "./module/sheet/actor.js";
import { starlightitemsheet } from "./module/sheet/item.js";


hooks.once ("init", async function () {
	// Console Shincary
	console.log("starlightjounrals | Initializing Starlight Journals System");
	
	//Global context utility classes
	Game.starlightjournals = {
		starlightactor,
		starlightitem
	};
	
	//Sheet Application Classes Definition
	actors.unregistersheet ("core", Actorsheet);
	actor.registersheet ("Boilerplate", starlightactorsheet, { makedefault: true});
	items.unregistersheet("core", itemsheet);
	items.registersheet ("starlightjournals", starlightitemsheet, { makedefault: true});
});