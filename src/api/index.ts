import {
  IContributeFailureApiResponse,
  IContributeSuccessApiResponse,
} from "../interfaces/api";

class Api {
  static async callContributorsApi(): Promise<
    IContributeSuccessApiResponse[] | IContributeFailureApiResponse
  > {
    const rawdata = await fetch(import.meta.env.VITE_APP_API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    const contributorApiResponse:
      | IContributeSuccessApiResponse[]
      | IContributeFailureApiResponse = await rawdata.json();

    return contributorApiResponse;
  }
}

export default Api;