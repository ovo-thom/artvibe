# ArtVibe

Une galerie d'art moderne et responsive, développée avec Next.js, React et Tailwind CSS. Les images sont récupérées dynamiquement depuis l'API Unsplash et filtrées par thèmes et recherche textuelle.

## Fonctionnalités
- Filtrage par thème (Nature, Animal, Travel, Art, People)
- Recherche dynamique par mot-clé
- Affichage en grille masonry
- Mode clair/sombre
- Design responsive et moderne
- Scroll smooth vers la galerie
- Footer avec liens sociaux

## Technologies
- Next.js
- React
- Tailwind CSS
- Unsplash API

### Configuration de l'API Unsplash

1. Créez un compte gratuit sur [Unsplash Developers](https://unsplash.com/developers).
2. Créez une nouvelle application pour obtenir votre clé d'API.
3. Ajoutez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
NEXT_PUBLIC_UNSPLASH_KEY=VotreCléAPIUnsplash

### Configuration de l'API Unsplash

npm install
npm run dev