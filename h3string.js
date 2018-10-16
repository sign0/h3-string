//const h3 = require("h3-js");

function valid () {
	var hash = this.toString();
	return h3.h3IsValid(hash);
};

function pentagon () {
	var hash = this.toString();
	return h3.h3IsPentagon(hash);
};

function resClass () {
	var hash = this.toString();
	return h3.h3IsResClassIII(hash) ? 3 : 2;
};

function base () {
	var hash = this.toString();
	return h3.h3GetBaseCell(hash);
};

function getRes () {
	var hash = this.toString();
	return h3.h3GetResolution(hash);
};

function geo () {
	var hash = this.toString();
	var geo = h3.h3ToGeo(hash);
	return geo;
};

/*
//
*/

function res (r) {
	var hash = this.toString();
	var _r = h3.h3GetResolution(hash);
	if (_r < r) {
		return h3.h3ToChildren(hash, r);
	} else if (_r > r) {
		return [h3.h3ToParent(hash, r)];
	} else if (_r === r) {
		return hash;
	} else {
		return false;
	}
};

function distance (destination) {
	if (!destination || (destination && h3.h3IsValid(destination) === false)) return false;
	var hash = this.toString();
	return h3.h3Distance(hash, destination);
};

/*
//
*/

var h3ToBit = decode;

/*
//
*/

var functions = [
	
	["valid", valid],
	["pentagon", pentagon],
	["resClass", resClass],
	["base", base],
	["getRes", res],
	["geo", geo],

	["res", res],
	["distance", distance],
	
	["h3ToBit", h3ToBit],

	/*
	h3ToGeoBoundary(h3Index, formatAsGeoJson) ⇒ Array.<Array>
	h3ToParent(h3Index, res) ⇒ H3Index
	h3ToChildren(h3Index, res) ⇒ Array.<H3Index>
	kRing(h3Index, ringSize) ⇒ Array.<H3Index>
	kRingDistances(h3Index, ringSize) ⇒ Array.<Array.<H3Index>>
	hexRing(h3Index, ringSize) ⇒ Array.<H3Index>
	getOriginH3IndexFromUnidirectionalEdge(edgeIndex) ⇒ H3Index
	getDestinationH3IndexFromUnidirectionalEdge(edgeIndex) ⇒ H3Index
	h3UnidirectionalEdgeIsValid(edgeIndex) ⇒ Boolean
	getH3IndexesFromUnidirectionalEdge(edgeIndex) ⇒ Array.<H3Index>
	getH3UnidirectionalEdgesFromHexagon(h3Index) ⇒ Array.<H3Index>
	getH3UnidirectionalEdgeBoundary(edgeIndex, formatAsGeoJson) ⇒ Array.<Array>
	*/
];

/*
	geoToH3(lat, lng, res) ⇒ H3Index
	polyfill(coordinates, res, isGeoJson) ⇒ Array.<H3Index>
	h3SetToMultiPolygon(h3Indexes, formatAsGeoJson) ⇒ Array.<Array>
	compact(h3Set) ⇒ Array.<H3Index>
	uncompact(compactedSet, res) ⇒ Array.<H3Index>
	h3IndexesAreNeighbors(origin, destination) ⇒ Boolean
	getH3UnidirectionalEdge(origin, destination) ⇒ H3Index
	hexArea(res, unit) ⇒ Number
	edgeLength(res, unit) ⇒ Number
	numHexagons(res) ⇒ Number
	degsToRads(deg) ⇒ Number
	radsToDegs(rad) ⇒ Number
*/

for (var f in functions) {
	String.prototype[functions[f][0]] = functions[f][1];
	//Object.defineProperty(String, functions[f][0], { value: functions[f][1], writable: false });
};

//module.exports = String;
