/*
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
*/
var developer = {
    languages: ["Typescript", "Python", "JavaScript"],
    frameWork: ["rect", "next", "tailwind"],
    tools: ["Docker", "Git", "WebPac"]
};
var languages = developer.languages, frameWork = developer.frameWork, tools = developer.tools;
console.log(developer);
