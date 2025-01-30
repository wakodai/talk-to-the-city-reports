#!/bin/bash
set -e  # エラー時にスクリプトを停止

# Python 仮想環境を作成・有効化
# python -m venv /workspace/venv
# source /workspace/venv/bin/activate

# 依存パッケージをインストール
pip install --upgrade pip
pip install -r /workspaces/talk-to-the-city-reports/scatter/requirements.txt

# NLTK ストップワードデータをダウンロード
python -c "import nltk; nltk.download('stopwords')"

# Next.js の依存パッケージをインストール
cd /workspaces/talk-to-the-city-reports/scatter/next-app
npm install

# 終了メッセージ
echo "✅ Devcontainer setup completed!"
