import { FunctionComponent } from 'react';
import { Rotor as RotorClass } from '../classes/Rotor';

function useLetters(rotor: RotorClass) {
	return (
		rotor.alphabet.substring(rotor.position, rotor.alphabet.length) +
		rotor.alphabet.substring(0, rotor.position)
	)
		.split('')
		.map((letter, i) => [letter, rotor.alphabet[rotor.wiring[i]]]);
}

export const Reflector: FunctionComponent<{ instance: RotorClass }> = ({ instance }) => {
	const letters = useLetters(instance);
	return (
		<div className="rotor">
			{letters.map(([inLetter, outLetter]) => (
				<div key={inLetter}>
					{inLetter} {':'} {outLetter}
				</div>
			))}
		</div>
	);
};