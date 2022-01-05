# Debugging Test

## Getting Started

1. **Initialize your environment**

This assessment was intended for node v14.15.1, we recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm install v14.15.1
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run server
```

1. **Run the file server**

In order to server the application, you must start the file server with this command.

Terminal tab #2:

```sh
npm run file-server
```

1. **Build the frontend**

Webpack is used to bundle our app. Everything to do with the frontend lives in `/app`.

Terminal tab #3:

```sh
npm run build
```

Once everything is running, you should see the app running http://127.0.0.1:3001.

## Customer Issues

For each of the following issues:

1. Identify the issue
1. Apply the fix
1. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

**Customer 3:** When I sort by "Top", the number one post only has 81 votes when I know the post titled "Custom Statuses" has over 300 votes!

_If you look in `server/data/posts.js` you will notice there are posts with more 100 votes_

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.

## 🎉 You're Done 🎉
