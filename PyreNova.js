Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "PyreNova", name: "" }, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d2.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d4.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d6.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d8.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d10.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d100.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d12.glb",
		system: "PyreNova"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/wcube/PyreNova_d20.glb",
		system: "PyreNova"
	});
});