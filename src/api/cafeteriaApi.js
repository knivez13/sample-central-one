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

export function cafeteriaShedSave(data) {
  return request({
    url: "/rating/cafeteria-sched",
    method: "post",
    data: data,
  });
}

export function cafeteriaShedFetchAll() {
  return request({
    url: "/rating/cafeteria-sched",
    method: "get",
  });
}

export function cafeteriaShedFetchBydateAll(data) {
  return request({
    url: "/rating/shedmenu",
    method: "post",
    data: data,
  });
}

export function cafeteriaShedTodayFetchAll() {
  return request({
    url: "/rating/show-menu-today",
    method: "get",
  });
}

export function voteSurvey(data) {
  return request({
    url: "/rating/vote-menu-today",
    method: "post",
    data: data,
  });
}
