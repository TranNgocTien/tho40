export default {
  async getStuff(context, index) {
    const body = {
      token: "anhkhongdoiqua",
      index: index,
      status: "posting",
      version: "test",
    };

    const token = context.rootGetters["auth/token"];
    console.log(token);
    const response = await fetch("https://vstserver.com/services/get_stuffs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "anhkhongdoiqua",
        "x-access-token": token,
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const stuffs = [];
    const data = responseData["data"];
    for (const key in data) {
      const stuff = {
        address: data[key]["address"],
        createdAt: data[key]["created_at"],
        photos: data[key]["photos"],
        province: data[key]["province"],
        name: data[key]["name"],
        description: data[key]["description"],
        district: data[key]["district"],
        phone: data[key]["phone"],
        stuffId: data[key]["stuff_id"],
        id: data[key]["_id"],
        sumPrice: data[key]["sum_price"],
        geo: data[key]["geo"],
      };
      stuffs.push(stuff);
    }
    if (index === 0) {
      context.commit("cleanStuffs");
    }
    context.commit("setStuffs", stuffs);
    if (index === 0) {
      context.commit("setStuffsPreview", stuffs);
    }
  },
};
// address
// :
// "Bình Thạnh, Hồ Chí Minh"
// agent
// :
// "--"
// agent_bonus
// :
// 0
// agent_voucher
// :
// "--"
// agent_voucher_bonus
// :
// 0
// amount
// :
// 0
// check_count
// :
// 0
// created_at
// :
// "2024-07-05T09:02:00.642Z"
// description
// :
// "tesst"
// discount
// :
// "0"
// district
// :
// "Bình Thạnh"
// geo
// :
// (2) ['Bình Thạnh', 'Hồ Chí Minh']
// host_fee
// :
// {_id: '64199abdbdb83f5c4207ffa5', id: 'normal', worker_id: 'THOTHONGMINH', __v: 0, name: 'Đăng thường', …}
// host_id
// :
// "USER17176902425669508"
// img
// :
// ['https://vstserver.com/users/USER17176902425669508/jobs/USER17176902425669508-1720170120257-64.jpg']
// item_type_id
// :
// "--"
// lat
// :
// "--"
// lng
// :
// "--"
// moving_fee
// :
// "0"
// name
// :
// "Bán điện thoại"
// phone
// :
// "0869353235"
// photos
// :
// ['https://vstserver.com/users/USER17176902425669508/jobs/USER17176902425669508-1720170120257-64.jpg']
// price
// :
// "0"
// province
// :
// "Hồ Chí Minh"
// status
// :
// "posting"
// stuff_id
// :
// "stuff-6687b688f71cd3a0962c92de"
// sum_price
// :
// "123456"
// type
// :
// "normal"
// type_id
// :
// "--"
// unit_price
// :
// "0"
// updated_at
// :
// "2024-07-05T09:02:00.642Z"
// version
// :
// "test"
// ward
// :
// "15"
// work_date
// :
// 0
// __v
// :
// 1
// _id
// :
// "6687b688f71cd3a0962c92de"
