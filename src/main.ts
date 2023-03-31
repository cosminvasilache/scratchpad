import debounce from 'lodash/debounce';
import {
  saveTextAreaValueToLocalStorage,
  loadTextAreaValueFromLocalStorage,
} from './dom';
import './style.scss'

const CONTENT_TEXT_AREA = document.getElementById('t') as HTMLTextAreaElement;

const onTextAreaInput = debounce(
  () => saveTextAreaValueToLocalStorage(CONTENT_TEXT_AREA),
  1_000,
  {
    maxWait: 8_000,
  },
);
CONTENT_TEXT_AREA.addEventListener('input', onTextAreaInput);

window.addEventListener('load', () => {
  loadTextAreaValueFromLocalStorage(CONTENT_TEXT_AREA);
});
window.addEventListener('unload', () => {
  saveTextAreaValueToLocalStorage(CONTENT_TEXT_AREA);
});
