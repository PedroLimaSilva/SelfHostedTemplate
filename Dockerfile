# Use a Node.js base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend and frontend directories
COPY server ./server
COPY client ./client

# Build the frontend
RUN npm run build

# Copy the built frontend files to the backend's public directory
# RUN mkdir -p backend/public && cp -r frontend/dist/* backend/public/

# Set the working directory for the backend
WORKDIR /app/server

# Expose the port the app runs on
EXPOSE 5555

# build the backend
RUN npm install && npm run build

# Start the server
CMD ["node", "dist/index.js"]