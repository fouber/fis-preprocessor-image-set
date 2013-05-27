# fis-preprocessor-image-set

A preprocessor plugin for fis to automatically add -webkit-image-set css rule.

## usage

    $ npm install -g fis-preprocessor-image-set
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    modules : {
        preprocessor : {
            css : 'image-set'
        }
    }
});
```