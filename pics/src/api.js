import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gssVLy58pZ2C6gq3_SSFHakFAW6jJwuG-n4juv-GHuw",
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response.data.results;
};

export default searchImages;
