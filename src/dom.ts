import {
	getTextFromLocalStorage,
	saveTextToLocalStorage,
} from "./localstorage";

export const LOCAL_STORAGE_KEY = 't';

export const loadTextAreaValueFromLocalStorage = (el: HTMLTextAreaElement) => {
	const savedText = getTextFromLocalStorage(LOCAL_STORAGE_KEY);
	if (savedText !== null) {
		el.value = savedText;
		el.focus();
	}
};

export const saveTextAreaValueToLocalStorage = (el: HTMLTextAreaElement) => {
	const contentText = el.value;
	if (contentText !== null) {
		saveTextToLocalStorage(contentText, LOCAL_STORAGE_KEY);
	}
};
