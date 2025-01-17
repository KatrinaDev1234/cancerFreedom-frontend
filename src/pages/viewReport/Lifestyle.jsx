// Example React component with Tailwind CSS
import React from 'react';

// Data array
const data = [
  {
    category: "Stress & Circadian Rhythm",
    recommendations: [
      "Sleep hygiene",
      "Reduce stress in life",
      "Eleuthero, Rhodiola for Corsol rhythm",
      "Phosphatidylserine and Phosphatidylcholine",
      "Niacinamide",
      "Panax Ginseng, Chamomile, Licorice, Melissa",
      "Magnesium",
      "Vitamin C",
      "L-theanine",
      "Sensory deprivation tanks, Earthing",
      "Acupuncture",
      "Body and energy work",
      "Light therapies",
      "Orgasm",
      "Breathwork",
      "Music therapy",
    ],
  },
  {
    category: "Toxin Load",
    recommendations: [
      "Remove Chemicals & Sauna (essential)",
      "Remove Heavy Metals & Sauna (essential)",
      "Follow a mold diet",
      "Stop the inflow of toxins (whatever tests high)",
      "Remove implants, amalgams, root canals, etc.",
      "Binders",
      "Infrared Saunas - sweat",
      "Coffee enemas",
      "Glutathione/NAC",
      "Liver supports, Mitochondrial supports",
      "Red light therapy",
    ],
  },
  {
    category: "Inflammation",
    recommendations: [
      "Oils / Omega 3s",
      "Proteolytic enzymes (digestive enzymes on an empty stomach)",
      "Turmeric/Curcumin, Boswellia",
      "Cannabis",
      "H2 tabs and Hydrogen water",
      "Hyperthermia",
      "IVC (check G6PD is in range)",
      "Mistletoe",
      "PEMF therapy",
      "Sensory deprivation tank, Cryotherapy, Sauna",
    ],
  },
  {
    category: "Hormone Balance",
    recommendations: [
      "Avoid plastics and receipts, use clean toiletries",
      "Vitex/Chaste Tree Berry for low Progesterone",
      "DIM, Black Cohosh for high Estrogens",
      "Calcium d-glucarate (if b-glucuronidase is elevated)",
      "High dose Melatonin",
      "Cannabis",
      "Acupuncture",
      "Cryotherapy, Sauna",
      "Castor oil packs",
    ],
  },
];

const Lifestyle = () => {
  return (
    <div className="max-w-5xl mx-auto  ">
      <table className="table-auto w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Recommendations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                {item.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-5">
                  {item.recommendations.map((rec, recIndex) => (
                    <li key={recIndex}>{rec}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lifestyle;
