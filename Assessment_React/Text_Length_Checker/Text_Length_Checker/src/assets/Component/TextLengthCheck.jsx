import React from "react";

function TextLengthCheck({textLength}){
	const message = () => {
		if (textLength > 10){
			return 'Text too long'
		} else {
			return `Text length: ${textLength}`;
		}
	}

	return <div>{message()}</div>		
}

export default TextLengthCheck;