type Params = {
  query: string;
  target: string;
};

// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export const isContains = ({ query, target }: Params) => {
  // target の先頭から順に query が含まれているかを調べる
  for (let offset = 0; offset <= target.length - query.length; offset++) {
    let match = true;
    for (let idx = 0; idx < query.length; idx++) {
      // インデックスが範囲内にあるかどうかを確認する
      if (offset + idx >= target.length || idx >= query.length) {
        match = false;
        break;
      }
      // 1文字ずつ比較する
      if (!compareCharacters(target[offset + idx] as string, query[idx] as string)) {
        match = false;
        break;
      }
    }
    if (match) {
      // query のすべての文字が含まれていたら true を返す
      return true;
    }
  }
  // target の最後まで query が含まれていなかったら false を返す
  return false;
};

function compareCharacters(char1: string, char2: string) {
  // ベース文字のみを比較する
  const baseChar1 = char1.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');
  const baseChar2 = char2.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');
  return baseChar1.localeCompare(baseChar2, 'en', { sensitivity: 'base' }) === 0;
}
