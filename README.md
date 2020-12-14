# Heimr Gatsby theme starter

The theme starter for
[Heimr Gatsby theme](https://gitea.accodeing.com/heimr/gatsby-theme). It
includes boilerplate and configures the theme.

> ⚠️ All Heimr sites should be created with this starter.

> ⚠️ This project includes boilerplate and configures the theme. It also
> includes some plugins that needs site specific setup and therefore cannot be
> included in the theme. All other functionality should be included in the theme
> or in
> [Heimr Components library](https://gitea.accodeing.com/heimr/components).

## Create a new Heimr Gatsby site

Since our starter is not publicly available, you need to clone this repo to your
local machine. When you have done this, you can simply create a new Gatsby site
by running the following command:

```
gatsby new [my-new-site] [local-path-to-starter]
```

So if this starter is located in `heimr-gatsby-theme-starter/` and you want the
new site to be created in a new directory called `my-new-gatsby-site`, you run:

```
gatsby new my-new-gatsby-site heimr-gatsby-theme-starter
```

### Things to do

You want to search for TODO:s in the following files when you have run your
starter:

- `gatsby-config.js`

For a full list of theme options, see theme documentation. Only the mandatory
ones are added as TODO:s in `gatsby-config.js`

You definitely want to change the following things:

- Website icon, preferrably in size 512x512. Default path is
  `src/images/icon.png`, and an example icon is provided by the theme. If you
  want another file type (keep the path for consistency please), set it with
  `options.manifest.icon`.
- `src/components/Footer.js`
- `src/components/Header.js`
- `src/pages/404.js`
- `src/pages/index.js`
- `README.md`

And you want to add the following things:
- `images/site-image.jpg` (for social media sharing). For more info about how to use that image, see
   `Layout` component in demo site. 1080 px wide is some kind of sweetspot when comparing the
   recommendations from different social medias. 1200px if you want our desktop layout. That depends
   on what you want to show the user. Though, most of the people using social media links are
   probably using their smartphone.

#### Production build
Since we have no working build container for Gatsby at the moment, we need to have a separate repository for the build site. The theme includes a build script that will automatically setup the `public` directory as such a repository. Have a look at the theme for more info. This starter includes a script for both production and staging builds.

#### Analytics
The theme is using Matomo for page analytics, so it needs a Matomo site id.

## Newcomers

Check out the [theme demo site](https://gitea.accodeing.com/heimr/gatsby-theme/src/branch/master/demo).

Below is the a part of the auto generated readme from Gatsby. Read it to learn
more about Gatsby before you create your first Gatsby site.

### Gatsby default readme

Kick off your project with this hello-world boilerplate. This starter ships with
the main Gatsby configuration files you might need to get up and running blazing
fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant
collection of
[official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

#### 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying your data. Learn more
    about using this tool in the
    [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice
    and edit `src/pages/index.js`. Save your changes and the browser will update
    in real time!

#### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby
project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that
    your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of your site (what you see in the browser) such as
    your site header or a page template. `src` is a convention for “source
    code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any).
    These allow customization/extension of default Gatsby settings affecting
    pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
    (if any). These allow customization of default Gatsby settings affecting
    server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an
    automatically generated file based on the exact versions of your npm
    dependencies that were installed for your project. **(You won’t change this
    file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about
    your project.

#### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives
[on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our
  [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).**
  It starts with zero assumptions about your level of ability and walks through
  every step of the process.

- **To dive straight into code samples, head
  [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check
  out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the
  sidebar.
