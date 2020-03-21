module.exports = function repeater(str, options) {
    let separator = '+';
    if (typeof options.separator != 'undefined') separator = options.separator;
    let repeatTimes = 1;
    if (typeof options.repeatTimes != 'undefined') repeatTimes = options.repeatTimes;
        
    let addition = '';
    if (typeof options.addition != 'undefined') addition = options.addition;
    let additionSeparator = '|';
    if (typeof options.additionSeparator != 'undefined') additionSeparator = options.additionSeparator;
    let additionRepeatTimes = 1;
    if (typeof options.additionRepeatTimes != 'undefined') additionRepeatTimes = options.additionRepeatTimes;
    
    addition = (addition + additionSeparator).repeat(additionRepeatTimes);
    addition = addition.slice(0, addition.length - additionSeparator.length);
    
    str = (str + addition + separator).repeat(repeatTimes);
    return str.slice(0, str.length - separator.length);
    
};
  