#  Protein Viewer

pv is a WebGL-based protein viewer whose goal is to once-for-all end the reign of Java applets on websites that require visualisation of protein structures. This repository implements [bio-pv](https://www.npmjs.com/package/bio-pv) as a Web Component.

## Component user docs: adding this component to your webpage

Hey! If you'd like to use this component on your webpage, please do the following:

### In the `<head>`, add:
```html
<!-- the library for the webcomponent -->
<script src="dist/bundle.js" type="module"></script>
```

Also download the 1r6a.pdb file from pdbs folder.

This links to the relevant scripts to define the component and fetch data.

### In the `<body>`

Where you want your WebComponent to appear, add the following:

```html
<bio-pv-web id="bio-pv-web">
 </bio-pv-web>
```

## Licence


## Developer docs

### To set up locally for development

1. Clone the repo
2. `cd bio-pv-web` and then `npm install` to install dependencies.

All of the editable source files for css and js are in `src`. To bundle for prod, run the following commands:

#### CSS

Assuming [less](http://lesscss.org/) is installed globally:

```
npm run less
```

#### JS

Assuming [webpack](https://webpack.js.org/) is installed globally:

##### Single build:
```
npm run build
```

##### Developing:
Run each of these commands in separate terminals:

To rebuild your js every time you save:

```bash
npm run dev
```

To serve your page at [http://localhost:3456](http://localhost:3456):
```bash
npm run server
```
#### Example comonent
To see a demo component implemented similarly to this component, visit
[biojs-webcomponent-prototype](https://github.com/yochannah/biojs-webcomponent-prototype).
