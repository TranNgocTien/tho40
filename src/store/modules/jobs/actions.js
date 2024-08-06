export default {
  async getJobs(context, index) {
    const body = {
      index: index,
      version: "test",
      token: "anhkhongdoiqua",
    };
    const token = context.rootGetters["auth/token"];
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://vstserver.com/services/get_post_jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "anhkhongdoiqua",
          "x-access-token": token,
        },
        body: JSON.stringify(body),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    // const data = responseData["data"];
    console.log("*******************************data");
    console.log(responseData);
  },

  async getJobService(context) {
    const body = {
      version: "publish",
      token: "anhkhongdoiqua",
    };
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://vstserver.com/services/get_jobservice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "anhkhongdoiqua",
        },
        body: JSON.stringify(body),
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    if (responseData["status"] === "error") {
      context.commit("setError", { error: responseData["error"]["message"] });
      context.commit("setIsError", { isError: true });
      console.log(responseData["error"]["message"]);
      return false;
    }
    // const data = responseData["data"];
    const data = responseData["data"];
    const jobService = [];
    for (const key in data) {
      const service = {
        code: data[key]["code"],
        fee: data[key]["fee"],
        img: data[key]["img"],
        name: data[key]["name"],
        shortName: data[key]["short_name"],
        type: data[key]["type"],
        id: data[key]["_id"],
      };
      jobService.push(service);
    }
    context.commit("setJobService", jobService);
  },

  async getJobItem(context, payload) {
    const body = {
      jobservice_id: payload.id,
      token: "anhkhongdoiqua",
    };
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://vstserver.com/services/get_jobitem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "anhkhongdoiqua",
        },
        body: JSON.stringify(body),
      }
    );
    const responseData = await response.json();
    const data = responseData["data"];
    const jobItemList = [];
    for (const key in data) {
      const jobItem = {
        description: data[key]["description"],
        fee: data[key]["fee"],
        img: data[key]["img"],
        jobitemId: data[key]["jobitem_id"],
        jobserviceId: data[key]["jobservice_id"],
        name: data[key]["name"],
        price: data[key]["price"],
        type: data[key]["type"],
        unit: data[key]["unit"],
        id: data[key]["_id"],
      };
      jobItemList.push(jobItem);
    }
    context.commit("setJobItem", jobItemList);
  },

  cleanError(context, payload) {
    context.commit("setError", {
      error: payload.error,
    });
    context.commit("setIsError", {
      isError: null,
    });
  },
};
