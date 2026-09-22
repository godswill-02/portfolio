## Portfolio

Portfolio Next.js avec formulaire de contact et envoi d'email via Resend.

## Configuration de l'envoi d'email

Copier `.env.example` vers `.env.local`, puis renseigner les trois variables :

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_ta_cle_api
RESEND_FROM_EMAIL=onboarding@resend.dev
ADMIN_EMAIL=ton-adresse@gmail.com
```

Le formulaire envoie depuis `RESEND_FROM_EMAIL` vers `ADMIN_EMAIL`. L'adresse du visiteur est placée dans `Reply-To`, ce qui permet de lui répondre directement depuis ta boîte de réception.

Pour un premier test, `onboarding@resend.dev` peut être utilisé comme expéditeur et l'adresse destinataire doit être autorisée par Resend. Pour la production, vérifie ton propre domaine dans Resend et utilise une adresse comme `contact@ton-domaine.com` dans `RESEND_FROM_EMAIL`. Ne commit jamais `.env.local`.

### Sécurité de la clé API

La clé Resend est un secret. Si elle a été publiée dans un fichier versionné, une capture ou un message, révoque-la dans Resend et génère-en une nouvelle. Utilise uniquement la nouvelle clé dans `.env.local` ou dans les variables secrètes de l'hébergeur.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:4000`.
