import {
  define
} from 'hybrids';
import styles from '../dist/style.css';
import pv from "../component-dist/bio-pv.min.js";
/* Add any additional library imports you may need here. */


/**
 * === Don't remove this method or styles will break.
 * We directly insert a style element into the document head
 * in order to embed styles.
 **/
function styleTemplate() {
  var myStyle = document.createElement("style");
  myStyle.setAttribute("id", "ProteinViewerStyle");
  myStyle.setAttribute("type", "text/css");
  myStyle.innerHTML = styles.toString();
  return myStyle;
}

/**
 * === Don't remove this method or styles will break.
 * Check if there is already a style element for this component and add if not.
 * Useful in cases where this component might be initialised more than once.
 **/
function addStylesIfNeeded() {
  if (!document.getElementById("ProteinViewerStyle")) {
    document.head.appendChild(styleTemplate());
  }
}

/**
 * initialises an existing library, called inside the web component wrapper.
 **/
function initComponent(options) {
  return {
    get: (host, v) => v, // required to be recognized as property descriptor,
    set: () => {}, //required to stop TypeError: setting getter-only property "x"
    connect: (host, key) => {
      var viewer = pv.Viewer(document.getElementById('bio-pv-web'), {
        quality: host.getAttribute("quality"),
        width: 'auto',
        height: 'auto',
        antialias: host.getAttribute("antialias") ? true : false,
        outline: host.getAttribute("outline") === "true" ? true : false,
        animateTime: host.getAttribute("animateTime"),
        background: host.getAttribute("background-color"),
        fov: host.getAttribute("fov")
      });
      var structure;
      var style = host.getAttribute('structureStyle');
      function lines() {
        viewer.clear();
        viewer.lines('structure', structure);
      }
      function cartoon() {
        viewer.clear();
        viewer.cartoon('structure', structure, {color: pv.color.ssSuccession()});
      }
      function lineTrace() {
        viewer.clear();
        viewer.lineTrace('structure', structure);
      }
      function sline() {
        viewer.clear();
        viewer.sline('structure', structure);
      }

      function tube() {
        viewer.clear();
        viewer.tube('structure', structure);
      }

      function trace() {
        viewer.clear();
        viewer.trace('structure', structure);
      }
      function preset() {
        viewer.clear();
        var ligand = structure.select({rnames : ['RVP', 'SAH']});
        viewer.ballsAndSticks('ligand', ligand);
        viewer.cartoon('protein', structure);
      }
      function load(pdb_id) {
        document.getElementById('status').innerHTML ='loading '+pdb_id;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../dist/'+pdb_id+'.pdb');
        xhr.setRequestHeader('Content-type', 'application/x-pdb');
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            structure = pv.io.pdb(xhr.responseText);
            // preset();
            if(style === 'cartoon') {
              viewer.renderAs('structure',structure, host.getAttribute('structureStyle'), {color: pv.color.ssSuccession()});
            } else {
              viewer.renderAs('structure',structure, host.getAttribute('structureStyle'));
            }
            viewer.centerOn(structure);
          }
          document.getElementById('status').innerHTML = '';
        }
        xhr.send();
      }
      function transferase() {
        load('1r6a');
      }
      window.onresize = function(event) {
        viewer.fitParent();
      }
      document.addEventListener('DOMContentLoaded', transferase);
      addStylesIfNeeded();
    }
  }
}

/**
 * This is where we place the bulk of the code, wrapping an existing BioJS component
 * or where we might initialise a component written from scratch. Needs to be
 * paired with a `define` method call - see end of the page.
 **/
export const ProteinViewer = {
  init: initComponent()
};

// this line connects the html element in index.html with the javascript defined above.
define('bio-pv-web', ProteinViewer);
