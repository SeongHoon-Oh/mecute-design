import React from 'react';
import { Text } from 'react-native';
import { onlyText } from 'react-children-utilities';
var getTextMatrix = function (text) {
    return text.split('\n').map(function (row) {
        return row.split(' ');
    });
};
var getWordSpace = function (textLen, currentIndex) {
    return currentIndex === textLen - 1 ? '' : ' ';
};
export default function WrappedText(props) {
    var text = getTextMatrix(onlyText(props.children));
    return (<>
      {text.map(function (rowText, rowIndex) {
            return (<React.Fragment key={rowText + '-' + rowIndex}>
            {rowText.map(function (colText, colIndex) {
                    return ((colText !== '' ||
                        (rowText.length === 1 && colText === '')) && (<Text style={props.textStyle} key={colText + '-' + colIndex}>
                    {colText + getWordSpace(rowText.length, colIndex)}
                  </Text>));
                })}
          </React.Fragment>);
        })}
    </>);
}
//# sourceMappingURL=WrappedText.js.map