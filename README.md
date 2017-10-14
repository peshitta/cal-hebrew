# cal-hebrew

[![npm version](https://badge.fury.io/js/cal-hebrew.svg)](https://badge.fury.io/js/cal-hebrew)
[![npm module downloads](http://img.shields.io/npm/dt/cal-hebrew.svg)](https://www.npmjs.org/package/cal-hebrew)
[![Build Status](https://travis-ci.org/peshitta/cal-hebrew.svg?branch=master)](https://travis-ci.org/peshitta/cal-hebrew)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-hebrew/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-hebrew.svg)](https://david-dm.org/peshitta/cal-hebrew)
[![devDependencies Status](https://david-dm.org/peshitta/cal-hebrew/dev-status.svg)](https://david-dm.org/peshitta/cal-hebrew?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-hebrew/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-hebrew?branch=master)

CAL code to Hebrew Ashuri conversion

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-hebrew --save
```

Following bundles are available:
* `cal-hebrew.js` - UMD ES5 version for use in browser, node, etc.
* `cal-hebrew.min.js` - minified version of `cal-hebrew.js`
* `cal-hebrew.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-hebrew/-/cal-hebrew-1.0.1.tgz](https://registry.npmjs.org/cal-hebrew/-/cal-hebrew-1.0.1.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-hebrew/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-hebrew/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [calHebrew](#module_calHebrew)
    * [.mapper](#module_calHebrew.mapper) : <code>Mapper</code>
    * [.toHebrew](#module_calHebrew.toHebrew) ⇒ <code>string</code>

<a name="module_calHebrew.mapper"></a>

### calHebrew.mapper : <code>Mapper</code>
Hebrew Mapper

**Kind**: static constant of [<code>calHebrew</code>](#module_calHebrew)  
<a name="module_calHebrew.toHebrew"></a>

### calHebrew.toHebrew ⇒ <code>string</code>
Convert from CAL to Hebrew Unicode

**Kind**: static constant of [<code>calHebrew</code>](#module_calHebrew)  
**Returns**: <code>string</code> - the input word converted to Hebrew Unicode  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

