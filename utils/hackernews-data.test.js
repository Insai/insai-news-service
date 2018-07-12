const { fetchStory, fetchStories } = require("./hackernews-data");

const STORY_ID = 17286770;
describe("UNIT TEST - api.hackernews-data", () => {
  test("fetchStory(id)", done => {
    fetchStory(STORY_ID).then(res => {
      expect(res).toMatchObject({ by: "typpo" });
      done();
    });
  });
  test("fetchStories() should return 100 topStories", done => {
    fetchStories().then(stories => {
      expect(stories.length).toBe(20);
      done();
    });
  });
});
