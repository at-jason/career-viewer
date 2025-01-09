// src/components/CareerViewer.tsx
'use client';

import React, { useState } from 'react';
import { careerData } from '@/lib/career-data';

export function CareerViewer() {
  const [selectedRole, setSelectedRole] = useState('product');

  return (
    <div className="w-full max-w-4xl mx-auto px-2 py-4 md:p-4">
      <select 
        value={selectedRole} 
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full md:w-[280px] mb-4 md:mb-6 p-2 border rounded text-black"
      >
        <option value="product">Product Management</option>
        <option value="support">Customer Experience</option>
        <option value="analytics">Analytics & Insights</option>
        <option value="operations">Logistics/Operations & Continuous Improvement</option>
      </select>

      <div className="mb-6 border rounded p-6">
        <h2 className="text-2xl font-bold mb-4">{careerData[selectedRole].title}</h2>
        <p className="text-white-600 mb-6">{careerData[selectedRole].summary}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Professional Experience</h3>
          <div className="space-y-6">
            {careerData[selectedRole].experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-green-300 pl-4">
                <h4 className="font-medium text-lg">{exp.company}</h4>
                <div className="text-sm text-white mb-2">
                  {exp.role} | {exp.period}
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {careerData[selectedRole].keySkills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
