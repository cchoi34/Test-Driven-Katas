const wrap = (line, maxLen) => {
    if (line.includes(' ')) {
        let lineArr = line.split('');
        let multipleOfMaxLen = maxLen;
        let counter = 1;
        while(multipleOfMaxLen < line.length) {
            let spaceIndex = lineArr.lastIndexOf(' ', multipleOfMaxLen)
            lineArr.splice(spaceIndex, 1, '\n');
            line = lineArr.join('');
            counter++;
            multipleOfMexLen *= counter;
        }
    }
   return line;
}


module.exports = wrap;