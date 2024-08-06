export default {
  async getVoucher(context) {
    const body = {
      token: "anhkhongdoiqua",
    };

    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://vstserver.com/services/get_vouchers_valid",
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

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const vouchers = [];
    const data = responseData["data"];
    for (const key in responseData["data"]) {
      const voucher = {
        id: data[key]["_id"],
        code: data[key]["code"],
        createdAt: data[key]["created_at"],
        count: data[key]["count"],
        description: data[key]["description"],
        from: data[key]["from"],
        img: data[key]["img"],
        limit: data[key]["limit"],
        name: data[key]["name"],
        price: data[key]["price"],
        status: data[key]["valid"],
        sum: data[key]["sum"],
        to: data[key]["to"],
        type: data[key]["type"],
        userId: data[key]["user_id"],
        value: data[key]["value"],
      };
      vouchers.push(voucher);
    }
    context.commit("setVouchers", vouchers);
  },
};
