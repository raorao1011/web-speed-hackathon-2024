input_folder="/path/to/input/folder"

# 出力先のフォルダパス
.="/path/to/output/folder"

# フォルダ内の.jxlファイルをループで処理
for file in ./*.jxl; do
    # ファイル名と拡張子を取得
    filename=$(basename -- "$file")
    filename_no_ext="${filename%.*}"

    # .jxlファイルを.pngに変換して出力先フォルダに保存
    djxl "$file" "$filename_no_ext.png"

    # 変換完了メッセージを表示
    echo "Converted $filename to $filename_no_ext.png"
done