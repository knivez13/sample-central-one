import request from "@/utils/request";

export function cafeteriaSave(data) {
  return request({
    url: "/rating/cafeteria",
    method: "post",
    data: data,
  });
}

export function cafeteriaFetchAll() {
  return request({
    url: "/rating/cafeteria",
    method: "get",
  });
}
