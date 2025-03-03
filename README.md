# Thumbnail Previewer

This project is a web application that allows users to preview their YouTube thumbnails. It is built with Vue 3 and Vite and deployed through Vercel.

## Live Demo

You can access the live demo of the project here: [Thumbnail Previewer](https://thumbnail-previewer-three.vercel.app/).

## Installation & Setup

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview the Production Build

```sh
npm run preview
```

## Project Structure

```
.env
.gitignore
.vscode/
    extensions.json
    settings.json
index.html
jsconfig.json
package.json
public/
    favicon.ico
README.md
src/
    App.vue
    assets/
        base.css
        logo-icon.png
        logo.svg
        main.css
        mock/
    components/
        ActionButton.vue
        AddTitleButton.vue
        ConfirmationModal.vue
        icons/
        InputBox.vue
        SectionTitle.vue
        ThumbnailPreviewPage/
        UploadThumbnailPage/
    main.js
    mock/
        mockVideos.js
    router/
        index.js
    store/
        index.js
        modules/
    views/
        ...
vercel.json
vite.config.js
```

## Features

- Upload and preview YouTube thumbnails.
- Manage and select multiple thumbnails.
- Add and manage video titles.
- Ability to select your channel without login.

## Deployment

This project is deployed using Vercel. The deployment configuration can be found in the `vercel.json` file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.