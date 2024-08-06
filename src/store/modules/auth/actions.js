export default {
  async signIn(context, payload) {
    const body = {
      user_id: payload.phone,
      password: payload.password,
      token: "anhkhongdoiqua",
    };

    const response = await fetch("https://vstserver.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "anhkhongdoiqua",
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (responseData["status"] === "error") {
      context.commit("setError", { error: responseData["error"]["message"] });
      context.commit("setIsError", { isError: true });
      console.log(responseData["error"]["message"]);
      return false;
    }

    const data = responseData["data"];
    context.commit("setUser", {
      token: data["token"],
      address: data["address"],
      active: data["active"],
      createdAt: data["created_at"],
      name: data["name"],
      phone: data["phone"],
      profileImage: data["profile_image"],
      status: data["status"],
      type: data["type"],
      userId: data["_id"],
    });
    return true;
  },

  async requestOtpSignup(context, payload) {
    const body = {
      ID: payload.phone,
      type: "phone",
      action: "register",
      token: "anhkhongdoiqua",
    };
    console.log(body);
    const response = await fetch("https://vstserver.com/request_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "anhkhongdoiqua",
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    return true;
  },

  async verifyOtpSignup(context, payload) {
    const body = {
      ID: payload.phone,
      code: payload.code,
      token: "anhkhongdoiqua",
    };
    const response = await fetch("https://vstserver.com/verify_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "anhkhongdoiqua",
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (responseData["status"] === "error") {
      context.commit("setError", { error: responseData["error"]["message"] });
      context.commit("setIsError", { isError: true });
      console.log(responseData["error"]["message"]);
      return false;
    }
    console.log(responseData);
  },

  async signUp(context, payload) {
    const body = {
      name: payload.name,
      phone: payload.phone,
      address: payload.address,
      password: payload.password,

      verify: "phone",
      token: "anhkhongdoiqua",
    };
    const response = await fetch("https://vstserver.com/register", {
      methods: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "anhkhongdoiqua",
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    console.log(responseData);
  },
  forgot() {},

  async logout(state) {
    const body = {
      token: "anhkhongdoiqua",
    };

    const response = await fetch("https://vstserver.com/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": state.token,
      },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    state.token = null;
    state.address = null;
    state.active = null;
    state.createdAt = null;
    state.name = null;
    state.phone = null;
    state.profileImage = null;
    state.status = null;
    state.type = null;
    state.userId = null;
    console.log(responseData);
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
