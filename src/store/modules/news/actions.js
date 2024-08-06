export default {
  async getNews(context, index) {
    const body = {
      index: index,
      token: "anhkhongdoiqua",
      version: "publish",
    };
    const response = await fetch("https://vstserver.com/services/get_newss", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: "anhkhongdoiqua",
        Origin: "http://localhost:8080", // Add the Origin header
        "x-requested-with": "XMLHttpRequest", // Add the x-requested-with header
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const newss = [];

    const data = responseData["data"];
    for (const key in data) {
      const news = {
        author: data[key]["author"],
        code: data[key]["key"],
        createdAt: data[key]["created_at"],
        link: data[key]["link"],
        photo: data[key]["photo"],
        title: data[key]["title"],
        type: data[key]["type"],
        updateAt: data[key]["updated_at"],
        id: data[key]["_id"],
        content: data[key]["content"],
      };
      newss.push(news);
    }
    context.commit("setNews", newss);
  },
};
