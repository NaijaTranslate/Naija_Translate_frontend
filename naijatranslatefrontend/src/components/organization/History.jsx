import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


import { baseURL } from "../../api/SpeechApi";
import { ToastContainer, toast } from "react-toastify";



const History = () => {
  const getAccessTokenFromCookie = async () => {
    try {
      const accessToken = Cookies.get("access_token");
     
      return accessToken || "unauthenticated user";
    } catch (error) {
      console.error("Error during mutation:", error);
      console.error("Response data:", error.response?.data);

      toast.error("Error submitting data: " + error.message);
      return "unauthenticated user";
    }
  };

  const getCommonHeaders = async () => {
    try {
      const accessToken = await getAccessTokenFromCookie(); // Await here

      const commonHeaders = {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      };

     
      return commonHeaders;
    } catch (error) {
      console.error("Error in getCommonHeaders:", error);
      throw error;
    }
  };

  const dataHistory = async () => {
    try {
      const headers = await getCommonHeaders(); // Await here

      const response = await axios.get(`${baseURL}/organization/history`, {
        headers: headers,
      });
      return response.data.data;
    } catch (error) {
      console.error("Error in userData:", error);
      throw error;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user_history"],
    queryFn: dataHistory,
  });

  // const { mutate, isSuccess } = useMutation({
  //   mutationFn: async () => {
  //     try {
  //       const commonHeaders = await getCommonHeaders();
  //       const response = await axios.delete(
  //         `${baseURL}/organization/remove-user/${id}`,
  //         {
  //           headers: commonHeaders,
  //         }
  //       );

  //       return response.data;
  //     } catch (error) {
  //       toast.error("Error during mutation:", error);
  //       toast.error(error.response?.data);
  //       throw error;
  //     }
  //   },
  // });
  

  if (isLoading) {
    return <div className="text-center text-[20px] font-normal">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-[30px] font-bold">
        Error: {error.message}
      </div>
    );
  }

  if (!data || !data.length) {
    return <div>No data available</div>;
  }

  //working fine

  return (
    <div className="w-full p-[10px] m-10px">
      <h1 className="text-center p-[10px] font-semibold text-[18px]">Employee List</h1>
      <div className="w-full h-auto bg-white rounded-[10px] ">
        <table className="min-w-full divide-y divide-slate-200 divide-solid">
          <thead className="bg-gray-50">
            <tr
              scope="col"
              className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
            >
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Id
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Email
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
              >
                First Name
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
              >
                Last Name
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left text-gray-500 uppercase "
              >
                is_verified
              </th>
            </tr>
          </thead>
          <tbody className="divide divide-slate-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-2 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap">
                  {item.email}
                </td>
                <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap">
                  {item.first_name}
                </td>
                <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap">
                  {item.last_name}
                </td>
                <td className="px-2 py-2 text-sm text-dark whitespace-nowrap">
                  {item.is_verified}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default History;
