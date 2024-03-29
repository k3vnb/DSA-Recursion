// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

function orgChartMaker(orgChart, tab = 0) {
    let tabString = ''
    for (let i = 0; i < tab; i++){
        tabString+='\t'
    }
    Object.keys(orgChart).forEach(key => {
        console.log(tabString, key)
        orgChartMaker(orgChart[key], tab + 1)
    })
}

const obj = {
	Zuckerberg: {
		Schroepfer: {
			Bosworth: {
				Steve: {},
				Kyle: {},
				Andra: {},
			},
			Zhao: {
				Richie: {},
				Sofia: {},
				Jen: {},
			},
		},
		Schrage: {
			VanDyck: {
				Sabrina: {},
				Michelle: {},
				Josh: {},
			},
			Swain: {
				Blanch: {},
				Tom: {},
				Joe: {},
			},
		},
		Sandberg: {
			Goler: {
				Eddie: {},
				Julie: {},
				Annie: {},
			},
			Hernandez: {
				Rowi: {},
				Inga: {},
				Morgan: {},
			},
			Moissinac: {
				Amy: {},
				Chuck: {},
				Vinni: {},
			},
			Kelley: {
				Eric: {},
				Ana: {},
				Wes: {},
			},
		},
	},
}
orgChartMaker(obj)