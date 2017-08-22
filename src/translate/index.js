if (!window.Intl){
  window.Intl = require('intl');
  require ('intl/locale-data/jsonp/en-US.js');
  require ('intl/locale-data/jsonp/es');
}
window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFomat = require ('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');

var es = require('./es');
var en = require('./en-Us');

var MESSAGES = {};
MESSAGES.es = es
MESSAGES['en-Us'] = en;

var locale = localStorage.locale || 'es';

module.exports = {
  message: function(text, opts){
    opts = opts || {};
  var msg = new IntlMessageFomat(MESSAGES[locale][text], locale, null);
  return msg.format(opts);
},
  date: new IntlRelativeFormat(locale)

}
