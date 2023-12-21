# Use an official Node.js image as a base
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for the React app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose port 5173 (assuming your React app runs on this port)
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]
