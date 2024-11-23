/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

// A variable to track connection status (to prevent multiple connections in development)
let isConnected = false;

export async function connect() {
  try {
    if (isConnected) {
      console.log("MongoDB is already connected.");
      return;
    }

    // Connect to MongoDB using the URI from environment variables
    const connection = await mongoose.connect(process.env.MONGODB_URI_LOCAL !);

    isConnected = connection.connections[0].readyState === 1; // Check if connected
    console.log("MongoDB connected:", connection.connection.host);
  } catch (error:any) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
}
