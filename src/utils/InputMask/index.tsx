import React from 'react';
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
	inputRef: (ref: HTMLInputElement | null) => void;
}

const CreditCardMask = (props: TextMaskCustomProps) => {
	const { inputRef, ...other } = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref: any) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
			]}
			placeholderChar={'\u2000'}
			showMask={false}
		/>
	);
};

const DataMMAAMask = (props: TextMaskCustomProps) => {
	const { inputRef, ...other } = props;

	return (
		<MaskedInput
			{...other}
			ref={(ref: any) => {
				inputRef(ref ? ref.inputElement : null);
			}}
			mask={[/\d/, /\d/, '/', /\d/, /\d/]}
			placeholderChar={'\u2000'}
			showMask={false}
		/>
	);
};

export { CreditCardMask, DataMMAAMask};
