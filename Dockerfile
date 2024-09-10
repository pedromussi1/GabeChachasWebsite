# Step 1: Build the React application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application with a lightweight server
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
