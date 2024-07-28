# Use the official Node.js LTS image
FROM node:18.18.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN yarn install 


# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN yarn build

# Set environment variable for production
# ENV NODE_ENV=production

# Expose the port Next.js is running on (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
