//const h3 = require("h3-js");

function valid () {
	var hash = this.toString();
	var valid = h3.h3IsValid(hash);
	if (!valid) valid = h3.h3UnidirectionalEdgeIsValid(hash);
	return valid;
};

function type () {
	var hash = this.toString();
	var valid = h3.h3IsValid(hash);
	var type = "hexagon";
	if (!valid) {
		valid = h3.h3UnidirectionalEdgeIsValid(hash);
		type = "edge";
	}
	if (valid) return type;
	else return false;
};

function neighbour (neighbour) {
	var hash = this.toString();
	return h3.h3IndexesAreNeighbors(hash, neighbour);
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

function point () {
	var hash = this.toString();
	return h3.h3ToGeo(hash);
};

function polygon (geojson) {
	if (geojson === undefined || geojson === null) geojson = true;
	var hash = this.toString();
	return h3.h3ToGeoBoundary(hash, geojson);
};

function linestring (geojson) {
	if (geojson === undefined || geojson === null) geojson = true;
	var hash = this.toString();
	return h3.getH3UnidirectionalEdgeBoundary(hash, geojson);
};

function buffer (size, ordered) {
	if (size === undefined || size === null || size === 0) size = 1;
	var hash = this.toString();
	if (ordered === undefined || ordered === null || ordered === false) return h3.kRing(hash, size);
	else return h3.kRingDistances(hash, size);
};

function ring (size) {
	if (size === undefined || size === null || size === 0) size = 1;
	var hash = this.toString();
	return h3.hexRing(hash, size);
};

function edges () {
	var hash = this.toString();
	return h3.getH3UnidirectionalEdgesFromHexagon(hash);
};

function direction (destination) {
	var hash = this.toString();
	if (destination) { // HEX->HEX=EDGE
		return h3.getH3UnidirectionalEdge(hash, destination);
	} else { // EDGE=HEX->HEX
		return h3.getH3IndexesFromUnidirectionalEdge(hash);
	}
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

var decode = h3ToBit;

/*
//
*/

var stringFunctions = [
	["valid", valid],
	["type", type],
	["neighbour", neighbour],
	["pentagon", pentagon],
	["resClass", resClass],
	["base", base],
	["getRes", res],
	["point", point],
	["polygon", polygon],
	["linestring", linestring],
	["buffer", buffer],
	["ring", ring],
	["edges", edges],
	["direction", direction],

	["res", res],
	["distance", distance],
	
	["decode", decode],
];

function hash (resolution, latLon) {
	if (resolution >= 0) {
		if (!latLon) return h3.geoToH3(this[1], this[0], resolution);
		else return h3.geoToH3(this[0], this[1], resolution);
	} else return false;
};

function polyfill (resolution, latLon) {
	if (resolution >= 0) {
		if (!latLon) return h3.polyfill(this, resolution, true);
		else return h3.polyfill(this, resolution, false);
	} else return false;
};

function compact () {
	return h3.compact(this);
};

function uncompact (resolution) {
	if (resolution >= 0) return h3.uncompact(this, resolution);
	else return false;
};

function outline (latLon) {
	if (!latLon) return h3.h3SetToMultiPolygon(this, true);
	else return h3.h3SetToMultiPolygon(this, false);
};

var arrayFunctions = [
	["hash", hash],
	["polyfill", polyfill],
	["compact", compact],
	["uncompact", uncompact],
	["outline", outline],
];

/*	
	//TOOLS
	hexArea(res, unit) ⇒ Number
	edgeLength(res, unit) ⇒ Number
	numHexagons(res) ⇒ Number
	degsToRads(deg) ⇒ Number
	radsToDegs(rad) ⇒ Number
*/

for (var f in stringFunctions) {
	String.prototype[stringFunctions[f][0]] = stringFunctions[f][1];
	//Object.defineProperty(String, stringFunctions[f][0], { value: stringFunctions[f][1], writable: false });
};

for (var f in arrayFunctions) {
	Array.prototype[arrayFunctions[f][0]] = arrayFunctions[f][1];
	//Object.defineProperty(String, stringFunctions[f][0], { value: stringFunctions[f][1], writable: false });
};

//module.exports = String;
