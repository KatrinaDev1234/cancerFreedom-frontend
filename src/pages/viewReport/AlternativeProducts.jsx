import React from "react";
import axios from "axios";
import { API_BASEURL } from "../../utils/constants";
import { useReportContext } from "../../components/ReportContext";

export default function AlternativeProducts() {
  const { report, setReport } = useReportContext();
  const [loading, setLoading] = React.useState(false);

  const products = report?.products?.map((product) => {
    return {
      "Main Product": product["MAIN PRODUCT"],
      "Main Brand": product["MAIN BRAND"],
      "Finalized Product": product?.PRODUCT,
      answer: {
        type: "radio",
        options: ["Yes", "No"],
        default: product["MAIN PRODUCT"] === product?.PRODUCT ? "Yes" : "No",
      },
    };
  });

  const handleProductChange = async (index, value, answer) => {
    try {
      setLoading(index);
      const {
        data: { data },
      } = await axios.put(
        `${API_BASEURL}/report`,
        {
          product: value["Main Product"],
          brand: value["Main Brand"],
          answer: answer,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            id: report?._id,
          },
        }
      );
      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(-1);
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="bg-white w-1/2">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-lg font-bold uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-right text-lg font-bold tracking-wider">
                Available(Y/N)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products?.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product?.["Main Product"]}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                  {product?.answer?.options?.map((option) => (
                    <label key={option} className="mr-2">
                      <input
                        type="radio"
                        name={`product-${index}`}
                        value={option}
                        className="mr-1"
                        defaultChecked={option === product?.answer?.default}
                        onChange={(e) =>
                          handleProductChange(index, product, e.target.value)
                        }
                      />
                      {option}
                    </label>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white w-1/2">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-white bg-primary text-left text-lg font-bold uppercase tracking-wider">
                Finalized Product List
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products?.map((product, index) => (
              <tr key={index}>
                {loading === index ? (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium bg-slate-200 text-gray-900">
                    Loading...
                  </td>
                ) : (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product?.["Finalized Product"]}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
