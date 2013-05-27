/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';
module.exports = function(content, file){
    var reg = /\/\*[\s\S]+?(?=\*\/|$)|(?:\{|;|\*\/)(\s*)background(?:-image)?\s*:\s*[^;\}]*?url\s*\(([^\)]+)\)(?:[^;\}/]|\/[^*]|\/\*[\s\S]+?(?:\*\/|$))*/ig;
    return content.replace(reg, function(m, blank_space, value){
        if(value){
            var retina = value.replace(/\.[^.\/\\]+$/, '_2x$&');
            var info = fis.uri(retina, file.dirname);
            if(info.file){
                m += ';' + blank_space + 'background-image:-webkit-image-set(url(' + value + ') 1x, url(' + retina + ') 2x)';
            }
        }
        return m;
    });
};