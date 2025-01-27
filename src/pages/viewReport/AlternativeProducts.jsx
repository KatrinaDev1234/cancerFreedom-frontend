import React from "react";
import { useReportContext } from "../../components/ReportContext";

export default function AlternativeProducts() {
  const { report } = useReportContext();
  const products = [
    {
      product: "Gentle Senna",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Critical Digestion",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "BileMin",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Ultima Electrolytes",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Crucera-SGS",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Phosphatidylcholine",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Biomega 1000",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "SafeCell",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Enterovite",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "MegaMucosa",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Bio-HPF",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "H-PLR",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Monolaurin-Avail",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
    {
      product: "Hydrozyme/Betaine Plus HP",
      answer: { type: "radio", options: ["Yes", "No"] },
    },
  ];
  
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-white w-1/2">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
                Available(Y/N)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products?.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product?.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product?.answer?.options?.map((option) => (
                    <label key={option} className="mr-2">
                      <input type="radio" name={`product-${index}`} value={option} className="mr-1" />
                      {option}
                    </label>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white w-1/2"></div>
    </div>
  );
}
