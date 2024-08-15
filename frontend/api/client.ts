let server: string;

if (process.env.NODE_ENV == "development") {
  server = "http://localhost:3001/";
}

interface PostOptions {
  endpoint: string;
  body: object;
}

interface GetOptions {
  endpoint: string;
}
export async function apiPost(options: PostOptions, baseUrl: string = server) {
  const body = JSON.stringify(options.body);
  const requestOptions: RequestInit = {
    method: "POST",
    body: body,
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  };
  const url = baseUrl + options.endpoint;
  const response = await fetch(url, requestOptions);
  return response;
}

export async function apiGet(options: GetOptions, baseUrl: string = server) {
  const requestOptions: RequestInit = {
    method: "GET",
    credentials: "include",
    mode: "cors",
  };

  const url = baseUrl + options.endpoint;
  const response = await fetch(url, requestOptions);
  return response;
}
