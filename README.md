# Game Changer の UI 研究

## 要件定義

### どのようなアプリか？

スポーツチームの分析ツールで、試合スケジュールやスコアブック等のチームマネジメントや試合のライブストリーミングを行うことができるマルチツール。

### 何のためのアプリか？

今まではアナログで行っていた記録をデジタルで行なえ、かつ動画とも紐づけができるため、より高度なマネジメントが期待できるアプリ。

### 誰が使うアプリか？

チームの監督やマネージャーが主で、記録された内容は選手があとから見ることができる。ストリーミングは父兄向け？で動画上にスコアも表示できるため、テレビ観戦レベルの配信が可能。

- アプリの扱いに不慣れな方でも入力ができるよう、シンプルな UI が心がけてある
- シンプルな UI である、一般的な UI ライブラリで代替が可能

## 使用技術

### 開発言語

- react

### デザイン

- Preline UI（UI のメインデザインとして使用）
- Tailwind CSS（Preline UI を使うため、調整用）
- emotion 用（Tailwind CSS では表現できない部分をこちらで補完）
- Framer Motion（アニメーション）
- React-icons（アイコン）

### デプロイ

- Vercel

## その他

- PC・タブレット・スマホ対応必須
- ロジックを含めたフロント構築
