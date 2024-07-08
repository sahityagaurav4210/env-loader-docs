import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import {
  IContributeFailureApiResponse,
  IContributeSuccessApiResponse,
  isIContributeFailureApiResponse,
} from "../interfaces/api";
import Api from "../api";
import Tooltip from "../components/Tooltip";

function Author() {
  const [contributors, setContributors] = useState<
    IContributeSuccessApiResponse[]
  >([]);
  const [errorMsgDetails, setErrorMsgDetails] =
    useState<IContributeFailureApiResponse>({});

  useEffect(() => {
    async function callApi() {
      const apiResponse: unknown = await Api.callContributorsApi();

      if (!isIContributeFailureApiResponse(apiResponse))
        setContributors(apiResponse as IContributeSuccessApiResponse[]);
      else setErrorMsgDetails(apiResponse);
    }

    callApi();
  }, []);

  return (
    <>
      <Heading headingText="Contributors" showLine={true} />
      <div className="flex justify-evenly items-center flex-wrap gap-4">
        {!contributors.length && !errorMsgDetails?.status ? (
          <p className="text-white text-xl">Please wait...</p>
        ) : (
          <>
            {errorMsgDetails.status ? (
              <p className="text-white text-xl">{errorMsgDetails.message}</p>
            ) : (
              contributors.map((contributor: IContributeSuccessApiResponse) => (
                <div key={contributor.node_id} className="relative group">
                  <img
                    src={contributor.avatar_url}
                    key={contributor.id}
                    className="w-32 h-32 rounded-full object-cover aspect-square shadow-md shadow-amber-200 hover:scale-110 cursor-pointer"
                    // onClick={() => window.open(contributor.html_url, "_blank")}
                  ></img>
                  <Tooltip text={contributor.html_url || ""} />
                </div>
              ))
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Author;
