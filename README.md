# OpenRoads Vietnam Analytics

## Running locally

### Environment setup

To set up the development environment for this website, you'll need to install the following on your system:

- Node, see version in `.nvmrc` file
- [yarn](https://yarnpkg.com/en/docs/install)

After these basic requirements are met, install dependencies by running `yarn install`.

By default, the local deployment will use the production API. If you run a local instance of the API (using repo `orma/openroads-vn-api`), then you can change the `api` value in this repo's configuration files (`app/assets/scripts/config/*`).

### Getting started

`yarn run serve` compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`. The system will watch files and execute tasks whenever one of them changes. The site will automatically refresh since it is bundled with livereload.

### Building for deployment

Run `yarn run build` to compile all site resources into a `dist` folder. This folder can be deployed on a remote host, and act as the full production website.

## Continuous integration

A CI server takes care of deployment to production; any merge to the `master` branch will deploy.

## Architecture

![](https://user-images.githubusercontent.com/4959135/33675125-8936e5da-da7f-11e7-8853-1f3552f1c2b5.png)

(This architecture diagram is also available [on Google Drawings](https://docs.google.com/drawings/d/1wuHYpjMYsshBaVNj6mykR42ln7ApLrY-OM6jsHiuZA8).)

## Website user guide

A bi-lingual user guide is available for the front-end of the ORMA platform; for now, please request it from Duc Cong Phan <dphan2@worldbank.org>. In the future it will be available within this repo.

## Processes

### Internationalization

#### Managing translations with transifex

Vietnamese - English translations are managed with transifex's `tx` cli and the `app/assets/locales/source/en.json` and `app/assets/locales/vn.json` files

To add new words to translate:

1. Add a new key/val pair in the source en.json file where key/val are equal and save the file.

```
...
'Roads': 'Roads',
...
```

2. `Pull` then push `Push` the update en.json file to transifex using the tx cli


```
$ tx pull && tx push -s
```

the reason to pull then push is so that translations on transifex aren't overwritten (the behavior of tx push) 

3. pull the new changes using tx pull once translations are complete on transifex


***note*** that step 2 is built into the current circleci build, so you should not have to follow these steps explicitly so long as you push changes to github

#### Setting up transifex

to install tx run `pip install transifex-client`

then add a .transifexrc in the root of the repo following the below configuration

```
[https://www.transifex.com]
hostname = https://www.transifex.com
password = your.password
token =
username = your.username

```

***note*** don't quote values in the .transifexrc

#### Managing translators && approving translations on transifex's website


in addition to adding and pulling new translations into the site, so too will translations need to be approved using the [transifex web editor](https://docs.transifex.com/translation/translating-with-the-web-editor). Documentation on how to do so is [here](https://docs.transifex.com/translation/reviewing-strings).

Also, if a manager needs to add new translators, [here](https://docs.transifex.com/translation/translating-with-the-web-editor) is the documentation, and if a new translator needs guidance for translating, [here](https://docs.transifex.com/translation/translating-with-the-web-editor) is the documentation

### Adding new questions to FAQ
The site FAQ are defined in the file [`/app/assets/scripts/views/faq.js`](https://github.com/orma/openroads-vn-analytics/blob/develop/app/assets/scripts/views/faq.js).  To edit:

* sign in to github
* follow a link to the [faq file](https://github.com/orma/openroads-vn-analytics/blob/develop/app/assets/scripts/views/faq.js)
* click on the **edit** pencil button on the top right of the file
* copy and paste the following text below the list of existing questions, inserting the question and answer in english and vietnamese

```javascript
{
  language === 'en' ?
    <section className="question">
      <h3 className='inpage__title'>ADD ENGLISH QUESTION HERE</h3>
      <p>ADD ENGLISH ANSWER HERE</p>
    </section> :
    <section className="question">
      <h3 className='inpage__title'>ADD VIETNAMESE QUESTION HERE</h3>
      <p>ADD VIETNAMESE ANSWER HERE</p>
    </section>
}
```

* click **Commit changes** at the bottom of the page
* email Development Seed to deploy the site
