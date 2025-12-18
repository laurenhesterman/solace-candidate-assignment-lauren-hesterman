import AdvocatesTable from "./components/AdvocatesTable";
import { advocateData } from "../db/seed/advocates";

interface Advocate {
  id?: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string | number;
  phoneNumber: string | number;
}

// Revalidate every 3600 seconds (1 hour) - ISR configuration
export const revalidate = 3600;

async function getAdvocates(): Promise<Advocate[]> {
  
  // const response = await fetch('http://localhost:3000/api/advocates', {
  //   next: { revalidate: 3600 }
  // });
  // const data = await response.json();
  // return data.data;
  
  return advocateData as Advocate[];
}

export default async function Home() {
  const advocates = await getAdvocates();

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocatesTable advocates={advocates} />
    </main>
  );
}
