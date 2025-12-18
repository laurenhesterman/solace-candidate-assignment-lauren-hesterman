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
  // In production, you might fetch from an API or database
  // For now, we'll use the seed data directly
  // If you want to use the API route, uncomment below:
  
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
    <main className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/favicon.ico" alt="Solace Logo" className="w-8 h-8" />
              <h1 className="text-2xl font-bold text-primary">
                Solace Advocates
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <AdvocatesTable advocates={advocates} />
      </div>
    </main>
  );
}
