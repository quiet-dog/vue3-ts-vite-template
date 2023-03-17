import request from "@/http";
export function testApi() {
	return request<string>({
		url: "/test",
	});
}
