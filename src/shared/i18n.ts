import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import de from './../../public/static/languages/de.json';
import en from './../../public/static/languages/en.json';

addMessages('de', de);
addMessages('en', en);

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });