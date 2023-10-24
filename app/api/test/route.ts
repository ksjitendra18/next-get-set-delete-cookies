import { cookies } from "next/headers";

export async function GET(request: Request) {
  cookies().set("route_value", "some_value_api_routes", {
    expires: 48 * 60 * 60,
  });
  const cookieVal = cookies().get("route_value")?.value;

  cookies().delete("route_value");
  return Response.json({ success: true });
}
