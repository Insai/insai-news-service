const fetch = require("node-fetch");

// Fetch story by id from HackerNews
const fetchStory = id => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => res.json())
    .catch(err => console.log(err));
};
exports.fetchStory =fetchStory;

// Fetch ids for topstories, then fetch story by id
exports.fetchStories = async (type = "topstories", count = 20) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);
    const storyIds = await res.json();
  
    // limit fetch to {count}
    const popIds = storyIds.slice(0, count);
    const stories = await Promise.all(popIds.map(id => fetchStory(id)));
    return stories;
  };