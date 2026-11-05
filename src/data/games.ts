// Un objeto por juego. published: false muestra "Próximamente" en lugar del botón de Google Play.
export interface Game {
	slug: string;
	name: string;
	packageId: string;
	tagline: string;
	description: string[];
	features: string[];
	published: boolean;
}

export const GAMES: Game[] = [
	{
		slug: 'skyfall-slinger',
		name: 'Skyfall Slinger',
		packageId: 'com.cirujanoretro.skyfallslinger',
		tagline: 'Lanza hechizos desde una honda y aguanta la lluvia del cielo.',
		description: [
			'Un mago flota en mitad del cielo. Tiras de la honda, sueltas y el hechizo sale disparado contra los pájaros, las rocas y las bombas que caen.',
			'El modo fases tiene tres mundos, cada uno con su jefe al final. El modo locura no tiene fin: los enemigos no dejan de llegar y tendrás que elegir mejoras para aguantar.',
		],
		features: ['Tres fases con jefe final', 'Mapa de fases', 'Modo locura sin fin', 'Mejoras al subir de nivel', 'Récord local'],
		published: false,
	},
	{
		slug: 'arena-heroes',
		name: 'Arena Heroes',
		packageId: 'com.cirujanoretro.arenaheroes',
		tagline: 'Elige un héroe, arrástralo y deja que pelee solo.',
		description: [
			'Eliges un héroe y lo mueves arrastrando el dedo. Tu héroe lucha por su cuenta contra oleadas de enemigos.',
			'Sube de nivel, elige mejoras y derrota a los jefes de cada fase.',
		],
		features: ['Control con un solo dedo', 'Oleadas, niveles y jefes', 'Varios héroes'],
		published: false,
	},
	{
		slug: 'block-colors',
		name: 'Block Colors',
		packageId: 'com.blockcolors.game',
		tagline: 'Un puzzle de bloques de colores con niveles y ranking.',
		description: [
			'Coloca los bloques en el tablero, completa líneas y avanza por los niveles. Cada nivel cambia la forma en que se mueven las piezas.',
		],
		features: ['Niveles con reglas nuevas', 'Récords por modo', 'Varios temas de color'],
		published: false,
	},
];
