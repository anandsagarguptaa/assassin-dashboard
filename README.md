# Zayen Bot Control — GitHub Pages Web

This folder is **frontend only**. Upload these files to the root of a GitHub repository and enable GitHub Pages.

## 1. Configure backend
Edit `config.js`:

```js
window.ZBC_CONFIG = {
  API_BASE: "https://your-panel.wisp.uno"
};
```

Do **not** put Discord secrets, bot tokens, agent secrets, or `.env` values in this repository.

## 2. GitHub Pages
Repository → Settings → Pages → Deploy from a branch → `main` / root.

Your site becomes something like:
`https://USERNAME.github.io/REPOSITORY/`

## 3. Wispbyte backend
The backend must be the split-mode compatible build supplied with this frontend. Set its `FRONTEND_URL` to the exact GitHub Pages URL.

Login flow: GitHub Pages → Wispbyte OAuth → Discord → Authenticator → one-time code → GitHub Pages → API bearer token.
