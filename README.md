# FlightSearch - 管理画面

## 🎉 管理画面プロジェクト開始！

### プロジェクト概要
- **名前**: FlightSearch Admin Panel
- **目的**: 航空券予約システムの管理画面
- **技術スタック**: Hono + TypeScript + TailwindCSS + Cloudflare Pages

## 公開URL
- **開発環境**: https://3001-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai
- **ポート**: 3001

## デモ認証情報
- **Email**: admin@example.com
- **Password**: admin123

---

## 実装済み機能

### ✅ フェーズ1（完了）
1. **プロジェクトセットアップ**
   - Hono + Cloudflare Pages
   - PM2設定（ポート3001）
   - Git初期化

2. **管理者ログイン**
   - シンプルなログインフォーム
   - メール + パスワード認証
   - セッション管理
   - デモ認証情報表示

3. **ダッシュボード（モダンデザイン）**
   - 統計カード表示
     - 本日の予約件数
     - 本日の売上
     - 今月の予約件数
     - 今月の売上
   - 最近の予約一覧（5件）
   - レスポンシブデザイン

4. **サイドバーナビゲーション**
   - ダッシュボード
   - 予約管理
   - ユーザー管理
   - マスタ管理
   - 操作ログ

---

## 実装予定機能

### 🔜 フェーズ2
- 予約管理（一覧・詳細・編集・キャンセル・CSV出力）
- ユーザー管理（一覧・詳細・編集・CSV出力）

### 🔜 フェーズ3
- マスタ管理（都市・空港・航空会社）
- 操作ログ
- 最終調整

---

## ダミーデータ

### 予約データ
- 5件の予約サンプル
- 様々な路線と日付
- リアルな金額設定

---

## 技術仕様

### フロントエンド
- **フレームワーク**: Hono JSX
- **スタイル**: TailwindCSS（CDN）
- **アイコン**: Font Awesome
- **レスポンシブ**: モバイル対応

### バックエンド
- **フレームワーク**: Hono
- **デプロイ**: Cloudflare Pages
- **ポート**: 3001（開発環境）

### 開発ツール
- **プロセス管理**: PM2
- **ビルド**: Vite
- **TypeScript**: 対応

---

## 開発コマンド

```bash
# ビルド
cd /home/user/admin-webapp
npm run build

# 開発サーバー起動（PM2）
pm2 start ecosystem.config.cjs

# ポートクリーンアップ
npm run clean-port

# サービステスト
npm run test

# PM2管理
pm2 list
pm2 logs admin-webapp --nostream
pm2 restart admin-webapp
pm2 delete admin-webapp
```

---

## プロジェクト構造

```
admin-webapp/
├── src/
│   ├── index.tsx          # メインアプリケーション
│   └── renderer.tsx       # レイアウト
├── public/
│   └── static/
│       ├── admin.js       # JavaScript
│       └── style.css      # カスタムCSS
├── ecosystem.config.cjs   # PM2設定
├── package.json           # 依存関係
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
├── wrangler.jsonc         # Cloudflare設定
└── README.md              # このファイル
```

---

## 関連プロジェクト

### ユーザー向けサイト
- **リポジトリ**: https://github.com/yamazakitakayuki/iace-airsystem
- **開発環境**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai
- **ポート**: 3000

---

## 次のステップ

1. 予約管理機能の実装
2. CSV一括ダウンロード機能
3. ユーザー管理機能
4. マスタ管理機能
5. 操作ログ機能

---

## 備考

- デザイン：ダッシュボードはモダン、それ以外は操作性重視
- データ：ダミーデータで動作確認
- 認証：管理者専用（ユーザーサイトとは別システム）

---

**現在の状態**: フェーズ1完了 ✅
