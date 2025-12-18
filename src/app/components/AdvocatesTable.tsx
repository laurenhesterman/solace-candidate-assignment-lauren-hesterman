"use client";

import { useState } from "react";
import TableHeader from "./TableHeader";

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

interface AdvocatesTableProps {
  advocates: Advocate[];
}

export default function AdvocatesTable({ advocates }: AdvocatesTableProps) {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>(advocates);
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = advocates.filter((advocate) => {
      const yearsExp = String(advocate.yearsOfExperience);
      return (
        advocate.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        advocate.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        advocate.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        advocate.degree.toLowerCase().includes(searchValue.toLowerCase()) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchValue.toLowerCase())
        ) ||
        yearsExp.includes(searchValue)
      );
    });

    setFilteredAdvocates(filtered);
  };

  const onClick = () => {
    setSearchTerm("");
    setFilteredAdvocates(advocates);
  };

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-primary mb-2">
          Search Advocates
        </h2>
        
        {searchTerm && (
          <p className="text-sm text-gray-600 mb-4">
            Searching for: <span className="font-medium text-primary">{searchTerm}</span>
          </p>
        )}
        
        <div className="flex gap-3">
          <input
            type="text"
            onChange={onChange}
            value={searchTerm}
            placeholder="Search by name, city, degree, specialty..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
          />
          <button
            onClick={onClick}
            className="px-6 py-3 bg-primary hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Reset
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Showing {filteredAdvocates.length} of {advocates.length} advocates
        </p>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-secondary-100 to-secondary-200 border-b border-gray-200">
                <TableHeader>First Name</TableHeader>
                <TableHeader>Last Name</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>Degree</TableHeader>
                <TableHeader>Specialties</TableHeader>
                <TableHeader>Years of Experience</TableHeader>
                <TableHeader>Phone Number</TableHeader>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAdvocates.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-lg font-medium">No advocates found</p>
                      <p className="text-sm">Try adjusting your search criteria</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredAdvocates.map((advocate, index) => (
                  <tr
                    key={index}
                    className="hover:bg-secondary-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {advocate.firstName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {advocate.lastName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {advocate.city}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                        {advocate.degree}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex flex-wrap gap-1.5 max-w-md">
                        {advocate.specialties.map((s, specIndex) => (
                          <span
                            key={`${index}-${specIndex}`}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-secondary-200 text-primary"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {advocate.yearsOfExperience} years
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-700">
                      {advocate.phoneNumber}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
