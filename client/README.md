You can use any framework here, but `npm run build` does not build for a folder `client/dist`, you might need to change some things on the docker file and `package.json` on the project root.

After figuring that out, you should add `dist` to the `.gitignore`