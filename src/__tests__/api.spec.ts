import { api } from "utils/api";

describe("Api fetch", () => {
  const mockData = {
    pushin: "p",
  };

  beforeEach(() => {
    const mockFetch = jest.fn((url: string) =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    global.fetch = mockFetch as any;
  });
  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("Should return data", async () => {
    const res = await api<typeof mockData>("");

    expect(res).toStrictEqual(mockData);
  });

  it("Should call api 1 time", async () => {
    await api<typeof mockData>("");

    expect(global.fetch as jest.Mock).toBeCalledTimes(1);
  });

  it("Should call api url", async () => {
    await api<typeof mockData>("test");

    expect(global.fetch as jest.Mock).toBeCalledWith(
      "http://localhost:3000/api/test"
    );
  });
});
