'use strict';

const Analyzer = require('polymer-analyzer').Analyzer;
const FSUrlLoader = require('polymer-analyzer/lib/url-loader/fs-url-loader').FSUrlLoader;
const PackageUrlResolver = require('polymer-analyzer/lib/url-loader/package-url-resolver').PackageUrlResolver;
const HtmlCustomElementReferenceScanner = require('polymer-analyzer/lib/html/html-element-reference-scanner').HtmlCustomElementReferenceScanner;

let analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('./'),
  urlResolver: new PackageUrlResolver(),
  scanners: new Map([['html', [new HtmlCustomElementReferenceScanner()]]])
});

module.exports = () => {
  analyzer.analyze('src/lancie-content.html')
  .then((document) => {
    console.log(document.getByKind('element-reference'));
  });
};
