import { useContext, useEffect, useState } from "react";
import { AppThemeContext } from "../contexts";
import { APP_THEME, Styles } from "../constant";
import Heading from "../components/Heading";
import {
  IContributeFailureApiResponse,
  IContributeSuccessApiResponse,
  isIContributeFailureApiResponse,
} from "../interfaces/api";
import Api from "../api";

function Author() {
  const context = useContext(AppThemeContext);
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

  if (!context) throw new Error("No context provided");

  const { appTheme } = context;

  return (
    <>
      <Heading headingText="Contributors" showLine={true} />
      <div className="flex justify-evenly items-center flex-wrap gap-2">
        {!contributors.length && !errorMsgDetails?.status ? (
          <p className="text-white text-xl">Please wait...</p>
        ) : (
          <>
            {errorMsgDetails.status ? (
              <p className="text-white text-xl">{errorMsgDetails.message}</p>
            ) : (
              contributors.map((contributor: IContributeSuccessApiResponse) => (
                <img
                  src={contributor.avatar_url}
                  key={contributor.id}
                  className="w-32 h-32 rounded-full object-cover aspect-square"
                ></img>
              ))
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Author;
