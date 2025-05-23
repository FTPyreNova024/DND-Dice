Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({ id: "pyrenova", name: "pyrenova" }, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d2.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d4.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d6.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d8.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d10.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d100.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d12.glb",
		system: "pyrenova"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/pyrenova/pyrenova_d20.glb",
		system: "pyrenova"
	});
});