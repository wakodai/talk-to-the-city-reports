# Python 3.10 をベースにしたコンテナ
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    git \
    git-lfs \
    curl \
    python3.10 \
    python3.10-venv \
    python3.10-dev \
    python3-pip \
    # nodejs \
    # npm \
    && git lfs install \
    && rm -rf /var/lib/apt/lists/*

# Python3.10 をデフォルトの `python` に設定
RUN ln -sf /usr/bin/python3.10 /usr/bin/python && ln -sf /usr/bin/pip3 /usr/bin/pip

# 最新の Node.js (LTS) をインストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && rm -rf /var/lib/apt/lists/*

# シェルスクリプトを配置
COPY install.sh /usr/local/bin/install.sh
RUN chmod +x /usr/local/bin/install.sh
