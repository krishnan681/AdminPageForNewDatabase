import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import '../Css/TotalCount.css';

const TotalCountNPCP = () => {
  const [table1Data, setTable1Data] = useState([]);
  const [table2Data, setTable2Data] = useState([]);

  const fetchTableData = async (tableType) => {
    try {
      const response = await fetch(
        `https://signpostphonebook.in/promotion_app/fetch_promotion_application.php?table_type=${tableType}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchTableData("table1").then(setTable1Data);
    fetchTableData("table2").then(setTable2Data);
  }, []);

  return (
    <div>
      <h3>Table 1 (Nearby Promotion)</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Pincode</th>
            <th>Promotion From</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {table1Data.length > 0 ? (
            table1Data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.pincode}</td>
                <td>{row.promotion_from}</td>
                <td>{row.selected_count}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h3>Table 2 (Categorywise Promotion)</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Product</th>
            <th>Promotion From</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {table2Data.length > 0 ? (
            table2Data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.product}</td>
                <td>{row.promotion_from}</td>
                <td>{row.selected_count}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TotalCountNPCP;




// import { useState, useEffect } from "react";

// const TotalCountNPCP = () => {
//   const [tableType, setTableType] = useState("table1"); // Default table
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           `https://signpostphonebook.in/promotion_app/fetch_promotion_application.php?table_type=${tableType}`
//         );
//         const result = await response.json();
//         if (response.ok) {
//           setData(result);
//         } else {
//           setError(result.error || "Failed to fetch data");
//         }
//       } catch (err) {
//         setError("Error fetching data");
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, [tableType]);

//   return (
//     <div>
//       <h2>Total Count NPCP</h2>
//       <div>
//         <button onClick={() => setTableType("table1")}>Table 1</button>
//         <button onClick={() => setTableType("table2")}>Table 2</button>
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <table border="1" style={{ marginTop: "10px", width: "100%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Date</th>
//             {tableType === "table1" ? <th>Pincode</th> : <th>Product</th>}
//             <th>Promotion From</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(data) && data.length > 0 ? (
//             data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.date}</td>
//                 <td>{tableType === "table1" ? item.pincode : item.product}</td>
//                 <td>{item.promotion_from}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TotalCountNPCP;
