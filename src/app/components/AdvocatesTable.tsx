"use client";

import { useState } from "react";

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
    <>
      <div>
        <p>Search</p>
        <p>
          Searching for: <span>{searchTerm}</span>
        </p>
        <input
          style={{ border: "1px solid black" }}
          onChange={onChange}
          value={searchTerm}
          placeholder="Search advocates..."
        />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate, index) => {
            return (
              <tr key={index}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s, specIndex) => (
                    <div key={`${index}-${specIndex}`}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
