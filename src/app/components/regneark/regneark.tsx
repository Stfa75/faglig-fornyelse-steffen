import React from 'react';

// 1. Definer typen for en række i tabellen
interface SoftwareRow {
  program: string;
  kendskab: string;
  rutineret: string;
  ekspert: string;
}

// 2. Data-array med dine værdier
const softwareData: SoftwareRow[] = [
  { program: 'Adobe Photoshop', kendskab: '', rutineret: 'Rutineret', ekspert: '' },
  { program: 'Adobe Illustrator', kendskab: '', rutineret: 'Rutineret', ekspert: '' },
  { program: 'Adobe InDesign', kendskab: 'Kendskab', rutineret: '', ekspert: '' },
  { program: 'Adobe Express', kendskab: '', rutineret: 'Rutineret', ekspert: '' },
  { program: 'Adobe Substance 3d serie', kendskab: 'Kendskab', rutineret: '', ekspert: '' },
];

export const SoftwareTable: React.FC = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Grafiske programmer</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Kendskab</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rutineret</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Ekspert</th>
          </tr>
        </thead>
        <tbody>
          {softwareData.map((row, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.program}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.kendskab}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.rutineret}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.ekspert}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};