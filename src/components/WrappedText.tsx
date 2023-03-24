import React, { ReactNode } from 'react';
import { ViewStyle, Text, TextStyle } from 'react-native';
import { onlyText } from 'react-children-utilities';

/** 개행과 공백 기준으로 분할한 텍스트 이중 배열 반환 */
const getTextMatrix = (text: string) => {
  return text.split('\n').map(function (row) {
    return row.split(' ');
  });
};

/** 줄의 마지막 텍스트가 아니면 공백 추가 */
const getWordSpace = (textLen: number, currentIndex: number) => {
  return currentIndex === textLen - 1 ? '' : ' ';
};

/** 한글 워드 브레이크 수정 컴포넌트 */
export default function WrappedText(props: {
  children: string | ReactNode;
  rowStyle?: ViewStyle;
  textStyle?: TextStyle;
}) {
  const text = getTextMatrix(onlyText(props.children));

  return (
    <>
      {text.map(function (rowText, rowIndex) {
        return (
          <React.Fragment key={rowText + '-' + rowIndex}>
            {rowText.map(function (colText, colIndex) {
              return (
                // 공백이 아니거나 개행문자밖에 없는 빈 줄일 때 텍스트 컴포넌트 반환
                (colText !== '' ||
                  (rowText.length === 1 && colText === '')) && (
                  <Text style={props.textStyle} key={colText + '-' + colIndex}>
                    {colText + getWordSpace(rowText.length, colIndex)}
                  </Text>
                )
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}
