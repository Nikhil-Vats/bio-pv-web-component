#  Protein Viewer

pv is a WebGL-based protein viewer whose goal is to once-for-all end the reign of Java applets on websites that require visualisation of protein structures. This repository implements [bio-pv](https://www.npmjs.com/package/bio-pv) as a Web Component.

## Component user docs: adding this component to your webpage

Hey! If you'd like to use this component on your webpage, please do the following:

### In the `<head>`, add:
```html
<!-- the library for the webcomponent -->
<script src="dist/bundle.js" type="module"></script>
```
You should have a dist folder with bundle.js in your directory just like this repository. The pdb file should be in the same directory (at the same level) as index.html. You can import it from this repository.

This links to the relevant scripts to define the component and fetch data.

### In the `<body>`

Where you want your Web Component to appear, add the following:

Note - You can click on any style listed in the table below to see the visualisation in that style. If you don't want to have the table on your webpage, hide the table using `style="display:none;"` and pass the style of visualisation in structureStyle.

```html
<div id=inspector>
    <h1>Choose Style</h1>
    <ul>
        <li id=preset>Preset</li>
        <li id=cartoon>Cartoon</li>
        <li id=tube>Tube</li>
        <li id=lines>Lines</li>
        <li id=line-trace>Line Trace</li>
        <li id=sline>Smooth Line Trace</li>
        <li id=trace>Trace</li>
    </ul>
    <span><a href='index.html'>About</a> | Code on <a href="http://github.com/Nikhil-Vats/bio-pv-web-component">github.com</a></span>
</div>
<bio-pv-web id="bio-pv-web" quality="high" structureStyle="tube" fov="45" background-color="white" outline="true"></bio-pv-web>
```

### Attributes:
| Attribute | Accepted Values | Mandatory |
| --------- | --------------- | --------- |
| ```quality```| high, low. | Yes |
|```structureStyle```| tube, sline, lines, lineTrace, trace, cartoon | Yes |
|```fov``` (field of view)| 0 - 360 | Yes |
|```background-color```| any valid identifier or rgb value or hex code | No (default is white) |
|```outline```| true, false | No (default is false) |
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
