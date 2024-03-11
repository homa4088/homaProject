import { useParams } from "react-router-dom";
import { requests } from "../services/RequestsService";

const RequestDetail = () => {
  const { id } = useParams();

  const request = requests.find((item) => item.id === Number(id));
  
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col gap-4 border border-gray-900 shadow rounded-md p-10">
        {request ? (
          <>
            <div className="flex gap-2">
              <p className="font-bold">شرح درخواست:</p>
              <p>{request.description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">کد درخواست:</p>
              <p>{request.code}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">نام پذیرنده:</p>
              <p>{request.merchant}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">کدملی پذیرنده:</p>
              <p>{request.nationalCode}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">شماره پذیرندگی:</p>
              <p>{request.merchantNumber}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">نام شرکت درخواست دهنده:</p>
              <p>{request.company}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">تعداد ترمینال های پذیرنده:</p>
              <p>{request.terminalCount}</p>
            </div>
          </>
        ) : (
          <p>درخواستی یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default RequestDetail;
