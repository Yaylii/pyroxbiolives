# Pyrox Bio Site

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Create a new GitHub repo
2. Upload these files
3. Import the repo into Vercel
4. Deploy

## What to edit
Open `app/page.jsx`

### Stock block
```js
const stock = [
  { name: "BPC-157", status: "available" },
  { name: "TB-500", status: "low" },
  { name: "GHK-Cu", status: "enquire" },
  { name: "MT-2", status: "available" },
];
```

Allowed statuses:
- `available`
- `low`
- `enquire`

### Contact links
Replace both `href="#"` values near the bottom of `app/page.jsx`
with your real Telegram / DM links.
