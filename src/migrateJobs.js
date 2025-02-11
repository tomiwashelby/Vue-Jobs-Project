import { db } from "./fireBaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import jobs from "./jobs.json" assert { type: "json" }
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

const uploadJobs = async () => {
  for (const job of jobs) {
    const docRef = await addDoc(collection(db, "jobs"), job);
    console.log(`Added: ${job.title}`);
    await updateDoc(doc(db, "jobs", docRef.id), {
      id: docRef.id
    });
  }
  console.log("All jobs uploaded!");
};

uploadJobs();
