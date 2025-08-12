import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://ai:Ai123@cluster0.fwwaouj.mongodb.net/";
const DB_NAME = "intelligate_jobs";

async function migrateApplications() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    
    console.log("Starting migration of application jobIds...");
    
    // Get all applications
    const applications = await db.collection("job_applications").find({}).toArray();
    console.log(`Found ${applications.length} applications to migrate`);
    
    let migratedCount = 0;
    
    for (const app of applications) {
      // Check if jobId is already an ObjectId
      if (typeof app.jobId === 'string') {
        try {
          const newJobId = new ObjectId(app.jobId);
          await db.collection("job_applications").updateOne(
            { _id: app._id },
            { $set: { jobId: newJobId } }
          );
          migratedCount++;
          console.log(`Migrated application ${app._id} with jobId ${app.jobId}`);
        } catch (error) {
          console.error(`Failed to migrate application ${app._id}:`, error);
        }
      }
    }
    
    console.log(`Migration completed. ${migratedCount} applications updated.`);
    
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await client.close();
  }
}

migrateApplications();
